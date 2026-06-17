---
concept: "database-design-indexing"
tags: [murphyscan, concept, database, indexes]
layers: ["03 Database and Storage"]
source_reels: [reel-12, reel-26, reel-32, reel-63]
---
# Database Design and Indexing

## Related Layers
- [[03 Database and Storage]]

## Source Reels
- [[reel-12]] - one table with dozens of columns is not design.
- [[reel-26]] - index for actual tenant and access patterns.
- [[reel-32]] - match database choice to data shape.
- [[reel-63]] - unindexed queries create scaling cliffs.

## Why It Matters
Schema mistakes often stay invisible during demos and become painful once data grows. Good data design prevents slow queries, data leaks, and brittle migrations.

## Verification Questions
- Are tables normalized enough for current relationships?
- Do common queries have indexes on tenant, owner, status, date, or foreign keys?
- Are migrations tracked and reversible?
- Is the database engine appropriate for the data shape?

## Agent Notes
Do not recommend exotic storage before checking schema, indexes, and query plans.

