---
title: "How I got started with Grok Bot"
description: "Grok Bot gives you a team of always-on agents sharing one cloud computer. Here are the six I run and the rules that kept the desk from sprawling."
pubDate: 2026-08-15
cover: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?fm=jpg&q=80&w=1200"
coverAlt: "A workshop wall with hand tools hung in neat rows"
topics: ["Web", "AI"]
featured: true
readingTime: "5 min read"
lang: "en"
---

Grok Bot shipped in mid-August 2026. Four days later there are six bots on my desk. I started with one, gave it a real job, and added a specialist each time a second lane kept showing up.

The setup takes about ten minutes, and every other post covers that part. What I want to write down is the shape the desk settled into, and the two rules that kept it from turning into a junk drawer.

## What Grok Bot actually is

Think of them as assistants that don't stop when you close the laptop. Each bot keeps its thread, remembers how you like the work, and carries on while you're asleep.

The part that makes them different from a chat window is that **they share a computer in the cloud.** Not a metaphor. An actual machine with a browser, a terminal, and a filesystem.

```bash
# Example agent routine setup
$ grok-bot routine create --name "daily-briefing" \
  --schedule "0 8 * * *" \
  --prompt "Summarize top priority GitHub issues and today's schedule"
```

When a job needs a site with no clean API and no MCP server, the bot opens it in the browser and drives it the way a person would.

## One bot, one job

Create the bot from the plus button. Name it after the job, not the model. The description is the job spec, and one line is enough.

```typescript
interface AgentSpec {
  role: string;
  scope: string[];
  guardrails: string[];
}

const signalMonitor: AgentSpec = {
  role: "Signal Monitor",
  scope: ["Hacker News", "X", "Reddit"],
  guardrails: ["Only summarize discussions with >50 comments", "Skip self-promotions"]
};
```

Then give it real work. Not "what can you do." Something you were going to do tonight anyway:
1. Read tomorrow's calendar and prioritize.
2. Pull the 20% core insight from a long essay.
3. Draft the post you keep putting off.

The rule I'd hand anyone starting today: **add the next bot when a second lane keeps showing up, not before.**

## The desk as of this week

Six bots, mid-August 2026:

- **Chief of Staff**: Knows the week. Calendar, the mail that actually needs me, and the rules the other bots are supposed to follow.
- **Signal Monitor**: What's being argued about in the places I already read: X, Hacker News, Reddit.
- **Newsletter & Blog Editor**: Long-form and editorial drafts, tuned to my natural writing tone.
- **Summarizer**: Pulls the 20% worth keeping and shows how it applies to current problems.
- **Stocks**: News on holdings, adjustments, and market data synthesis.
- **Code Specialist**: Side project work and dependencies upgrades.

## Routines and when to make one

When you've asked for the same thing three times, save it as a routine. Daily news on your holdings, a morning pass over GitHub issues.

> "Three is roughly where I've landed, and the reason is that below it you're automating something you don't understand yet."

## Getting started

1. Download the app and sign in with your account.
2. Create one bot. Put the job in the description, including what it must **not** do.
3. Text it real work from this week.
4. Connect plugins progressively as needed.
5. Save a routine only after you've asked for the same thing three times.
