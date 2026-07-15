---
concept: "security-scanning-pen-test-lite"
tags: [murphyscan, concept, security, scanning]
layers: ["08 Security and RLS", "12 Error Tracking and Logs"]
source_reels: [reel-02, reel-03, reel-13, reel-44, reel-61, reel-65, reel-73, reel-75, reel-78, reel-84, reel-99, reel-134, reel-146]
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
- [[reel-65]] - use ZAP as the everyday baseline and Burp-style testing when the stakes rise.
- [[reel-73]] - dependency trust, scanning, and committed lockfiles are part of the attack surface.
- [[reel-75]] - run automated web scanning before launch, not after the first security question.
- [[reel-78]] - CORS and CSP are browser-level security controls worth reviewing explicitly.
- [[reel-84]] - token validation assumptions can create exploitable auth gaps.
- [[reel-99]] - git history scanning and managed secrets belong in the baseline.
- [[reel-134]] - inventory external browser resources and graduate CSP from report-only to enforcement.
- [[reel-146]] - audit broad production controls before an external penetration test, then preserve remediation and retest evidence for procurement.

## Why It Matters
Security is not a one-time checklist. It needs dependency audits, secret scans, active API tampering, and automated CI checks.

## Verification Questions
- Are dependency audits run and reviewed?
- Are lockfiles committed?
- Are OWASP ZAP, Burp-style tests, or equivalent active checks used on staging?
- Does CI scan dependencies, code, and secrets?
- Is push protection enabled before secrets reach remote?
- Are browser security headers such as CORS and CSP configured intentionally?
- Does CSP use the smallest justified origin allowlist after a reviewed report-only period?
- Can every third-party script, font, iframe, pixel, and stylesheet be explained and approved?
- Are token validation assumptions reviewed for algorithm confusion and missing expiry?
- Can enterprise security-questionnaire claims be backed by current control evidence, audit results, remediation, and external testing?
- Does any public security or trust page match implemented encryption, scanning, incident-response, data-location, and vulnerability-reporting controls?

## Agent Notes
Prefer repeatable checks over prose assurances.
