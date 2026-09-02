# Personal Blog - Muhammad Farid Zia

A minimal, ultra-fast personal blog and technical journal built with **Astro 5+**, **Tailwind CSS v4**, and **Content Collections**.

---

## ✨ Key Features

- 🌐 **Native Bilingual i18n (EN / ID)**: English is the default language at root (`/en`), with Indonesian available at (`/id`), complete with an instant route-preserving language switcher in the header.
- 🌓 **Dark / Light Mode**: Automatically detects OS preference with zero-flicker `localStorage` persistence.
- ⚡ **Zero Client-Side JS by Default**: Compiled directly to static HTML and CSS for lightning-fast performance and optimal Core Web Vitals.
- 🏷️ **Instant Topic Filtering**: Filter articles on the homepage by topic (*Web, AI, Frontend, Debugging, Career*) in real time without page reloads.
- 📑 **Sticky Table of Contents (TOC)**: Automatically indexes H2 and H3 headings and highlights active reading position with scrollspy.
- 🔍 **Instant Search (Cmd+K / Ctrl+K)**: Client-side fuzzy search modal across titles, descriptions, and topics with keyboard navigation (`↑`, `↓`, `Enter`, `Esc`).
- 📋 **Copy Code Snippet**: Instant copy buttons on all code blocks with Shiki syntax highlighting synced to light/dark themes.
- 📡 **RSS & SEO Ready**: Auto-generated RSS feeds ([`/en/rss.xml`](/en/rss.xml) & [`/id/rss.xml`](/id/rss.xml)), Sitemap (`/sitemap-index.xml`), and OpenGraph / Twitter Card meta tags.
- ⚙️ **Centralized Configuration**: All site metadata, author profiles, avatar, social links, and topics are managed in [`src/config/site.config.ts`](src/config/site.config.ts).

---

## 📁 Project Structure

```text
blog/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon.svg
│   └── images/
│       └── avatar.jpg
├── src/
│   ├── components/
│   │   ├── CodeCopyButton.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Icon.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── PostCard.astro
│   │   ├── SearchModal.astro
│   │   ├── TableOfContents.astro
│   │   ├── ThemeToggle.astro
│   │   └── TopicFilter.astro
│   ├── config/
│   │   └── site.config.ts          # Central author & site configuration
│   ├── content/
│   │   └── blog/
│   │       ├── en/                 # English articles (.md / .mdx)
│   │       └── id/                 # Indonesian articles (.md / .mdx)
│   ├── content.config.ts           # Zod schema for Content Collections
│   ├── i18n/
│   │   ├── ui.ts                   # UI strings dictionary (EN / ID)
│   │   └── utils.ts                # i18n routing & translation helpers
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro             # Root redirect to /en
│   │   ├── rss.xml.ts              # Root RSS feed
│   │   ├── en/
│   │   │   ├── index.astro         # English Home
│   │   │   ├── about.astro         # English About
│   │   │   ├── rss.xml.ts          # English RSS
│   │   │   └── posts/[slug].astro  # English Post Detail
│   │   └── id/
│   │       ├── index.astro         # Indonesian Home
│   │       ├── about.astro         # Indonesian About
│   │       ├── rss.xml.ts          # Indonesian RSS
│   │       └── posts/[slug].astro  # Indonesian Post Detail
│   └── styles/
│       └── global.css              # Tailwind v4, custom theme variables, Shiki styles
├── astro.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
pnpm build
```

### 4. Preview Production Build
```bash
pnpm preview
```

---

## ✍️ Adding a New Post

1. For **English**, create a new file in `src/content/blog/en/your-post-slug.md` (or `.mdx`).
2. For **Indonesian**, create a new file in `src/content/blog/id/your-post-slug.md` (or `.mdx`).

### Frontmatter Schema:
```markdown
---
title: "Your Article Title"
description: "A concise 1-2 sentence description for previews and SEO meta tags."
pubDate: 2026-09-02
cover: "https://images.unsplash.com/..." # optional
coverAlt: "Image alternative text" # optional
topics: ["Web", "Frontend"]
featured: false # set to true to feature on the homepage banner
readingTime: "5 min read" # optional
lang: "en" # "en" or "id"
---

Write your article content here in standard Markdown or MDX...

## Heading 2 (Automatically indexed in the Table of Contents)

Paragraph content...
```

---

## 🛠️ Customization

Edit [`src/config/site.config.ts`](src/config/site.config.ts) to update:
- Author Name
- Blog Titles & Taglines (EN & ID)
- Bio & Lede descriptions
- Social Media Profiles (GitHub, LinkedIn, X, Email)
- Topic Categories
