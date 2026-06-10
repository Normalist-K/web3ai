---
title: A2A Agent Security Literature Map
tags:
  - a2a
  - agent-security
  - local-agents
  - skills
  - presentation-0611
---

# A2A Agent Security Literature Map

## 한 줄 결론

A2A는 에이전트 간 “말”만 이어주는 채널이 아니라 신뢰, 권한, artifact, task lifecycle, 비용과 책임을 함께 전파하는 채널이며, 로컬 에이전트는 실제 컴퓨터 권한을 가진 실행 주체다.

## 발표의 주장과 연결

발표의 중심 문장은 “A2A에 publish하는 것은 기능이 아니라 제한된 권한과 정체성을 가진 대리 행위자를 신뢰 경계 밖으로 내보내는 일”이다. 이 문헌 묶음은 그 주장을 보안 관점에서 보강한다.

- [A2ASecBench](../sources/a2asecbench.md)는 A2A 자체의 공격면을 보여준다. AgentCard, capability, task lifecycle, artifact가 모두 공격 표면이다.
- [OpenClaw security analysis](../sources/openclaw-security-analysis.md), [ClawWorm](../sources/clawworm.md), [OpenClaw FASA](../sources/openclaw-threats-fasa.md)는 로컬 개인형 에이전트가 shell, filesystem, browser, messaging, skill marketplace와 연결될 때 실행 권한의 문제가 된다는 점을 보여준다.
- [Skill-Inject](../sources/skill-inject.md), [Skill supply-chain poisoning](../sources/skill-supply-chain-poisoning.md), [Malicious agent skills](../sources/malicious-agent-skills.md)는 “전문 기능을 skill로 가져오는 방향이 자연스럽다”는 발표 주장에 필요한 단서를 준다. skill은 편리하지만 supply-chain 공격면이 된다.
- [CaMeLs](../sources/camels-cua-security.md), [AgentSentinel](../sources/agentsentinel.md), [RedTeamCUA](../sources/redteamcua.md)는 에이전트가 OS와 웹을 직접 조작할 때, prompt safety가 아니라 system-level security가 필요하다는 점을 보강한다.

## 문헌 지도의 4개 축

### 1. A2A 프로토콜의 공격면

A2A는 capability discovery, AgentCard, task submission/subscription, artifact exchange를 표준화한다. 그래서 공격자는 다음 위치를 노린다.

- 발견 단계: AgentCard Spoofing, Capability Cloaking.
- 실행 단계: Cycle Overflow, Half-Open Task Flooding.
- 권한 경계 단계: Agent-Side Request Forgery.
- 산출물 단계: Artifact-Triggered Script Injection.

발표 문장으로 바꾸면: “A2A에서 agent card는 단순 소개 페이지가 아니라 신뢰 경계의 입구다.”

### 2. 로컬 에이전트는 실행 권한을 가진 principal

OpenClaw류 개인 에이전트는 LLM reasoning을 shell, filesystem, browser, Docker, messaging channel에 연결한다. 이때 LLM tool call은 host process까지 이어지는 제어 신호가 된다.

중요한 함의:

- 로컬 에이전트가 A2A peer가 되면 원격 agent가 간접적으로 내 로컬 실행 표면에 영향을 줄 수 있다.
- “내 에이전트가 판단했다”는 말은 충분하지 않다. 어떤 provenance의 입력이 어떤 권한으로 실행됐는지를 추적해야 한다.
- skill, memory, AGENTS/CLAUDE-style instruction file은 코드처럼 취급해야 한다.

### 3. Skill/MCP는 기능 흡수의 경로이자 supply-chain 공격면

발표에서는 많은 전문 기능이 A2A agent보다 skill/MCP로 내 환경 안에 들어올 수 있다고 말한다. 하지만 이 문헌들은 그 경로가 안전하려면 다음 조건이 필요하다고 말한다.

- skill provenance, publisher identity, version pinning.
- skill별 capability permission.
- 문서와 코드 예제를 신뢰된 실행 지시로 바로 재사용하지 않는 구조.
- instruction file에 들어온 내용을 user/system/internal/inter-agent/external provenance로 구분.

즉 “기능은 내 환경 안으로 가져오는 편이 자연스럽다”는 주장은 “내 환경 안으로 가져온 기능을 supply-chain artifact로 검증해야 한다”는 보안 조건과 함께 가야 한다.

### 4. Computer-use agent는 prompt defense만으로는 부족하다

CUA는 화면을 보고 클릭하고 명령을 실행한다. 이때 악성 웹페이지, 문서, UI 텍스트, 파일 내용이 agent 행동을 바꿀 수 있다.

방어 방향은 두 계열이다.

- 구조적 격리: trusted planner와 untrusted observation을 분리하고, planner가 허용한 control flow만 실행하게 한다.
- 실시간 집행: 민감한 OS-level side effect를 감지하고, 실행 전 감사하거나 차단한다.

발표 문장으로 바꾸면: “A2A agent가 외부 세계와 상호작용할수록 보안 단위는 prompt가 아니라 실행 권한, side effect, 감사 로그가 된다.”

## 발표에서 바로 쓸 수 있는 비교

| 질문 | Skill/MCP | A2A Agent |
| --- | --- | --- |
| 무엇을 확장하나 | 내 agent의 기능과 도구 접근 | 다른 주체와의 상호작용 |
| 주된 위험 | supply-chain poisoning, tool misuse, local secret exposure | identity spoofing, capability misrepresentation, task/artifact abuse |
| 실행 책임 | 대체로 내 agent runtime과 내 승인 흐름 | 양쪽 agent와 각자의 운영 주체 |
| 필요한 방어 | skill provenance, sandbox, least privilege, context provenance | signed AgentCard, scoped/short-lived token, capability attestation, artifact sanitization |

## 발표에 넣을 보강 문장

- “A2A는 기능 marketplace가 아니라 신뢰 경계 밖의 대리인 네트워크다.”
- “AgentCard는 capability 광고가 아니라 identity와 권한에 대한 보안 claim이다.”
- “로컬 에이전트가 A2A에 붙는 순간, A2A 메시지는 내 컴퓨터의 실행 표면과 연결될 수 있다.”
- “Skill은 전문성을 내 환경 안으로 가져오는 좋은 방식이지만, supply chain 검증 없이는 instruction-level malware가 된다.”
- “A2A의 안전성은 OAuth/JWT 하나로 끝나지 않는다. capability attestation, artifact sanitization, lifecycle bounds, provenance-aware execution이 필요하다.”

## 아직 빈틈

- 이 문헌들은 A2A와 OpenClaw/Codex/Claude Code를 실제로 한 시스템에 연결한 end-to-end 실험을 하나로 완결하지는 않는다.
- 따라서 발표에서는 “단일 논문이 모든 위험을 입증한다”보다 “A2A 프로토콜 공격면 + 로컬 에이전트 실행권한 + skill supply-chain 위험이 결합될 수 있다”로 말하는 편이 정확하다.
- Web3/DID/payment/reputation까지 직접 다루는 논문은 이 묶음에 많지 않다. 발표의 Web3 파트는 보안 문헌에서 도출한 요구사항을 신원, 서명, 한도, 감사 로그의 설계 문제로 연결하는 식이 좋다.

