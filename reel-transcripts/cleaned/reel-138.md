---
reel: 138
source_file: "reel 138.txt"
source_url: "https://www.instagram.com/reel/DaqooTiEUY4/"
published_at: "2026-07-11T20:35:02.000Z"
scan_area: "database-migration-timing"
tags: [murphyscan, database, migration, scaling, platform-fit]
---
# Reel 138 - Migrate Databases When the Evidence Says Go

## Summary
Database migration timing should compare the cost and ceiling of the current platform with the coordination cost of moving. Optimize when the platform can handle materially more load; migrate when a required capability is impossible or workaround cost exceeds migration cost.

## Verification Checklist
- Measure connection, pricing, throughput, and feature ceilings.
- Test whether optimization can support roughly ten times current load.
- Identify capabilities the current platform cannot provide architecturally.
- Compare workaround hours and recurring cost with migration cost.
- Plan milestones, dual-run or cutover verification, rollback points, and query tests.

## Skill Signal
Do not recommend migration from frustration alone; require workload and cost evidence.
