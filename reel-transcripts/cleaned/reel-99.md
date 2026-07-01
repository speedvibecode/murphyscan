---
reel: 99
source_file: "reel 99.txt"
source_url: "https://www.instagram.com/p/DaJQlPhFeqw/"
scan_area: "secrets-management"
tags: [murphyscan, secrets, git-history, secret-manager, rotation, env-vars]
---
# Reel 99 - Deleted Secrets Still Live in Git History

## Summary
Removing a secret from the latest commit does not remove it from the repo’s history. The reel recommends scanning historical commits, graduating from plain environment files to managed secrets, and rotating credentials on a real schedule instead of only after panic.

## Verification Checklist
- Scan current files and git history for leaked keys, tokens, and credentials.
- Prefer managed secret stores with access control and auditability over plain env-file handling in production.
- Rotate credentials on a fixed policy cadence, not only after confirmed exposure.

## Skill Signal
Use this as a secrets-management scan for historical exposure and operational discipline.
