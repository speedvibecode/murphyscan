# Weekly Reel Ingest Mode

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
2. read `reel-transcripts/INBOX.md`
3. import the raw transcripts into `reel-transcripts/`
4. create cleaned notes in `reel-transcripts/cleaned/`
5. synthesize worthwhile new material into the correct layer and concept notes
6. update source and public surfaces only if MurphyScan behavior or coverage materially changed
7. archive the processed batch file into `reel-transcripts/archive/`
8. clear `reel-transcripts/next-batch.txt`
9. stage, commit, and push if the user asked for the repo update to be finalized

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
- Prefer updating existing layer and concept notes over creating new note sprawl.
