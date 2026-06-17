---
reel: 48
source_file: "reel 48.txt"
source_url: "https://www.instagram.com/p/DZXhEL2RVRu/"
scan_area: "dynamic-database-secrets"
tags: [murphyscan, secrets, database-credentials, vault, least-privilege, audit-logs]
---
# Reel 48 - Dynamic Database Credentials

## Summary
Static database credentials create broad compromise risk. The reel recommends dynamic secrets, per-service credential scoping, least privilege, and audit logging for every secret access.

## Verification Checklist
- Use a secrets engine or provider that can issue short-lived database credentials.
- Scope credentials by service role: API server, analytics, worker, and other bounded needs.
- Enable audit logs that show who requested credentials, when, where, and for which service.

## Skill Signal
Use this as a credential-risk scan for database access.

