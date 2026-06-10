---
title: Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems
authors: Yubin Qu, Yi Liu, Tongcheng Geng, Gelei Deng, Yuekang Li, Leo Yu Zhang, Ying Zhang, Lei Ma
year: 2026
source_type: arxiv
tags:
  - skills
  - supply-chain
  - codex
  - claude-code
  - gemini-cli
source_pdf: ../../raw/papers/2604.03081-skill-supply-chain-poisoning.pdf
source_text: ../../raw/text/2604.03081-skill-supply-chain-poisoning.txt
source_url: https://arxiv.org/abs/2604.03081
---

# Supply-Chain Poisoning Against LLM Coding Agent Skills

## 한 줄 요약

악성 지시를 직접 쓰지 않고, skill 문서의 코드 예시와 설정 템플릿 안에 payload logic을 숨기는 DDIPE 방식으로 coding agent의 action space를 오염시킬 수 있음을 보인다.

## 발표에 쓸 포인트

- coding agent는 skill 문서의 예시를 “좋은 구현 패턴”으로 재사용한다.
- 그래서 명시적 악성 명령보다 문서 기반 implicit payload가 더 위험할 수 있다.
- Codex의 sandbox, Claude Code의 review, Gemini CLI의 safety filtering처럼 방어가 있어도 skill semantic auditing이 필요하다.

## 핵심 내용

논문은 Document-Driven Implicit Payload Execution, DDIPE를 제안한다. 악성 payload를 imperative instruction으로 쓰는 대신, 정상적인 code example, configuration template, DevOps snippet처럼 보이게 넣는다.

평가:

- 81 seed에서 1,070 adversarial skills를 생성한다.
- 15개 MITRE ATT&CK category를 포괄한다.
- Claude Code, OpenHands, Codex, Gemini CLI 및 여러 model을 평가한다.
- 가장 강한 방어에서도 direct execution이 완전히 사라지지 않는다고 보고한다.

## 이 발표와의 연결

발표의 skill/MCP 파트에서 “내 환경 안으로 가져오면 안전하다”라고 단순화하면 안 된다. skill은 내 agent가 실행할 수 있는 operational directive가 되므로, provenance, permission, semantic review가 필요하다.

## 주의할 점

- 일부 사례는 controlled setup에서 활성화된 skill을 전제로 한다.
- 구체적 payload 내용보다 “문서와 실행 지시의 경계 붕괴”를 중심으로 인용하는 편이 좋다.

## 연결된 개념

- [Skill Supply Chain](../concepts/skill-supply-chain.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)

