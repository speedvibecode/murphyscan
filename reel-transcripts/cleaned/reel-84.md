---
reel: 84
source_file: "reel 84.txt"
source_url: "https://www.instagram.com/p/DZ71CFgmeVk/"
scan_area: "jwt-validation"
tags: [murphyscan, auth, jwt, token-security, algorithm-confusion, expiration]
---
# Reel 84 - Validate the Token Rules Explicitly

## Summary
JWT security fails when libraries or teams accept unsafe defaults. The reel recommends rejecting `alg=none`, pinning the expected signing algorithm, and enforcing real expiration so stolen or forged tokens do not become indefinite access keys.

## Verification Checklist
- Ensure the token library rejects unsigned or `alg=none` tokens explicitly.
- Pin accepted algorithms server-side instead of trusting whatever the token header claims.
- Require expiration and refresh flows rather than allowing long-lived bearer tokens by default.

## Skill Signal
Use this as a JWT-validation scan for token verification assumptions.
