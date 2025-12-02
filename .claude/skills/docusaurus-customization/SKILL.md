
---

## `docusaurus-customization` Skill

```markdown
---
name: docusaurus-customization
description: Apply project-specific customizations to Docusaurus configuration, layout overrides, navbar/footer, theme settings and site structure. Use when modifying or extending the Docusaurus site beyond default template.
---

# Docusaurus Customization

## What this Skill does  
- Modifies `docusaurus.config.js` for branding, base URL, navbar/footer, and site metadata  
- Overrides or extends Docusaurus default theme components (e.g. layout, header, footer, DocItem)  
- Adds custom pages (e.g. landing page under `src/pages/index.js`)  
- Integrates custom CSS or styling frameworks (Tailwind, custom CSS, dark mode)  
- Creates wrapper components or layout contexts for global features (e.g. auth context, widget container)  

## When to use  
- When initializing or rebranding the documentation site as a product  
- When adding/removing navigation items or pages (landing, docs, courses, account, chat)  
- When adding global layout changes or theme overrides  
- When integrating custom UI frameworks or global providers  

## Instructions for Claude  

1. Update `docusaurus.config.js`: set `title`, `tagline`, `url`, `baseUrl`, `favicon`, `themeConfig.navbar`, and `footer`.  
2. Create `src/pages/index.js` (or `tsx`) for landing page — use React and custom components from UI Component Builder.  
3. If using Tailwind or external CSS, configure `postcss.config.js` / `tailwind.config.js` and import in `src/css/custom.css`.  
4. To override page layout (e.g. add personalization button or widget wrapper), place custom components in `src/theme/` folder matching component names (e.g. `DocItem`, `Navbar`, `Layout`).  
5. If global context or providers needed (auth, theme, i18n), create a Root wrapper (e.g. `src/theme/Root.jsx`) that wraps `<Layout>` with necessary providers.  
6. Ensure new files are added to the project file system; maintain modular structure and naming conventions.  

## Examples  

- Modify navbar in `docusaurus.config.js`:

```js
themeConfig: {
  navbar: {
    title: 'Axionics',
    items: [
      { to: '/', label: 'Home', position: 'left' },
      { to: '/docs/intro', label: 'Docs', position: 'left' },
      { to: '/chat', label: 'AI Chat', position: 'right' },
      { to: '/account', label: 'Account', position: 'right' },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      { title: 'Docs', items: [{ label: 'Introduction', to: '/docs/intro' }] },
      { title: 'Community', items: [{ label: 'GitHub', href: 'https://github.com/your-repo' }] }
    ],
    copyright: `© ${new Date().getFullYear()} Axionics`,
  },
},
