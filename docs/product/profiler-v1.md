# Delfa Profiler V1

- Version: `0.2.0`
- Date: `2026-03-09`
- Status: `Working product spec`
- Depends on:
  - `docs/research/market-and-relationship-research.md`

## 1. Goal

Design a profiler that:

- gets enough signal fast to produce meaningful first matches
- improves match quality as users complete more of it
- feels rewarding and lightweight rather than laborious
- captures honest behavior, preferences, and relationship patterns instead of idealized self-description

## 2. Design Principles

### 2.1 High signal per question

Each question should capture multiple useful dimensions at once:

- eligibility
- long-term compatibility
- communication style
- pacing
- attachment pattern
- commitment behavior
- stress coping
- lifestyle fit
- attraction pattern

### 2.2 Honest answers over "correct" answers

Avoid virtue-signaling questions like:

- "Are you a good communicator?"
- "How emotionally mature are you?"
- "How well do you handle conflict?"

Prefer:

- recent-behavior questions
- forced tradeoffs
- scenario choices
- ranking exercises
- pairwise profile comparisons
- private calibration questions whose answers are not shown publicly
- question pairs that assess the same domain from different angles without sounding repetitive

### 2.3 Progressive profiling

The profiler should not be a single long intake flow.

It should be:

- `Basics` first
- `4 optional deeper sections` completed over time
- refined by likes, skips, chat behavior, and graceful disconnect feedback

### 2.4 Public vs private signal separation

Some answers should shape eligibility and compatibility but remain private.

Examples:

- attachment-pattern questions
- attraction calibration cards
- intimacy questions
- private dealbreakers

## 3. Completion Model

## 3.1 Basics

- Goal: enough signal to start surfacing strong first matches
- Target time: `3-5 minutes`
- Target interaction count: `9-10 screens`

## 3.2 Deeper Sections

Users can complete these in any order after Basics:

1. `Life Direction`
2. `Communication and Repair`
3. `Emotional Style and Security`
4. `Lifestyle, Intimacy and Chemistry`

Each section should take roughly `4-6 minutes` and be pausable.

## 3.3 User motivation

The app should make the value exchange explicit:

- "You can start matching now."
- "Each completed section improves match accuracy."
- "More detail means better fit, fewer dead-end chats, and clearer compatibility explanations."
- "The profiler gets sharper as Delfa learns how you handle closeness, pressure, and attraction in real life."

## 4. Basics Segment

## 4.1 What Basics must accomplish

Basics must provide enough data to support:

- match eligibility
- first-pass compatibility ranking
- first-pass conversation guidance
- basic intent alignment
- early attraction calibration
- first-pass responsiveness and attachment signal

## 4.2 Basics question set

### B1. Match scope

- Type: multi-control setup screen
- Question:
  - "Who are you open to dating right now?"
  - "What age range feels right?"
  - "How far are you realistically open to dating?"
- Captures:
  - eligibility
  - logistics
  - immediate pool definition
- Honesty design:
  - practical framing
  - asks what is realistic right now, not what sounds open-minded

### B2. Relationship direction

- Type: single-select
- Question:
  - "If dating goes well, what are you hoping it becomes?"
- Answer options:
  - life partner / marriage
  - serious long-term relationship
  - committed relationship, open to where it leads
  - still figuring it out
- Captures:
  - intent
  - readiness
  - commitment direction
- Honesty design:
  - future-outcome framing
  - avoids moralizing seriousness

### B3. Core life anchors

- Type: choose up to 3
- Question:
  - "Which of these need to align early for you to take someone seriously?"
- Answer pool:
  - children
  - religion / spirituality
  - monogamy / relationship structure
  - politics / worldview
  - sobriety / substances
  - geography / relocation
  - ambition / work pace
  - finances / spending style
  - physical affection
- Captures:
  - early non-negotiables
  - values salience
  - likely dealbreakers
- Honesty design:
  - tradeoff format forces prioritization

### B4. Family and relationship structure

- Type: compact two-part screen
- Question:
  - "Do you want children?"
  - "What relationship structure are you looking for?"
