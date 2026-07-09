import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const transcriptDir = path.join(repoRoot, "reel-transcripts");
const defaultSourceFile = path.join(transcriptDir, "next-batch.txt");

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

const sourceFile = path.resolve(args.get("--source-file") || defaultSourceFile);

function normalizeLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function batchLines(text) {
  return normalizeLines(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

async function inspectReel(page, url) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(6000);

  const data = await page.evaluate(() => {
    const scripts = [...document.querySelectorAll('script[type="application/ld+json"], script')].map(
      (script) => script.textContent || "",
    );
    const bodyText = document.body?.innerText || "";
    const timeValues = [...document.querySelectorAll("time")].map((time) => ({
      datetime: time.getAttribute("datetime"),
      text: time.textContent,
    }));
    const metas = [...document.querySelectorAll("meta")].map((meta) => ({
      property: meta.getAttribute("property") || meta.getAttribute("name"),
      content: meta.getAttribute("content"),
    }));
    return { scripts, bodyText, timeValues, metas };
  });

  const scriptText = data.scripts.join("\n");
  const isoMatches = [
    ...new Set(
      [
        ...(scriptText.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z/g) || []),
        ...(scriptText.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/g) || []),
      ].filter(Boolean),
    ),
  ];
  const datePublishedMatches = [
    ...new Set(scriptText.match(/"datePublished"\s*:\s*"[^"]+"/g) || []),
  ];
  const uploadDateMatches = [...new Set(scriptText.match(/"uploadDate"\s*:\s*"[^"]+"/g) || [])];

  return {
    url,
    timeValues: data.timeValues,
    datePublishedMatches,
    uploadDateMatches,
    isoMatches: isoMatches.slice(0, 10),
    metaDates: data.metas.filter((meta) => /date|time|published|updated/i.test(meta.property || "")),
    bodyExcerpt: data.bodyText.slice(0, 500),
  };
}

async function main() {
  const urls = batchLines(await fs.readFile(sourceFile, "utf8"));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  });

  const results = [];
  try {
    for (const url of urls) {
      results.push(await inspectReel(page, url));
    }
  } finally {
    await browser.close().catch(() => {});
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
