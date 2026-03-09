# Delfa Profiler User Flows V1

- Version: `0.4.0`
- Date: `2026-03-09`
- Status: `Implementation-ready experience spec`

## 1. Goal

Define how the profiler should feel in use, not just how questions are stored.

The profiler should:

- feel lighter than a questionnaire
- return value as the user goes
- make section completion feel rewarding
- improve match confidence in ways the user can understand

## 2. Experience Principles

1. `Frame each section like a relationship moment`
   Users should feel like they are moving through a short scenario journey, not a survey block.

2. `Give something back after every section`
   Every completed section should end with a `Mirror Moment` and, when relevant, a confidence update.

3. `Show progress as clarity, not as homework`
   The UI should emphasize what Delfa now understands and what still needs more depth.

4. `Keep attraction calibration fast and premium`
   The pairwise experience should feel more like intuitive curation than deliberate form filling.

5. `Basics must earn a plausible first match`
   The first session should gather enough signal for Delfa to hold a quality bar on day one.

## 3. Flow 1: New User Onboarding Into Basics

1. User signs up.
2. User sees a short profiler promise:
   - "Delfa uses this to match for real compatibility, not just surface preferences."
   - "Basics is short. You can deepen the profile later."
   - "We'd rather wait a little than send you someone obviously wrong."
3. User enters a `Basics` intro frame:
   - eyebrow: `Start here`
   - headline: "Let’s begin with what you already know about yourself."
   - body: short explanation that Delfa will use this to start matching and identify what it still needs to learn
4. User moves through one question per screen.
5. The progress UI should show:
   - how far through Basics they are
   - one line that signals what kind of clarity this question adds
   - the specific core area being improved:
     - relationship direction
     - life goals
     - attraction fit
     - communication under pressure
     - practical date viability
6. After the final Basics question, Delfa shows:
   - `Compatibility Preview`
   - one private `Mirror Moment`
   - first-match search status
   - a clear "You can start matching now" CTA
    - a gentle nudge to deepen the profile over time

Basics should be strong enough to establish initial signal on:

- serious relationship intent
- children/family direction
- values/life anchors
- stress/communication style
- attraction calibration
- practical dating viability

## 4. Flow 2: Save and Resume

Rules:

- autosave after every response
- user can exit at any time
- resume should reopen on the last unanswered question
- deeper sections can be completed in any order
- the section intro frame should not repeat once the user is already in progress

## 5. Flow 3: Section Journey Framing

Each section should open with a short section-specific frame so the user enters a context, not a blank form.

Examples:

- `Life Direction`
  - "Fast-forward a few years. What kind of life are you actually building?"

- `Communication and Repair`
  - "Imagine things are going well with someone, and then real life happens."

- `Emotional Style and Security`
  - "When a connection starts to matter, something shifts inside."

- `Lifestyle, Intimacy and Chemistry`
  - "Attraction is not one thing. It is vibe, closeness, rhythm, and physical pull."

Design rules:

- intro copy should fit on one screen
- no more than `2-3` short text blocks
- each section should have a distinct tone
- the framing should help users answer honestly by imagining a real situation

## 6. Flow 4: Question Component Patterns

### Pattern A: single-select scenario

- prompt
- optional helper text
- `4` plausible options
- continue button only after selection

### Pattern B: ranked-choice priorities

- drag or tap ranking
- minimum required selections visible up front
- concise confirmation state

### Pattern C: pairwise attraction cards

- two cards
- choose one with one tap
- subtle haptic feedback
- quick progress indicator
- no moralizing labels
- cards should vary by `presentation`, `energy`, `style`, and `setting`, not just face alone

### Pattern D: compound setup screen

- used only where grouping lowers friction
- examples:
  - match scope
  - family and relationship structure

## 7. Flow 5: Mirror Moments

At the end of each section, Delfa should show a short private insight that reflects back an honest pattern from the user’s answers.

This is a `Mirror Moment`.

Design rules:

- `1` insight only
- `2` short lines maximum
- no personality labels
- no flattery
- no clinical language
- should sound like observation, not diagnosis

