---
concept: "agent-memory-vector-storage"
tags: [murphyscan, concept, ai-agents, memory, vectors]
layers: ["03 Database and Storage"]
source_reels: [reel-50, reel-57]
---
# Agent Memory and Vector Storage

## Related Layers
- [[03 Database and Storage]]

## Source Reels
- [[reel-50]] - short-term and long-term agent memory.
- [[reel-57]] - PGVector before adding another database.

## Why It Matters
Memory should change agent behavior without collecting everything. Vector storage should solve a real retrieval need without adding unnecessary operational complexity.

## Verification Questions
- What memories are short-term session context vs persistent facts?
- Are only behavior-changing facts stored?
- Can retrieval cite the relevant stored context?
- Can PGVector satisfy the vector need before introducing another database?

## Agent Notes
Overcollection is a quality and privacy risk. Store less, retrieve better.

