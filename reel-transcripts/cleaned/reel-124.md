---
reel: 124
source_file: "reel 124.txt"
source_url: "https://www.instagram.com/p/DaYKQ7-E6KB/"
published_at: "2026-07-04T16:23:07.000Z"
scan_area: "ai-assistant-prompt-injection"
tags: [murphyscan, ai-supply-chain, prompt-injection, copilot, security, production-readiness]
---
# Reel 124 - AI Assistant Context Is an Attack Surface

## Summary
AI coding assistants read context from repositories, issues, PRs, comments, and requirements. If those inputs can be poisoned, the assistant itself becomes an attack vector. The reel uses an AI-assistant remote-code-execution incident to reinforce that external context belongs in the security threat model.

## Verification Checklist
- Check whether AI tools read untrusted PR descriptions, issues, docs, or comments during development.
- Verify agent and assistant permissions are scoped and reviewed before they run code or modify files.
- Treat copied requirements, prompts, and repo context as potential prompt-injection surfaces.
- Confirm patched tool versions and security advisories are reviewed for AI development tools.

## Skill Signal
Use this as an AI-assistant prompt-injection scan for poisoned context and tool-permission boundaries.
