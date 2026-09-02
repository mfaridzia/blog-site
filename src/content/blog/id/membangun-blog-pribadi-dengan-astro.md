---
title: "Membangun Blog Pribadi: Mengapa Saya Memilih Astro dan Pendekatan Zero-JS"
description: "Alasan saya membangun blog ini dari awal dengan Astro, Tailwind CSS v4, dan i18n native—mengutamakan kecepatan baca, kesederhanaan arsitektur, dan tipografi editorial."
pubDate: 2026-09-02
cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?fm=jpg&q=80&w=1200"
coverAlt: "Meja kerja rapi dengan laptop dan catatan"
topics: ["Web", "Frontend"]
featured: true
readingTime: "5 min read"
lang: "id"
---

Setiap developer cepat atau lambat pasti sampai pada titik di mana mereka ingin memiliki sudut tersendiri di internet. Bukan sekadar menaruh tautan di platform pihak ketiga, melainkan sebuah ruang yang dimiliki seutuhnya—tempat mencatat eksperimen, mendokumentasikan pelajaran teknis, dan menguji ide-ide baru.

Ketika merancang blog ini, tujuan utamanya bukan untuk memamerkan tumpukan teknologi yang rumit, melainkan menciptakan pengalaman membaca yang cepat, tenang, dan minim distraksi.

## Mengapa Memilih Astro?

Di era di mana framework JavaScript sering kali memuat ratusan kilobyte skrip bahkan untuk sekadar menampilkan teks statis, **Astro** menawarkan paradigma yang menyegarkan: *HTML-first by default*.

Beberapa pertimbangan teknis utama saya:

1. **Zero Client-Side JavaScript Bawaan:** Halaman artikel murni dirender sebagai HTML dan CSS statis. JavaScript hanya dikirimkan pada komponen yang memang membutuhkannya (seperti tombol tema gelap dan modal pencarian).
2. **Content Collections yang Type-Safe:** Astro menyediakan schema validation berbasis Zod untuk setiap metadata artikel (frontmatter), memastikan tanggal, topik, dan status draf tervalidasi saat *build time*.
3. **Fleksibilitas Markdown & MDX:** Saya bisa menulis artikel teknis dengan cepat menggunakan Markdown biasa, dan tetap memiliki opsi menyisipkan komponen interaktif kapan pun dibutuhkan.

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

## Sistem Desain & Tipografi Editorial

Saya menyelaraskan identitas visual blog ini dengan platform eksperimen saya di [labs.muhfaridzia.live](https://labs.muhfaridzia.live), menggunakan perpaduan palet yang hangat dan tipografi tegas:

- **Warna Dasar:** Latar belakang *warm paper cream* (`#f5f3ed`) di mode terang dan *deep forest slate* (`#0c1310`) di mode gelap.
- **Aksen Khas:** *Forest Pine Green* (`#286348`) sebagai warna utama dan *Electric Lime* (`#cffc48`) untuk aksen highlight.
- **Tipografi:** Kombinasi **Playfair Display** untuk judul bergaya majalah editorial, **DM Sans** untuk teks utama yang nyaman dibaca, serta **DM Mono** untuk metadata dan kode.

## Fitur Esensial yang Tetap Ringan

Alih-alih menambahkan plugin berat dari pihak ketiga, seluruh fitur inti dibangun dengan pendekatan minimalis:

- **Dukungan Dwibahasa (i18n ID/EN):** Struktur rute bersih dengan Bahasa Indonesia sebagai default di root (`/`) dan English di (`/en/`), disertai pengalih bahasa yang mulus.
- **Sticky Table of Contents (TOC):** Daftar isi otomatis yang mendeteksi heading (H2/H3) dan menyorot posisi baca secara dinamis saat halaman digulir.
- **Pencarian Cepat (Cmd+K):** Modal pencarian artikel berbasis indeks lokal di browser tanpa ketergantungan API backend.
- **Sintaks Kode Otomatis:** Pewarnaan blok kode via Shiki yang langsung sinkron dengan mode terang/gelap, lengkap dengan tombol salin instan.

## Kesimpulan

Membangun web untuk diri sendiri adalah pengingat bahwa keindahan software sering kali terletak pada apa yang berani kita singkirkan, bukan seberapa banyak pustaka yang kita tambahkan. 

Blog ini akan menjadi rumah bagi catatan arsitektur, eksperimen kode, dan pemikiran seputar rekayasa perangkat lunak ke depannya.
