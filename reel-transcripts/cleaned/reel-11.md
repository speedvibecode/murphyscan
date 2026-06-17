---
reel: 11
source_file: "reel 11.txt"
source_url: "https://www.instagram.com/p/DYiSfwGP2D9/"
scan_area: "backend-boundary"
tags: [murphyscan, backend, validation, rate-limiting, request-authentication]
---
# Reel 11 - Backend Boundary

## Summary
Direct frontend-to-database access can turn a working demo into a security hole. The reel frames the backend as the enforcement layer for business logic, validation, request authentication, and rate limiting.

## Verification Checklist
- Check whether the frontend directly calls the database for privileged operations.
- Verify server-side validation and business rules exist for critical flows.
- Confirm rate limits and request authentication are enforced before data writes or expensive actions.

## Skill Signal
Use this as a backend-boundary scan for apps that overtrust the client.
