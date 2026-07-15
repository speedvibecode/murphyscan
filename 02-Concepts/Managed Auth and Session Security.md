---
concept: "managed-auth-session-security"
tags: [murphyscan, concept, auth, sessions]
layers: ["04 Auth and Permissions", "08 Security and RLS"]
source_reels: [reel-59, reel-60, reel-64, reel-72, reel-77, reel-84, reel-131, reel-136, reel-148]
---
# Managed Auth and Session Security

## Related Layers
- [[04 Auth and Permissions]]
- [[08 Security and RLS]]

## Source Reels
- [[reel-59]] - do not build auth from scratch.
- [[reel-60]] - sessions need expiry, refresh rotation, and server-side logout.
- [[reel-64]] - managed auth, logout testing, and RLS foundation.
- [[reel-72]] - match the auth provider to the customer and business trajectory.
- [[reel-77]] - self-hosted auth increases control and ops burden together.
- [[reel-84]] - token validation must reject unsafe algorithms and enforce expiry.
- [[reel-131]] - silent refresh, state-preserving reauthentication, and refresh-token rotation complete the session lifecycle.
- [[reel-136]] - enterprise SSO requires SAML or OIDC plus tenant-specific identity-provider configuration.
- [[reel-148]] - meaningful idle detection, pre-expiry warning, and state-preserving reauthentication keep session security usable.

## Why It Matters
Authentication failures have large blast radius. Mature providers handle password storage, sessions, recovery, verification, token rotation, and MFA better than most project-specific code.

## Verification Questions
- Is auth managed by Clerk, Supabase Auth, Auth0, Firebase, BetterAuth, or a similarly maintained provider?
- If custom auth exists, has it received explicit deep review?
- Do access tokens expire quickly enough?
- Does logout invalidate server-side session state?
- Does the provider choice fit enterprise SSO or self-hosted control requirements the product will actually face?
- Are JWT algorithms pinned explicitly, and are unsigned or confused-algorithm tokens rejected?
- Are access tokens refreshed before expiry, and does failed refresh preserve user work through reauthentication?
- Are rotated refresh tokens single-use with reuse detection?
- For enterprise targets, are SAML or OIDC configurations isolated per tenant and tested against the intended identity providers?
- Do idle timeouts distinguish meaningful product activity and sustained reading from incidental mouse movement or background tabs?
- Is expiry preceded by a warning, and does reauthentication restore route, workflow context, and safely recoverable draft state?

## Agent Notes
Custom auth should be treated as high risk until proven otherwise.
