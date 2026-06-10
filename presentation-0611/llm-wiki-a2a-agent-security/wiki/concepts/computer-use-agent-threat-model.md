---
title: Computer-Use Agent Threat Model
tags:
  - computer-use-agent
  - cua
  - prompt-injection
  - runtime-defense
sources:
  - ../sources/camels-cua-security.md
  - ../sources/agentsentinel.md
  - ../sources/redteamcua.md
---

# Computer-Use Agent Threat Model

## 정의

Computer-use agent threat model은 agent가 화면, browser, file system, process, network를 직접 조작할 때 악성 관찰값과 local side effect가 어떻게 연결되는지를 다룬다.

## 왜 중요한가

A2A agent가 외부 웹, 문서, 메시지, 상대 agent artifact를 보고 작업한다면 indirect prompt injection이 실제 OS action으로 이어질 수 있다. 그러므로 A2A의 신뢰 문제는 network protocol만이 아니라 computer-use runtime security와 연결된다.

## 관련 논문

- [CaMeLs](../sources/camels-cua-security.md): trusted planning과 untrusted observation 분리.
- [AgentSentinel](../sources/agentsentinel.md): 민감 OS operation의 runtime tracing과 audit.
- [RedTeamCUA](../sources/redteamcua.md): hybrid web-OS indirect prompt injection benchmark.

## 발표에서 쓸 문장

“외부 세계와 상호작용하는 agent의 보안 단위는 답변이 아니라 side effect다.”

