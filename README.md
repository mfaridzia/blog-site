# Blog Personal - Muh Farid Zia

Blog personal modern dan ultra-cepat yang dibangun dengan **Astro 5+**, **Tailwind CSS v4**, dan **Content Collections**, terinspirasi dari desain minimalis dan editorial [sdust.dev](https://sdust.dev/).

---

## ✨ Fitur Utama

- 🌐 **Dukungan Penuh i18n (ID & EN)**: Bahasa Indonesia default di root (`/`) dan English di (`/en/`), lengkap dengan switcher bahasa dinamis di header.
- 🌓 **Dark / Light Mode**: Deteksi preferensi sistem dan persistensi `localStorage` tanpa efek flicker saat reload.
- ⚡ **Zero-JS by Default**: Kecepatan load instan dan skor Lighthouse optimal.
- 🏷️ **Filter Topik Instan**: Filter artikel di homepage berdasarkan tag (*All, Web, AI, Frontend, Debugging, Career*) secara interaktif tanpa reload halaman.
- 📑 **Sticky Table of Contents (TOC)**: Navigasi daftar isi artikel dengan scrollspy aktif untuk highlight posisi scroll pengguna secara *real-time*.
- 🔍 **Pencarian Instan (Cmd+K / Ctrl+K)**: Modal pencarian artikel cepat dengan navigasi keyboard (`↑`, `↓`, `Enter`, `Esc`).
- 📋 **Copy Code Snippet**: Tombol salin kode otomatis pada setiap blok kode Markdown dengan indikator visual.
- 🎨 **Shiki Syntax Highlighting**: Pewarnaan kode otomatis yang menyesuaikan tema terang/gelap.
- 📡 **RSS & SEO Ready**: Auto-generated RSS feeds (`/rss.xml` & `/en/rss.xml`), Sitemap (`/sitemap-index.xml`), dan OpenGraph/Twitter Cards untuk share media sosial.
- ⚙️ **Konfigurasi Terpusat**: Semua identitas penulis, avatar, bio, link sosial, dan topik diatur dalam satu file `src/config/site.config.ts`.

---

## 📁 Struktur Folder

```text
blog/
├── public/
│   └── images/
│       ├── avatar.svg
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
│   │   └── site.config.ts          # Pengaturan identitas & profil
│   ├── content/
│   │   └── blog/
│   │       ├── id/                 # Artikel Bahasa Indonesia (.md / .mdx)
│   │       └── en/                 # Artikel English (.md / .mdx)
│   ├── content.config.ts           # Schema validasi Content Collections
│   ├── i18n/
│   │   ├── ui.ts                   # Kamus teks UI ID & EN
│   │   └── utils.ts                # Helper i18n & routing
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro             # Home ID
│   │   ├── about.astro             # About ID
│   │   ├── rss.xml.ts              # RSS Feed ID
│   │   ├── posts/[slug].astro      # Post Detail ID
│   │   └── en/
│   │       ├── index.astro         # Home EN
│   │       ├── about.astro         # About EN
│   │       ├── rss.xml.ts          # RSS Feed EN
│   │       └── posts/[slug].astro  # Post Detail EN
│   └── styles/
│       └── global.css              # Tailwind v4 & Shiki styles
├── astro.config.mjs
└── package.json
```

---

## 🚀 Memulai Proyek (Getting Started)

### 1. Jalankan Development Server
```bash
pnpm dev
```
Buka browser di `http://localhost:4321`.

### 2. Build untuk Production
```bash
pnpm build
```

### 3. Preview Hasil Build Lokal
```bash
pnpm preview
```

---

## ✍️ Cara Menambah Artikel Baru

1. Untuk artikel **Bahasa Indonesia**, buat file baru di `src/content/blog/id/nama-artikel.md` (atau `.mdx`).
2. Untuk artikel **English**, buat file baru di `src/content/blog/en/post-title.md` (atau `.mdx`).

### Format Frontmatter:
```markdown
---
title: "Judul Artikel Anda"
description: "Deskripsi singkat 1-2 kalimat untuk preview dan meta tag SEO."
pubDate: 2026-09-02
cover: "https://images.unsplash.com/..." # opsional
coverAlt: "Deskripsi alternatif gambar" # opsional
topics: ["Web", "AI"]
featured: false # set true jika ingin dijadikan banner utama di homepage
readingTime: "5 min read" # opsional
lang: "id" # gunakan "id" atau "en"
---

Tulis konten artikel Anda di sini dengan format Markdown atau MDX biasa...

## Heading 2 (Akan otomatis masuk ke Table of Contents)

Konten paragraf...
```

---

## 🛠️ Kustomisasi Profil & Media Sosial

Edit file [`src/config/site.config.ts`](file:///Users/muhfaridzia/Documents/personal/blog/src/config/site.config.ts) untuk mengubah:
- Nama Penulis
- Judul & Tagline Blog (ID & EN)
- Bio Lede (ID & EN)
- Link Sosial Media (GitHub, LinkedIn, X, Email)
- Daftar Kategori Topik
