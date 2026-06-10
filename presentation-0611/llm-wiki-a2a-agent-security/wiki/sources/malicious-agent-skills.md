---
title: '"Do Not Mention This to the User": Detecting and Understanding Malicious Agent Skills'
authors: Yi Liu, Zhihao Chen, Yanjun Zhang, Gelei Deng, Yuekang Li, Jianting Ning, Leo Yu Zhang
year: 2026
source_type: arxiv
tags:
  - skills
  - empirical-study
  - supply-chain
  - malicious-skills
source_url: https://arxiv.org/abs/2602.06547
---

# Detecting and Understanding Malicious Agent Skills

## Presentation Priority

| Metric | Score |
| --- | ---: |
| Importance | 82 |
| Presentation Relevance | 78 |
| Priority | 80 |

`Priority = round(Importance * 0.45 + Presentation Relevance * 0.55)`

## 한 줄 요약

실제 skill registry 98,380개를 분석해 157개 confirmed malicious skills와 632개 vulnerability를 식별하며, agent skill supply-chain 위험이 이미 현실화됐음을 보인다.

## 발표에 쓸 포인트

- skill 생태계는 빠르게 커지지만 registry vetting은 충분하지 않을 수 있다.
- 악성 skill은 credential theft, remote code execution, agent manipulation을 결합한다.
- 공격은 코드뿐 아니라 자연어 문서와 hidden/shadow feature를 통해 나타난다.
- responsible disclosure 이후 157개가 제거됐지만, reactive removal만으로는 사용자를 보호하기 어렵다.

## 핵심 내용

논문은 두 community registry에서 98,380개 skill을 수집하고, static matching, dynamic sandbox verification, human annotation을 결합해 157개 confirmed malicious skills를 찾는다. 이 안에서 632개 vulnerability를 분류한다.

주요 관찰:

- malicious skill은 평균 4.03개 vulnerability를 가진다.
- dominant strategy는 credential theft via remote code execution과 documentation에 숨어 있는 agent manipulation이다.
- 많은 악성 skill이 public description과 실제 behavior가 다른 shadow feature를 가진다.
- 특정 threat actor의 templated brand impersonation이 큰 비중을 차지한다.

## 이 발표와의 연결

이 논문은 발표에서 “skill은 기능을 가져오는 좋은 방식”이라는 긍정적 주장에 균형을 준다. skill 생태계가 package ecosystem처럼 커지면, package security보다 더 어려운 문제가 생긴다. 이유는 skill이 code와 instruction을 동시에 포함하고, agent가 그것을 사용자의 권한으로 실행하기 때문이다.

## 주의할 점

- 공개 registry snapshot 기반이라 시간이 지나면 수치가 바뀔 수 있다.
- 하지만 구조적 결론, 즉 skill이 local user privilege와 natural-language instruction을 결합한다는 점은 발표에 안정적으로 사용할 수 있다.

## 연결된 개념

- [Skill Supply Chain](../concepts/skill-supply-chain.md)
- [Local Agent as Execution Principal](../concepts/local-agent-as-execution-principal.md)
