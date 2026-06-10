import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");

const NAV_PRIORITY = new Map([
  ["wiki/concepts/a2a-as-trust-propagation-channel.html", 100],
  ["wiki/concepts/local-agent-as-execution-principal.html", 97],
  ["wiki/concepts/protocol-level-defenses.html", 95],
  ["wiki/concepts/skill-supply-chain.html", 89],
  ["wiki/concepts/computer-use-agent-threat-model.html", 84],
  ["wiki/sources/a2asecbench.html", 100],
  ["wiki/sources/agent-protocol-threat-modeling.html", 97],
  ["wiki/sources/openclaw-security-analysis.html", 93],
  ["wiki/sources/skill-inject.html", 89],
  ["wiki/sources/clawworm.html", 87],
  ["wiki/sources/openclaw-threats-fasa.html", 85],
  ["wiki/sources/skill-supply-chain-poisoning.html", 83],
  ["wiki/sources/malicious-agent-skills.html", 80],
  ["wiki/sources/camels-cua-security.html", 78],
  ["wiki/sources/agentsentinel.html", 75],
  ["wiki/sources/redteamcua.html", 72],
]);

const NAV_GROUPS = [
  {
    title: "Start",
    items: [
      ["Overview", "index.html"],
      ["Wiki Index", "wiki/index.html"],
      ["Schema", "schema.html"],
      ["Source Links", "sources.html"],
    ],
  },
  {
    title: "Synthesis",
    match: (rel) => rel.startsWith("wiki/synthesis/"),
  },
  {
    title: "Concepts",
    match: (rel) => rel.startsWith("wiki/concepts/"),
  },
  {
    title: "Sources",
    match: (rel) => rel.startsWith("wiki/sources/"),
  },
  {
    title: "Notes",
    items: [
      ["Ingest Log", "wiki/log.html"],
    ],
  },
];

const pageMeta = new Map();
let headingCounter = 0;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  headingCounter += 1;
  return slug || `section-${headingCounter}`;
}

function isExternalUrl(href) {
  return /^(?:[a-z]+:)?\/\//i.test(href) || href.startsWith("mailto:");
}

function mdToHtmlPath(mdPath) {
  const normalized = mdPath.replaceAll("\\", "/");
  if (normalized === "README.md") {
    return "index.html";
  }
  return normalized.replace(/(?:README|index)\.md$/i, "index.html").replace(/\.md$/i, ".html");
}

function rewriteHref(href) {
  if (isExternalUrl(href) || href.startsWith("#")) {
    return href;
  }

  const [withoutHash, hash = ""] = href.split("#");
  const [pathname, query = ""] = withoutHash.split("?");
  if (!pathname.toLowerCase().endsWith(".md")) {
    return href;
  }

  let nextPath = pathname.replace(/(?:README|index)\.md$/i, "index.html").replace(/\.md$/i, ".html");
  if (query) {
    nextPath += `?${query}`;
  }
  if (hash) {
    nextPath += `#${hash}`;
  }
  return nextPath;
}

function renderInline(markdown) {
  const codeSpans = [];
  let value = markdown.replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE_SPAN_${codeSpans.length}@@`;
    codeSpans.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  value = escapeHtml(value);

  value = value.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g, (_, alt, href, title) => {
    const titleAttr = title ? ` title="${escapeAttribute(title)}"` : "";
    return `<img src="${escapeAttribute(href)}" alt="${escapeAttribute(alt)}"${titleAttr}>`;
  });

  value = value.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g, (_, label, href, title) => {
    const nextHref = rewriteHref(href);
    const titleAttr = title ? ` title="${escapeAttribute(title)}"` : "";
    const externalAttrs = isExternalUrl(nextHref) ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${escapeAttribute(nextHref)}"${titleAttr}${externalAttrs}>${label}</a>`;
  });

  value = value
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  for (const [index, code] of codeSpans.entries()) {
    value = value.replaceAll(`@@CODE_SPAN_${index}@@`, code);
  }

  return value;
}

function isTableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderTable(lines) {
  const [headerLine, , ...bodyLines] = lines;
  const headers = splitTableRow(headerLine);
  const body = bodyLines.map(splitTableRow);
  return [
    "<div class=\"table-scroll\"><table>",
    "<thead><tr>",
    ...headers.map((cell) => `<th>${renderInline(cell)}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`),
    "</tbody></table></div>",
  ].join("");
}

