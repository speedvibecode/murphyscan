# Changelog

All notable MurphyScan changes should be recorded here.

The versioning intent is simple:
- increment patch for copy edits, corpus cleanup, and non-behavioral repo polish
- increment minor for meaningful MurphyScan rule growth, new source-backed verification coverage, or improved agent behavior
- increment major only if MurphyScan changes its report shape or operating model in a way that breaks expected use

## Unreleased

- changed the unattended reel-ingest cadence from Monday/Wednesday/Friday to daily at 7:00 AM local Codex automation time to keep up with posting sprees
- recovered 11 signed-in profile reels missed by anonymous discovery, transcribed reels `131` through `141`, filtered promotional reel `135`, and integrated 10 source-backed notes into existing auth, support, deployment, security, database, eventing, AI-agent, observability, and go-to-market concepts

## 0.3.0 - 2026-07-09

Scheduled ingest and scan-tier release.

Included in `0.3.0`:
- added `docs/scheduled-ingest-pipeline.md` for the unattended reel-ingest workflow
- changed the scheduled ingest cadence to Monday/Wednesday/Friday at 7:00 AM to reduce hidden-window risk during posting sprees
- added `npm run discover:instagram` to discover visible public-profile reels, verify publish dates, and write only fresh missing URLs to `reel-transcripts/next-batch.txt`
- added a visible-window warning so discovery reports when manual links may be needed beyond Instagram's exposed profile window
- added `scripts/verify-instagram-reel-dates.mjs` for explicit date audits when checking a candidate batch
- made `scripts/transcribe-instagram-reels.mjs` safe for scheduled runs by no-oping on empty batches and skipping URLs already listed in `reel-transcripts/manifest.json`, including `/p/` versus `/reel/` shortcode variants
- added low-signal transcript filtering for music-only, no-subtitle, no-transcript, and low-domain-signal reels
- added atomic serialized manifest writes and kept provider, quota, network, and script failures retryable instead of safely indexed
- imported and synthesized verified missing July 1-9 reels `105` through `127` plus `130`
- accounted for low-signal edge reels `128` and `129` as filtered raw and manifest-only records
- excluded a stale May 31 pinned reel from automatic intake after publication-date verification
- documented and used the manual-link fallback when Instagram hid the July 1-5 window from anonymous discovery
- added `docs/transcription-fallbacks.md` to define provider fallback, filtered-entry, and retry behavior without quota evasion
- refreshed the vault home and agent knowledge map so corpus size, scheduled automation, and concept-growth rules do not go stale
- added `Product Activation and Retention` from reel `130` for first-48-hour activation, aha-moment reach, churn signals, and follow-up nudges
- documented that material successful scheduled runs should validate, commit, and push to `origin/main`
- expanded scan behavior around API input validation, tenant isolation monitoring, business failure monitoring, checkout jobs, CI cost controls, legal/domain fit, AI-generated-code trust, platform limits, backup/restore proof, AI-assistant prompt injection, rate-limit tiering, database scaling order, and cache staleness policy
- defined Basic MurphyScan as the default decision-oriented scan tier
- defined Advanced MurphyScan as the explicit exhaustive token-burner tier for super-deep, adversarial, every-last-nuance reviews
- updated Codex, Claude Code, and OpenCode MurphyScan surfaces to share the same scheduled-ingest and scan-tier behavior
- refreshed README, corpus maintenance, transcript-corpus, and agent instructions around the scheduled intake model

## 0.2.2 - 2026-07-01

Weekly ingest pipeline hardening.

Included in `0.2.2`:
- replaced the ad hoc URL-drop flow with a fixed batch file at `reel-transcripts/next-batch.txt`
- added `reel-transcripts/archive/` plus an archive-and-clear script for processed batches
- updated the transcript runner to auto-detect the next reel number from the manifest
- added `docs/weekly-ingest-mode.md` as the one-file, one-prompt operating path
- updated repo instructions so a fresh Codex chat can auto-discover and run the full reel pipeline from the fixed batch file
- refreshed maintenance docs and README to describe the new single-batch operator model

## 0.2.1 - 2026-07-01

Public surface and example refresh.

Included in `0.2.1`:
- removed the temporary intake list file from the repo root
- refreshed the example MurphyScan report to match the current `0.2.x` report shape
- upgraded the README to describe MurphyScan as a tool system with stronger coverage, capability, and use-case framing

## 0.2.0 - 2026-07-01

Second public baseline.

Included in `0.2.0`:
- added a local transcript intake runner at `scripts/transcribe-instagram-reels.mjs`
- imported raw transcript reels `65` through `104`
- expanded the cleaned source corpus from `64` to `104` reels
- updated layer notes across auth, database, deployment, security, caching, observability, and recovery
- expanded concept notes with:
  - API contract and webhook verification
  - AI supply-chain trust
  - deeper RLS bypass review
  - structured logging, health checks, and restore drills
  - database workload-fit and cache invalidation guidance
- updated the portable skill surfaces and scan matrix to use the widened rule set
- finalized maintenance surfaces for repeatable future reel intake and synthesis

## 0.1.0 - 2026-06-22

Initial public baseline.

Included in `0.1.0`:
- canonical MurphyScan vault structure
- grouped 13-layer production-readiness map
- consolidated concept notes backed by the cleaned reel corpus
- cleaned source corpus with 64 reels
- portable `/murphyscan` wrappers for Codex, Claude Code, and OpenCode
- public repo documentation, architecture notes, and contribution rules
- public forward-test case studies:
  - Banter
  - Vercel AI Chatbot
  - NextAuth.js Example
- controlled source-corpus maintenance flow with:
  - `reel-transcripts/manifest.json`
  - `reel-transcripts/INBOX.md`
  - `docs/source-corpus-maintenance.md`

Baseline intent:
- usable now
- source-backed
- forward-tested
- ready for incremental reel-driven growth
