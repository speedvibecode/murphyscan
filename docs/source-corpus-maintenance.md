# Source Corpus Maintenance

MurphyScan should keep growing, but it should grow in a controlled way.

The goal is not to dump every new reel into the repo as loose notes. The goal is to preserve the source corpus while keeping the vault clean, navigable, and useful for agents.

## Current model

The corpus already has the right base structure:
- raw transcript files in `reel-transcripts/`
- source URL mapping in `reel-transcripts/manifest.json`
- cleaned source notes in `reel-transcripts/cleaned/`
- grouped synthesis in:
  - `03-Source-Reels/`
  - `01-Layers/`
  - `02-Concepts/`

What was missing was the update loop.

## Update loop

When new reels are posted, process them in this order:

1. Add the reel to `reel-transcripts/manifest.json`.
2. Save the raw transcript as `reel-transcripts/reel XX.txt`.
3. Create `reel-transcripts/cleaned/reel-XX.md` using the existing cleaned-note shape.
4. Decide whether the reel:
   - strengthens an existing layer note
   - strengthens an existing concept note
   - introduces a genuinely new reusable verification idea
5. Update the smallest correct synthesis surface.
6. If the reel materially changes MurphyScan behavior, update:
   - `03-Source-Reels/Source Reel Index.md`
   - the relevant layer note(s)
   - the relevant concept note(s)
   - optionally the skill references if report behavior changes

## Decision rule

Most new reels should not create new top-level notes.

Default preference:
- update an existing layer note
- update an existing concept note
- add the new reel as source evidence

Only create a new concept note if the new reel changes verification behavior in a way that does not fit the existing concept map cleanly.

## Quality bar for new reels

A new reel is worth integrating when it does at least one of these:
- sharpens a launch blocker
- improves a verification question
- adds a missing production layer check
- improves source support for an existing MurphyScan rule
- adds a better operational framing than the current note set

Do not add reels just because they exist.

## Cadence

Recommended cadence:
- quick intake sweep: weekly
- synthesis pass: after every 3 to 5 worthwhile new reels
- public repo polish pass: after meaningful rule changes, not after every minor corpus addition

## Forward-test rule

If a new reel materially changes MurphyScan’s judgment logic, try to validate that change against at least one real repo before treating it as stable.

That keeps the framework evidence-driven instead of drifting into influencer paraphrase.
