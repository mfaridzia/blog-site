---
title: "Bug Deduplikasi Request URQL yang Membocorkan Data User"
description: "URQL melakukan deduplikasi query berdasarkan hash (query + variabel), dan auth headers tidak termasuk dalam key. Mengupas bug concurrency di Next.js yang kami temui."
pubDate: 2026-06-10
cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=80&w=1200"
coverAlt: "Server rack dengan lampu status jaringan"
topics: ["Web", "Frontend", "Debugging"]
featured: false
readingTime: "6 min read"
lang: "id"
---

Dalam sistem dengan konkurensi tinggi di Next.js Server Components, deduplikasi request adalah fitur penting untuk efisiensi. Namun jika cache key tidak memperhitungkan identitas user (*authentication context*), malapetaka data leak bisa terjadi.

## Anatomi Masalah

Secara default, implementasi deduplikasi URQL menganggap dua query GraphQL yang identik secara teks dan variabel adalah operasi yang sama persis:

```typescript
// Key komputasi default:
const operationKey = keyDocument(query) + JSON.stringify(variables);
```

Ketika User A (Admin) dan User B (Regular) meminta query `getCurrentUserProfile` pada millisecond yang berdekatan di server instance yang sama, request kedua bergabung (*coalesce*) ke promise request pertama yang sedang terbang.

Akibatnya, User B menerima respon profil milik User A!

```typescript
// Solusi: Sertakan Session / Auth Token dalam Key
import { makeOperation } from '@urql/core';

const authExchange = ({ forward }) => (operations$) => {
  return forward(
    operations$.map((op) => {
      const authHeader = op.context.fetchOptions?.headers?.Authorization || 'anon';
      return makeOperation(op.kind, {
        ...op,
        key: `${op.key}:${authHeader}`
      });
    })
  );
};
```

## Pelajaran Berharga

Jangan pernah membagikan (*share*) in-flight request cache di layer server tanpa isolasi per-session atau per-request context.
