---
title: AgentSentinel: An End-to-End and Real-Time Security Defense Framework for Computer-Use Agents
authors: Haitao Hu, Peng Chen, Yanpeng Zhao, Yuqi Chen
year: 2025
source_type: arxiv
tags:
  - computer-use-agent
  - runtime-monitoring
  - defense
source_pdf: ../../raw/papers/2509.07764-agentsentinel.pdf
source_text: ../../raw/text/2509.07764-agentsentinel.txt
source_url: https://arxiv.org/abs/2509.07764
---

# AgentSentinel

## 한 줄 요약

computer-use agent의 민감한 OS-level operation을 실시간으로 추적, 중단, 감사한 뒤 resume 또는 terminate하는 방어 framework다.

## 발표에 쓸 포인트

- CUA 방어는 agent 답변을 검사하는 것만으로 부족하고 side effect를 봐야 한다.
- AgentSentinel은 process, file, network 등 민감 operation을 tracing하고 audit한다.
- BadComputerUse benchmark에서 공격 ASR 87%를 보고하고, AgentSentinel은 평균 defense success rate 79.6%를 달성한다.

## 핵심 내용

AgentSentinel은 client-server 구조로 agent service에 붙는다. 민감 operation이 감지되면 해당 process를 일시 중단하고, rule-based auditor와 LLM-based auditor가 task context 및 system trace를 함께 검토한다. 안전하면 resume하고, 위험하면 terminate한다.

성능과 usability를 위해 security query cache와 QPS optimizer를 둔다.

## 이 발표와의 연결

발표에서 “외부 세계와 통신하는 agent는 실행 책임과 감사 로그가 필요하다”는 부분을 보강한다. A2A agent가 상대 agent나 사용자 대신 action을 수행한다면, action 전후의 side effect를 기록하고 민감 action을 차단할 수 있어야 한다.

## 주의할 점

- AgentSentinel은 CUA runtime defense이며 A2A protocol defense는 아니다.
- false positive와 latency trade-off가 있다.

## 연결된 개념

- [Computer-Use Agent Threat Model](../concepts/computer-use-agent-threat-model.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)

