---
layer: 08
image_label: "SECURITY & RLS"
tags: [murphyscan, layer, security, rls]
source_reels: [reel-02, reel-13, reel-14, reel-15, reel-22, reel-36, reel-37, reel-44, reel-48, reel-55, reel-59, reel-60, reel-61, reel-64, reel-65, reel-70, reel-73, reel-75, reel-78, reel-83, reel-84, reel-89, reel-95, reel-99, reel-100, reel-103, reel-106, reel-107, reel-110, reel-113, reel-123, reel-124, reel-143, reel-144]
---
# 08 Security and RLS

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The security layer verifies that the app has baseline security controls, active testing, secret hygiene, RLS, and compliance evidence proportional to its risk.

## Core Concepts
- [[Authorization and Row-Level Security]]
- [[Secrets and Credential Rotation]]
- [[Security Scanning and Pen Test Lite]]
- [[AI Supply Chain Trust]]
- [[Managed Auth and Session Security]]
- [[Legal and Compliance Basics]]

## Source Reels
- [[reel-02]] - security baseline checklist.
- [[reel-13]] - dependency audit, auth boundary test, env review.
- [[reel-14]] - authorization failures.
- [[reel-15]] - frontend secret exposure.
- [[reel-22]] - Supabase RLS policies.
- [[reel-36]] - automated secret rotation.
- [[reel-37]] - SOC 2 preparation and evidence.
- [[reel-44]] - OWASP ZAP, Burp, CI scanning.
- [[reel-48]] - dynamic database credentials.
- [[reel-55]] - frontend is not a security boundary.
- [[reel-59]] - managed auth.
- [[reel-60]] - session expiry and logout.
- [[reel-61]] - secret scanning and push protection.
- [[reel-64]] - auth foundation.
- [[reel-65]] - ZAP first, Burp later, with security scanning staged by risk.
- [[reel-70]] - RLS belongs at the database layer.
- [[reel-73]] - dependencies are supply-chain trust, not just convenience.
- [[reel-75]] - scan before attackers do.
- [[reel-78]] - browser protection depends on CORS and CSP being set intentionally.
- [[reel-83]] - enterprise trust evidence takes time to build.
- [[reel-84]] - JWT validation assumptions are exploitable if left implicit.
- [[reel-89]] - service-to-service identity needs stronger controls than copied API keys.
- [[reel-95]] - privacy systems must match actual data movement and deletion behavior.
- [[reel-99]] - git history and env files are both secret exposure surfaces.
- [[reel-100]] - service-role routes can nullify RLS entirely.
- [[reel-103]] - AI prompts, skills, and shared instructions now belong in the supply-chain review.
- [[reel-106]] - tenant isolation needs monitoring for cross-tenant leakage signals.
- [[reel-107]] - launch risk includes business liability, insurance fit, and platform terms.
- [[reel-110]] - industry-specific requirements can change security and compliance expectations.
- [[reel-113]] - AI-generated code must be treated as untrusted until reviewed and tested.
- [[reel-123]] - security audits should run against AI-generated code, not only human-written changes.
- [[reel-124]] - AI assistant context is a prompt-injection and tool-permission attack surface.
- [[reel-143]] - policies, refunds, data terms, and service commitments must match product operations.
- [[reel-144]] - deletion must cover the full user-data lifecycle, not only the account row.

## What MurphyScan Should Verify
- No known secret exposure in code, bundles, or git history.
- User and tenant data are protected by ownership checks and RLS.
- Dependency, code, and secret scanning run in CI or documented local gates.
- Auth/session controls are managed or deeply reviewed.
- Compliance evidence exists when user data or enterprise sales require it.
- Browser security headers and token validation defaults are reviewed explicitly on web-facing apps.
- Untrusted AI instructions or automation artifacts do not influence production blindly.
- Tenant boundaries are monitored across caches, jobs, exports, and API paths.
- Legal, insurance, and platform-risk requirements are checked where the product domain raises them.
- AI development tools, prompts, PR context, issues, and docs are treated as untrusted inputs when they can influence code or execution.
- User deletion behavior is mapped across primary, derived, provider, retained, and auditable data surfaces.

## Repetition Notes
This is the highest-density layer. Do not split every security item into tiny notes; use the consolidated concept notes to route checks.