- Answer examples:
  - definitely want / open / unsure / do not want / already have and want more / already have and do not want more
  - monogamous / open to ethical non-monogamy / non-monogamous / unsure
- Captures:
  - major compatibility filters
  - family direction
  - structure alignment
- Honesty design:
  - practical, non-judgmental wording

### B5. Pace and availability

- Type: scenario-based single-select
- Question:
  - "When you are genuinely excited about someone, what pace feels most natural in the first 6 weeks?"
- Answer examples:
  - frequent texting and meeting quickly
  - steady messaging with one date a week
  - slower build with room to think
  - intense chemistry first, commitment later
- Captures:
  - dating rhythm
  - pacing compatibility
  - early attachment behavior
- Honesty design:
  - asks about actual rhythm preference, not ideal commitment values

### B6. Partner priorities

- Type: rank top 4
- Question:
  - "What matters most once attraction is there?"
- Answer pool:
  - emotional steadiness
  - communication
  - humor
  - kindness
  - shared values
  - ambition
  - curiosity
  - reliability
  - physical chemistry
- Captures:
  - hierarchy of partner preferences
  - values vs chemistry weighting
- Honesty design:
  - requires tradeoffs instead of allowing everything to be "very important"

### B7. Positive-event responsiveness

- Type: scenario-based single-select
- Question:
  - "Someone you are dating opens up about something they feel insecure about. What do you naturally do first?"
- Answer examples:
  - listen closely and help them feel understood
  - try to make it feel lighter or easier
  - share something similar from my own life
  - feel unsure what to do and shift the conversation a bit
- Captures:
  - responsiveness
  - empathy under vulnerability
  - emotional engagement
- Honesty design:
  - behavior-first framing
  - no answer reads as obviously "correct"

### B8. Uncertainty response

- Type: scenario-based single-select
- Question:
  - "You are excited about someone and they go quiet for two days. What is your default move?"
- Answer examples:
  - check in directly
  - give them space and wait
  - assume interest dropped and pull back
  - get anxious and look for reassurance
- Captures:
  - attachment signal
  - communication habit
  - tolerance for ambiguity
- Honesty design:
  - asks for default move, not best practice

### B9. Lifestyle snapshot

- Type: forced-choice tiles
- Question:
  - "Which weekend feels most like you?"
- Answer tiles:
  - dinner party and slow morning
  - outdoors and early nights
  - spontaneous city plans
  - gym / errands / reset
  - culture / travel / activity
  - homebody recharge
- Captures:
  - social energy
  - daily rhythm
  - lifestyle fit
- Honesty design:
  - indirect behavioral signal

### B10. Attraction calibration

- Type: private pairwise card exercise
- Question:
  - "Which profile would you be more curious to explore?"
- Format:
  - 6 to 10 fast pairwise comparisons across style, energy, presentation, and vibe
- Captures:
  - attraction patterns
  - visual preferences
  - presentation preferences
- Honesty design:
  - no guilt-inducing direct exclusion wording
  - behaviorally closer to real selection than text self-report
- Guardrail:
  - this should remain private and must not become blunt public filters for protected traits

## 4.3 Basics output

After Basics, Delfa should be able to compute:

- eligibility set
- first-pass intent match score
- life-anchor alignment score
- pace compatibility score
- responsiveness signal
- lifestyle fit estimate
- early attraction estimate

## 5. Deeper Section 1: Life Direction

- Goal: deepen alignment on the life users want to build
- Target time: `4-5 minutes`

### Topics

- marriage meaning
- children and parenting
- religion / spirituality
- politics / worldview salience
- finances and spending style
- ambition and work-life tradeoffs
- geography and relocation
- home / travel / routine preferences

### Example questions

- "Which future mismatch would be hardest to compromise on?"
- "What matters more to you in a long-term partner: emotional steadiness, shared ambition, or shared values?"
- "When money gets tight, what usually changes first for you?"
- "Which sounds more like you: build a stable home base, stay open to big moves, or decide case by case?"
- "How important is it that a partner shares your religious or spiritual outlook?"

### Honesty design

