---
title: A Security Analysis of the OpenClaw AI Agent Framework
authors: Surada Suwansathit, Yuxuan Zhang, Guofei Gu
year: 2026
source_type: arxiv
tags:
  - openclaw
  - local-agents
  - trust-boundary
  - rce
source_url: https://arxiv.org/abs/2603.27517
---

# A Security Analysis of the OpenClaw AI Agent Framework

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 94 |
| Presentation Relevance | 93 |
| Priority | 93 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

OpenClaw 470개 security advisory를 architectural layer와 trust-violation type으로 분류해, 로컬 agent runtime의 핵심 문제가 분산된 신뢰 판단과 cross-layer composition임을 보인다.

## 발표에 쓸 포인트

- 로컬 agent는 LLM tool call을 shell, filesystem, browser, container, messaging으로 연결한다.
- 취약점은 한 layer의 버그보다 여러 layer의 신뢰 가정이 결합될 때 커진다.
- skill은 operator-trusted instruction으로 context에 들어가기 때문에 코드 공급망과 비슷한 보안 문제가 생긴다.
- 방어의 핵심은 “각 layer가 알아서 조심”이 아니라 component boundary를 가로지르는 unified policy boundary다.

## 핵심 내용

논문은 OpenClaw 취약점을 다음 축으로 본다.

- System axis: channel, gateway, plugin/skill, agent runtime, memory, LLM provider, local execution 등.
- Attack axis: identity spoofing, policy bypass, cross-layer composition, prompt injection, supply-chain trust escalation 등.

주요 findings:

- Gateway와 Node-Host subsystem의 advisory들이 결합되어 LLM tool call에서 host process까지 이어지는 unauthenticated RCE path가 가능해진다.
- exec allowlist가 shell command identity를 lexical parsing으로 회수할 수 있다는 닫힌 세계 가정을 두고 있어 우회 가능하다.
- malicious skill은 LLM context 안에서 operator-trusted instruction으로 실행되어 runtime policy 밖 공격면이 된다.

## 이 발표와의 연결

A2A agent가 로컬 OpenClaw/Codex/Claude Code류 실행 환경과 연결되면, 원격 메시지는 단순 텍스트가 아니라 local execution principal의 판단과 action에 영향을 줄 수 있다. 발표에서는 “로컬 agent를 A2A에 붙이는 순간 trust boundary가 내 컴퓨터까지 내려온다”는 근거로 쓸 수 있다.

## 주의할 점

- 논문은 OpenClaw 특정 advisory corpus에 기반한다.
- 발표에서는 OpenClaw 고유 구현 버그가 아니라 “로컬 agent runtime의 구조적 위험”을 강조하는 편이 안전하다.

## 연결된 개념

- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)
- [Skill Supply Chain](../concepts/skill-supply-chain.md)
- [Protocol-Level Defenses](../concepts/protocol-level-defenses.md)
