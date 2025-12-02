
---

## `design-system` Skill

```markdown
---
name: design-system
description: Define and enforce global UI styling rules, design tokens, colors, typography and theme for the project. Use when initiating styling guidelines or updating visual identity throughout the site.
---

# Design System

## What this Skill does  
- Establishes the global visual design language (colors, fonts, spacing, themes)  
- Defines design tokens (e.g. primary, secondary, accent colors; spacing scale; font sizes)  
- Guides creation of consistent UI components that follow design rules  
- Ensures accessibility, consistency, and maintainability of styling  

## When to use  
- At project start when defining site-wide theme or brand identity  
- When creating new components to ensure they align with design rules  
- When modifying global layout, color scheme, or typography  

## Instructions for Claude  

1. Propose a color palette: primary, secondary, accent, background, text, dark mode equivalents.  
2. Define font stack (fallbacks) and base font sizes.  
3. Define spacing and layout rules (margins, paddings, container widths).  
4. Create a `theme.css` or `tailwind.config.js` (if using Tailwind) reflecting these design tokens.  
5. Ensure generated CSS or class names are consistent across components.  
6. Document token names and usage guidelines (in comments or separate file).  

## Examples  

- Example color palette:

```css
:root {
  --color-primary: #4C39F7;
  --color-primary-dark: #3A28D9;
  --color-background: #0D0D12;
  --color-surface: #1C1B24;
  --color-text: #EDEDED;
  --color-accent: #00D9C0;
}
