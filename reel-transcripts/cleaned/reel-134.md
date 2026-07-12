---
reel: 134
source_file: "reel 134.txt"
source_url: "https://www.instagram.com/reel/Danl3ysjuQ8/"
published_at: "2026-07-10T16:12:55.000Z"
scan_area: "browser-supply-chain-security"
tags: [murphyscan, csp, browser-security, third-party-scripts, supply-chain]
---
# Reel 134 - Audit and Constrain Browser Dependencies

## Summary
Every third-party script, stylesheet, font, iframe, pixel, or widget expands the browser trust boundary. Content Security Policy should begin in report-only mode, produce a complete resource inventory, and then enforce the smallest justified allowlist.

## Verification Checklist
- Inventory every external browser resource and its business purpose.
- Remove resources that cannot be justified.
- Configure CSP with explicit source allowlists.
- Run report-only mode long enough to find legitimate violations.
- Enforce CSP after reviewing reports and testing critical flows.

## Skill Signal
Count unexplained external origins as client-side supply-chain risk, not harmless convenience.
