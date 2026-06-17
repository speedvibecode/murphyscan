---
reel: 52
source_file: "reel 52.txt"
source_url: "https://www.instagram.com/p/DZdbRXmv_lb/"
scan_area: "ai-output-validation"
tags: [murphyscan, ai, schema-validation, retries, graceful-degradation, safety]
---
# Reel 52 - Validate AI Output Before Users See It

## Summary
Raw model output should not flow directly to users. The reel recommends validating responses against schema, length, and safety rules, retrying with feedback, and degrading gracefully if retries fail.

## Verification Checklist
- Validate every AI response for schema, length, allowed content, and product constraints.
- Retry failed responses with explicit correction instructions and a small retry limit.
- Fall back to cached content, simpler models, human handoff, or a clear user message.

## Skill Signal
Use this as an AI-output guardrail scan.

