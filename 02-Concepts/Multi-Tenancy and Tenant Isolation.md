---
concept: "multi-tenancy-tenant-isolation"
tags: [murphyscan, concept, multi-tenant, rls]
layers: ["03 Database and Storage", "04 Auth and Permissions", "11 Load Balancing and Scaling"]
source_reels: [reel-26, reel-34, reel-51, reel-66, reel-106]
---
# Multi-Tenancy and Tenant Isolation

## Related Layers
- [[03 Database and Storage]]
- [[04 Auth and Permissions]]
- [[11 Load Balancing and Scaling]]

## Source Reels
- [[reel-26]] - tenant ID on every relevant table and RLS enforcement.
- [[reel-34]] - tenant ID can become a shard key.
- [[reel-51]] - complex tenant auth may require unbundling identity.
- [[reel-66]] - choose shared schema, schema-per-tenant, or database-per-tenant based on traffic and compliance.
- [[reel-106]] - cross-tenant exposure creates legal, reputation, monitoring, and customer trust damage.

## Why It Matters
Multi-tenant apps fail dangerously when one organization can access another's data. Tenant design also determines future scaling options.

## Verification Questions
- Does every tenant-owned row include a tenant or organization identifier?
- Are policies enforced in the database, not only in code?
- Are tenant query patterns indexed?
- Is the tenant model compatible with future sharding or isolated projects?
- Does the chosen isolation model match contractual or compliance walls instead of ORM defaults?
- Do cache keys, background jobs, exports, and direct API paths carry tenant context?
- Can monitoring detect cross-tenant access before a customer reports it?

## Agent Notes
Tenant isolation should be designed before growth, not retrofitted after data is mixed.
