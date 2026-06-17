---
concept: "authorization-row-level-security"
tags: [murphyscan, concept, authorization, rls]
layers: ["04 Auth and Permissions", "08 Security and RLS", "03 Database and Storage"]
source_reels: [reel-13, reel-14, reel-22, reel-26, reel-64]
---
# Authorization and Row-Level Security

## Related Layers
- [[04 Auth and Permissions]]
- [[08 Security and RLS]]
- [[03 Database and Storage]]

## Source Reels
- [[reel-13]] - change IDs in URLs and API calls to test boundaries.
- [[reel-14]] - login is not authorization.
- [[reel-22]] - Supabase tables without policies are dangerous.
- [[reel-26]] - enforce tenant isolation in the database.
- [[reel-64]] - every query must filter by user or equivalent policy.

## Why It Matters
The most dangerous failure is authenticated cross-user or cross-tenant access. It often passes basic login tests while still exposing private data.

## Verification Questions
- Can user A access user B data by changing a URL or API parameter?
- Are RLS policies enabled for every table with user data?
- Are select, insert, update, and delete policies aligned with real ownership rules?
- Do admin routes and endpoints enforce role checks server-side?

## Agent Notes
Use active boundary tests. Reading config is not enough.

