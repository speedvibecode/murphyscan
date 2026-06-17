---
reel: 60
source_file: "reel 60.txt"
source_url: "https://www.instagram.com/p/DZm7yPZxxlC/"
scan_area: "session-security"
tags: [murphyscan, auth, sessions, token-expiry, refresh-tokens, logout]
---
# Reel 60 - Sessions Must Expire

## Summary
Tokens that never expire are permanent account keys if stolen. The reel recommends short-lived access tokens, rotating refresh tokens, and server-side session invalidation on logout.

## Verification Checklist
- Set short access-token lifetimes appropriate to the app's risk profile.
- Rotate refresh tokens so reused old tokens become invalid.
- Ensure logout invalidates the server-side session, not just the browser cookie.

## Skill Signal
Use this as a session-security scan.

