# Reel Intake Inbox

Use this file to track new reels before they are fully integrated into the MurphyScan vault.

## Intake states

- `queued`
  Seen, but transcript not collected yet.
- `transcribed`
  Raw transcript saved in `reel-transcripts/`.
- `cleaned`
  Cleaned note added in `reel-transcripts/cleaned/`.
- `synthesized`
  Layer/concept notes updated where needed.
- `validated`
  Rule impact tested against at least one real repo if the change was material.
- `filtered`
  Raw source was accounted for, but no cleaned note was created because the transcript was low-signal, music-only, no-subtitle, or no-transcript.

## Workflow

For each new reel:
1. confirm the URL is not already represented in `manifest.json`
2. collect transcript
3. classify it as usable, filtered, skipped-existing, or retryable failure
4. add a cleaned note only for usable MurphyScan-relevant material
5. link worthwhile material into the right layer/concept surfaces
6. mark whether it changed MurphyScan behavior

## Queue

Add new items here using this shape:

```md
- reel: 65
  status: queued
  url: https://www.instagram.com/...
  topic: short description
  affects:
    - 01-Layers/...
    - 02-Concepts/...
  notes: why it matters
```

## Current note

As of July 14, 2026:
- reels `65` through `145` have been transcribed into `reel-transcripts/`
- cleaned notes now exist for `1` through `127`, `130` through `134`, `136` through `145`
- reels `128`, `129`, and `135` are filtered raw and manifest-only records
- the layer and concept surfaces have been updated through the July 12-14 posting burst
- the next active intake surface is `reel-transcripts/next-batch.txt`

For the next wave:
1. paste URLs into `reel-transcripts/next-batch.txt`
2. run the full batch pipeline
3. archive the processed batch into `reel-transcripts/archive/`
