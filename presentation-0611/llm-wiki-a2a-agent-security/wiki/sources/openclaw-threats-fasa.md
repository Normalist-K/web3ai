---
title: Uncovering Security Threats and Architecting Defenses in Autonomous Agents: A Case Study of OpenClaw
authors: Zonghao Ying, Xiao Yang, Siyang Wu, Yumeng Song, Yang Qu, Hainan Li, Tianlin Li, Jiakai Wang, Aishan Liu, Xianglong Liu
year: 2026
source_type: arxiv
tags:
  - openclaw
  - fasa
  - clawguard
  - zero-trust
source_url: https://arxiv.org/abs/2603.12644
---

# OpenClaw Threats and FASA

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 86 |
| Presentation Relevance | 84 |
| Priority | 85 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

OpenClaw의 prompt injection-driven RCE, sequential tool attack chain, context amnesia, supply-chain contamination을 tri-layer risk taxonomy로 정리하고 FASA라는 zero-trust agentic execution 방어 구조를 제안한다.

## 발표에 쓸 포인트

- autonomous agent 보안은 AI cognitive layer, software execution layer, information system layer를 함께 봐야 한다.
- 전통적인 content filtering은 OS-level 권한을 가진 agent에는 부족하다.
- multi-agent 환경에서는 Agent-to-Agent protocol inspection과 memory pollution 방어가 필요하다.

## 핵심 내용

논문은 OpenClaw를 self-hosted autonomous agent framework로 보고, 다음 위험을 강조한다.

- prompt injection 기반 remote code execution.
- 순차적 tool attack chain.
- context amnesia와 memory pollution.
- supply-chain contamination.

방어로는 FASA, 즉 Full-Lifecycle Agent Security Architecture를 제안한다. 주요 원리는 zero-trust agentic execution, dynamic intent verification, reasoning-action correlation이다. Project ClawGuard는 이 방향을 구현하려는 엔지니어링 initiative로 소개된다.

## 이 발표와의 연결

발표에서 “A2A agent declaration”에 포함해야 할 항목을 보강한다. 단순히 capability를 공개하는 것이 아니라, 어떤 context를 신뢰하고 어떤 action에 승인을 요구하며 어떤 로그를 남기는지 선언해야 한다.

## 주의할 점

- FASA/ClawGuard는 이 논문 기준으로 blueprint와 ongoing project 성격이 강하다.
- 구체적 성능 평가보다는 방어 아키텍처의 어휘를 빌려오는 자료로 쓰는 것이 적절하다.

## 연결된 개념

- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)
- [Protocol-Level Defenses](../concepts/protocol-level-defenses.md)
