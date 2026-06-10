---
title: Security Threat Modeling for Emerging AI-Agent Protocols
authors: Zeynab Anbiaee, Mahdi Rabbani, Mansur Mirani, Gunjan Piya, Igor Opushnyev, Ali Ghorbani, Sajjad Dadkhah
year: 2026
source_type: arxiv
tags:
  - mcp
  - a2a
  - protocol-security
  - threat-modeling
source_url: https://arxiv.org/abs/2602.11327
---

# Security Threat Modeling for Emerging AI-Agent Protocols

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 95 |
| Presentation Relevance | 98 |
| Priority | 97 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

MCP, A2A, Agora, ANP를 protocol lifecycle 관점에서 비교하며, identity binding, token scope/lifetime, provenance, update/revocation이 agent protocol 보안의 핵심임을 정리한다.

## 발표에 쓸 포인트

- A2A가 OAuth2/JWT를 쓴다고 해서 충분한 보안이 보장되는 것은 아니다.
- A2A에는 AgentCard uniqueness, semantic minimization, token lifetime, artifact integrity 같은 문제가 남는다.
- MCP와 A2A가 연결될 때 “tool provider identity”와 “agent identity”를 분리해서 검증해야 한다.

## 핵심 내용

논문은 네 프로토콜을 creation/configuration, operation, update/maintenance 단계로 나누어 위험을 평가한다. A2A는 OAuth2/JWT가 있어 MCP보다 일부 위험을 줄이지만 다음 약점이 남는다고 본다.

- AgentCard identity가 self-declared이고 global uniqueness가 약할 수 있다.
- transport authentication은 있어도 semantic validation은 별도 문제다.
- token이 long-lived이거나 scope가 넓으면 privilege reuse가 생긴다.
- artifact와 update 검증은 배포 주체의 구현에 의존한다.

논문은 MCP에 대해 wrong-provider tool execution case study를 수행한다. 이는 A2A 논문은 아니지만, “이름과 설명만으로 tool/agent를 선택하면 안 된다”는 발표 메시지에 연결된다.

## 이 발표와의 연결

발표의 MCP와 A2A 구분을 보강한다. MCP는 내 agent가 tool/data provider를 호출하는 구조이고, A2A는 agent끼리 상호작용하는 구조다. 둘 다 identity binding과 provenance가 필요하지만, 실패 지점은 다르다.

## 주의할 점

- 논문의 실험 case study는 MCP 중심이다.
- A2A 관련 내용은 비교 threat modeling과 qualitative risk assessment로 쓰는 것이 적합하다.

## 연결된 개념

- [A2A as Trust Propagation Channel](../concepts/a2a-as-trust-propagation-channel.md)
- [Protocol-Level Defenses](../concepts/protocol-level-defenses.md)
