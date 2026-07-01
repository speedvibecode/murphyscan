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

## Workflow

For each new reel:
1. add URL to `manifest.json`
2. collect transcript
3. add cleaned note
4. link it into the right layer/concept surfaces
5. mark whether it changed MurphyScan behavior

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

As of July 1, 2026:
- reels `65` through `104` have been transcribed into `reel-transcripts/`
- cleaned notes now exist in `reel-transcripts/cleaned/`
- the layer and concept surfaces have been updated from this batch
- the next active intake surface is `reel-transcripts/next-batch.txt`

For the next wave:
1. paste URLs into `reel-transcripts/next-batch.txt`
2. run the full batch pipeline
3. archive the processed batch into `reel-transcripts/archive/`
