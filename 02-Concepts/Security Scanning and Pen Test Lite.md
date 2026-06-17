---
concept: "security-scanning-pen-test-lite"
tags: [murphyscan, concept, security, scanning]
layers: ["08 Security and RLS", "12 Error Tracking and Logs"]
source_reels: [reel-02, reel-03, reel-13, reel-44, reel-61]
---
# Security Scanning and Pen Test Lite

## Related Layers
- [[08 Security and RLS]]
- [[12 Error Tracking and Logs]]

## Source Reels
- [[reel-02]] - baseline security checklist.
- [[reel-03]] - dependency audits and lockfiles.
- [[reel-13]] - quick audit across dependencies, auth, and secrets.
- [[reel-44]] - OWASP ZAP, Burp Suite, and CI scanning.
- [[reel-61]] - secret scanning and push protection.

## Why It Matters
Security is not a one-time checklist. It needs dependency audits, secret scans, active API tampering, and automated CI checks.

## Verification Questions
- Are dependency audits run and reviewed?
- Are lockfiles committed?
- Are OWASP ZAP, Burp-style tests, or equivalent active checks used on staging?
- Does CI scan dependencies, code, and secrets?
- Is push protection enabled before secrets reach remote?

## Agent Notes
Prefer repeatable checks over prose assurances.

