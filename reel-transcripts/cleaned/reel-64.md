---
reel: 64
source_file: "reel1.md"
source_url: ""
scan_area: "auth-foundation"
tags: [murphyscan, auth, logout, rls, managed-auth, session-expiry]
---
# Reel 64 - Auth Is the Foundation

## Summary
The existing Markdown reel focuses on foundational auth risks in vibe-coded apps. It recommends using a managed provider, testing logout and session expiry directly, and enforcing row-level security on every user-owned database query.

## Verification Checklist
- Prefer managed auth providers such as Clerk, Supabase Auth, or Auth0 instead of custom auth.
- Test logout by copying a protected URL, logging out, and pasting the URL back in.
- Confirm every user-owned query is constrained by user ID or equivalent row-level security.

## Skill Signal
Use this as an auth-foundation scan for provider choice, session invalidation, and data isolation.

