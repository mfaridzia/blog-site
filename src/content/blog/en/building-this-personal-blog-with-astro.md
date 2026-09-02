---
title: "Building This Personal Blog: Why I Chose Astro and a Zero-JS Mindset"
description: "Why I built this personal blog from scratch using Astro, Tailwind CSS v4, and native i18n—prioritizing reading speed, architectural simplicity, and editorial typography."
pubDate: 2026-09-02
cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=80&w=1200"
coverAlt: "Clean workspace with laptop and notes"
topics: ["Web", "Frontend"]
featured: true
readingTime: "5 min read"
lang: "en"
---

Every engineer eventually arrives at a moment where they want their own permanent corner on the web. Not merely a profile on a third-party platform, but an independently owned space—a place to log technical experiments, document architecture insights, and articulate engineering judgment.

When designing this site, the goal was not to showcase the most complicated technology stack, but rather to craft a reading experience that is fast, focused, and free of cognitive clutter.

## Why Astro?

In an era where modern JavaScript frameworks often ship hundreds of kilobytes of runtime scripts just to render static text, **Astro** offers a pragmatic, refreshing model: *HTML-first by default*.

Key architectural considerations:

1. **Zero Client-Side JavaScript by Default:** Article pages are compiled directly to static HTML and CSS. JavaScript is only dispatched to components that genuinely require interactivity (such as the theme toggle and search modal).
2. **Type-Safe Content Collections:** Astro provides built-in Zod schema validation for frontmatter metadata, guaranteeing dates, topics, and drafts are strictly checked at build time.
3. **Markdown & MDX Ergonomics:** Writing technical posts in plain Markdown remains effortless, while retaining the freedom to embed interactive components whenever a concept demands live visualization.

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      topics: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      lang: z.enum(['id', 'en']).default('id')
    })
  })
};
```

## Design System & Editorial Typography

I aligned the visual identity of this blog with my experimentation sandbox at [labs.muhfaridzia.live](https://labs.muhfaridzia.live), employing a warm palette and confident typography:

- **Color Palette:** Warm cream paper (`#f5f3ed`) in light mode and deep forest slate (`#0c1310`) in dark mode.
- **Signature Accents:** Forest Pine Green (`#286348`) as the foundational hue paired with Electric Lime (`#cffc48`) for energetic highlights.
- **Typography:** **Playfair Display** for editorial headlines, **DM Sans** for relaxed body readability, and **DM Mono** for metadata and code.

## Essential Features Built Lightweight

Instead of accumulating heavy dependencies, every core feature was crafted with restraint:

- **Bilingual i18n (ID/EN):** Clean URL routes with Indonesian at root (`/`) and English at (`/en/`), complete with an instant language switcher.
- **Sticky Table of Contents:** Automatically extracts H2/H3 headings and tracks user scroll position in real time.
- **Instant Search (Cmd+K):** Fast client-side fuzzy search across all titles and topics with zero external API calls.
- **Shiki Syntax Highlighting:** Server-rendered code highlighting that seamlessly adapts to light/dark themes with one-click copy buttons.

## Looking Ahead

Building your own website is a grounding reminder that durable software often comes from what you have the discipline to omit, rather than how many libraries you bundle.

This blog will serve as the repository for my architectural notes, technical deep-dives, and thoughts on shipping software that endures.
