---
reel: 91
source_file: "reel 91.txt"
source_url: "https://www.instagram.com/p/DaCLbB1khUp/"
scan_area: "structured-logging"
tags: [murphyscan, logs, observability, correlation-id, log-levels]
---
# Reel 91 - Logs Need Structure to Be Useful

## Summary
High-volume plain-text logging creates noise, not clarity. The reel recommends structured logs, correlation IDs across services, and disciplined log levels so incidents become searchable event trails instead of text archaeology.

## Verification Checklist
- Emit structured fields such as timestamp, severity, request ID, and actor identifiers in logs.
- Propagate a correlation or trace ID through multi-service request flows.
- Use log levels consistently so alerting and triage surfaces reflect real severity.

## Skill Signal
Use this as a structured-logging scan for incident clarity and cross-service traceability.
