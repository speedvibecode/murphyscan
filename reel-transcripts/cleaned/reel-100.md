---
reel: 100
source_file: "reel 100.txt"
source_url: "https://www.instagram.com/p/DaLDSqRgaBG/"
scan_area: "rls-bypass-paths"
tags: [murphyscan, rls, service-role, supabase, api-security, data-paths]
---
# Reel 100 - Service Roles Can Walk Around RLS

## Summary
Row-level security does nothing if the application queries through a service role that bypasses every policy. The reel recommends reviewing every actual path to the data, especially backend routes using elevated database credentials.

## Verification Checklist
- Audit backend routes, server actions, and jobs for service-role or bypass credentials.
- Confirm user-facing data paths execute under user-scoped access rules where possible.
- Treat RLS as incomplete until every high-risk path to the data has been reviewed end to end.

## Skill Signal
Use this as an RLS-bypass scan for elevated credential misuse.
