# Index

## Overview

이 wiki는 A2A, 로컬 에이전트, skill/MCP 생태계가 만날 때 생기는 보안 문제를 발표 보강자료로 정리한다.

핵심 synthesis:

- [A2A Agent Security Literature Map](synthesis/a2a-agent-security-literature-map.md): 문헌 묶음 전체의 주장 지도.
- [Presentation Addendum](synthesis/presentation-addendum.md): 발표 슬라이드에 붙일 수 있는 짧은 보강 문장과 표.

## Source Pages

- [A2ASecBench](sources/a2asecbench.md): A2A 프로토콜 생명주기 전반의 여섯 공격과 benchmark.
- [A Security Analysis of the OpenClaw AI Agent Framework](sources/openclaw-security-analysis.md): OpenClaw 470개 advisory를 기반으로 한 신뢰 경계 taxonomy.
- [ClawWorm](sources/clawworm.md): OpenClaw류 에이전트 생태계에서 자기복제형 worm 가능성을 보인 논문.
- [Uncovering Security Threats and Architecting Defenses in Autonomous Agents](sources/openclaw-threats-fasa.md): OpenClaw 위협과 FASA/ClawGuard 방어 아키텍처.
- [Security Threat Modeling for Emerging AI-Agent Protocols](sources/agent-protocol-threat-modeling.md): MCP, A2A, Agora, ANP의 프로토콜 수준 threat modeling.
- [Skill-Inject](sources/skill-inject.md): Claude Code, Gemini CLI, Codex CLI 계열 agent skill file injection benchmark.
- [Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems](sources/skill-supply-chain-poisoning.md): DDIPE와 coding agent skill supply-chain poisoning.
- [Do Not Mention This to the User](sources/malicious-agent-skills.md): 실제 skill registry에서 발견된 악성 agent skill 실증 연구.
- [CaMeLs Can Use Computers Too](sources/camels-cua-security.md): computer-use agent에서 trusted planning과 untrusted observation을 분리하는 방어 모델.
- [AgentSentinel](sources/agentsentinel.md): CUA의 민감 작업을 실시간으로 가로채고 감사하는 방어 프레임워크.
- [RedTeamCUA](sources/redteamcua.md): hybrid web-OS 환경에서 CUA indirect prompt injection을 평가하는 benchmark.

## Concept Pages

- [A2A as Trust Propagation Channel](concepts/a2a-as-trust-propagation-channel.md)
- [Local Agent as Execution Principal](concepts/local-agent-as-execution-principal.md)
- [Skill Supply Chain](concepts/skill-supply-chain.md)
- [Protocol-Level Defenses](concepts/protocol-level-defenses.md)
- [Computer-Use Agent Threat Model](concepts/computer-use-agent-threat-model.md)

