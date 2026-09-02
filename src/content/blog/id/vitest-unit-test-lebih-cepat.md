---
title: "Migrasi ke Vitest: Unit Test 50% Lebih Cepat"
description: "Pengalaman migrasi proyek Next.js dari Jest ke Vitest: konfigurasi instan, integrasi native TypeScript, dan kecepatan eksekusi yang melonjak."
pubDate: 2023-10-05
cover: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?fm=jpg&q=80&w=1200"
coverAlt: "Layar monitor kode dengan tampilan modern"
topics: ["Web", "Frontend"]
featured: false
readingTime: "3 min read"
lang: "id"
---

Menjalankan ribuan test di pipeline CI sering kali menjadi bottleneck terbesar sebelum sebuah fitur dapat dideploy. Setelah bertahun-tahun mengandalkan Jest, kami memutuskan beralih ke Vitest.

## Kenapa Vitest?

- **Zero-config TypeScript & ESM**: Menggunakan pipeline Vite secara native tanpa transformasi Babel ganda.
- **Isolasi Worker Cepat**: Memanfaatkan worker pool Node.js yang lebih efisien dibandingkan VM sandbox Jest.
- **API Kompatibel**: Hampir 95% kode test `describe`, `it`, `expect`, dan mock dapat langsung berjalan tanpa ubahan besar.

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
