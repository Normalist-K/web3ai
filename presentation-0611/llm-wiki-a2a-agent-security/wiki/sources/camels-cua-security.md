---
title: CaMeLs Can Use Computers Too: System-level Security for Computer Use Agents
authors: Hanna Foerster, Tom Blanchard, Kristina Nikolić, Ilia Shumailov, Cheng Zhang, Robert Mullins, Nicolas Papernot, Florian Tramèr, Yiren Zhao
year: 2026
source_type: arxiv
tags:
  - computer-use-agent
  - prompt-injection
  - dual-llm
  - nova
source_url: https://arxiv.org/abs/2601.09923
---

# CaMeLs Can Use Computers Too

## 한 줄 요약

computer-use agent에서 trusted planner와 untrusted observation을 분리하고, single-shot branching plan으로 control-flow integrity를 보장하려는 system-level defense를 제시한다.

## 발표에 쓸 포인트

- GUI/OS 환경에서는 agent가 매 순간 화면을 봐야 하므로, untrusted observation이 planning을 오염시키기 쉽다.
- CaMeL-NOVA는 trusted planner가 사전에 branching plan을 만들고, untrusted perception model은 값/좌표 같은 runtime observation만 처리하게 한다.
- 이는 prompt-level defense가 아니라 control-flow architecture다.
- 하지만 Branch Steering이라는 residual risk가 남는다.

## 핵심 내용

논문은 CUA를 위해 Dual-LLM architecture를 조정한다.

- Privileged Planner: untrusted screen content를 보기 전에 complete branching plan을 만든다.
- Quarantined Perception: UI 좌표나 state value를 읽지만 control flow를 정하지 않는다.
- NOVA: Observe, Verify, Act 방식으로 single-shot planning의 utility를 높인다.

OSWorld 평가에서 secure planning 구조가 frontier model 성능의 일부를 유지하고, 일부 작은 open-source model에서는 성능을 개선한다고 보고한다. 동시에 Branch Steering 공격을 새 residual risk로 제시한다.

## 이 발표와의 연결

A2A agent가 실제 웹과 OS를 조작할 수 있다면, “instruction을 잘 구분하자”보다 더 강한 구조가 필요하다. 발표의 agent declaration에는 어떤 action을 agent가 자율 실행할 수 있는지, 어떤 observation은 untrusted로 격리되는지가 포함되어야 한다.

## 주의할 점

- CUA 방어 논문이지 A2A 논문은 아니다.
- 발표에서는 “A2A가 외부 세계와 만나면 결국 computer-use security 문제가 따라온다”는 보강 자료로 쓰면 좋다.

## 연결된 개념

- [Computer-Use Agent Threat Model](../concepts/computer-use-agent-threat-model.md)
- [Protocol-Level Defenses](../concepts/protocol-level-defenses.md)

