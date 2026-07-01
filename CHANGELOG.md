# Changelog

All notable MurphyScan changes should be recorded here.

The versioning intent is simple:
- increment patch for copy edits, corpus cleanup, and non-behavioral repo polish
- increment minor for meaningful MurphyScan rule growth, new source-backed verification coverage, or improved agent behavior
- increment major only if MurphyScan changes its report shape or operating model in a way that breaks expected use

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
