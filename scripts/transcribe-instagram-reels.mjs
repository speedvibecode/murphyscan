import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "reel-transcripts");
const manifestFile = path.join(outputDir, "manifest.json");
const defaultSourceFile = path.join(outputDir, "next-batch.txt");
const transcriptUrl = "https://saveto.ai/instagram-transcript-generator/";
const transcriptProviderName = "Saveto Instagram Transcript Generator";

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i], process.argv[i + 1]);
}

const sourceFile = path.resolve(args.get("--source-file") || defaultSourceFile);
const reelStartArg = args.has("--reel-start") ? Number(args.get("--reel-start")) : null;
const listStart = Number(args.get("--list-start") || 1);
const count = args.has("--count") ? Number(args.get("--count")) : Infinity;
const concurrency = Number(args.get("--concurrency") || 4);
const retryCount = Number(args.get("--retries") || 2);
const overwrite = args.get("--overwrite") === "true";
const minTranscriptWords = Number(args.get("--min-transcript-words") || 20);
const shortTranscriptDomainWordFloor = Number(args.get("--short-transcript-domain-word-floor") || 2);
const shortTranscriptWordCeiling = Number(args.get("--short-transcript-word-ceiling") || 90);

const domainSignalPattern =
  /\b(ai|api|app|apps|auth|authorization|backup|billing|cache|caching|checkout|ci|code|concurrency|customer|data|database|deploy|deployment|devops|endpoint|error|function|github|infra|infrastructure|launch|logs|monitoring|payment|platform|production|rate|restore|security|server|serverless|stripe|tenant|test|tests|user|users|vercel|webhook|workflow)\b/i;

function normalizeLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function canonicalUrl(value) {
  const trimmed = String(value || "").trim();
  try {
    const parsed = new URL(trimmed);
    if (/^(www\.)?instagram\.com$/i.test(parsed.hostname)) {
      const match = parsed.pathname.match(/^\/(?:p|reel)\/([^/]+)/i);
      if (match) return `instagram:${match[1]}`;
    }
    parsed.hash = "";
    parsed.search = "";
    parsed.hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
    parsed.pathname = parsed.pathname.replace(/\/+$/g, "");
    return parsed.toString().replace(/\/$/g, "");
  } catch {
    return trimmed.replace(/\/+$/g, "");
  }
}

function reelFile(index) {
  return path.join(outputDir, `reel ${String(index).padStart(2, "0")}.txt`);
}

function extractTranscriptFromText(bodyText) {
  const marker = "Transcript\nSubtitles\nChapter\nSummary\n";
  const markerIndex = bodyText.indexOf(marker);
  if (markerIndex < 0) return null;

  let text = bodyText.slice(markerIndex + marker.length);
  const endMarkers = [
    "\nHow to Use Instagram Reels to Text Converter?",
    "\nWhat is free Instagram transcript generator?",
    "\nCan I download the transcript as an SRT or TXT file?",
  ];

  let end = -1;
  for (const endMarker of endMarkers) {
    const index = text.indexOf(endMarker);
    if (index >= 0 && (end < 0 || index < end)) end = index;
  }
  if (end >= 0) text = text.slice(0, end);

  text = text.replace(/\n{3,}/g, "\n\n").trim();
  if (text.length < 30 || !/\d{2}:\d{2}/.test(text)) return null;
  return text;
}

