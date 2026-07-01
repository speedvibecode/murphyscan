---
title: "MurphyScan Skill Brief"
tags: [murphyscan, skill-brief]
---
# MurphyScan Skill Brief

This note describes the operating model behind the portable `/murphyscan` skill surfaces in this repo.

## Purpose
`/murphyscan` should help an agent verify whether an AI-assisted app is production-ready across the 13 layers in [[Layer Map]].

## Rule Shape
Each rule should include:
- **Layer:** one of the 13 production layers.
- **Concept:** a linked concept note explaining the risk.
- **Evidence:** source reel links.
- **Inspection:** files, commands, dashboards, or config surfaces to check.
- **Pass condition:** what must be true.
- **Failure condition:** what should block launch or require explicit owner acceptance.

## Default Scan Modes
- **quick:** high-risk checks only: auth, RLS, secrets, deploy safety, monitoring, rate limits.
- **standard:** all 13 layer hubs with focused checks.
- **deep:** standard scan plus active testing, load testing, bundle inspection, dependency audit, API contract review, and AI eval review.

## Rule Additions From Reels 65-104
- Treat service-role database access as a first-class RLS bypass path.
- Review API contracts, versioning, and changelog discipline for user-facing or partner-facing APIs.
- Include uptime checks, structured logs, and restore drills in the default recovery story.
- Treat external prompts, downloaded skills, and copied agent instructions as part of the AI supply chain.

## Non-Goals
- Do not rewrite the app automatically.
- Do not invent missing policy decisions.
- Do not treat tool presence as proof; require evidence that the control is wired and working.
