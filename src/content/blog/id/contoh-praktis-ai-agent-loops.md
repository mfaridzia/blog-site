---
title: "Contoh Praktis Pola AI Agent Loops"
description: "AI Agent loops bekerja paling efektif ketika trigger, tujuan, dan kondisi berhenti (stopping condition) didefinisikan secara tegas. Berikut empat implementasi yang saya gunakan."
pubDate: 2026-08-26
cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=80&w=1200"
coverAlt: "Pola arsitektur modular modern"
topics: ["AI", "Web"]
featured: false
readingTime: "4 min read"
lang: "id"
---

Loop agen otonom sering kali gagal bukan karena model LLM-nya tidak pintar, melainkan karena batas evaluasi dan *stopping condition* yang tidak jelas. 

Dalam praktiknya, agen AI yang andal membutuhkan 3 komponen kunci:

1. **Trigger yang terdefinisi dengan jelas** (misal: webhook GitHub PR, alert pager, atau cron job).
2. **Koleksi Tooling terisolasi** (hanya berikan tool yang dibutuhkan untuk menyelesaikan task).
3. **Verification loop** (langkah di mana agen memverifikasi hasil sebelum menyatakan tugas selesai).

## 1. Loop Tinjauan PR Otomatis

Agen membaca diff pada Pull Request, menjalankan test unit lokal, mengecek styling linter, dan meninggalkan komentar berupa saran perbaikan kode yang spesifik.

```typescript
async function runPrReviewLoop(prNumber: number) {
  const diff = await fetchPrDiff(prNumber);
  const lintResults = await runLinter();
  
  const evaluation = await model.evaluate({
    diff,
    lintResults,
    prompt: "Identifikasi potensi memory leak atau security vulnerability."
  });

  if (evaluation.hasCriticalIssues) {
    await postReviewComments(prNumber, evaluation.issues);
  }
}
```

## 2. Loop Diagnosis Insiden & Error Logging

Ketika Sentry atau Datadog memicu error spike, bot otomatis mengumpulkan stack trace, mencari commit terakhir yang menyentuh file terkait, dan memberikan hipotesis akar masalah (*root cause*).

## Ringkasan

Membangun agentic workflow yang efektif bukanlah tentang memberikan kebebasan tak terbatas kepada LLM, melainkan mendesain rel pelindung (*guardrails*) dan kriteria penyelesaian yang terukur.
