# Reel Transcript Corpus

This folder is the source corpus behind MurphyScan.

It contains:
- raw transcript files for the collected reel set
- `manifest.json` mapping reel numbers to source URLs
- filtered raw records for low-signal or no-transcript reels that should not become cleaned notes
- `cleaned/` summaries transformed into agent-friendly Markdown notes
- `INBOX.md` for queued and in-progress corpus additions

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
- `INBOX.md`
  Intake queue for newly discovered reels before full synthesis.
- `cleaned/`
  Standardized Markdown summaries used to build the MurphyScan vault.

## How to use it

- Use `cleaned/` for fast agent consumption.
- Use the raw transcripts when you need to verify wording or reconstruct context.
- Use `manifest.json` to map a reel number back to its source URL.
- Use `INBOX.md` to track newly posted reels until they are fully integrated.

## Maintenance

The corpus is meant to keep growing.

Use:
- [docs/source-corpus-maintenance.md](../docs/source-corpus-maintenance.md)
- [docs/scheduled-ingest-pipeline.md](../docs/scheduled-ingest-pipeline.md)
- [docs/transcription-fallbacks.md](../docs/transcription-fallbacks.md)
- [INBOX.md](./INBOX.md)
- `npm run discover:instagram`
- `npm run transcribe:next-batch`
- `npm run archive:next-batch`

The maintenance rule is simple:
- preserve source traceability
- update existing synthesis notes by default
- only create new concept notes when the new reel changes verification behavior
- keep filtered low-signal reels raw and manifest-only

## Fixed intake flow

The active batch file is:

- `reel-transcripts/next-batch.txt`

Processed batches are archived in:

- `reel-transcripts/archive/`

Scheduled runs use the same active batch file. The transcript runner skips URLs already present in `manifest.json`, treats empty batches as no-ops, and only assigns new reel numbers to unindexed URLs.

Automatic discovery verifies reel post dates before adding URLs. If Instagram hides a date window from anonymous discovery or the visible profile window appears full, paste those URLs into `next-batch.txt` manually and process the batch through the same flow.

Filtered entries use `STATUS: FILTERED` in the raw file and a `filtered` status in `manifest.json`. They are accounted for source-tracking purposes, but they do not count toward the cleaned source-backed corpus.

Provider, quota, network, and script failures are retryable. Follow `docs/transcription-fallbacks.md` and do not archive a batch until every URL is either usable, filtered, skipped as already indexed, or explicitly left for retry.

## Attribution

This corpus was built from transcript material sourced from the Instagram reel content of [`@mattmurphyai`](https://www.instagram.com/mattmurphyai/).

MurphyScan uses that material as a structured research base for agent-facing launch-readiness rules.