function transcriptSignal(transcript) {
  const words = normalizeLines(transcript)
    .replace(/\d{2}:\d{2}/g, " ")
    .replace(/[^\p{L}\p{N}'-]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter((word) => /[\p{L}\p{N}]/u.test(word));

  if (words.length < minTranscriptWords) {
    return {
      usable: false,
      reason: "low_substantive_transcript",
      wordCount: words.length,
    };
  }

  const domainWordCount = words.filter((word) => domainSignalPattern.test(word)).length;
  if (
    words.length <= shortTranscriptWordCeiling &&
    domainWordCount < shortTranscriptDomainWordFloor
  ) {
    return {
      usable: false,
      reason: "low_domain_signal_transcript",
      wordCount: words.length,
      domainWordCount,
    };
  }

  return {
    usable: true,
    reason: "usable_transcript",
    wordCount: words.length,
    domainWordCount,
  };
}

function visibleOutcome(bodyText) {
  const patterns = [
    {
      status: "failed",
      pattern: /You have used up[\s\S]{0,300}/i,
      reason: "transcript_service_quota",
    },
    {
      status: "filtered",
      pattern: /No content detected[\s\S]{0,300}/i,
      reason: "no_transcript_detected",
    },
    {
      status: "filtered",
      pattern: /No transcript[\s\S]{0,300}/i,
      reason: "no_transcript_detected",
    },
    {
      status: "filtered",
      pattern: /No subtitles[\s\S]{0,300}/i,
      reason: "no_subtitles_detected",
    },
    {
      status: "failed",
      pattern: /Transcription failed[\s\S]{0,300}/i,
      reason: "transcription_failed",
    },
    {
      status: "failed",
      pattern: /network error[\s\S]{0,300}/i,
      reason: "network_error",
    },
    {
      status: "failed",
      pattern: /Please input[\s\S]{0,300}/i,
      reason: "invalid_input",
    },
    {
      status: "failed",
      pattern: /try again later[\s\S]{0,300}/i,
      reason: "transcript_service_unavailable",
    },
  ];

  for (const { status, pattern, reason } of patterns) {
    const match = bodyText.match(pattern);
    if (match) return { status, reason, message: match[0].trim() };
  }
  return null;
}

async function fileLooksOk(index, url) {
  if (overwrite) return false;

  try {
    const text = await fs.readFile(reelFile(index), "utf8");
    return text.includes(url) && text.length > 200 && !/\bSTATUS:\s*(FAILED|ERROR)\b/i.test(text);
  } catch {
    return false;
  }
}

async function writeResultFile(result) {
  const header = [
    `Reel ${result.index}`,
    `Source: ${result.url}`,
    `Transcribed via: ${transcriptProviderName}`,
    `Provider URL: ${transcriptUrl}`,
    `Started: ${result.startedAt}`,
    `Completed: ${result.completedAt}`,
    "",
  ].join("\r\n");

  const body =
    result.status === "ok"
      ? `${result.transcript.replace(/\n/g, "\r\n")}\r\n`
      : [
          `STATUS: ${result.status.toUpperCase()}`,
          result.reason ? `REASON: ${result.reason}` : null,
          result.error || "Unknown error",
          "",
          "LAST PAGE TEXT EXCERPT:",
          normalizeLines(result.lastText || "").slice(0, 4000).replace(/\n/g, "\r\n"),
          "",
        ]
          .filter((line) => line !== null)
          .join("\r\n");

  const file = reelFile(result.index);
  await fs.writeFile(file, header + body, "utf8");
  return file;
}

async function transcribeOnce(browser, item, attempt) {
  const startedAt = new Date().toISOString();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  try {
    await page.goto(transcriptUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.locator('input[placeholder="https://www.tiktok.com/@xxxxxxxx"]').fill(item.url, {
      timeout: 20000,
    });
    await page.locator("button.trancribe-btn").last().click({ timeout: 20000 });

    const deadline = Date.now() + 420000;
    let lastText = "";

    while (Date.now() < deadline) {
      await page.waitForTimeout(4000);
      lastText = normalizeLines(await page.locator("body").innerText({ timeout: 10000 }));

      const transcript = extractTranscriptFromText(lastText);
      if (transcript) {
        const signal = transcriptSignal(transcript);
        if (!signal.usable) {
          return {
            ...item,
            attempt,
            status: "filtered",
            reason: signal.reason,
            wordCount: signal.wordCount,
            domainWordCount: signal.domainWordCount,
            error:
              signal.reason === "low_domain_signal_transcript"
                ? `Short transcript did not meet the ${shortTranscriptDomainWordFloor}-domain-word signal floor.`
                : `Transcript did not meet the ${minTranscriptWords}-word signal floor.`,
            lastText,
            startedAt,
            completedAt: new Date().toISOString(),
          };
        }

        return {
          ...item,
          attempt,
          status: "ok",
          chars: transcript.length,
          wordCount: signal.wordCount,
          domainWordCount: signal.domainWordCount,
          transcript,
          startedAt,
          completedAt: new Date().toISOString(),
        };
      }

      const outcome = visibleOutcome(lastText);
      if (outcome) {
        return {
          ...item,
          attempt,
          status: outcome.status,
          reason: outcome.reason,
          error: outcome.message,
          lastText,
          startedAt,
          completedAt: new Date().toISOString(),
        };
      }
    }

    return {
      ...item,
      attempt,
      status: "failed",
      error: "Timed out before transcript appeared.",
      lastText,
      startedAt,
      completedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ...item,
      attempt,
      status: "error",
      error: error && error.stack ? error.stack : String(error),
      startedAt,
      completedAt: new Date().toISOString(),
    };
  } finally {
    await context.close().catch(() => {});
  }
}

async function transcribeWithRetries(browser, item) {
  if (await fileLooksOk(item.index, item.url)) {
    return {
      ...item,
      status: "skipped-existing",
      file: reelFile(item.index),
    };
  }

  let result = null;
  for (let attempt = 1; attempt <= retryCount; attempt += 1) {
    result = await transcribeOnce(browser, item, attempt);
    if (result.status === "ok") break;
    if (!/ERR_ABORTED|Timeout|Network Error|net::|Target page|closed|navigation/i.test(result.error || "")) {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 3000 * attempt));
  }

  result.file = await writeResultFile(result);
  delete result.transcript;
  delete result.lastText;
  return result;
}

async function readManifest() {
  try {
    return JSON.parse((await fs.readFile(manifestFile, "utf8")).replace(/^\uFEFF/, ""));
  } catch {
    return [];
  }
}

function batchLines(text) {
  return normalizeLines(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

async function nextReelIndex() {
  const manifest = await readManifest();
  if (!manifest.length) return 1;
  return Math.max(...manifest.map((item) => Number(item.index) || 0)) + 1;
}

async function writeManifest(results) {
  const prior = await readManifest();
  const byIndex = new Map(prior.map((result) => [result.index, result]));
  for (const result of results.filter(isManifestAccounted)) byIndex.set(result.index, result);
  const manifest = [...byIndex.values()].sort((a, b) => a.index - b.index);
  const tmpFile = `${manifestFile}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmpFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  await fs.rename(tmpFile, manifestFile);
  return manifest;
}

function isManifestAccounted(result) {
  return ["ok", "filtered", "skipped-existing"].includes(result.status);
}

let manifestWriteQueue = Promise.resolve();

function enqueueManifestWrite(results) {
  const snapshot = results.map((result) => ({ ...result }));
  manifestWriteQueue = manifestWriteQueue.catch(() => {}).then(() => writeManifest(snapshot));
  return manifestWriteQueue;
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const urls = batchLines(await fs.readFile(sourceFile, "utf8"));
  if (!urls.length) {
    console.log(JSON.stringify({ processedThisRun: 0, status: "empty", sourceFile }, null, 2));
    return;
  }

  const manifestBeforeRun = await readManifest();
  const indexedUrls = new Set(manifestBeforeRun.map((item) => canonicalUrl(item.url)));
  const seenInBatch = new Set();
  const pendingUrls = [];
  let skippedAlreadyIndexed = 0;
  let skippedDuplicateInBatch = 0;

  for (const url of urls) {
    const key = canonicalUrl(url);
    if (indexedUrls.has(key)) {
      skippedAlreadyIndexed += 1;
      continue;
    }
    if (seenInBatch.has(key)) {
      skippedDuplicateInBatch += 1;
      continue;
    }
    seenInBatch.add(key);
    pendingUrls.push(url);
  }

  if (!pendingUrls.length) {
    console.log(
      JSON.stringify(
        {
          processedThisRun: 0,
          status: "no-new-urls",
          skippedAlreadyIndexed,
          skippedDuplicateInBatch,
        },
        null,
        2,
      ),
    );
    return;
  }

  const reelStart = reelStartArg ?? (await nextReelIndex());

  const selected = pendingUrls.slice(
    listStart - 1,
    Number.isFinite(count) ? listStart - 1 + count : undefined,
  );

  const items = selected.map((url, offset) => ({
    index: reelStart + offset,
    url,
  }));

  const require = createRequire(import.meta.url);
  const { chromium } = require("playwright");
  const browser = await chromium.launch({ headless: true });
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const current = cursor;
      cursor += 1;
      const item = items[current];
      const result = await transcribeWithRetries(browser, item);
      results[current] = result;
      console.log(
        `[${new Date().toISOString()}] reel ${String(item.index).padStart(2, "0")} ${result.status}`,
      );
      await enqueueManifestWrite(results.filter(Boolean));
    }
  }

  try {
    await Promise.all(
      Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
    );
  } finally {
    await browser.close().catch(() => {});
  }

  await enqueueManifestWrite(results);
  const summary = results.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1;
    return acc;
  }, {});
  const retryableFailures = results.filter((result) => !isManifestAccounted(result)).length;

  console.log(
    JSON.stringify(
      {
        processedThisRun: items.length,
        skippedAlreadyIndexed,
        skippedDuplicateInBatch,
        retryableFailures,
        summary,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
