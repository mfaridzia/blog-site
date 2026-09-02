---
title: "urql request deduplication leaked one user's data to another"
description: "urql dedupes queries by hash(query + variables), and auth headers aren't in the key. The Next.js concurrency bug that leaked one user's data to another."
pubDate: 2026-06-10
cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=80&w=1200"
coverAlt: "Server rack illuminated in low light"
topics: ["Web", "Frontend", "Debugging"]
featured: false
readingTime: "6 min read"
lang: "en"
---

In high-concurrency server-rendered architectures with Next.js, in-flight request deduplication is a standard optimization. However, when the cache key neglects the authentication context, data leakage vulnerabilities can emerge.

## Anatomy of the Incident

By default, urql identifies duplicate in-flight GraphQL queries by hashing only the document query string and serialized variables:

```typescript
// Default operation key calculation:
const operationKey = keyDocument(query) + JSON.stringify(variables);
```

When User A and User B execute `getCurrentUserProfile` nearly simultaneously on the same server process, the second request coalesces into the first in-flight promise.

Consequently, User B receives the data payload intended exclusively for User A.

```typescript
// Fix: Bind authentication headers to the operation key
import { makeOperation } from '@urql/core';

const customExchange = ({ forward }) => (operations$) => {
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

## Key Takeaways

Never share cross-user promise singletons on the server runtime without guaranteeing per-request isolation.
