---
reel: 8
source_file: "reel 08.txt"
source_url: "https://www.instagram.com/p/DYfDSOzgC-x/"
scan_area: "error-state-coverage"
tags: [murphyscan, errors, retry, ui-states, external-calls]
---
# Reel 08 - Happy Path Trap

## Summary
Successful flows are not enough. The reel focuses on handling failed payments, API errors, database failures, and UI states with clear feedback and retry behavior instead of blank screens.

## Verification Checklist
- Wrap external calls in error handling that returns useful user-facing messages.
- Confirm each major component has loading, error, empty, and success states.
- Add bounded retry logic with exponential backoff for recoverable failures.

## Skill Signal
Use this as an error-state scan for UI and service interactions.

