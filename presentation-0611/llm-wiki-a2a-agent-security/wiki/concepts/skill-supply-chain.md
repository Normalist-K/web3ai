---
title: Skill Supply Chain
tags:
  - skills
  - supply-chain
  - codex
  - claude-code
sources:
  - ../sources/skill-inject.md
  - ../sources/skill-supply-chain-poisoning.md
  - ../sources/malicious-agent-skills.md
---

# Skill Supply Chain

## 정의

agent skill은 지식, 절차, 예시 코드, 설정, helper script를 묶어 agent에게 persistent capability를 주는 artifact다. 동시에 code package와 prompt instruction의 성격을 모두 갖는 supply-chain artifact다.

## 왜 중요한가

skill은 내 agent 환경 안으로 전문성을 가져오는 좋은 방식이다. 하지만 agent가 skill 문서를 신뢰하고 action으로 변환하면, 악성 skill은 local file write, shell command, network request 같은 action-space 공격으로 이어질 수 있다.

## 관련 논문

- [Skill-Inject](../sources/skill-inject.md): skill file injection benchmark.
- [Skill supply-chain poisoning](../sources/skill-supply-chain-poisoning.md): code example과 configuration template에 악성 logic을 숨기는 DDIPE.
- [Malicious agent skills](../sources/malicious-agent-skills.md): 공개 registry에서 confirmed malicious skills를 실증적으로 분석.

## 발표에서 쓸 문장

“Skill은 전문성을 내 환경 안으로 가져오지만, 그 순간 전문성은 supply-chain artifact가 된다.”

