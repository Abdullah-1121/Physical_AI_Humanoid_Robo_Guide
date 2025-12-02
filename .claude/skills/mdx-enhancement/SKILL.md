
---

## `mdx-enhancement` Skill

```markdown
---
name: mdx-enhancement
description: Enhance MDX documentation pages by inserting interactive UI elements, custom components, and meta‑layout wrappers. Use when authoring or converting docs to MDX format with buttons, toggles, or special layout needs.
---

# MDX Enhancement

## What this Skill does  
- Wraps Markdown or MDX content with interactive or styled React components  
- Inserts custom UI elements: buttons, toggles (e.g. “Personalize”, “Translate to Urdu”), callouts, alert boxes, code-blocks, cards, layout grids  
- Ensures components work within Docusaurus MDX environment  
- Preserves Markdown semantics + front‑matter metadata  

## When to use  
- When writing or converting documentation chapters to MDX and you need interactive elements  
- When you want to embed React components inside docs (buttons, modals, widgets)  
- When you want to structure content with custom layout (e.g. two‑column layout, hero sections, feature cards)  

## Instructions for Claude  

1. Use MDX syntax — import components at top, then embed them inside Markdown.  
2. For interactive UI (button, toggle), wrap them inside React fragment or `<div>` and add required props.  
3. Maintain clean separation: content text remains Markdown; interactive parts must be JSX.  
4. Include fallback content or notices (e.g. “Feature coming soon”) if functionality is not yet implemented.  
5. Keep the MDX file valid — ensure proper front‑matter and no syntax errors.  

## Examples  

- MDX page with personalize & translate buttons:

```mdx
import Button from '@site/src/components/Button';

# Chapter 1: Introduction

<Button variant="primary">Personalize for me</Button>  
<Button variant="secondary">Translate to Urdu</Button>  

Welcome to the first chapter of Axionics.  
...
