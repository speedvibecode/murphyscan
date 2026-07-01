import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFile = path.join(repoRoot, "new reels that need to be added.txt");
const outputDir = path.join(repoRoot, "reel-transcripts");
const manifestFile = path.join(outputDir, "manifest.json");
const transcriptUrl = "https://saveto.ai/instagram-transcript-generator/";

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i], process.argv[i + 1]);
}

const reelStart = Number(args.get("--reel-start") || 65);
const listStart = Number(args.get("--list-start") || 1);
const count = args.has("--count") ? Number(args.get("--count")) : Infinity;
const concurrency = Number(args.get("--concurrency") || 4);
const retryCount = Number(args.get("--retries") || 2);
const overwrite = args.get("--overwrite") === "true";

function normalizeLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
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

function visibleError(bodyText) {
  const patterns = [
    /You have used up[\s\S]{0,300}/i,
    /No content detected[\s\S]{0,300}/i,
    /Transcription failed[\s\S]{0,300}/i,
    /network error[\s\S]{0,300}/i,
    /Please input[\s\S]{0,300}/i,
    /try again later[\s\S]{0,300}/i,
  ];

  for (const pattern of patterns) {
    const match = bodyText.match(pattern);
    if (match) return match[0].trim();
  }
  return null;
}

async function fileLooksOk(index, url) {
  if (overwrite) return false;

  try {
    const text = await fs.readFile(reelFile(index), "utf8");
    return text.includes(url) && text.length > 200;
  } catch {
    return false;
  }
}

async function writeResultFile(result) {
  const header = [
    `Reel ${result.index}`,
    `Source: ${result.url}`,
    `Transcribed via: ${transcriptUrl}`,
    `Started: ${result.startedAt}`,
    `Completed: ${result.completedAt}`,
    "",
  ].join("\r\n");

  const body =
    result.status === "ok"
      ? `${result.transcript.replace(/\n/g, "\r\n")}\r\n`
      : [
          `STATUS: ${result.status.toUpperCase()}`,
          result.error || "Unknown error",
          "",
          "LAST PAGE TEXT EXCERPT:",
          normalizeLines(result.lastText || "").slice(0, 4000).replace(/\n/g, "\r\n"),
          "",
        ].join("\r\n");

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
        return {
          ...item,
          attempt,
          status: "ok",
          chars: transcript.length,
          transcript,
          startedAt,
          completedAt: new Date().toISOString(),
        };
      }

      const error = visibleError(lastText);
      if (error) {
        return {
          ...item,
          attempt,
          status: "failed",
          error,
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
    return JSON.parse(await fs.readFile(manifestFile, "utf8"));
  } catch {
    return [];
  }
}

async function writeManifest(results) {
  const prior = await readManifest();
  const byIndex = new Map(prior.map((result) => [result.index, result]));
  for (const result of results) byIndex.set(result.index, result);
  const manifest = [...byIndex.values()].sort((a, b) => a.index - b.index);
  await fs.writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return manifest;
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const urls = normalizeLines(await fs.readFile(sourceFile, "utf8"))
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const selected = urls.slice(
    listStart - 1,
    Number.isFinite(count) ? listStart - 1 + count : undefined,
  );

  const items = selected.map((url, offset) => ({
    index: reelStart + offset,
    url,
  }));

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
      await writeManifest(results.filter(Boolean));
    }
  }

  try {
    await Promise.all(
      Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
    );
  } finally {
    await browser.close().catch(() => {});
  }

  const manifest = await writeManifest(results);
  const summary = manifest.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1;
    return acc;
  }, {});

  console.log(JSON.stringify({ processedThisRun: items.length, summary }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
