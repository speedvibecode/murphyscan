---
concept: "database-scaling-connection-pooling"
tags: [murphyscan, concept, database, scaling, pooling]
layers: ["03 Database and Storage", "10 Caching and CDN", "11 Load Balancing and Scaling"]
source_reels: [reel-27, reel-33, reel-34, reel-41, reel-62, reel-63]
---
# Database Scaling and Connection Pooling

## Related Layers
- [[03 Database and Storage]]
- [[10 Caching and CDN]]
- [[11 Load Balancing and Scaling]]

## Source Reels
- [[reel-27]] - connection limits, cold starts, and external rate limits.
- [[reel-33]] - read replicas and geo-aware routing.
- [[reel-34]] - partitioning before sharding.
- [[reel-41]] - pooled ports, transaction mode, and ORM pool limits.
- [[reel-62]] - pooling and caching for first 100 users.
- [[reel-63]] - scaling cliffs from unbounded queries.

## Why It Matters
Database failures under load often look like app failures. Pooling, indexes, caching, partitioning, and replicas solve different bottlenecks and should not be confused.

## Verification Questions
- Is connection pooling enabled for serverless or bursty traffic?
- Are ORM pool limits aligned with database plan limits?
- Do slow queries have query-plan evidence?
- Is partitioning, read replication, or sharding justified by metrics?

## Agent Notes
Start with pooling, indexes, and caching before recommending sharding.