Examples:

- "You seem to prefer steadiness over intensity."
- "You appear to orient toward emotional safety quickly."
- "Chemistry seems to grow for you through feel, not just visuals."

The Mirror Moment screen should also show:

- `1-2` compatibility dimensions strengthened
- CTA to continue profiling or return to matching

## 8. Flow 6: Profile Preview and Privacy

The user must understand:

- what is visible on their profile
- what is used privately for matching
- what is sensitive and never displayed

Recommended UI:

- `Visible on profile`
- `Used privately for better matching`
- `Private and never shown`

## 9. Flow 7: Compatibility Preview After Basics

After Basics, Delfa should show a short preview of what it already knows and what it still needs.

This is not a score.

It should show:

- `2-3` strong-signal dimensions
- `2-3` low-confidence dimensions
- the specific section that would improve each low-confidence area

Example:

- "Relationship direction: strong signal"
- "Conflict and repair: needs more depth"
- "Complete Communication and Repair to sharpen this"

Purpose:

- make Basics feel immediately useful
- motivate deeper sections without nagging
- build trust by being explicit about what Delfa knows and does not yet know

## 10. Flow 8: First-Match Search State

After Basics, if no candidate clears Delfa's first-match quality floor, the user should enter a visible `quality hold` state.

The screen should explain:

- Delfa is still looking for a match that clears the user's quality bar
- the app is deliberately protecting the first-match experience
- completing a deeper section can improve specific low-confidence areas

Recommended copy shape:

- headline: "We’re being picky on purpose."
- body: "We only surface your first match when attraction, intent, life fit, and date viability are strong enough to feel plausible."

Rules:

- do not present delay as a bug
- do not present a weak fallback match
- do not force deeper sections just to unlock matching
- if the search window extends, suggest the section most likely to improve a missing confidence area

## 11. Flow 9: Attraction Calibration Experience

The attraction calibration should feel premium and fast.

Rules:

- Basics attraction calibration should use `6-8` fast pairwise cards
- extended calibration should use `8-12` cards later
- cards should use synthetic or licensed assets, not real user media
- each pair should vary by no more than `1-2` big dimensions at a time
- the experience should optimize for instinctive choices, not overthinking

After calibration, Delfa may show one optional private line such as:

- "You tend to respond more to warmth than polish."

Constraint:

- this must remain private
- no public type labels
- no visible attraction score

## 12. Flow 10: Match-Stage Calibration

After a match is live, Delfa should continue gathering signal from:

- guided prompt responses
- voice participation
- shared micro-experience choices
- graceful disconnect feedback

This should refine compatibility and attraction confidence without forcing obvious rating forms.

## 13. Flow 11: Answer Editing

Rules:

- users can edit answers any time
- editing a major compatibility answer should trigger:
  - recompute notice
- explanation if it affects future matches
- some changes may not affect an already active match until that match ends

## 14. Flow 12: Ready-to-Meet Transition

Once both users privately indicate readiness to meet, Delfa should:

- reveal that readiness is mutual
- offer the before-we-meet protocol
- support planning the first date

## 14. Key Screen List

Minimum screens for MVP:

- profiler intro
- Basics intro frame
- Basics question screens
- Basics compatibility preview
- Basics mirror moment
- first-match quality-hold screen
- deeper-section hub
- section intro frames
- section question screens
- section mirror moment screens
- compatibility confidence view
- privacy explanation screen
- profile preview screen
- attraction calibration screens
- ready-to-meet state and before-we-meet screens

## 15. UX Constraints

- no long scroll forms
- no giant matrix questionnaires
- no clinical language
- no moralizing answer labels
- no hidden save behavior
- no single headline match score
- no gimmicky personality archetypes
- no feature that makes users feel trapped in a match

## 16. Open Questions

- Should Mirror Moments be generated only from answered questions or also from early behavioral calibration?
- Should the Basics compatibility preview appear before or after the attraction-calibration insight?
- Should extended attraction calibration be recommended adaptively when attraction confidence is weak?
