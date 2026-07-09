# MurphyScan Repository

Version: `0.3.0`

This repository contains a reusable launch-readiness and scaling-readiness audit system for AI coding agents.

## Project structure

- `00-Start/` start maps and routing notes
- `01-Layers/` the 13 production layers
- `02-Concepts/` consolidated verification concepts
- `03-Source-Reels/` source routing into the cleaned reel corpus
- `04-MurphyScan/` skill brief and rule backlog
- `docs/scheduled-ingest-pipeline.md` unattended reel-ingest cadence and rules
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

This repo has a fixed intake filename for new source batches and scheduled runs:

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

## Scheduled reel ingest mode

If a recurring automation runs this repo, use `docs/scheduled-ingest-pipeline.md`.

Default schedule:
- Monday, Wednesday, and Friday
- 7:00 AM local Codex automation time

Scheduled behavior:
- run `npm run discover:instagram` to add visible public profile reels that are missing from `reel-transcripts/manifest.json` and have verified fresh post dates
- treat `visibleWindowLimitLikely` from discovery as a warning that manual links may be needed for a hidden date range
- treat unadded reels as URLs in `reel-transcripts/next-batch.txt` that are missing from `reel-transcripts/manifest.json`
- no-op cleanly when the batch file is empty
- skip already-indexed URLs without creating duplicate reel numbers
- classify low-signal, music-only, no-subtitle, and no-transcript reels as filtered raw plus manifest entries instead of creating cleaned notes
- follow `docs/transcription-fallbacks.md` for provider, quota, network, and script failures
- do not claim Instagram discovery unless `npm run discover:instagram` returned the URLs or the user already put them in `next-batch.txt`
- if Instagram hides a date window from anonymous discovery, ask for manual links instead of guessing shortcodes
- leave failed network or transcript-service runs in place for retry instead of archiving an unaccounted batch
- after a material successful scheduled run, validate, commit, and push to `origin/main`
- do not create empty commits for no-op runs or push retryable provider/network failures as completed ingest

## MurphyScan scan tiers

Default `/murphyscan` behavior is Basic MurphyScan:
- decision-oriented launch-readiness scan
- Priority 0 and Priority 1 risks first
- all 13 layers checked at the level supported by local evidence
- compact report focused on blockers, missing launch controls, scaling gaps, and next actions

Advanced MurphyScan is the token-burner mode:
- use only when the user asks for advanced, exhaustive, super-deep, adversarial, or every-last-nuance review
- inspect every relevant layer, concept, route, schema, workflow, dependency, prompt, skill, and automation boundary available locally
- add active tests, dependency and secret-history scans, bundle/client exposure checks, API and webhook contract review, AI eval and output-validation review, load/scaling surfaces, and trust-boundary review where applicable
- separate confirmed findings from suspicions, and call out unavailable runtime, provider, database, or production evidence
