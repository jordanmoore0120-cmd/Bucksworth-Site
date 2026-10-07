---
name: meta-ads
description: Bucksworth Meta (Facebook/Instagram) ads — account IDs, pixel, current state and guardrails; methodology skills named meta-ads-* hold the frameworks. Use for any Meta ads question or proposal.
---

# Meta ads (Bucksworth)

Read `bucksworth-rules` first. All spend and copy rules apply, and the $10K/month total
ad cap is shared with Google.

## IDs (verified 2026-08-03; check live state before using)
- Business Manager "Bucksworth Services" `1290052128057621`; ad account
  `act_447288836342700`; Facebook Page `604181243364526`.
- Active pixel `1745744873282534` (the site tag; never add, remove or defer it without
  Jordan). Legacy pixel `447230506489002`: don't reuse it.
- History: about $30K lifetime spend. All campaigns were paused from about Feb 2025 when
  last checked.

## Access
- No Meta Ads connector for Claude yet. The Zapier Facebook Pages app needs a reconnect.
  Read-only analysis needs a Meta Ads connector, which is on the build list.

## Guardrails
- Any new campaign, budget or ad needs Jordan's approval first. Build everything PAUSED.
- No custom conversions existed when checked. Create them before optimizing for leads
  or phone clicks.
- Never paste raw Page payloads. They can contain access tokens.

## Methodology skills
`meta-ads-*` skills (audit, budget, bidding, creative strategy, audience, measurement,
compliance, structure, weekly review, launch). They were written for an agent with a
direct Meta API toolset, so translate the function names to whatever connector you
have. The frameworks still apply.
