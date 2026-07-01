---
reel: 78
source_file: "reel 78.txt"
source_url: "https://www.instagram.com/p/DZ2Z8uKRMw8/"
scan_area: "browser-security-headers"
tags: [murphyscan, cors, csp, security-headers, browser-security]
---
# Reel 78 - Let the Browser Help Defend the App

## Summary
The browser blocks dangerous cross-origin and script behavior by default, but teams often disable those protections casually. The reel recommends setting CORS narrowly, defining a real CSP, and treating security headers as baseline protection rather than optional polish.

## Verification Checklist
- Restrict CORS to known origins, methods, and credential patterns instead of allowing everything.
- Configure a content security policy that limits which scripts and resources can execute.
- Review core security headers as part of launch readiness, not only after a reported issue.

## Skill Signal
Use this as a browser-security scan for CORS and CSP posture.
