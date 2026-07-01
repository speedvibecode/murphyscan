---
reel: 70
source_file: "reel 70.txt"
source_url: "https://www.instagram.com/p/DZslOCNRDNh/"
scan_area: "row-level-security-foundation"
tags: [murphyscan, rls, supabase, tenant-isolation, database-policies]
---
# Reel 70 - RLS Is a Database Firewall

## Summary
Row-level security prevents cross-tenant leaks by enforcing visibility rules at the database itself. The reel argues that application-side filtering is brittle, while RLS keeps data protected even when application code makes a mistake.

## Verification Checklist
- Enable row-level security or equivalent row access enforcement on tenant-owned tables.
- Confirm policies are based on real tenant or user identity, not only frontend assumptions.
- Verify no route or query path relies on a missing `WHERE` clause for isolation.

## Skill Signal
Use this as an RLS-foundation scan for source-of-truth access control.
