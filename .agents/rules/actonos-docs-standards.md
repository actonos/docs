---
description: Standards and guidelines for authoring ActonOS documentation, managing versions, and maintaining bilingual i18n synchronization.
globs: ["docs/**", "versioned_docs/**", "i18n/**", "blog/**", "src/**"]
---

# ActonOS Documentation Authoring Standards & Rules

When modifying or adding documentation in the `ActonOS-Docs` repository, follow these non-negotiable rules:

## 1. Bilingual Synchronization (EN & VI)
- Every new or updated guide in English must have its corresponding Vietnamese translation created/updated in:
  - English: `versioned_docs/version-0.1/<category>/<doc>.mdx` (or `docs/<category>/<doc>.mdx` for next v0.2)
  - Vietnamese: `i18n/vi/docusaurus-plugin-content-docs/version-0.1/<category>/<doc>.mdx` (and `.../current/...`)
- Translate accurately with natural, professional Vietnamese technical terms.

## 2. MDX v3 Compatibility
- **Never leave raw `{` or `}` in text paragraphs** (wrap in backticks or escape).
- **Never use raw LaTeX math `$$ ... $$`** (use fenced code blocks for formulas).
- **Mermaid diagrams**: Always enclose node labels with parentheses/brackets in quotes (`A["Label (Details)"]`).

## 3. Brand Identity & Navbar Logo
- The logo images (`static/img/actonos_logo.png` & `static/img/actonos_logo_light.png`) already contain the wordmark text. **Never add a text title next to the logo in the navbar**.
- Adhere strictly to the "Soft Meadow" color tokens:
  - Canvas: `#f9fbf2` | Card: `#eff2e5` | Deep Ink: `#130e30` | Slate: `#5f5c6e` | Hi-Yellow: `#ffe228`
  - Pill Radius: `1440px` | Card Radius: `24px`

## 4. Token Conservation
- Do not read entire large files across the workspace when writing docs. Reference the `actonos-architecture-map` skill for exact subsystem details.
