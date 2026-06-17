---
reel: 61
source_file: "reel 61.txt"
source_url: "https://www.instagram.com/p/DZnYDewRV_h/"
scan_area: "secret-scanning"
tags: [murphyscan, secrets, git-history, push-protection, trufflehog, gitleaks]
---
# Reel 61 - Assume Keys Will Leak

## Summary
Bots scan public repositories and commit history for secrets. The reel recommends checking git history, enabling secret scanning and push protection, rotating exposed keys, and scoping keys to reduce blast radius.

## Verification Checklist
- Scan current files and git history for secrets.
- Enable push protection or equivalent secret scanning before commits reach remote.
- Scope provider keys by permission, endpoint, IP, domain, or environment where possible.

## Skill Signal
Use this as a repo-secret scan for current and historical exposure.

