---
title: Skill-Inject: Measuring Agent Vulnerability to Skill File Attacks
authors: David Schmotz, Luca Beurer-Kellner, Sahar Abdelnabi, Maksym Andriushchenko
year: 2026
source_type: arxiv
tags:
  - skills
  - codex
  - claude-code
  - gemini-cli
  - prompt-injection
source_url: https://arxiv.org/abs/2602.20156
---

# Skill-Inject

## 한 줄 요약

agent skill file이 전문 기능 확장의 수단이면서 동시에 prompt injection과 harmful action의 공급망 표면이 될 수 있음을 benchmark로 측정한다.

## 발표에 쓸 포인트

- skill은 문서가 아니라 agent runtime에 주입되는 persistent instruction이다.
- Claude Code, Gemini CLI, Codex CLI류 agent가 skill file의 지시를 실제 file write, shell command, exfiltration 같은 action으로 옮길 수 있다.
- 모델 scaling이나 단순 filtering만으로는 해결되지 않고, context-aware authorization이 필요하다는 결론이 발표의 “승인 조건” 주장과 연결된다.

## 핵심 내용

논문은 SkillInject benchmark를 만들고 202개 injection-task pair를 평가한다. 공격은 obvious harmful injection과 contextual injection을 모두 포함한다. 평가 대상은 Claude Code, Gemini CLI, Codex CLI 계열 agent scaffolds와 여러 frontier model이다.

핵심 관찰:

- 일부 조건에서 높은 attack success rate가 나온다.
- warning prompt나 LLM-based screening은 일부 줄일 수 있으나 충분하지 않다.
- 같은 action도 문맥에 따라 legitimate일 수도 harmful일 수도 있어, 단순 keyword filtering으로는 구분이 어렵다.

## 이 발표와의 연결

발표에서 “도메인 전문 기능은 A2A보다 skill로 가져오는 편이 자연스럽다”고 말할 때, 바로 이어서 “하지만 skill은 supply-chain artifact로 검증해야 한다”고 보강해야 한다. Skill-Inject는 그 경고의 직접 근거다.

## 주의할 점

- 논문은 benchmark 설계와 특정 model/agent 조합에 의존한다.
- 발표에서는 수치 하나보다 “skill file이 trusted instruction layer에 들어간다”는 구조적 포인트를 쓰는 편이 좋다.

## 연결된 개념

- [Skill Supply Chain](../concepts/skill-supply-chain.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)

