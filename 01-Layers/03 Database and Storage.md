---
layer: 03
image_label: "DATABASE & STORAGE"
tags: [murphyscan, layer, database, storage]
source_reels: [reel-12, reel-26, reel-32, reel-34, reel-35, reel-41, reel-48, reel-51, reel-57, reel-63, reel-66, reel-67, reel-69, reel-74, reel-79, reel-80, reel-98, reel-102, reel-104]
---
# 03 Database and Storage

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The data layer verifies that the app owns its important data, models it correctly, and can query, migrate, back up, and scale it.

## Core Concepts
- [[Database Design and Indexing]]
- [[Multi-Tenancy and Tenant Isolation]]
- [[Database Scaling and Connection Pooling]]
- [[Conflict Resolution and Realtime Data]]
- [[Agent Memory and Vector Storage]]

## Source Reels
- [[reel-12]] - database design is more than table creation.
- [[reel-26]] - tenant IDs, RLS, and access-pattern indexes.
- [[reel-32]] - choose database by data shape and exit cost.
- [[reel-34]] - partition before sharding.
- [[reel-35]] - conflict resolution for concurrent edits.
- [[reel-41]] - connection pooling for serverless and concurrency.
- [[reel-48]] - dynamic database credentials and least privilege.
- [[reel-51]] - unbundle all-in-one platforms when workloads diverge.
- [[reel-57]] - PGVector before adding a dedicated vector database.
- [[reel-63]] - scaling cliffs from unindexed and repeated work.
- [[reel-66]] - tenant isolation model should match traffic and compliance walls.
- [[reel-67]] - query plans and query-frequency data reveal the actual bottleneck.
- [[reel-69]] - serverless database choice depends on engine fit and migration strategy.
- [[reel-74]] - files belong in object storage with URLs in the database.
- [[reel-79]] - ORM choice changes how much query intent stays visible and controlled.
- [[reel-80]] - reactive platform databases trade portability for convenience.
- [[reel-98]] - backups only count if restores have been practiced.
- [[reel-102]] - graduating from Supabase means choosing a new database ceiling deliberately.
- [[reel-104]] - read-heavy and write-heavy workloads may need different database shapes.

## What MurphyScan Should Verify
- Schema shape, relationships, constraints, indexes, and migrations.
- Backup and restore coverage for important data.
- Tenant and ownership fields where the product is multi-user or multi-tenant.
- Connection pooling and query patterns for expected concurrency.
- Storage choices match data shape and operational complexity.
- Media and large blobs live in object storage instead of the transactional database.
- Database selection is justified by workload shape and portability, not just pricing or trend.

## Repetition Notes
RLS appears here and in [[08 Security and RLS]]. In this layer, RLS is data modeling and ownership. In security, it is breach prevention.
