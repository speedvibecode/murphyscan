---
reel: 105
source_file: "reel 105.txt"
source_url: "https://www.instagram.com/reel/Dai-n_LjPMS/"
published_at: "2026-07-08T21:12:59.000Z"
scan_area: "api-input-validation"
tags: [murphyscan, api, validation, sanitization, middleware, abuse-detection]
---
# Reel 105 - Validate Every API Request

## Summary
APIs built by AI can accidentally trust every incoming request. The reel recommends schema validation before business logic, string sanitization before persistence or rendering, and middleware-level request-pattern tracking so suspicious activity is caught before it reaches the core application.

## Verification Checklist
- Verify every write or mutation route validates request shape, type, required fields, and unexpected fields before business logic runs.
- Check that user-controlled strings are sanitized or escaped at the correct boundary for storage, rendering, and downstream provider calls.
- Confirm middleware or gateway logic can detect repeated probing or abuse patterns per user and endpoint.

## Skill Signal
Use this as an API-boundary scan for schema validation, sanitization, and abuse-aware middleware.
