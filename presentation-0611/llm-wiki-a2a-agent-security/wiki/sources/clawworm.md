---
title: ClawWorm: Self-Propagating Attacks Across LLM Agent Ecosystems
authors: Yihao Zhang, Zeming Wei, Xiaokun Luan, Chengcan Wu, Zhixin Zhang, Jiangrong Wu, Haolin Wu, Huanran Chen, Jun Sun, Meng Sun
year: 2026
source_type: arxiv
tags:
  - openclaw
  - worm
  - propagation
  - skills
source_pdf: ../../raw/papers/2603.15727-clawworm.pdf
source_text: ../../raw/text/2603.15727-clawworm.txt
source_url: https://arxiv.org/abs/2603.15727
---

# ClawWorm

## 한 줄 요약

OpenClaw류 persistent configuration, tool execution, messaging channel, skill marketplace가 결합되면 단일 메시지에서 시작한 오염이 multi-hop으로 전파될 수 있음을 보인다.

## 발표에 쓸 포인트

- 에이전트 간 메시징은 단순 대화가 아니라 instruction propagation channel이 될 수 있다.
- skill supply chain vector가 특히 강하다.
- context privilege isolation, configuration integrity verification, skill marketplace vetting이 필요하다.
- A2A network에 로컬 personal agent가 붙으면 payload propagation과 local execution이 결합될 수 있다는 위험 모델을 설명하는 데 좋다.

## 핵심 내용

논문은 OpenClaw 생태계에서 ClawWorm이라는 self-replicating attack을 설계하고 controlled testbed에서 평가한다. 공격은 persistence, payload execution, propagation으로 구성된다. 논문은 세 가지 infection vector를 다룬다.

- Web injection.
- Skill supply-chain poisoning.
- Direct instruction replication.

평가에서는 4개 LLM backend, 3개 vector, 3개 payload type을 조합한 1,800 trial을 수행했고 aggregate attack success rate 64.5%를 보고한다. multi-hop propagation도 최대 5 hop까지 평가한다.

## 이 발표와의 연결

발표에서 A2A를 “신뢰 전파 채널”로 설명할 때, ClawWorm은 왜 전파 채널과 local execution 권한을 함께 봐야 하는지 보여준다. A2A가 아니더라도 agent-to-agent messaging이 local agent configuration과 skill을 오염시키면 실행 권한으로 이어질 수 있다.

## 주의할 점

- 논문은 responsible disclosure 맥락에서 공격을 설명하지만, 발표에서는 공격 절차보다 구조적 원인과 방어 요구사항을 중심으로 다루는 편이 좋다.
- 실제 공용 network에서의 전파 속도와 성공률은 환경별로 다를 수 있다.

## 연결된 개념

- [A2A as Trust Propagation Channel](../concepts/a2a-as-trust-propagation-channel.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)
- [Skill Supply Chain](../concepts/skill-supply-chain.md)

