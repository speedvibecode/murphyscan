import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const transcriptDir = path.join(repoRoot, "reel-transcripts");
const manifestFile = path.join(transcriptDir, "manifest.json");
const batchFile = path.join(transcriptDir, "next-batch.txt");

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  const arg = process.argv[i];
  if (!arg.startsWith("--")) continue;
  const next = process.argv[i + 1];
  if (next && !next.startsWith("--")) {
    args.set(arg, next);
    i += 1;
  } else {
    args.set(arg, "true");
  }
}

const username = args.get("--username") || "mattmurphyai";
const target = args.get("--url") || `https://www.instagram.com/${username}/`;
const writeNextBatch = args.get("--write-next-batch") === "true";
const limit = args.has("--limit") ? Number(args.get("--limit")) : Infinity;
const parsedMaxAgeDays = args.has("--max-age-days") ? Number(args.get("--max-age-days")) : 14;
const maxAgeDays = Number.isFinite(parsedMaxAgeDays) ? parsedMaxAgeDays : 14;
const requireFreshDate = args.get("--require-fresh-date") !== "false";
const visibleWindowWarningThreshold = Number(args.get("--visible-window-warning-threshold") || 12);

function normalizeLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function shortcodeFromUrl(value) {
  const raw = String(value || "").trim();
  try {
    const parsed = new URL(raw, "https://www.instagram.com");
    if (!/^(www\.)?instagram\.com$/i.test(parsed.hostname)) return null;
    const match = parsed.pathname.match(/^\/(?:p|reel)\/([^/]+)/i);
    return match ? match[1] : null;
  } catch {
    const match = raw.match(/\/(?:p|reel)\/([A-Za-z0-9_-]+)/i);
    return match ? match[1] : null;
  }
}

function canonicalInstagram(value) {
  const shortcode = shortcodeFromUrl(value);
  return shortcode ? `instagram:${shortcode}` : null;
}

