---
reel: 36
source_file: "reel 36.txt"
source_url: "https://www.instagram.com/p/DZGYLpLPDR-/"
scan_area: "secret-rotation"
tags: [murphyscan, secrets, rotation, secrets-manager, zero-downtime]
---
# Reel 36 - Rotate Secrets Without Downtime

## Summary
Static API keys create unlimited blast radius when they leak. The reel recommends dedicated secret managers, dual-key rotation windows, and automated rotation schedules with health checks.

## Verification Checklist
- Move secrets into a manager with versioning, audit logs, and rotation APIs.
- Rotate with old and new keys active during a verified transition window.
- Automate rotation and revoke old keys after health checks pass.

## Skill Signal
Use this as a secret-rotation scan for long-lived credentials.