- use future tradeoffs instead of moralized yes/no items
- ask for likely behavior under pressure, not ideals

## 6. Deeper Section 2: Communication and Repair

- Goal: understand how a person creates connection, handles friction, and repairs after strain
- Target time: `4-6 minutes`

### Topics

- bids for connection
- texting and call preferences
- apology and repair style
- criticism and defensiveness
- conflict pacing
- positive-event responsiveness
- humor and playfulness

### Example questions

- "After a disagreement, what do you usually need first: space, reassurance, problem-solving, or lightness?"
- "Which feels worse to you: being pushed to talk too soon or being left in silence too long?"
- "When you realize you were wrong, what do you most often do next?"
- "What kind of humor feels connecting in a relationship?"
- "If a conversation starts feeling tense, what do you most often do?"

### Honesty design

- recent-behavior wording
- imperfect-option tradeoffs
- response options that reflect real conflict styles instead of virtue labels

## 7. Deeper Section 3: Emotional Style and Security

- Goal: measure attachment-related tendencies and emotional regulation without clinical labeling
- Target time: `4-6 minutes`

### Topics

- closeness vs independence
- reassurance needs
- jealousy / threat sensitivity
- vulnerability pace
- trust formation
- emotional recovery
- consistency under stress

### Example questions

- "When a relationship starts becoming important, what changes in you first?"
- "Which feels more natural: needing frequent reassurance, giving a lot of space, or balancing both depending on context?"
- "How long do you usually stay upset after relational tension?"
- "What makes it easiest for you to trust someone?"
- "Which feels more uncomfortable: emotional intensity too early or emotional distance for too long?"

### Honesty design

- no attachment-theory labels shown to the user
- focus on felt tendencies and behavior

## 8. Deeper Section 4: Lifestyle, Intimacy and Chemistry

- Goal: refine fit on daily compatibility, affection, sexuality, and attraction
- Target time: `4-6 minutes`

### Topics

- affection style
- sexual values and boundaries
- exclusivity and flirting norms
- social rhythm
- substance use and wellness habits
- novelty vs routine
- attraction and chemistry calibration

### Example questions

- "How important is physical affection in feeling close to someone?"
- "Which mismatch is hardest for you: libido, affection, exclusivity, or communication around sex?"
- "What usually makes chemistry grow for you: safety, banter, mystery, admiration, or physical pull?"
- "Which feels more like you in a relationship: ritual and routine, novelty and spontaneity, or a mix?"
- "What makes a connection feel real to you fastest?"

### Honesty design

- keep intimacy questions private by default
- use sliders, ranges, and tradeoffs instead of blunt labels

## 9. Honesty Mechanisms Built Into The Profiler

These rules should shape question writing across all sections:

1. Ask about `recent behavior` before asking about beliefs.
2. Use `forced tradeoffs` so users cannot rate everything highly.
3. Use `scenario questions` where each option sounds plausible.
4. Keep sensitive questions `private unless clearly useful to display`.
5. Re-ask key constructs in different forms over time.
6. Learn from `likes, skips, chat behavior, and graceful disconnect feedback`.
7. Never punish users for nuance or uncertainty.

## 10. Reward Design

Profiler completion should feel useful, not dutiful.

Recommended UX:

- show a `match quality meter`
- unlock a short explanation after each section:
  - "Your next matches will improve on communication fit"
  - "Your next matches will better reflect your lifestyle and future plans"
- let users skip and return without penalty
- use short modules with visible progress

## 11. Matching Use Of Profiler Data

### Basics should drive

- eligibility
- first match ranking
- first conversation prompts
- visible compatibility reasons

### Deeper sections should improve

- scoring confidence
- mismatch detection
- pacing fit
- conflict-style fit
- attachment fit
- attraction and intimacy fit

## 12. What Delfa Should Not Do

- do not ask users to complete a giant one-time questionnaire before they get value
- do not rely on self-congratulatory ratings
- do not expose sensitive private calibration answers as public labels
- do not make attraction capture feel accusatory or shame-based
- do not treat the profiler as complete without interaction-stage learning
