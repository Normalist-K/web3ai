---
title: A2ASecBench: A Protocol-Aware Security Benchmark for Agent-to-Agent Multi-Agent Systems
authors: Tianhao Li, Chuangxin Chu, Yujia Zheng, Bohan Zhang, Neil Zhenqiang Gong, Chaowei Xiao
year: 2026
source_type: paper
tags:
  - a2a
  - protocol-security
  - benchmark
source_url: https://openreview.net/forum?id=LfdFnakqGJ
---

# A2ASecBench

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 100 |
| Presentation Relevance | 100 |
| Priority | 100 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

A2A 기반 multi-agent system을 AgentCard, capability discovery, task lifecycle, artifact exchange 전반에서 공격 가능한 프로토콜 보안 대상으로 모델링하고, 여섯 가지 공격 benchmark를 제시한다.

## 발표에 쓸 포인트

- A2A의 위험은 prompt injection 하나가 아니라 protocol semantics 전체에 걸쳐 있다.
- AgentCard Spoofing과 Capability Cloaking은 “누가 누구를 대리하는가”라는 발표 질문과 직접 연결된다.
- Artifact-Triggered Script Injection은 agent output이 다음 실행 환경에서 payload가 될 수 있음을 보여준다.
- 논문은 방어를 prompt hardening, application gateway, secure A2A profile의 세 층으로 본다.

## 핵심 내용

논문은 A2A 공격을 두 묶음으로 나눈다.

- Supply-chain manipulations: AgentCard Spoofing, Capability Cloaking.
- Protocol-logic weaknesses: Cycle Overflow, Half-Open Task Flooding, Agent-Side Request Forgery, Artifact-Triggered Script Injection.

실험은 travel, healthcare, finance 같은 high-stakes domain의 공식 A2A demo를 대상으로 한다. 여러 공격이 높은 성공률을 보였고, NVIDIA NeMo Guardrails 같은 일반 guardrail도 multi-agent state transition이나 protocol semantics를 충분히 이해하지 못해 제한적인 방어만 제공한다고 본다.

## 이 발표와의 연결

이 논문은 “A2A에 publish하는 것은 기능이 아니라 대리 행위자를 내보내는 일”이라는 발표의 보안 근거다. 특히 A2A peer를 고를 때 capability만 보면 안 되고, identity, provenance, declared capability와 actual behavior의 일치성을 검증해야 한다.

## 주의할 점

- 논문은 A2A 자체와 유사 MAS 구조를 다루며, Codex/Claude Code/OpenClaw를 A2A로 직접 연결한 end-to-end 실험은 아니다.
- 그러나 agent discovery, task lifecycle, artifact라는 A2A 핵심 구성요소의 공격면을 체계화한 자료로 발표 보강에 가장 직접적이다.

## 연결된 개념

- [A2A as Trust Propagation Channel](../concepts/a2a-as-trust-propagation-channel.md)
- [Protocol-Level Defenses](../concepts/protocol-level-defenses.md)
