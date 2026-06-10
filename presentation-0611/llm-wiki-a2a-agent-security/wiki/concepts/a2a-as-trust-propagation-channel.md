---
title: A2A as Trust Propagation Channel
tags:
  - a2a
  - trust
  - protocol-security
sources:
  - ../sources/a2asecbench.md
  - ../sources/agent-protocol-threat-modeling.md
  - ../sources/clawworm.md
---

# A2A as Trust Propagation Channel

## 정의

A2A는 agent 사이의 request/response 채널일 뿐 아니라 identity, capability, task state, artifact, provenance에 대한 trust claim을 전파하는 채널이다.

## 왜 중요한가

agent는 보통 opaque backend를 가진다. 상대 agent가 AgentCard에 capability를 적었다고 해서 실제 행동이 그 선언과 일치한다는 보장은 없다. 따라서 A2A에서는 “무엇을 할 수 있다”보다 “누구이고, 무엇을 위임받았고, 그 capability를 어떻게 증명하는가”가 먼저다.

## 관련 논문

- [A2ASecBench](../sources/a2asecbench.md): AgentCard Spoofing, Capability Cloaking, Artifact-Triggered Script Injection을 구체화한다.
- [Agent protocol threat modeling](../sources/agent-protocol-threat-modeling.md): A2A의 OAuth2/JWT가 위험을 줄이지만 semantic validation, token lifetime, global identity 문제는 남는다고 본다.
- [ClawWorm](../sources/clawworm.md): agent-to-agent style messaging이 persistent instruction propagation channel이 될 수 있음을 보여준다.

## 발표에서 쓸 문장

“A2A는 메시지를 전달하는 프로토콜이 아니라, 누가 누구를 대리한다는 신뢰 주장을 전달하는 프로토콜이다.”

