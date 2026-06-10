# LLM Wiki Schema

이 문서는 `llm-wiki-a2a-agent-security` 폴더를 유지하기 위한 운영 규칙이다.

## Source of Truth

- 공개 사이트의 원문 기준은 `sources.md`에 정리한 아카이브 링크다.
- `wiki/` 아래 markdown은 원본을 읽고 만든 파생 지식이다.
- 논문 내용을 갱신할 때는 먼저 원문 아카이브를 확인하고, 그 다음 `wiki/sources/`, `wiki/concepts/`, `wiki/synthesis/`, `wiki/index.md`, `wiki/log.md`를 갱신한다.

## Page Types

- `wiki/sources/*.md`: 논문 하나당 하나의 source page.
- `wiki/concepts/*.md`: 여러 논문에 걸쳐 반복되는 개념 page.
- `wiki/synthesis/*.md`: 발표, 비교표, 주장 정리처럼 여러 source와 concept를 엮은 output page.
- `wiki/index.md`: 모든 page의 catalog.
- `wiki/log.md`: append-only chronological log.

## Source Page Format

각 source page는 다음 순서를 따른다.

1. YAML frontmatter: title, authors, year, source_type, tags, source_url.
2. `#` 제목.
3. `한 줄 요약`.
4. `발표에 쓸 포인트`.
5. `핵심 내용`.
6. `이 발표와의 연결`.
7. `주의할 점`.
8. `연결된 개념`.

## Concept Page Format

각 concept page는 다음 순서를 따른다.

1. YAML frontmatter: title, tags, sources.
2. `#` 제목.
3. 짧은 정의.
4. 왜 중요한지.
5. 관련 논문.
6. 발표에서 쓸 문장.

## Linking Rules

- 내부 링크는 Obsidian-style wikilink보다 일반 markdown 링크를 우선한다. GitHub와 Codex에서 바로 열기 쉽기 때문이다.
- 논문 source page에서는 원문 아카이브 URL을 유지한다.
- 합성 페이지에서는 source page를 우선 링크하고, 필요할 때 `sources.md`의 아카이브 링크로 연결한다.

## Lint Checklist

새 source를 ingest한 뒤 확인할 것:

- `wiki/index.md`에 새 page가 등록되어 있는가.
- `wiki/log.md`에 날짜와 작업이 남았는가.
- 기존 synthesis와 concept page의 주장과 충돌하는 내용은 없는가.
- 발표 주제인 A2A, skill, MCP, local agent, identity, authorization, payment/responsibility와 연결되는가.

## External Reference

- Karpathy, `LLM Wiki`: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
