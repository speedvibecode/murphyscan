---
layer: 10
image_label: "CACHING & CDN"
tags: [murphyscan, layer, caching, cdn]
source_reels: [reel-01, reel-25, reel-28, reel-33, reel-38, reel-53, reel-62, reel-63]
---
# 10 Caching and CDN

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The caching layer verifies that the app does not repeatedly pay for or wait on identical work.

## Core Concepts
- [[Caching Strategy]]
- [[AI Cost Controls and Model Routing]]
- [[Database Scaling and Connection Pooling]]

## Source Reels
- [[reel-01]] - semantic cache and AI spend control.
- [[reel-25]] - browser, CDN, and application caching.
- [[reel-28]] - Upstash as serverless Redis.
- [[reel-33]] - edge delivery and regional reads.
- [[reel-38]] - semantic caching for AI requests.
- [[reel-53]] - memory, edge, and database query caching.
- [[reel-62]] - cache repeated data before first 100 users.
- [[reel-63]] - repeated work causes scaling cliffs.

## What MurphyScan Should Verify
- Static assets have cache headers.
- Public or semi-static API responses have safe edge caching where appropriate.
- Expensive DB queries and AI calls have cache policy and invalidation.
- Caching never leaks user-specific or tenant-specific data.
- Cache hit rate and invalidation risk are understood.

## Repetition Notes
Caching appears in AI cost, database load, and scaling. Use this layer for cache mechanics and safety.

