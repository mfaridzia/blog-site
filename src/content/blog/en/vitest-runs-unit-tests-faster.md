---
title: "Vitest runs Unit Tests 50% Faster"
description: "Migrating a Next.js App Router project from Jest to Vitest: zero-config setup, native ESM & TypeScript, and instant feedback loops."
pubDate: 2023-10-05
cover: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?fm=jpg&q=80&w=1200"
coverAlt: "Development workstation setup"
topics: ["Web", "Frontend"]
featured: false
readingTime: "3 min read"
lang: "en"
---

Executing thousands of unit tests in CI pipelines frequently becomes a primary development bottleneck. After years on Jest, we completed our migration to Vitest.

## Why Vitest Wins

- **Native Vite Pipeline**: TypeScript and modern ESM work out-of-the-box without separate transform pipelines.
- **Happy DOM Support**: Lightweight DOM simulation resulting in 2x faster suite execution.
- **Drop-in Matchers**: Compatible syntax for `expect`, `vi.fn()`, and mock assertions.

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './src/test/setup.ts'
  }
});
```
