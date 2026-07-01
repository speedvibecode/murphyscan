---
reel: 89
source_file: "reel 89.txt"
source_url: "https://www.instagram.com/p/DaAwzEqFWpT/"
scan_area: "service-authentication"
tags: [murphyscan, service-to-service, mTLS, secret-rotation, internal-api]
---
# Reel 89 - Services Need Identity Too

## Summary
Service-to-service authentication has higher blast radius than user auth because compromised internal credentials affect every account. The reel recommends scheduled secret rotation and, for high-trust internal traffic, mutual TLS so services prove identity to each other directly.

## Verification Checklist
- Separate service authentication design from end-user auth assumptions.
- Rotate service credentials on a schedule and keep them out of logs and error surfaces.
- Consider mTLS or equivalent stronger machine identity for sensitive internal service paths.

## Skill Signal
Use this as a service-authentication scan for machine identity and rotation policy.
