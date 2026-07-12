---
concept: "database-design-indexing"
tags: [murphyscan, concept, database, indexes]
layers: ["03 Database and Storage"]
source_reels: [reel-12, reel-26, reel-32, reel-63, reel-67, reel-74, reel-79, reel-98, reel-104, reel-122, reel-125, reel-138]
---
# Database Design and Indexing

## Related Layers
- [[03 Database and Storage]]

## Source Reels
- [[reel-12]] - one table with dozens of columns is not design.
- [[reel-26]] - index for actual tenant and access patterns.
- [[reel-32]] - match database choice to data shape.
- [[reel-63]] - unindexed queries create scaling cliffs.
- [[reel-67]] - query plans and query-frequency data reveal the real bottlenecks.
- [[reel-74]] - blobs belong in object storage, not in relational tables.
- [[reel-79]] - ORM choice changes how much query intent stays visible.
- [[reel-98]] - backup plans only count if restores are exercised.
- [[reel-104]] - workload shape should influence database choice.
- [[reel-122]] - backup schedule, retention, and failure-domain separation protect user data.
- [[reel-125]] - backup frequency, off-site location, and restore drills define real recovery.
- [[reel-138]] - migrate when platform ceilings or workaround costs exceed a measured migration plan, not from frustration alone.

## Why It Matters
Schema mistakes often stay invisible during demos and become painful once data grows. Good data design prevents slow queries, data leaks, and brittle migrations.

## Verification Questions
- Are tables normalized enough for current relationships?
- Do common queries have indexes on tenant, owner, status, date, or foreign keys?
- Are migrations tracked and reversible?
- Is the database engine appropriate for the data shape?
- Are large files kept out of primary transactional tables?
- Is restoreability tested rather than inferred from backup presence?
- Does backup frequency match acceptable data loss for payments, accounts, and user content?
- Do backups survive the same provider, region, or server failure that can kill the primary database?
- Can the current platform support roughly ten times current load through reasonable optimization?
- Does a migration plan include cost evidence, verification milestones, and rollback points?

## Agent Notes
Do not recommend exotic storage before checking schema, indexes, and query plans.
