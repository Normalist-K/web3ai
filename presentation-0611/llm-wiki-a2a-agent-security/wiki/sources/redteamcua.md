---
title: RedTeamCUA: Realistic Adversarial Testing of Computer-Use Agents in Hybrid Web-OS Environments
authors: Zeyi Liao, Jaylen Jones, Linxi Jiang, Eric Fosler-Lussier, Yu Su, Zhiqiang Lin, Huan Sun
year: 2025
source_type: arxiv
tags:
  - computer-use-agent
  - red-teaming
  - indirect-prompt-injection
source_url: https://arxiv.org/abs/2505.21936
---

# RedTeamCUA

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 73 |
| Presentation Relevance | 72 |
| Priority | 72 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

web과 OS가 결합된 현실적 CUA 환경에서 indirect prompt injection을 평가하기 위한 hybrid sandbox와 RTC-Bench를 제안한다.

## 발표에 쓸 포인트

- CUA 공격은 웹페이지 안의 지시와 OS-level action이 이어질 때 현실화된다.
- benchmark는 864개 예시와 hybrid web-OS attack pathway를 포함한다.
- Operator 같은 built-in safety mechanism이 있는 시스템도 non-zero ASR을 보인다.
- Attempt Rate가 ASR보다 높다는 점은 agent가 “시도는 했지만 능력 부족으로 실패”하는 경우가 많다는 뜻이다.

## 핵심 내용

RedTeamCUA는 VM-based OS sandbox와 Docker-based web platform을 결합한다. 목표는 단순 웹 injection이 아니라 hybrid web-OS scenario에서 agent가 실제로 민감 action을 시도하거나 완료하는지 평가하는 것이다.

논문은 ASR과 함께 Attempt Rate를 사용한다. 이는 harmful goal을 완료하지 못했더라도 agent가 그 방향으로 행동했는지를 포착한다.

## 이 발표와의 연결

발표에서 A2A agent가 “외부 세계와 상호작용한다”는 말은 웹과 OS를 넘나드는 action을 포함할 수 있다. 따라서 A2A의 신뢰 문제는 protocol 수준에서 끝나지 않고 실제 action environment 평가와 결합되어야 한다.

## 주의할 점

- CUA red-team 논문이며 A2A 논문은 아니다.
- 발표에서는 수치보다 “hybrid web-OS 환경의 indirect prompt injection”이라는 문제 형태를 설명하는 데 쓰면 좋다.

## 연결된 개념

- [Computer-Use Agent Threat Model](../concepts/computer-use-agent-threat-model.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)
