---
reel: 22
source_file: "reel 22.txt"
source_url: "https://www.instagram.com/p/DYxb9K-RC7n/"
scan_area: "row-level-security"
tags: [murphyscan, supabase, rls, authorization, security]
---
# Reel 22 - Row-Level Security

## Summary
Authentication does not protect data unless the database enforces authorization. The reel focuses on Supabase/Postgres row-level security policies so users can only read and mutate rows they own.

## Verification Checklist
- Inspect user-data tables for enabled RLS and explicit policies.
- Confirm select and insert policies exist at minimum for user-owned tables.
- Add update and delete policies for sensitive data where mutation is allowed.

## Skill Signal
Use this as a data-isolation scan for Supabase or Postgres-backed apps.

