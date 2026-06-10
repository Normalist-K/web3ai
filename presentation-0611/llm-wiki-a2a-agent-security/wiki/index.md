# Index

## Overview

이 wiki는 A2A, 로컬 에이전트, skill/MCP 생태계가 만날 때 생기는 보안 문제를 발표 보강자료로 정리한다.

핵심 synthesis:

- [A2A Agent Security Literature Map](synthesis/a2a-agent-security-literature-map.md): 문헌 묶음 전체의 주장 지도.
- [Presentation Addendum](synthesis/presentation-addendum.md): 발표 슬라이드에 붙일 수 있는 짧은 보강 문장과 표.

## Scoring

아래 점수는 0-100점 척도다. `Importance`는 보안 논점 자체의 중심성, `Presentation Relevance`는 이번 발표의 "A2A에 무엇을 publish할 것인가" 논지와 얼마나 직접적으로 연결되는지를 뜻한다.

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## Source Pages

| Rank | Source | Importance | Presentation Relevance | Priority | Why it matters |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | [A2ASecBench](sources/a2asecbench.md) | 100 | 100 | 100 | A2A 프로토콜 생명주기 전반의 공격을 직접 다루므로 발표의 기준축으로 쓰기 가장 좋다. |
| 2 | [Security Threat Modeling for Emerging AI-Agent Protocols](sources/agent-protocol-threat-modeling.md) | 95 | 98 | 97 | MCP, A2A, Agora, ANP를 같은 threat-modeling 프레임으로 묶어 protocol publication 경계를 설명하기 좋다. |
| 3 | [A Security Analysis of the OpenClaw AI Agent Framework](sources/openclaw-security-analysis.md) | 94 | 93 | 93 | 실제 에이전트 프레임워크 advisory를 기반으로 local agent, skill, runtime 경계를 분해한다. |
| 4 | [Skill-Inject](sources/skill-inject.md) | 90 | 89 | 89 | Claude Code, Gemini CLI, Codex CLI류 skill file injection을 다뤄 local capability publishing 리스크와 바로 연결된다. |
| 5 | [ClawWorm](sources/clawworm.md) | 88 | 87 | 87 | agent ecosystem에서 신뢰된 skill/capability가 전파 채널이 될 수 있음을 강하게 보여준다. |
| 6 | [Uncovering Security Threats and Architecting Defenses in Autonomous Agents](sources/openclaw-threats-fasa.md) | 86 | 84 | 85 | FASA/ClawGuard 방어 구조가 protocol defense와 runtime guard를 잇는 보조 근거가 된다. |
| 7 | [Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems](sources/skill-supply-chain-poisoning.md) | 84 | 82 | 83 | skill supply-chain poisoning을 통해 publish 대상이 code보다 capability bundle에 가깝다는 논지를 보강한다. |
| 8 | [Do Not Mention This to the User](sources/malicious-agent-skills.md) | 82 | 78 | 80 | 실제 skill registry의 악성 사례를 보여줘 추상 위협을 운영 리스크로 낮춰준다. |
| 9 | [CaMeLs Can Use Computers Too](sources/camels-cua-security.md) | 80 | 76 | 78 | trusted planning과 untrusted observation 분리가 local execution principal 설명에 도움을 준다. |
| 10 | [AgentSentinel](sources/agentsentinel.md) | 76 | 74 | 75 | 민감 작업 감시와 승인 모델을 runtime guard 사례로 활용할 수 있다. |
| 11 | [RedTeamCUA](sources/redteamcua.md) | 73 | 72 | 72 | CUA indirect prompt injection 평가셋으로 후반부 실험/검증 문맥에 적합하다. |

## Concept Pages

| Rank | Concept | Importance | Presentation Relevance | Priority | Why it matters |
| --- | --- | ---: | ---: | ---: | --- |
| 1 | [A2A as Trust Propagation Channel](concepts/a2a-as-trust-propagation-channel.md) | 100 | 100 | 100 | A2A를 단순 message protocol이 아니라 trust와 capability가 이동하는 채널로 재정의하는 핵심 주장이다. |
| 2 | [Local Agent as Execution Principal](concepts/local-agent-as-execution-principal.md) | 96 | 97 | 97 | 최종 위험은 remote peer가 아니라 local agent 권한에서 실행되므로 발표의 보안 경계를 잡는 중심 개념이다. |
| 3 | [Protocol-Level Defenses](concepts/protocol-level-defenses.md) | 94 | 96 | 95 | signed cards, scoped tokens, policy negotiation처럼 publish 단계에서 걸 수 있는 방어를 정리한다. |
| 4 | [Skill Supply Chain](concepts/skill-supply-chain.md) | 90 | 88 | 89 | skill/MCP가 A2A peer와 만날 때 생기는 supply-chain surface를 설명한다. |
| 5 | [Computer-Use Agent Threat Model](concepts/computer-use-agent-threat-model.md) | 86 | 82 | 84 | 화면/브라우저/OS 액션을 수행하는 에이전트 위협 모델로 runtime guard 논지를 받쳐준다. |
