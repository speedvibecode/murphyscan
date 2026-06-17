---
reel: 35
source_file: "reel 35.txt"
source_url: "https://www.instagram.com/p/DZFdS70R9Pv/"
scan_area: "conflict-resolution"
tags: [murphyscan, collaboration, crdt, event-sourcing, realtime]
---
# Reel 35 - Conflict Resolution Strategy

## Summary
Concurrent edits can silently destroy data if the app defaults to last-write-wins in the wrong place. The reel distinguishes simple timestamp conflict resolution, CRDTs for collaborative editing, and event sourcing for auditable business state.

## Verification Checklist
- Identify which data can safely use last-write-wins.
- Use CRDTs or operational transform patterns for collaborative documents and shared state.
- Use immutable events for business workflows that need auditability and conflict visibility.

## Skill Signal
Use this as a realtime-data scan for collaboration and data-loss risk.

