import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Axionics',
  tagline: 'Master Physical AI & Humanoid Robotics',
  url: 'https://axionics.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'axionics', // Usually your GitHub org/user name.
  projectName: 'docusaurus-frontend', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub Pages will deploy from.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/docs', // Ensure docs are under /docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg', // Social card image, will be created later
      navbar: {
        title: 'Axionics',
        logo: {
          alt: 'Axionics Logo', // Logo alt text, will be created later
          src: 'img/logo.svg', // Logo path, will be created later
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/chat', label: 'Chat', position: 'left'},
          {to: '/account', label: 'Account', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Chapters',
                to: '/docs/category/chapters',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/axionics', // Placeholder for Axionics Discord
              },
              {
                label: 'Forum',
                href: 'https://forum.axionics.com', // Placeholder for Axionics Forum
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/axionics', // Placeholder for Axionics Twitter
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/axionics', // Placeholder for Axionics LinkedIn
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Axionics, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      markdown: {
        mermaid: true,
        onBrokenLinks: 'warn',
      },
    }),
};

export default config;
