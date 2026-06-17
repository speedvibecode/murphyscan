---
reel: 34
source_file: "reel 34.txt"
source_url: "https://www.instagram.com/p/DZDUWLJRpZ8/"
scan_area: "database-scale"
tags: [murphyscan, sharding, partitioning, citus, indexes, postgres]
---
# Reel 34 - Partition Before Sharding

## Summary
Large tables eventually hit query and indexing limits, but sharding should be evidence-driven. The reel recommends progressing from indexes to logical partitioning, and only then to physical sharding or Citus-style distributed Postgres.

## Verification Checklist
- Use monitoring to prove query latency and table growth are real bottlenecks.
- Partition large event or regional tables before adopting full sharding.
- Consider tenant-based sharding only when the access pattern supports it.

## Skill Signal
Use this as a database-scale scan that prevents premature or missing sharding decisions.

