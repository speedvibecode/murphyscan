---
reel: 13
source_file: "reel 13.txt"
source_url: "https://www.instagram.com/p/DYmoTKBgQjt/"
scan_area: "thirty-minute-security-audit"
tags: [murphyscan, security, dependencies, auth-boundaries, secrets]
---
# Reel 13 - Thirty-Minute Security Audit

## Summary
A lightweight security audit can catch major production risks quickly. The reel focuses on dependency vulnerabilities, authorization boundary tests, and secret exposure.

## Verification Checklist
- Run dependency audit and classify critical, high, and irrelevant findings.
- Log in as one user and attempt to access another user's data through URLs and API calls.
- Search for secrets in code, git history, frontend bundles, and committed env files; rotate exposed keys.

## Skill Signal
Use this as a fast security triage scan before launch or handoff.

