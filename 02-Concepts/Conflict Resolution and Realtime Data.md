---
concept: "conflict-resolution-realtime-data"
tags: [murphyscan, concept, realtime, crdt]
layers: ["03 Database and Storage"]
source_reels: [reel-35]
---
# Conflict Resolution and Realtime Data

## Related Layers
- [[03 Database and Storage]]

## Source Reels
- [[reel-35]] - last-write-wins, CRDTs, and event sourcing.

## Why It Matters
Concurrent edits can silently destroy data when conflict behavior is implicit. Collaboration and business workflows need explicit merge or audit strategy.

## Verification Questions
- Which records can safely use last-write-wins?
- Do collaborative documents use CRDTs or operational transforms?
- Do business-critical mutations have event history?
- Can users or admins inspect conflicting changes?

## Agent Notes
Ask for the conflict strategy before approving realtime collaboration features.

