# Delfa Profiler User Flows V1

- Version: `0.1.0`
- Date: `2026-03-08`
- Status: `Implementation-ready draft`

## 1. Goal

Define the primary UI flows needed to turn the profiler into a real product experience.

## 2. Flow 1: New User Onboarding Into Basics

1. User signs up.
2. User sees the profiler promise:
   - one line on why Delfa asks these questions
   - one line on how it improves match quality
   - one line that Basics is short and they can deepen later
3. User enters Basics.
4. User sees one question per screen.
5. User sees lightweight progress.
6. User completes Basics.
7. User sees:
   - "You can start matching now"
   - a short explanation of what was learned
   - a prompt to complete another section later

## 3. Flow 2: Save and Resume

Rules:

- autosave after every response
- user can exit at any time
- resume should reopen on the last unanswered question
- deeper sections can be completed in any order

## 4. Flow 3: Section Unlock and Motivation

After Basics, show four cards:

- Life Direction
- Communication and Repair
- Emotional Style and Security
- Lifestyle, Intimacy and Chemistry

Each card should show:

- estimated time
- what match quality improves
- progress state

## 5. Flow 4: Question Component Patterns

### Pattern A: single-select scenario

- prompt
- optional helper text
- 4 plausible options
- continue button only after selection

### Pattern B: ranked-choice priorities

- drag or tap ranking
- minimum required selections visible up front
- concise confirmation state

### Pattern C: pairwise attraction cards

- two cards
- choose one
- quick progress indicator
- no labels that moralize the decision

### Pattern D: compound setup screen

- used only where grouping lowers friction
- examples:
  - match scope
  - family and relationship structure

## 6. Flow 5: Section Completion Summary

At the end of each section, show:

- a short "what this improves" summary
- one or two compatibility dimensions strengthened
- prompt to return to matching or continue profiling

Example:

- "Your next matches will be better tuned for communication pace and conflict style."

## 7. Flow 6: Profile Preview and Privacy

The user must understand:

- what is visible on their profile
- what is used privately for matching
- what is sensitive and never displayed

Recommended UI:

- `Visible on profile`
- `Used privately for better matching`
- `Private and never shown`

## 8. Flow 7: Match-Stage Calibration

After a match is live, Delfa should continue gathering signal:

- guided prompts
- response quality
- pace consistency
- voice note usage
- graceful disconnect feedback

This should feed calibration without forcing obvious "rate this person" forms too early.

## 9. Flow 8: Answer Editing

Rules:

- users can edit answers any time
- editing a major compatibility answer should trigger:
  - recompute notice
  - explanation if it affects future matches
- some changes may not affect an already active match until that match ends

## 10. Key Screen List

Minimum screens for MVP:

- profiler intro
- Basics question screens
- Basics completion screen
- deeper-section hub
- section question screens
- section completion screens
- privacy explanation screen
- profile preview screen

## 11. UX Constraints

- no long scroll forms
- no giant matrix questionnaires
- no clinical language
- no moralizing answer labels
- no hidden save behavior

## 12. Open Questions

- Should Basics completion show a compatibility radar immediately or wait until first matches?
- Should deeper sections be recommended adaptively based on weak-confidence dimensions?
- Should the attraction calibration exercise appear in Basics or immediately after Basics as a near-required follow-up?

