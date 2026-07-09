---
layer: 01
image_label: "FRONTEND"
tags: [murphyscan, layer, frontend]
source_reels: [reel-07, reel-08, reel-09, reel-10, reel-40, reel-55, reel-130]
---
# 01 Frontend

Up: [[Layer Map]] | Home: [[MurphyScan Vault Home]]

## Purpose
The frontend layer verifies that the app is not only attractive, but usable, accessible, resilient, and honest about state.

## Core Concepts
- [[Frontend Production Quality]]
- [[UX States and Real-Device QA]]
- [[Product Activation and Retention]]
- [[Client Trust Boundary]]
- [[Mobile Deep Links and App Links]]

## Source Reels
- [[reel-07]] - demo vs product readiness.
- [[reel-08]] - loading, error, empty, and success states.
- [[reel-09]] - responsive, accessible, performant frontend systems.
- [[reel-10]] - device matrix and edge-case input testing.
- [[reel-40]] - mobile deep links and fallback behavior.
- [[reel-55]] - frontend must not enforce trusted business rules.
- [[reel-130]] - first-48-hour activation, aha moment reach, and churn follow-up loops.

## What MurphyScan Should Verify
- Responsive layouts on mobile and constrained screens.
- Loading, error, empty, and success states for core flows.
- No secrets, pricing logic, or authorization decisions trusted only in browser code.
- Accessibility and keyboard/screen reader basics.
- Real-device or slow-network evidence when the UI is user-facing.
- Core activation and aha-moment paths are tracked when repeat use or conversion matters.

## Repetition Notes
Frontend quality overlaps with backend boundaries because many UI failures come from trusting the client too much. Keep the security boundary in [[02 APIs and Backend Logic]] and the user-facing behavior here.
