---
concept: "secrets-credential-rotation"
tags: [murphyscan, concept, secrets, rotation]
layers: ["08 Security and RLS", "13 Availability and Recovery"]
source_reels: [reel-13, reel-15, reel-36, reel-48, reel-61, reel-89, reel-99, reel-103]
---
# Secrets and Credential Rotation

## Related Layers
- [[08 Security and RLS]]
- [[13 Availability and Recovery]]

## Source Reels
- [[reel-13]] - review env vars and rotate exposed frontend keys.
- [[reel-15]] - move keys server-side and rotate old keys.
- [[reel-36]] - dual-key rotation and automated schedules.
- [[reel-48]] - dynamic database credentials and audit logs.
- [[reel-61]] - scan git history and scope keys.
- [[reel-89]] - service-to-service credentials need rotation and stronger trust models.
- [[reel-99]] - deleted secrets remain in git history and env files are not secrets management.
- [[reel-103]] - compromised external AI resources should trigger immediate secret review and rotation.

## Why It Matters
Secrets leak through frontend bundles, committed env files, logs, and git history. Rotation and scoping reduce the duration and blast radius of compromise.

## Verification Questions
- Are secrets absent from frontend code and public env vars?
- Has git history been scanned?
- Are exposed keys rotated, not just moved?
- Are keys scoped by permission, environment, IP, domain, or service where possible?
- Is there a zero-downtime rotation path?
- Are service-to-service credentials rotated on a schedule instead of only after incidents?
- If untrusted automation, prompts, or skill files influenced production work, is there a response path for secret rotation?

## Agent Notes
If a key was ever public or committed, assume it was harvested.
