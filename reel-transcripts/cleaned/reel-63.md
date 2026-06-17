---
reel: 63
source_file: "reel 63.txt"
source_url: "https://www.instagram.com/p/DXwtOTDA-gx/"
scan_area: "scaling-cliff"
tags: [murphyscan, scaling, indexes, caching, async-jobs, load-testing]
---
# Reel 63 - Find the Scaling Cliff Before Launch

## Summary
AI-generated code often optimizes for "works now" rather than "works at scale." The reel identifies common scaling cliffs: unindexed database queries, repeated expensive work, synchronous heavy operations, and no load testing.

## Verification Checklist
- Inspect high-traffic queries for indexes and targeted filters.
- Cache repeated computations and reads instead of recomputing on every request.
- Move heavy operations to queues and run load tests before public launch.

## Skill Signal
Use this as a broad scaling-readiness scan.

