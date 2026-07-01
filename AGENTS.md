# MurphyScan Repository

Version: `0.2.1`

This repository contains a reusable launch-readiness and scaling-readiness audit system for AI coding agents.

## Project structure

- `00-Start/` start maps and routing notes
- `01-Layers/` the 13 production layers
- `02-Concepts/` consolidated verification concepts
- `03-Source-Reels/` source routing into the cleaned reel corpus
- `04-MurphyScan/` skill brief and rule backlog
- `.agents/skills/murphyscan/` primary portable skill definition
- `.claude/skills/murphyscan/` Claude-compatible skill path
- `.opencode/commands/murphyscan.md` OpenCode slash command

## Working rules

- Use the vault as the rule source.
- Keep reports decision-oriented.
- Separate launch blockers from scale/readiness improvements.
- Prefer evidence over assumptions.
- Do not add note sprawl when a concept belongs in an existing note.
- Track meaningful MurphyScan behavior changes in `CHANGELOG.md`.

## Weekly reel ingest mode

This repo has a fixed intake filename for new source batches:

- `reel-transcripts/next-batch.txt`

If that file contains Instagram reel URLs and the user says they added a new batch, treat it as an end-to-end MurphyScan corpus update request.

Expected behavior:
- read `docs/source-corpus-maintenance.md`
- read `docs/weekly-ingest-mode.md`
- import raw transcripts with the local batch workflow
- create cleaned notes in `reel-transcripts/cleaned/`
- synthesize worthwhile material into the right layer and concept notes
- update source/index/version surfaces only when MurphyScan coverage or behavior materially changed
- archive the processed file into `reel-transcripts/archive/`
- clear `reel-transcripts/next-batch.txt`

Do not wait for the user to restate each step if they clearly indicated a new batch was added.
