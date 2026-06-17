---
reel: 15
source_file: "reel 15.txt"
source_url: "https://www.instagram.com/p/DYpNvXGg_WM/"
scan_area: "secret-exposure"
tags: [murphyscan, secrets, env-vars, proxy-routes, key-rotation]
---
# Reel 15 - Keep API Keys Out of the Browser

## Summary
Any secret shipped to frontend JavaScript should be treated as public. The reel recommends moving secrets to server-side environment variables, adding proxy routes, and rotating every key that was ever exposed.

## Verification Checklist
- Search production frontend bundles for keys, internal endpoints, and public env variables.
- Move external API calls behind server-side routes so the browser never sees provider keys.
- Rotate any key that has appeared in frontend code, committed files, or git history.

## Skill Signal
Use this as a secret-exposure scan for frontend bundles and application architecture.

