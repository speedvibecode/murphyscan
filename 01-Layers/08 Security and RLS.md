---
layer: 08
image_label: "SECURITY & RLS"
tags: [murphyscan, layer, security, rls]
source_reels: [reel-02, reel-13, reel-14, reel-15, reel-22, reel-36, reel-37, reel-44, reel-48, reel-55, reel-59, reel-60, reel-61, reel-64]
---
# 08 Security and RLS

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The security layer verifies that the app has baseline security controls, active testing, secret hygiene, RLS, and compliance evidence proportional to its risk.

## Core Concepts
- [[Authorization and Row-Level Security]]
- [[Secrets and Credential Rotation]]
- [[Security Scanning and Pen Test Lite]]
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

## What MurphyScan Should Verify
- No known secret exposure in code, bundles, or git history.
- User and tenant data are protected by ownership checks and RLS.
- Dependency, code, and secret scanning run in CI or documented local gates.
- Auth/session controls are managed or deeply reviewed.
- Compliance evidence exists when user data or enterprise sales require it.

## Repetition Notes
This is the highest-density layer. Do not split every security item into tiny notes; use the consolidated concept notes to route checks.

