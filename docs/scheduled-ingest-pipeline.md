# Scheduled Reel Ingest Pipeline

This is the unattended operating path for keeping the MurphyScan source corpus current.

## Cadence

Default schedule:
- daily
- 7:00 AM local Codex automation time

Use this cadence for the recurring automation unless the owner gives a different day, timezone, or frequency.

This daily cadence is intended to keep up with posting sprees because Instagram anonymous profile discovery can expose only a small visible window. If the visible window appears full, treat the run as potentially incomplete and ask the owner for manual links for the hidden date range.

## Source of truth

The scheduled job still uses the canonical intake file:

`reel-transcripts/next-batch.txt`

"Unadded reels" means URLs in that file that are not already present in `reel-transcripts/manifest.json`.

The current discovery command is:

```bash
npm run discover:instagram
```

It reads the public `@mattmurphyai` profile as an anonymous browser, extracts visible post/reel shortcodes, compares them to `reel-transcripts/manifest.json`, and writes only missing URLs into `reel-transcripts/next-batch.txt`.

Discovery is not allowed to treat "visible on the profile" as enough proof. It must load each candidate reel page, read the post date from the page, and exclude old pinned or stale posts by default. The default freshness window is 14 days and can be changed with:

```bash
npm run discover:instagram -- --max-age-days 21
```

If Instagram blocks anonymous profile discovery, hides older date windows, or does not expose a reliable post date, leave `next-batch.txt` unchanged for those items and ask the owner for manual links. Manual links pasted into `next-batch.txt` remain valid intake even when auto-discovery cannot find them.

If `npm run discover:instagram` reports `visibleWindowLimitLikely: true`, the run summary must call out that manual links may be needed when the account posted more than the visible profile window since the last successful run.

An implausibly empty result, including `visible: 0`, is not proof that the corpus is current. If a signed-in in-app browser is available, it may be used to enumerate `mattmurphyai` profile reel links and verify their publication dates under these compulsory privacy guardrails:
- access only `instagram.com/mattmurphyai/` and reel pages linked from that profile
- never open messages, inbox, notifications, comments, settings, saved posts, followers, following lists, or unrelated profiles
- never inspect cookies, local storage, passwords, session data, or browsing history
- never like, follow, comment, share, post, delete, or send anything
- collect only reel URLs, publication dates, and public reel content needed for corpus intake
- stop if navigation exposes private material or leaves the allowed profile/reel scope

If that constrained signed-in fallback is unavailable, leave the corpus freshness unverified and request manual links instead of reporting a no-op success.

## Scheduled job behavior

On each scheduled run:

1. Read `AGENTS.md`, `docs/source-corpus-maintenance.md`, and `docs/weekly-ingest-mode.md`.
2. Run `npm run discover:instagram`.
3. Read `reel-transcripts/next-batch.txt`.
4. If the file is empty after discovery, report a no-op and do not edit the repo.
5. Run `npm run transcribe:next-batch`.
6. Treat already-indexed URLs as skipped, not failures.
7. Treat low-signal, music-only, no-subtitle, or no-transcript reels as filtered source entries, not cleaning failures.
8. Create cleaned notes only for newly transcribed reels that carry MurphyScan-relevant substance.
9. Integrate only worthwhile new material into the smallest correct layer or concept note.
10. Update `03-Source-Reels/Source Reel Index.md`, skill references, README, VERSION, or CHANGELOG only when coverage or MurphyScan behavior materially changed.
11. Run `npm run archive:next-batch` only after the batch has been accounted for, including all-duplicate batches and filtered-only batches.
12. Validate the edited scripts and corpus state when files changed.
13. Commit and push material successful changes to `origin/main` so the canonical GitHub repo keeps improving without a local-only draft.
14. Leave a concise run summary with counts for empty, skipped, filtered, failed, integrated, committed, and pushed URLs.

The run summary should include the discovery date window, excluded stale URLs, and any date range that needs manual owner-supplied links.

Do not create an empty commit or push for a no-op run. Do not commit or push a run with retryable provider, quota, network, or script failures unless the failure is intentionally being preserved for operator review and the batch remains unarchived.

## Quality bar

The scheduled run is not allowed to dump every transcript into the vault as note sprawl.

New material should be integrated when it:
- sharpens a launch blocker
- improves a verification question
- adds missing layer coverage
- improves source support for an existing MurphyScan rule
- changes how Basic MurphyScan or Advanced MurphyScan should behave

If a reel is low-signal, keep the raw transcript and manifest traceability, but do not force a layer or concept edit.

Filtered entries are accounted source records, but they are not cleaned source-backed notes and do not increase the cleaned corpus count. Current filter reasons include:
- `low_substantive_transcript`
- `low_domain_signal_transcript`
- `no_transcript_detected`
- `no_subtitles_detected`

Use `docs/transcription-fallbacks.md` for the provider-fallback and filtered-entry contract.

## Failure handling

- Transcript failures should be preserved in the raw reel file and summarized in the run report.
- A provider, quota, network, or script failure is retryable. It should not be treated as safely indexed in `manifest.json`.
- A partial transcription batch should not be silently archived unless every URL has either a usable transcript, an intentional filtered artifact, or a skipped-already-indexed result.
- If a reel materially changes MurphyScan judgment logic, forward-test the new rule against at least one real repo before treating it as stable.
- If network access or the transcript service fails, leave `next-batch.txt` intact and report the blocker after trying the configured legitimate fallbacks.
