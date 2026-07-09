# Transcription Fallbacks

This document defines how MurphyScan reel ingest should behave when a reel has no useful transcript or the transcript provider is unavailable.

## Provider order

Primary provider:
- Saveto Instagram Transcript Generator: `https://saveto.ai/instagram-transcript-generator/`

Fallback policy:
- use a configured legitimate transcript provider if one is added later
- use owner-supplied transcript text when the provider surface is unavailable
- use owner-supplied downloaded video or audio when a provider supports upload
- preserve the batch for retry when no legitimate provider path succeeds

The automation may use separate browser contexts for clean state, isolation, and retry stability. It must not use private or incognito browser contexts to bypass quotas, paywalls, rate limits, or provider terms.

## Status contract

Each URL must end in one of these states:

- `ok`: usable transcript captured; create a cleaned note if the material is MurphyScan-relevant.
- `filtered`: transcript was intentionally rejected as low-signal, music-only, no-subtitle, no-transcript, or otherwise not useful for MurphyScan; keep raw artifact plus manifest entry, but do not create a cleaned note.
- `skipped-existing`: URL is already represented in `reel-transcripts/manifest.json`; do not create a duplicate reel number.
- `failed` or `error`: provider, network, quota, page, or script failure; keep the failure artifact for diagnosis, leave the URL retryable, and do not treat it as safely indexed.

Only `ok`, `filtered`, and `skipped-existing` are accounted states for archiving a batch.

## Filtered reel rule

Filtered reels should not pollute the vault.

For a filtered URL:
- keep the raw file in `reel-transcripts/`
- write `STATUS: FILTERED` and a stable reason
- keep the manifest entry for source accounting
- do not create `reel-transcripts/cleaned/reel-XX.md`
- do not update layer or concept notes unless the filter case itself changes MurphyScan ingest behavior

Common reasons:
- `low_substantive_transcript`
- `low_domain_signal_transcript`
- `no_transcript_detected`
- `no_subtitles_detected`

## Retry rule

Provider failures are not content decisions.

If a run fails because Saveto, Instagram, Playwright, DNS, quota, or network access is unavailable:
- write a failure artifact with the last visible page text when possible
- do not add a safe manifest entry for that URL
- leave `reel-transcripts/next-batch.txt` intact
- retry later or ask the owner for manual links, transcript text, or media files

The goal is to avoid both failure modes: freezing the automation on a music-only reel, and incorrectly marking an unprocessed reel as complete.
