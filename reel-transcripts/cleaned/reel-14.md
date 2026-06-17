---
reel: 14
source_file: "reel 14.txt"
source_url: "https://www.instagram.com/p/DYnJUm9xKMN/"
scan_area: "authorization"
tags: [murphyscan, auth, authorization, rls, ownership-checks, roles]
---
# Reel 14 - Authentication Is Not Authorization

## Summary
Login only proves identity; it does not prove permission. The reel warns that routes, API endpoints, admin panels, and records often remain accessible to any logged-in user unless explicit authorization exists.

## Verification Checklist
- Check route-level access for admin and privileged pages.
- Verify every API endpoint enforces role, tenant, or resource ownership checks.
- Confirm row-level security or equivalent data-layer authorization prevents cross-user access.

## Skill Signal
Use this as an authorization scan focused on user-to-user and role-based boundaries.

