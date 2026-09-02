---
title: "Bagaimana Saya Memulai dengan Grok Bot"
description: "Grok Bot memberi Anda tim agen yang selalu aktif berbagi satu cloud computer. Berikut enam bot yang saya jalankan dan aturan agar tetap teratur."
pubDate: 2026-08-15
cover: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?fm=jpg&q=80&w=1200"
coverAlt: "Dinding workshop rapi dengan perkakas tertata di setiap gantungan"
topics: ["Web", "AI"]
featured: true
readingTime: "5 min read"
lang: "id"
---

Grok Bot dirilis pertengahan Agustus 2026. Empat hari kemudian, sudah ada enam bot di meja kerja saya. Saya memulainya dengan satu bot, memberikannya tugas nyata, dan menambahkan bot spesialis baru setiap kali ada kebutuhan alur kerja kedua yang terus berulang.

Penyiapannya hanya membutuhkan waktu sekitar sepuluh menit. Yang ingin saya catat di sini adalah bagaimana bentuk pembagian kerja yang terbentuk di workstation saya, serta dua aturan penting agar sistem ini tidak berubah menjadi laci perkakas yang berantakan.

## Apa Sebenarnya Grok Bot Itu

Bayangkan mereka sebagai asisten yang tidak pernah berhenti bekerja saat Anda menutup laptop. Setiap bot mempertahankan percakapannya, mengingat preferensi cara kerja Anda, dan terus melanjutkan tugas saat Anda sedang tidur.

Hal yang membuat mereka berbeda dari sekadar jendela chat biasa adalah **mereka berbagi satu komputer di cloud.** Ini bukan sekadar metafora, melainkan mesin nyata dengan browser, terminal, dan filesystem.

```bash
# Contoh konfigurasi agent routine sederhana
$ grok-bot routine create --name "daily-briefing" \
  --schedule "0 8 * * *" \
  --prompt "Ringkas issue GitHub prioritas tinggi dan jadwal kalender hari ini"
```

Ketika suatu pekerjaan memerlukan situs tanpa API publik dan tanpa server MCP, bot akan membukanya di browser dan mengoperasikannya seperti manusia biasa.

## Satu Bot, Satu Tugas (One Bot, One Job)

Buat bot baru melalui tombol plus. Beri nama sesuai pekerjaannya, bukan nama model AI-nya. Deskripsinya adalah spesifikasi kerja (*job spec*), dan satu kalimat singkat sudah cukup.

```typescript
interface AgentSpec {
  role: string;
  scope: string[];
  guardrails: string[];
}

const signalMonitor: AgentSpec = {
  role: "Signal Monitor",
  scope: ["Hacker News", "X", "Reddit"],
  guardrails: ["Hanya rangkum diskusi dengan >50 komentar", "Abaikan posting promosi diri"]
};
```

Beri bot pekerjaan yang nyata. Bukan sekadar pertanyaan acak "kamu bisa apa?", tetapi sesuatu yang memang akan Anda kerjakan malam ini:
1. Membaca kalender besok dan menyaring prioritas.
2. Mengekstrak 20% inti terpenting dari sebuah artikel panjang.
3. Membuat draf tulisan yang selalu Anda tunda.

Aturan emas yang saya pegang: **tambahkan bot berikutnya hanya ketika ada alur kerja kedua yang konsisten muncul, jangan sebelumnya.**

## Susunan Bot di Meja Kerja Saya

Berikut susunan enam bot yang aktif saat ini:

- **Chief of Staff**: Mengetahui agenda mingguan, kalender, email penting, dan aturan yang harus dipatuhi bot lainnya.
- **Signal Monitor**: Memantau topik yang sedang hangat diperdebatkan di komunitas teknis.
- **Newsletter & Blog Editor**: Membantu memoles draf panjang dan tulisan teknis agar tetap mempertahankan gaya bahasa personal.
- **Summarizer**: Meringkas laporan riset atau dokumentasi baru menjadi poin-poin yang dapat langsung ditindaklanjuti.
- **Stocks & Portfolio**: Analisis data pasar dan ringkasan portofolio.
- **Code Specialist**: Membantu eksplorasi kode side project dan pembaruan dependensi.

## Rutinitas: Kapan Harus Dibuat?

Ketika Anda mendapati diri Anda meminta hal yang sama sebanyak tiga kali, simpanlah sebagai sebuah *routine*.

> "Tiga kali adalah batas ideal. Di bawah angka itu, Anda mungkin mengotomatisasi sesuatu yang alurnya belum Anda pahami sepenuhnya."

## Langkah Memulai

1. Unduh aplikasi dan masuk dengan akun Anda.
2. Buat satu bot. Tulis tugasnya secara spesifik di deskripsi, termasuk hal-hal yang **tidak boleh** ia lakukan.
3. Beri tugas nyata dari pekerjaan Anda minggu ini.
4. Hubungkan plugin yang relevan secara bertahap.
5. Evaluasi dan simpan alur kerja yang sudah stabil sebagai rutinitas.