function batchLines(text) {
  return normalizeLines(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

async function readManifest() {
  try {
    return JSON.parse((await fs.readFile(manifestFile, "utf8")).replace(/^\uFEFF/, ""));
  } catch {
    return [];
  }
}

async function readExistingBatch() {
  try {
    return batchLines(await fs.readFile(batchFile, "utf8"));
  } catch {
    return [];
  }
}

async function discoverVisibleShortcodes() {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 1200 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    });

    await page.goto(target, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(12000);

    for (let i = 0; i < 4; i += 1) {
      await page.mouse.wheel(0, 900);
      await page.waitForTimeout(2500);
    }

    const html = await page.content();
    const hrefs = await page.locator("a").evaluateAll((anchors) =>
      anchors.map((anchor) => anchor.href).filter((href) => /instagram\.com\/(p|reel)\//.test(href)),
    );
    const pathMatches = html.match(/\/(?:p|reel)\/[A-Za-z0-9_-]+/g) || [];
    const candidates = [...hrefs, ...pathMatches];
    const seen = new Set();
    const shortcodes = [];

    for (const candidate of candidates) {
      const shortcode = shortcodeFromUrl(candidate);
      if (!shortcode || seen.has(shortcode)) continue;
      seen.add(shortcode);
      shortcodes.push(shortcode);
    }

    return shortcodes;
  } finally {
    await browser.close().catch(() => {});
  }
}

async function inspectPublicationDates(page, url) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(6000);

  const data = await page.evaluate(() => {
    const timeValues = [...document.querySelectorAll("time")]
      .map((time) => time.getAttribute("datetime") || time.textContent || "")
      .filter(Boolean);
    const scriptText = [...document.querySelectorAll('script[type="application/ld+json"], script')]
      .map((script) => script.textContent || "")
      .join("\n");
    const structuredMatches = [
      ...(scriptText.match(/"datePublished"\s*:\s*"[^"]+"/g) || []),
      ...(scriptText.match(/"uploadDate"\s*:\s*"[^"]+"/g) || []),
    ]
      .map((match) => match.match(/"([^"]+)"\s*$/)?.[1])
      .filter(Boolean);

    return { timeValues, structuredMatches };
  });

  const candidates = [...data.timeValues, ...data.structuredMatches]
    .map((value) => {
      const date = new Date(value);
      return Number.isNaN(date.getTime()) ? null : date;
    })
    .filter(Boolean);

  return candidates[0] || null;
}

function classifyFreshness(publishedAt) {
  if (!requireFreshDate) return { fresh: true, reason: "date_check_disabled" };
  if (!publishedAt) return { fresh: false, reason: "missing_publication_date" };
  if (!Number.isFinite(maxAgeDays)) return { fresh: true, reason: "no_max_age" };

  const oldestAllowed = Date.now() - maxAgeDays * 24 * 60 * 60 * 1000;
  if (publishedAt.getTime() < oldestAllowed) {
    return { fresh: false, reason: `older_than_${maxAgeDays}_days` };
  }

  return { fresh: true, reason: "fresh" };
}

async function filterByPublicationDate(urls) {
  if (!urls.length) {
    return { fresh: [], excluded: [] };
  }

  if (!requireFreshDate) {
    return {
      fresh: urls.map((url) => ({ url, publishedAt: null, freshnessReason: "date_check_disabled" })),
      excluded: [],
    };
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  });

  const fresh = [];
  const excluded = [];

  try {
    for (const url of urls) {
      const publishedAt = await inspectPublicationDates(page, url);
      const classification = classifyFreshness(publishedAt);
      const result = {
        url,
        publishedAt: publishedAt ? publishedAt.toISOString() : null,
        freshnessReason: classification.reason,
      };

      if (classification.fresh) {
        fresh.push(result);
        if (fresh.length >= limit) break;
      } else {
        excluded.push(result);
      }
    }
  } finally {
    await browser.close().catch(() => {});
  }

  return { fresh, excluded };
}

async function main() {
  const manifest = await readManifest();
  const indexed = new Set(
    manifest.map((item) => canonicalInstagram(item.url)).filter((canonical) => canonical),
  );
  const currentBatch = await readExistingBatch();
  const queued = new Set(
    currentBatch.map((url) => canonicalInstagram(url)).filter((canonical) => canonical),
  );

  const visibleShortcodes = await discoverVisibleShortcodes();
  const candidates = [];
  const alreadyIndexed = [];
  const alreadyQueued = [];

  for (const shortcode of visibleShortcodes) {
    const canonical = `instagram:${shortcode}`;
    const url = `https://www.instagram.com/reel/${shortcode}/`;
    if (indexed.has(canonical)) {
      alreadyIndexed.push(url);
      continue;
    }
    if (queued.has(canonical)) {
      alreadyQueued.push(url);
      continue;
    }
    candidates.push(url);
  }

  const filtered = await filterByPublicationDate(candidates);
  const missing = filtered.fresh.map((item) => item.url);

  if (writeNextBatch && missing.length) {
    await fs.mkdir(transcriptDir, { recursive: true });
    const nextLines = [...currentBatch, ...missing];
    await fs.writeFile(batchFile, `${nextLines.join("\n")}\n`, "utf8");
  }

  console.log(
    JSON.stringify(
      {
        target,
        visible: visibleShortcodes.length,
        visibleWindowLimitLikely: visibleShortcodes.length >= visibleWindowWarningThreshold,
        manualLinksMayBeNeeded:
          visibleShortcodes.length >= visibleWindowWarningThreshold
            ? "Instagram exposed at least the visible-window threshold. If the account posted more than this since the last run, ask for manual links for the hidden date range."
            : null,
        alreadyIndexed: alreadyIndexed.length,
        alreadyQueued: alreadyQueued.length,
        candidates: candidates.length,
        freshnessWindowDays: requireFreshDate ? maxAgeDays : null,
        excludedByFreshness: filtered.excluded.length,
        missing: missing.length,
        wroteNextBatch: writeNextBatch && missing.length > 0,
        missingUrls: missing,
        missingDetails: filtered.fresh,
        excludedByFreshnessDetails: filtered.excluded,
        alreadyIndexedUrls: alreadyIndexed,
        alreadyQueuedUrls: alreadyQueued,
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
