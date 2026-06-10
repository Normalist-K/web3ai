# A2A Agent Security LLM Wiki

발표 `A2A에 무엇을 Publish할 것인가`의 보강자료로 만든 LLM wiki입니다.

이 폴더는 Karpathy의 `llm-wiki` 아이디어를 발표 준비용으로 작게 구현한 것입니다. 공개 사이트에는 PDF 원본이나 추출 텍스트 덤프를 올리지 않고, 원문은 `sources.md`의 아카이브 링크로 연결합니다.

## 구조

- `sources.md`: OpenReview/arXiv 등 원문 아카이브 링크
- `wiki/index.md`: wiki 페이지 목록과 한 줄 설명
- `wiki/log.md`: ingest 및 갱신 로그
- `wiki/sources/`: 논문별 요약 페이지
- `wiki/concepts/`: 반복해서 참조할 개념 페이지
- `wiki/synthesis/`: 발표에 바로 가져갈 종합 정리
- `schema.md`: 이 wiki를 유지하는 규칙

## 발표와 연결되는 핵심 명제

이 문헌 묶음은 발표의 주장을 보강한다.

> A2A는 단순 기능 호출 레이어가 아니라, 서로 다른 주체의 에이전트가 신뢰 경계를 넘어 상호작용할 때 생기는 정체성, 권한, 실행 책임의 문제다.

특히 A2A 보안 논문은 AgentCard, capability, task lifecycle, artifact exchange의 프로토콜 공격면을 보여주고, OpenClaw 및 skill 생태계 논문은 로컬 에이전트가 실제 컴퓨터 권한을 가진 실행 주체가 될 때 위험이 얼마나 커지는지 보여준다.
