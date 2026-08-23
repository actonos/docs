---
name: actonos-doc-writer
description: Standardized, token-efficient technical documentation authoring skill for ActonOS. Enforces Diátaxis framework, MDX v3 parser safety rules, Docusaurus bilingual i18n synchronization (English & Vietnamese), and Soft Meadow design tokens.
---

# ActonOS Technical Documentation Writer Skill

Use this skill when creating, updating, or localizing documentation guides, API references, architecture deep-dives, or blog posts in the `ActonOS-Docs` repository.

---

## 1. Token-Efficiency & Fast Research Workflow

To maximize speed and minimize token waste:
1. **Never read entire large repositories**: Use targeted `grep_search` or refer to the `actonos-architecture-map` skill for subsystem file paths and data models.
2. **Batch File Generation**: Create or update both the English source and the Vietnamese translation (`i18n/vi/...`) in continuous, organized steps.
3. **Avoid Redundant Builds**: Validate MDX syntax locally in memory before triggering `npm run build`.

---

## 2. Diátaxis Information Architecture

Every document must belong to one of the 4 Diátaxis quadrants:

| Quadrant | Purpose | Folder Location | Tone & Structure |
|:---|:---|:---|:---|
| **Tutorials** | Learning-oriented (Step-by-step) | `getting-started/quickstart-tutorial.mdx` | Friendly, numbered steps with expected visual outputs. |
| **How-To Guides** | Goal-oriented (Solve a specific problem) | `user-guide/*.mdx` | Practical, problem-solution pairs, real-world examples. |
| **Reference** | Information-oriented (Dry facts & specs) | `developer-reference/*.mdx` | Tables, REST JSON payloads, CLI flags, exact schemas. |
| **Explanation** | Understanding-oriented (Deep dives & concepts) | `advanced-architecture/*.mdx` | Mermaid diagrams, memory models, security invariants. |

---

## 3. MDX v3 Syntax & Parser Safety Rules

MDX v3 strictly evaluates JSX expressions. Follow these rules to avoid compile failures:

- ❌ **Forbidden**: Unescaped `{` or `}` inside text paragraphs (e.g., `returns { status: ok }`).
- ✅ **Correct**: Wrap inside code ticks (e.g., `returns \`{ "status": "ok" }\``) or HTML escape (`&#123;`).
- ❌ **Forbidden**: Raw LaTeX math blocks (`$$ ... $$` or `$R(t)$`) without KaTeX plugins.
- ✅ **Correct**: Use standard fenced code blocks for formulas:
  ```
  R(t) = exp(-t / S)
  ```
- ✅ **Mermaid Diagrams**: Always wrap node labels with special characters in quotes:
  ```mermaid
  graph LR
      A["Client (React 19)"] --> B["Daemon (actond)"]
  ```
- ✅ **Admonitions**: Use standard Docusaurus callouts (`:::note`, `:::tip`, `:::info`, `:::warning`, `:::important`, `:::danger`).

---

## 4. Docusaurus Multi-Version & Multi-Language Directory Matrix

When authoring documentation, ensure files are created in the correct target paths:

### 1. English Source:
- **Stable v0.1**: `versioned_docs/version-0.1/<category>/<doc_id>.mdx`
- **Next v0.2**: `docs/<category>/<doc_id>.mdx`

### 2. Vietnamese Translation:
- **Stable v0.1**: `i18n/vi/docusaurus-plugin-content-docs/version-0.1/<category>/<doc_id>.mdx`
- **Next v0.2**: `i18n/vi/docusaurus-plugin-content-docs/current/<category>/<doc_id>.mdx`

### 3. Engineering Blog:
- **English**: `blog/YYYY-MM-DD-<slug>.mdx`
- **Vietnamese**: `i18n/vi/docusaurus-plugin-content-blog/YYYY-MM-DD-<slug>.mdx`

---

## 5. Standard Document Frontmatter Template

```mdx
---
id: my-doc-slug
title: Document Title Here
sidebar_label: Short Sidebar Title
sidebar_position: 1
---

# Document Title Here

Introductory paragraph summarizing the objective and architecture context.

```
