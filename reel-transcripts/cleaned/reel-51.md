---
reel: 51
source_file: "reel 51.txt"
source_url: "https://www.instagram.com/p/DZcoN1gRCgL/"
scan_area: "unbundling-platforms"
tags: [murphyscan, supabase, auth, database, storage, platform-architecture]
---
# Reel 51 - Know When to Unbundle Supabase

## Summary
All-in-one platforms are strong starting points, but some products eventually need specialized services. The reel gives signs to unbundle: complex auth needs, mismatched database workloads, or independently scaling storage/functions/database.

## Verification Checklist
- Check whether auth now requires SSO, custom claims, multi-tenant permissions, or enterprise identity.
- Match database engine to workload instead of forcing every data shape into one platform.
- Split services when one layer bottlenecks or scales differently from the rest.

## Skill Signal
Use this as a platform-unbundling scan for growing Supabase-backed apps.

