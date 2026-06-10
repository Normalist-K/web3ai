---
title: Protocol-Level Defenses
tags:
  - defense
  - a2a
  - mcp
  - provenance
sources:
  - ../sources/a2asecbench.md
  - ../sources/agent-protocol-threat-modeling.md
  - ../sources/openclaw-threats-fasa.md
---

# Protocol-Level Defenses

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 94 |
| Presentation Relevance | 96 |
| Priority | 95 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 정의

Protocol-level defense는 system prompt나 model refusal에 기대지 않고, identity, capability, provenance, token scope, artifact handling, lifecycle bounds를 protocol과 runtime에서 강제하는 방어다.

## 왜 중요한가

agent ecosystem에서는 악성 입력이 한 agent의 답변을 오염시키는 데서 끝나지 않는다. task state, artifact, tool call, skill, memory, token이 모두 action으로 이어질 수 있다. 따라서 보안은 agent가 “조심하라”는 문구보다 낮은 수준에서 강제되어야 한다.

## 방어 항목

- Signed and registry-backed AgentCard.
- Capability attestation and runtime behavior checks.
- Short-lived, narrow-scope tokens.
- Artifact sanitization before rendering or execution.
- Per-principal quotas and DAG validation for task lifecycle.
- Provenance-aware context: user, system, internal, inter-agent, external을 구분.
- Skill signing, version pinning, semantic review, permission scope.

## 발표에서 쓸 문장

“A2A 보안은 OAuth/JWT로 끝나지 않는다. identity, capability, artifact, lifecycle, provenance를 함께 묶어야 한다.”
