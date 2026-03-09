# Delfa Post-Date Learning V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready outcome-learning spec`

## 1. Goal

Turn real-world date outcomes into the strongest learning signal in Delfa.

The post-date system should answer:

- did they meet?
- did they want to see each other again?
- did chemistry grow, hold, or fade?
- what broke if it did not continue?

## 2. Core Rules

1. `Keep it short`
   The reflection should take under a minute.

2. `Keep it private`
   Post-date answers are for learning and user choice, not for sharing with the other person.

3. `Measure outcome, not engagement`
   A date that goes nowhere still teaches more than a long chat that never meets.

## 3. Reflection Timing

Trigger window:

- `18-36` hours after a date is recorded or likely completed

If a date was planned but the users mark that it did not happen:

- route into a lighter reflection
- capture no-show and logistics separately from chemistry

## 4. Required Questions

1. `Did you meet?`
   - yes
   - not yet
   - no
   - they did not show

2. `Would you want to see them again?`
   - yes
   - maybe
   - no

3. `How did in-person chemistry feel compared with the app impression?`
   - weaker than expected
   - about what I expected
   - stronger than expected

4. `How easy did conversation feel in person?`
   - easy and natural
   - mixed
   - effortful

5. `If not continuing, what was the main reason?`
   - attraction
   - conversation
   - values
   - lifestyle
   - timing
   - logistics
   - safety / comfort

## 5. Learning Rules

Examples:

- `yes` to seeing them again strengthens the pairing logic that created the match
- `stronger than expected` boosts trust in attraction and interaction priors
- `weaker than expected` weakens attraction confidence in similar candidate profiles
- `conversation felt effortful` should affect communication and pace assumptions
- `values` or `lifestyle` mismatch should refine those dimensions more than attraction
- `no-show` should affect reliability and readiness handling, not chemistry learning

## 6. User-Facing Outcome Paths

If both users choose `yes`:

- move toward `continuing`

If one or both choose `maybe`:

- allow the match to remain open briefly or close gracefully

If one or both choose `no`:

- encourage graceful close
- do not expose the private reason to the other person

## 7. Guardrails

- do not make users write essays
- do not share private rejection reasons
- do not punish ambiguous outcomes too aggressively
- separate chemistry failure from logistics failure

## 8. Success Criteria

The post-date loop is working when:

- reflection completion rate is healthy
- second-date rate becomes measurable and improvable
- attraction and communication models improve from real outcomes
- first-match quality improves over time without relying on more swiping
