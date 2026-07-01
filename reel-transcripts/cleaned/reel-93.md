---
reel: 93
source_file: "reel 93.txt"
source_url: "https://www.instagram.com/p/DaDuf2DFSP-/"
scan_area: "cache-consistency"
tags: [murphyscan, caching, invalidation, stampede, stale-data]
---
# Reel 93 - Caching Is Also a Consistency Policy

## Summary
Caches are not just about speed. They decide how long users can see stale data and how the system behaves when hot keys expire. The reel recommends using the right invalidation strategy per data type and explicitly protecting against stampedes.

## Verification Checklist
- Define acceptable staleness by data class instead of giving all cached values the same lifetime.
- Use event-based invalidation for user or permission-sensitive data where stale reads are risky.
- Add stampede protection for hot keys so a popular expiration does not overload the database.

## Skill Signal
Use this as a cache-consistency scan for stale-data and expiration risk.
