---
reel: 131
source_file: "reel 131.txt"
source_url: "https://www.instagram.com/reel/DallI-2D9Q7/"
published_at: "2026-07-09T21:28:01.000Z"
scan_area: "auth-session-lifecycle"
tags: [murphyscan, auth, oauth, token-refresh, session-security]
---
# Reel 131 - Authentication Includes the Token Lifecycle

## Summary
Initial sign-in is incomplete without silent access-token refresh, state-preserving reauthentication, and refresh-token rotation. Session expiry should not discard user work, while reused rotated tokens should surface possible compromise.

## Verification Checklist
- Refresh access tokens before expiry without interrupting active work.
- Preserve drafts, carts, and navigation state through reauthentication.
- Rotate refresh tokens on use and detect reuse.
- Test expired, revoked, stolen, and unavailable refresh-token paths.
- Verify logout invalidates server-side session state.

## Skill Signal
Treat login-only implementations as incomplete until normal expiry and failure paths are exercised.
