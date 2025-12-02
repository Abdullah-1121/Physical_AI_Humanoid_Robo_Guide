---
name: ui-component-builder
description: Generate reusable React components, styled UI elements, and interactive widgets when building the frontend UI. Use when asked to create buttons, modals, widgets, layout components or interactive UI parts.
---

# UI Component Builder

## What this Skill does  
- Generates clean, reusable React functional components (JSX/TSX)  
- Adds accompanying CSS or Tailwind classes based on the project’s design style  
- Provides prop-driven component interfaces (e.g. `<Button variant="primary" onClick={...}>`)  
- Enforces component naming conventions and folder structure  

## When to use  
- When you need a new UI element (button, toggle, card, modal, widget)  
- When you convert a design spec to code  
- When you build layout components for landing page, navbar, footers, or widget containers  

## Instructions for Claude  

1. Use React (JSX or TSX depending on the project) to create the component, exporting as default.  
2. Accept props for dynamic data and behavior (e.g. children, onClick, className overrides).  
3. Add styling using the project’s styling system (Tailwind or custom CSS).  
4. Place the component in a logical folder (e.g. `src/components/`) and name the file the same as the component (e.g. `Button.tsx`).  
5. If needed, generate a story or usage example (as a comment or code block).  
6. Keep component minimal, future‑proof, and reusable.  

## Examples  

- Create a `Button` component:  

```jsx
// src/components/Button.tsx
export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-primary hover:bg-primary-dark text-white ${className}`}
    >
      {children}
    </button>
  );
}
