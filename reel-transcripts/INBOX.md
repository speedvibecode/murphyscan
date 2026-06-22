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

As of June 22, 2026, the repo has a strong corpus and synthesis structure, but this inbox is the intended control surface for the next wave of reels.
