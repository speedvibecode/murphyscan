---
layer: 09
image_label: "RATE LIMITING"
tags: [murphyscan, layer, rate-limiting]
source_reels: [reel-11, reel-24, reel-28, reel-49, reel-62]
---
# 09 Rate Limiting

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The rate limiting layer verifies that bots, brute-force attempts, scrapers, and expensive users cannot overwhelm infrastructure or create runaway bills.

## Core Concepts
- [[Rate Limiting and API Gateways]]
- [[AI Endpoint Protection]]
- [[AI Cost Controls and Model Routing]]

## Source Reels
- [[reel-11]] - rate limiting belongs behind the backend boundary.
- [[reel-24]] - limit AI, auth, and public data endpoints.
- [[reel-28]] - Upstash for caching and rate limits.
- [[reel-49]] - gateway-level authentication, validation, and spend caps.
- [[reel-62]] - connection and cache stress before first traffic.

## What MurphyScan Should Verify
- Paid AI endpoints have per-user and per-IP caps.
- Auth endpoints have brute-force protections.
- Public read endpoints have scraping limits.
- Payload and context sizes are rejected before expensive model calls.
- Rate-limit storage is appropriate for the deployment model.

## Repetition Notes
Rate limiting is both security and cost control. Keep endpoint-specific enforcement here and billing impact in [[AI Cost Controls and Model Routing]].

