# Changelog

All notable MurphyScan changes should be recorded here.

The versioning intent is simple:
- increment patch for copy edits, corpus cleanup, and non-behavioral repo polish
- increment minor for meaningful MurphyScan rule growth, new source-backed verification coverage, or improved agent behavior
- increment major only if MurphyScan changes its report shape or operating model in a way that breaks expected use

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
