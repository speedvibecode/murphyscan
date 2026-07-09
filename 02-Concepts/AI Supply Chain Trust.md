---
concept: "ai-supply-chain-trust"
tags: [murphyscan, concept, ai, supply-chain, prompts, skills]
layers: ["07 CI-CD and Version Control", "08 Security and RLS"]
source_reels: [reel-73, reel-103, reel-113, reel-123, reel-124]
---
# AI Supply Chain Trust

## Related Layers
- [[07 CI-CD and Version Control]]
- [[08 Security and RLS]]

## Source Reels
- [[reel-73]] - every package is trusted third-party code with real blast radius.
- [[reel-103]] - prompts, downloaded skill files, and community resources are now part of the supply chain too.
- [[reel-113]] - AI-generated code needs review and production evidence before it becomes trusted code.
- [[reel-123]] - AI-generated code needs security audits and operational proof on every build.
- [[reel-124]] - AI assistants that read PRs, issues, docs, or comments can become prompt-injection attack surfaces.

## Why It Matters
AI-assisted development widens the trust surface beyond libraries and build tools. Shared prompts, copied system instructions, and downloaded skill files can influence code, secrets, and production behavior even when they never pass through a package manager.

## Verification Questions
- Are external prompts, skill files, and copied agent instructions reviewed before they influence production work?
- Is unvetted AI guidance isolated from production credentials and deploy paths?
- Are third-party dependencies, AI instructions, and reusable automation artifacts treated with separate trust tiers?
- Is there a rotation and incident path if a previously used external AI resource is later found compromised?
- Does generated code in security-sensitive paths receive explicit human or high-signal automated review?
- Are AI assistant inputs from PR descriptions, issues, comments, or docs treated as untrusted context?
- Are AI development tools patched and permission-scoped before they can execute code or touch secrets?

## Agent Notes
For MurphyScan, AI supply-chain trust is a real control family, not a thought experiment.
