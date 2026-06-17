---
concept: "managed-auth-session-security"
tags: [murphyscan, concept, auth, sessions]
layers: ["04 Auth and Permissions", "08 Security and RLS"]
source_reels: [reel-59, reel-60, reel-64]
---
# Managed Auth and Session Security

## Related Layers
- [[04 Auth and Permissions]]
- [[08 Security and RLS]]

## Source Reels
- [[reel-59]] - do not build auth from scratch.
- [[reel-60]] - sessions need expiry, refresh rotation, and server-side logout.
- [[reel-64]] - managed auth, logout testing, and RLS foundation.

## Why It Matters
Authentication failures have large blast radius. Mature providers handle password storage, sessions, recovery, verification, token rotation, and MFA better than most project-specific code.

## Verification Questions
- Is auth managed by Clerk, Supabase Auth, Auth0, Firebase, BetterAuth, or a similarly maintained provider?
- If custom auth exists, has it received explicit deep review?
- Do access tokens expire quickly enough?
- Does logout invalidate server-side session state?

## Agent Notes
Custom auth should be treated as high risk until proven otherwise.

