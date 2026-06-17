---
reel: 59
source_file: "reel 59.txt"
source_url: "https://www.instagram.com/p/DZk6Q0yRF7h/"
scan_area: "managed-auth"
tags: [murphyscan, auth, clerk, auth0, supabase-auth, firebase, security]
---
# Reel 59 - Do Not Build Auth from Scratch

## Summary
Authentication is infrastructure, not a product feature. The reel argues that password storage, session management, verification, recovery, token rotation, and MFA are too risky to hand-roll when mature providers exist.

## Verification Checklist
- Prefer managed auth providers unless there is a documented reason not to.
- Verify password reset, email verification, session management, token rotation, and account recovery are covered.
- Treat any custom auth implementation as high-risk and subject it to deeper review.

## Skill Signal
Use this as an auth-provider scan and custom-auth risk flag.

