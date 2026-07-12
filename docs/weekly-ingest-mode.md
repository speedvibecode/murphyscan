# Weekly and Scheduled Reel Ingest Mode

This repo supports a fixed one-file ingest flow for MurphyScan source updates.

## Drop zone

Paste new reel URLs into:

`reel-transcripts/next-batch.txt`

One URL per line.

## One-line trigger

In a new Codex chat opened at the repo root, the intended prompt is as small as:

```text
I added the next reel batch. Process it all the way through the MurphyScan pipeline.
```

## Expected agent behavior

When `reel-transcripts/next-batch.txt` contains URLs and the user indicates that a new batch was added, the agent should:

1. read `docs/source-corpus-maintenance.md`
2. read `docs/scheduled-ingest-pipeline.md` if the run is scheduled or unattended
3. read `docs/transcription-fallbacks.md` if a reel has no useful transcript or a provider fails
4. read `reel-transcripts/INBOX.md`
5. import raw transcripts into `reel-transcripts/`
6. create cleaned notes in `reel-transcripts/cleaned/` only for MurphyScan-relevant transcripts
7. synthesize worthwhile new material into the correct layer and concept notes
8. update source and public surfaces only if MurphyScan behavior or coverage materially changed
9. archive the processed batch file into `reel-transcripts/archive/`
10. clear `reel-transcripts/next-batch.txt`
11. stage, commit, and push if the user asked for the repo update to be finalized

## Scheduled mode

The same intake file supports a recurring automation:

- cadence: daily at 7:00 AM local Codex automation time
- active file: `reel-transcripts/next-batch.txt`
- discovery command: `npm run discover:instagram`
- duplicate rule: URLs already present in `reel-transcripts/manifest.json` are skipped by shortcode, including `/p/` and `/reel/` variants
- freshness rule: discovered URLs must expose a post date inside the default 14-day window before they are added
- visible-window rule: if discovery reports `visibleWindowLimitLikely`, the run summary must ask for manual links for any hidden date range
- manual fallback: if Instagram hides a date window from anonymous discovery, the owner can paste those URLs into `next-batch.txt`
- transcript fallback: if the transcript provider fails, keep the URL retryable and follow `docs/transcription-fallbacks.md`
- filtered rule: low-signal, music-only, no-subtitle, or no-transcript reels are stored as filtered raw and manifest entries, not cleaned notes
- push rule: material successful scheduled runs should commit and push to `origin/main`; empty no-op runs should not create empty commits
- empty rule: an empty batch is a no-op, not a failed run

Default scheduled cadence is daily at 7:00 AM local Codex automation time.

The scheduled job should only claim discovery for URLs returned by `npm run discover:instagram` with verified dates or already present in `next-batch.txt`.

## Local commands

Raw intake:

```bash
npm run transcribe:next-batch
```

Archive and clear the processed batch:

```bash
npm run archive:next-batch
```

## Rules

- `reel-transcripts/next-batch.txt` is the only active intake filename.
- `reel-transcripts/archive/` stores processed batch snapshots.
- Do not leave completed URLs in the active batch file.
- Do not create duplicate reel entries for URLs already listed in `manifest.json`.
- Do not count filtered entries as cleaned source-backed notes.
- Prefer updating existing layer and concept notes over creating new note sprawl.
