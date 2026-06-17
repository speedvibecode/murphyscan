# Reel Transcript Corpus

This folder is the source corpus behind MurphyScan.

It contains:
- raw transcript files for the collected reel set
- `manifest.json` mapping reel numbers to source URLs
- `cleaned/` summaries transformed into agent-friendly Markdown notes

## Why it exists

MurphyScan is not meant to be a floating checklist with no memory of where its rules came from.

This corpus keeps the framework grounded by preserving:
- the raw extracted material
- cleaned summaries that future agents can read quickly
- source traceability back to the original reel URLs

## Folder structure

- `reel XX.txt`
  Raw transcript output per reel.
- `reel1.md`
  Pre-existing Markdown note that was normalized into `cleaned/reel-64.md`.
- `manifest.json`
  Reel index and source URLs.
- `cleaned/`
  Standardized Markdown summaries used to build the MurphyScan vault.

## How to use it

- Use `cleaned/` for fast agent consumption.
- Use the raw transcripts when you need to verify wording or reconstruct context.
- Use `manifest.json` to map a reel number back to its source URL.

## Attribution

This corpus was built from transcript material sourced from the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/).

MurphyScan uses that material as a structured research base for agent-facing launch-readiness rules.

