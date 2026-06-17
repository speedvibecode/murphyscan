---
title: "MurphyScan Skill Brief"
tags: [murphyscan, skill-brief, draft]
---
# MurphyScan Skill Brief

This is a pre-skill design note for a future `/murphyscan` skill. It is not the skill implementation yet.

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
- **deep:** standard scan plus active testing, load testing, bundle inspection, dependency audit, and AI eval review.

## Non-Goals
- Do not rewrite the app automatically.
- Do not invent missing policy decisions.
- Do not treat tool presence as proof; require evidence that the control is wired and working.

