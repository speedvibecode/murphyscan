import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const transcriptDir = path.join(repoRoot, "reel-transcripts");
const batchFile = path.join(transcriptDir, "next-batch.txt");
const archiveDir = path.join(transcriptDir, "archive");

function normalizeLines(text) {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function batchLines(text) {
  return normalizeLines(text)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function stamp() {
  return new Date().toISOString().replace(/:/g, "-").replace(/\.\d{3}Z$/, "Z");
}

async function main() {
  let text = "";
  try {
    text = await fs.readFile(batchFile, "utf8");
  } catch (error) {
    if (error && error.code === "ENOENT") {
      await fs.mkdir(transcriptDir, { recursive: true });
      await fs.writeFile(batchFile, "", "utf8");
      console.log(JSON.stringify({ status: "initialized", batchFile }, null, 2));
      return;
    }
    throw error;
  }

  const urls = batchLines(text);
  if (!urls.length) {
    await fs.writeFile(batchFile, "", "utf8");
    console.log(JSON.stringify({ status: "empty", batchFile }, null, 2));
    return;
  }

  await fs.mkdir(archiveDir, { recursive: true });
  const archiveFile = path.join(archiveDir, `${stamp()}-next-batch.txt`);
  await fs.writeFile(archiveFile, `${urls.join("\n")}\n`, "utf8");
  await fs.writeFile(batchFile, "", "utf8");

  console.log(JSON.stringify({ status: "archived", count: urls.length, archiveFile, batchFile }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
