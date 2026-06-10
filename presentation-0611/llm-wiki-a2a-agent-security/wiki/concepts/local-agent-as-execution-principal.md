---
title: Local Agent as Execution Principal
tags:
  - local-agent
  - execution
  - security
sources:
  - ../sources/openclaw-security-analysis.md
  - ../sources/clawworm.md
  - ../sources/agentsentinel.md
---

# Local Agent as Execution Principal

## 정의

로컬 에이전트는 단순 assistant가 아니라 사용자의 파일, shell, browser, messaging channel, credential-adjacent surface에 action을 수행할 수 있는 실행 주체다.

## 왜 중요한가

A2A 메시지가 직접 명령어가 아니더라도, 로컬 에이전트가 그것을 trusted context로 해석하면 local side effect가 생길 수 있다. 따라서 보안 경계는 LLM prompt가 아니라 실행 권한과 side effect까지 내려가야 한다.

## 관련 논문

- [OpenClaw security analysis](../sources/openclaw-security-analysis.md): LLM tool call에서 host process까지 이어지는 cross-layer trust collapse를 분석한다.
- [ClawWorm](../sources/clawworm.md): persistent configuration과 messaging channel이 결합될 때 propagation이 가능함을 보인다.
- [AgentSentinel](../sources/agentsentinel.md): 민감 operation을 runtime에서 가로채는 방어를 제안한다.

## 발표에서 쓸 문장

“로컬 에이전트가 A2A peer가 되면, 원격 메시지는 내 컴퓨터의 실행 권한과 간접적으로 연결된다.”

