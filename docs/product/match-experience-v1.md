# Delfa Match Experience V1

- Version: `0.3.0`
- Date: `2026-03-09`
- Status: `Detailed match interaction spec`

## 1. Purpose

This document defines how Delfa should help two matched users build real early chemistry without turning the app into a complicated process.

The core idea is:

- one active match
- a short guided interaction path
- faster clarity on whether the connection is promising
- quicker movement toward meeting when the signal is there

## 2. V1 Match Features To Keep

These are the match-stage features that remain in V1:

- one active match at a time
- voice-based guided prompts
- shared micro-experiences
- `2-3` rounds of reciprocal escalating disclosure
- graceful disconnect
- simple compatibility confidence by dimension
- private readiness check-in
- mutual ready-to-meet
- basic before-we-meet flow

## 3. Core Interaction Model

Every active match should move through a lightweight `three-round chemistry path`.

The path is designed to surface:

- warmth
- tone
- responsiveness
- shared vibe
- comfort with disclosure
- early chemistry

It should not feel like homework.

## 4. Round 1: Warmth and Voice

Purpose:

- break the ice faster than text
- capture voice, tone, warmth, pace, and humor
- establish whether the connection feels human

How it works:

- both users receive the same low-pressure prompt
- the default response mode is `voice preferred, text fallback`
- recommended voice length: `15-60 seconds`
- both responses are revealed only after both users respond

Example prompt:

- "What happened in the last week that lifted your mood or made you laugh?"

Why this round exists:

- voice adds warmth and social presence that text lacks
- it surfaces the feel of a person, not just the content of their answer
- it creates a more natural conversation handoff after reveal

Product rule:

- voice should be encouraged, not required
- text fallback must exist for accessibility and comfort

## 5. Round 2: Shared Micro-Experience

Purpose:

- create a small shared moment instead of more profile exchange
- approximate the feeling of reacting to the same thing in real time
- surface lifestyle rhythm and chemistry through shared stimulus

How it works:

- both users receive the same scene, choice set, or reaction prompt
- both answer privately
- results reveal simultaneously
- Delfa offers `1-2` carry-forward conversation prompts afterward

V1 micro-experience types:

1. `Shared reaction`
   - both react to the same scenario, image, or vibe

2. `Collaborative choice`
   - both choose between a few possible date or lifestyle options

3. `Values tradeoff`
   - both pick which tension matters more in a specific scenario

Example prompt:

- "You both have a free evening and no plans. Which version of it pulls you in more?"

Why this round exists:

- shared stimuli create richer signal than isolated self-description
- agreement is naturally energizing
- difference is still useful because it becomes real conversation material

## 6. Round 3: Deeper Disclosure

Purpose:

- move from vibe into early closeness
- surface how someone wants to be understood
- create a stronger chemistry read before meeting

How it works:

- both users receive a slightly more personal prompt
- voice is again preferred, text fallback allowed
- both answers reveal only after both respond
- Delfa provides follow-up prompts that help the conversation deepen naturally

Example prompt:

- "What is something people often assume about you too quickly that is not really true once they know you better?"

Design rule:

- round 3 should feel more personal than round 1, but still safe enough for early dating

## 7. Reciprocal Escalation Rules

The interaction path should escalate gently.

Round order:

1. `Warmth`
2. `Shared moment`
3. `Deeper disclosure`

Rules:

- both users must answer before reveal
- each round should feel like a natural next step from the previous one
- no round should require oversharing
- the whole sequence should still feel optional enough that users do not feel managed by the app

## 8. Faster Movement Toward Mutual Ready-To-Meet

Delfa should not make promising matches wait too long to move toward meeting.

The `I'm open to meeting` control should appear when either of these is true:

1. both users have completed `Round 2`
2. both users completed `Round 1` and the match already has at least `medium confidence` in:
   - intent
   - life direction
   - lifestyle fit

After `Round 3`, Delfa should nudge more directly:

- "You have enough signal to decide whether you would want to meet."

Why:

- faster movement reduces chat drift
- the app should help convert promising momentum into a real date
- users should not need endless messaging before a simple meeting signal is available

## 9. Compatibility Confidence in the Match Stage

Confidence should update from:

- profiler answers
- guided prompt completion
- voice participation
- shared micro-experience alignment
- graceful disconnect outcomes

What the user sees:

- simple dimension confidence
- no score
- no conversation grade
- no “you are 87% compatible” framing

What the system uses privately:

- interaction-stage reinforcement on chemistry, responsiveness, pace, and lifestyle fit

## 10. Graceful Disconnect in This System

Graceful disconnect remains essential.

Users should always have:

- `Leave now`
- `Graceful disconnect`
- `Block / report`

Guided interaction should never block exit.

However:

- completing one or more interaction rounds should unlock richer graceful-disconnect feedback
- that feedback should improve future matching and attraction calibration

## 11. Before-We-Meet Flow

Once readiness is mutual, Delfa should offer a lightweight three-part handoff:

1. `Expectations check`
2. `Safety setup`
3. `Date planning assist`

No more than that in V1.

## 12. V1 Interaction Rules

- no more than `3` guided rounds
- each round should have only `1` core prompt
- voice should be available but never forced
- each reveal should create real conversation, not replace it
- the system should privilege chemistry clarity over time-on-app
- faster movement to ready-to-meet is a feature, not a loophole

## 13. Features Deliberately Not Included

These remain out of V1:

- slow reveal profile mechanics
- live availability windows
- full video dates
- conversation scoring
- pattern-engine summaries
- relationship operating manual

## 14. MVP Priority Order

1. one active match at a time
2. round 1 voice-based guided prompt
3. round 2 shared micro-experience
4. round 3 deeper disclosure prompt
5. graceful disconnect
6. compatibility confidence by dimension
7. mutual ready-to-meet
8. basic before-we-meet flow
