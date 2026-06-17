---
reel: 55
source_file: "reel 55.txt"
source_url: "https://www.instagram.com/p/DZhxVg2xu-u/"
scan_area: "client-trust-boundary"
tags: [murphyscan, frontend, backend, authorization, validation, public-env]
---
# Reel 55 - Frontend Is Not a Trust Layer

## Summary
Business rules, permissions, pricing, and secrets do not belong in browser code. The reel recommends moving decisions to the backend, duplicating validation server-side, and auditing production bundles for exposed internals.

## Verification Checklist
- Move pricing, feature gates, discounts, and permissions to server-side enforcement.
- Treat client-side validation as UX only; revalidate all inputs on the backend.
- Search production bundles for public env variables, API keys, internal endpoints, and config objects.

## Skill Signal
Use this as a client-boundary scan for frontend overtrust.

