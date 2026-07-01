---
reel: 96
source_file: "reel 96.txt"
source_url: "https://www.instagram.com/p/DaGcgHaiq3i/"
scan_area: "permission-modeling"
tags: [murphyscan, auth, rbac, permissions, scope, api-enforcement]
---
# Reel 96 - Model Permissions Before Roles Calcify

## Summary
Boolean `is_admin` flags do not scale into real authorization models. The reel recommends defining permissions first, grouping them into roles second, and layering scope onto those permissions so access can scale beyond binary yes-or-no checks.

## Verification Checklist
- Model permissions as actions before hard-coding product behavior around role labels.
- Enforce permissions at backend request boundaries rather than only in UI state.
- Add scope to permissions so access can be constrained by tenant, team, record owner, or similar boundaries.

## Skill Signal
Use this as a permission-modeling scan for scalable authorization design.
