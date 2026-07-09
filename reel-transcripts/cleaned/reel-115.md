---
reel: 115
source_file: "reel 115.txt"
source_url: "https://www.instagram.com/p/DaQasDJDxqZ/"
published_at: "2026-07-01T16:13:04.000Z"
scan_area: "database-scaling-decision-tree"
tags: [murphyscan, database, scaling, pooling, query-optimization, production-readiness]
---
# Reel 115 - Scale in the Right Order

## Summary
Database scaling should follow diagnosis, not instinct. The reel gives a decision tree: check connection pressure before buying replicas, check query cost before adding capacity, and distinguish read bottlenecks from write bottlenecks before scaling horizontally. Wrong branches increase cost without fixing the real constraint.

## Verification Checklist
- Check whether connection pooling exists before replica or tier upgrades are proposed.
- Verify slow and frequent queries are measured with query statistics before adding infrastructure.
- Distinguish read pressure from write contention before recommending replicas.
- Route write bottlenecks toward queues, batching, or background work instead of read scaling.

## Skill Signal
Use this as a database scaling decision-tree scan for pooling, query optimization, and read/write bottleneck evidence.
