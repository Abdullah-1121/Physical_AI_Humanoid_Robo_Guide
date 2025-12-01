# Quickstart: Configure Docusaurus Site & Book Introduction

**Feature Branch**: `002-site-config-introduction`
**Created**: 2025-12-01

## Summary

This guide provides a quick overview of how to get started with the Docusaurus site configuration and the book's introduction content. It assumes you have already set up the Docusaurus project as per the previous feature.

## Steps to Get Started

1.  **Checkout the Feature Branch**:

    ```bash
    git checkout 002-site-config-introduction
    ```

2.  **Navigate to the Frontend Directory**:

    ```bash
    cd frontend/
    ```

3.  **Install Dependencies** (if not already installed):

    ```bash
    npm install
    ```

4.  **Start the Development Server**:

    ```bash
    npm run start
    ```

    This will open the Docusaurus site in your browser at `http://localhost:3000` (or another port if 3000 is in use).

5.  **Edit Site Configuration**:

    Open `frontend/docusaurus.config.ts` to modify site title, tagline, URL, base URL, navbar items, footer, social links, and theme setup. Changes will hot-reload.

6.  **Write/Edit Book Introduction**:

    Open `frontend/docs/introduction.md` to add or modify the book's introduction content. The content will be rendered on the site.

## Important Files

-   `frontend/docusaurus.config.ts`: Main Docusaurus configuration file.
-   `frontend/docs/introduction.md`: Markdown file for the book's introduction.
-   `frontend/src/css/custom.css`: For custom CSS styling.

