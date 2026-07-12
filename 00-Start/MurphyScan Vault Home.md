---
title: "MurphyScan Vault Home"
tags: [murphyscan, home, vault]
---
# MurphyScan Vault Home

![[production-layers.png]]

This vault turns the cleaned reel corpus into an agent-facing verification map. The source notes remain in `reel-transcripts/cleaned`; the notes here group the repeated ideas into the 13 production layers from the screenshot.

Current corpus status:
- 138 cleaned source-backed reel notes
- 2 filtered low-signal source records tracked raw and manifest-only
- consolidated layer routing across all 13 production layers
- concept notes updated for auth, database fit, deploy safety, observability, billing, caching, compliance, AI supply-chain trust, and product activation
- scheduled ingest runs Monday, Wednesday, and Friday at 7:00 AM local Codex automation time

## Start Here
- [[Agent Knowledge Map]] - compact route note for future agents.
- [[Layer Map]] - the 13-layer spine from the screenshot.
- [[Concept Index]] - consolidated topic groups across repeated reels.
- [[Source Reel Index]] - source-backed entry point into the cleaned reel notes.
- [[MurphyScan Skill Brief]] - the operating model behind `/murphyscan`.
- [[Scan Rule Backlog]] - prioritized verification checks to convert into skill rules.

## Agent Structure Contract
- Layer notes are the 13-part scan route.
- Concept notes are reusable verification behavior.
- Source reel notes are evidence, not navigation.
- MurphyScan notes define skill behavior and report priorities.
- New concepts are allowed only when new material introduces reusable verification behavior that does not fit the existing concept map.
- Low-signal, music-only, promo, no-subtitle, or no-transcript reels stay raw and manifest-only unless the filter behavior itself changes MurphyScan.

## Anti-Staleness Rule
When corpus count, scheduled automation, scan-tier behavior, or concept routing changes, update the current-facing surfaces in the same change:
- this home note
- [[Agent Knowledge Map]]
- [[Source Reel Index]]
- `reel-transcripts/cleaned/INDEX.md`
- `README.md`
- `CHANGELOG.md` when behavior materially changes

## Vault Rules
- Keep source evidence in reel notes and synthesis in layer or concept notes.
- Prefer updating an existing concept note over creating a near-duplicate note.
- Every future `/murphyscan` rule should point to one layer, one or more concepts, and source reels.
- Do not count filtered source records as cleaned source-backed notes.