function renderMarkdown(markdown) {
  const bodyMarkdown = markdown.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const lines = bodyMarkdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;
  headingCounter = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```(\S*)\s*$/);
    if (fence) {
      const language = fence[1] ? ` class="language-${escapeAttribute(fence[1])}"` : "";
      const code = [];
      index += 1;
      while (index < lines.length && !/^```\s*$/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      html.push(`<pre><code${language}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2].replace(/\s+#+$/, "");
      const id = slugify(text);
      html.push(`<h${level} id="${escapeAttribute(id)}">${renderInline(text)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*\|/.test(line) && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const tableLines = [line, lines[index + 1]];
      index += 2;
      while (index < lines.length && /^\s*\|/.test(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote>${renderMarkdown(quote.join("\n"))}</blockquote>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,6})\s+/.test(lines[index]) &&
      !/^```/.test(lines[index]) &&
      !/^>\s?/.test(lines[index]) &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !(/^\s*\|/.test(lines[index]) && index + 1 < lines.length && isTableSeparator(lines[index + 1]))
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

async function walkMarkdown(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") {
        continue;
      }
      if (entry.name === "raw") {
        continue;
      }
      files.push(...(await walkMarkdown(fullPath, base)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(base, fullPath).replaceAll(path.sep, "/"));
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function titleFromMarkdown(markdown, relPath) {
  const match = markdown.match(/^#\s+(.+)$/m);
  if (match) {
    return match[1].trim();
  }
  return path.basename(relPath, ".md").replaceAll("-", " ");
}

function rootPrefixFor(htmlRelPath) {
  const depth = htmlRelPath.split("/").length - 1;
  return depth === 0 ? "" : "../".repeat(depth);
}

function sortNavItems(items) {
  return [...items].sort(([titleA, hrefA], [titleB, hrefB]) => {
    const priorityA = NAV_PRIORITY.get(hrefA) ?? -1;
    const priorityB = NAV_PRIORITY.get(hrefB) ?? -1;
    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }
    return titleA.localeCompare(titleB, "ko");
  });
}

function buildNav(currentRelPath) {
  const parts = [];

  for (const group of NAV_GROUPS) {
    const items = group.items
      ? group.items
      : sortNavItems([...pageMeta.values()]
          .filter((page) => group.match(page.htmlRel))
          .map((page) => [page.title, page.htmlRel]));

    if (!items.length) {
      continue;
    }

    parts.push(`<div class="nav-group"><h2>${escapeHtml(group.title)}</h2><ul>`);
    for (const [title, href] of items) {
      const active = href === currentRelPath ? ' class="active"' : "";
      parts.push(`<li><a${active} href="${escapeAttribute(rootPrefixFor(currentRelPath) + href)}">${escapeHtml(title)}</a></li>`);
    }
    parts.push("</ul></div>");
  }

  return parts.join("\n");
}

function layout({ title, relMd, htmlRel, body }) {
  const prefix = rootPrefixFor(htmlRel);
  const sourcePath = relMd === "README.md" ? "README.md" : relMd;
  const canonicalSource = `${prefix}${sourcePath}`;
  const wikiIndex = `${prefix}wiki/index.html`;
  const isHome = htmlRel === "index.html";
  const documentTitle = isHome ? title : `${title} | A2A Agent Security LLM Wiki`;
  const heroVisual = isHome
    ? `<figure class="hero-visual">
        <img src="assets/a2a-security-map.svg" alt="A2A agent security map">
      </figure>`
    : "";

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(documentTitle)}</title>
  <link rel="stylesheet" href="${prefix}assets/site.css">
</head>
<body>
  <div class="site-shell">
    <aside class="sidebar">
      <a class="brand" href="${prefix}index.html">
        <span class="brand-mark">A2A</span>
        <span>
          <strong>Agent Security</strong>
          <small>LLM Wiki</small>
        </span>
      </a>
      <nav aria-label="Wiki navigation">
${buildNav(htmlRel)}
      </nav>
    </aside>
    <main class="page">
      <header class="page-header">
        <div>
          <p class="eyebrow">web3ai / presentation-0611</p>
          <h1>${escapeHtml(title)}</h1>
        </div>
        <div class="page-actions">
          <a href="${escapeAttribute(canonicalSource)}">Markdown</a>
          <a href="${wikiIndex}">Index</a>
        </div>
      </header>
      ${heroVisual}
      <article class="content">
${body}
      </article>
    </main>
  </div>
</body>
</html>
`;
}

async function main() {
  const markdownFiles = await walkMarkdown(siteRoot);

  for (const relMd of markdownFiles) {
    const markdown = await fs.readFile(path.join(siteRoot, relMd), "utf8");
    const htmlRel = mdToHtmlPath(relMd);
    pageMeta.set(relMd, {
      relMd,
      htmlRel,
      title: titleFromMarkdown(markdown, relMd),
    });
  }

  for (const relMd of markdownFiles) {
    const markdown = await fs.readFile(path.join(siteRoot, relMd), "utf8");
    const page = pageMeta.get(relMd);
    const body = renderMarkdown(markdown);
    const html = layout({
      title: page.title,
      relMd,
      htmlRel: page.htmlRel,
      body,
    });
    const outPath = path.join(siteRoot, page.htmlRel);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html);
  }

  console.log(`Generated ${markdownFiles.length} HTML pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
