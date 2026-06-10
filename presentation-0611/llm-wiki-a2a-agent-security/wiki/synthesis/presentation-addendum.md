---
title: Presentation Addendum
tags:
  - presentation-0611
  - slide-notes
  - a2a
---

# Presentation Addendum

## 보강 슬라이드 후보 1: A2A의 보안 공격면

논문 근거: [A2ASecBench](../sources/a2asecbench.md), [Agent protocol threat modeling](../sources/agent-protocol-threat-modeling.md)

| A2A 구성요소 | 왜 위험한가 | 발표식 표현 |
| --- | --- | --- |
| AgentCard | identity와 capability를 self-declare한다 | “AgentCard는 신뢰의 입구다” |
| Capability discovery | 악성 peer가 정상 peer처럼 보일 수 있다 | “무엇을 할 수 있는가보다 누구인가가 먼저다” |
| Task lifecycle | input-required, working 같은 상태가 resource exhaustion에 쓰일 수 있다 | “workflow state도 공격면이다” |
| Artifact | markdown/html/script 등 산출물이 다음 agent나 브라우저에서 실행될 수 있다 | “결과물도 메시지이자 payload다” |

## 보강 슬라이드 후보 2: Skill 이후에도 보안 문제는 사라지지 않는다

논문 근거: [Skill-Inject](../sources/skill-inject.md), [Skill supply-chain poisoning](../sources/skill-supply-chain-poisoning.md), [Malicious agent skills](../sources/malicious-agent-skills.md)

| 장점 | 새 위험 |
| --- | --- |
| 전문 기능을 내 agent 환경 안으로 가져온다 | skill file 자체가 persistent instruction이 된다 |
| tool/API 사용법을 재사용 가능하게 만든다 | 코드 예시와 설정 템플릿이 action-space payload가 될 수 있다 |
| A2A보다 데이터 경계를 내가 통제하기 쉽다 | skill marketplace와 GitHub repo provenance가 중요해진다 |

## 보강 슬라이드 후보 3: 로컬 에이전트가 A2A peer가 될 때

논문 근거: [OpenClaw security analysis](../sources/openclaw-security-analysis.md), [ClawWorm](../sources/clawworm.md), [OpenClaw FASA](../sources/openclaw-threats-fasa.md)

핵심 그림 설명:

1. 외부 A2A peer가 AgentCard와 artifact를 보낸다.
2. 내 로컬 agent가 그것을 user-like instruction이나 trusted artifact로 받아들인다.
3. 로컬 agent는 shell, filesystem, browser, messaging channel에 접근할 수 있다.
4. 따라서 A2A message가 직접 명령은 아니어도 실행 환경을 간접적으로 흔들 수 있다.

짧은 결론:

> A2A는 네트워크 프로토콜이고, 로컬 agent는 실행 principal이다. 둘이 만나면 보안 경계는 네트워크가 아니라 내 컴퓨터까지 내려온다.

## 보강 슬라이드 후보 4: 필요한 선언

논문 묶음에서 역으로 도출되는 A2A agent declaration:

- 나는 누구를 대리하는가.
- 내 AgentCard는 어떻게 서명되고 검증되는가.
- capability는 선언뿐 아니라 어떻게 attest되는가.
- token은 얼마나 짧고 얼마나 좁은 scope인가.
- artifact는 누가 sanitize하고 어디에서 render되는가.
- 내 skill과 tool은 어떤 provenance와 permission을 갖는가.
- 어떤 action은 human approval을 요구하는가.
- 로그는 나중에 누가 검증할 수 있는가.

