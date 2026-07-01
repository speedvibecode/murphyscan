---
reel: 71
source_file: "reel 71.txt"
source_url: "https://www.instagram.com/p/DZs5JDxPOrW/"
scan_area: "rbac-basics"
tags: [murphyscan, auth, rbac, permissions, api-enforcement]
---
# Reel 71 - Roles Only Count Where They Are Enforced

## Summary
The UI can hide buttons, but access control only exists where the backend enforces it. The reel recommends starting with a simple three-role model and validating permissions at every API or server boundary.

## Verification Checklist
- Define a launch-safe baseline role model such as admin, member, and viewer.
- Enforce role checks at API routes, server actions, and backend mutation boundaries.
- Verify protected actions stay blocked even if a user calls the API directly outside the UI.

## Skill Signal
Use this as an RBAC-basics scan for backend-enforced roles.
