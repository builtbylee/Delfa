# Delfa Match Lifecycle V1

- Version: `0.4.0`
- Date: `2026-03-09`
- Status: `Canonical revised V1 lifecycle spec`

## 1. Purpose

This document defines Delfa's canonical match lifecycle.

It is the source of truth for:

- match states
- state transitions
- timeouts
- getting-to-know-you thresholds
- exit rules
- next-match unlock rules
- ready-to-meet behavior
- post-date handling
- safety overrides

## 2. Lifecycle Principles

The lifecycle must reflect Delfa's product ethos.

Core rules:

1. `One active match at a time`
   Users should focus attention rather than juggle parallel low-investment chats.

2. `Soft commitment, never forced commitment`
   Users should always be able to leave immediately. Higher-quality closure is encouraged, not required.

3. `Interaction over static profiles`
   The match should become clearer through a short guided interaction path, normal conversation, and reflection.

4. `No limbo by default`
   Matches should not drift indefinitely. The lifecycle should nudge toward progression, closure, or timeout.

5. `Safety overrides everything`
   Report, block, and immediate exit must be available in every state.

6. `Reward good-faith follow-through`
   Users who engage honestly and close respectfully should get better next-match outcomes than users who repeatedly disappear or churn instantly.

## 3. Canonical States

## 3.1 `matched`

The match has been created and surfaced to both users.

User-facing meaning:

- the match exists
- Basics and immediate profile data are visible
- round 1 of the guided interaction path is available

## 3.2 `discovery_active`

The match is in the guided exploration phase.

User-facing meaning:

- both users can chat
- both users can complete a short three-round interaction path
- compatibility confidence can improve

## 3.3 `ready_to_meet_pending`

One user has privately indicated readiness to meet, but the other has not yet done so.

User-facing meaning:

- only the user who signaled sees their own status
- the other user is not told that readiness has already been signaled

## 3.4 `ready_to_meet_mutual`

Both users have privately indicated readiness to meet.

User-facing meaning:

- Delfa reveals mutual readiness
- the before-we-meet protocol becomes available

## 3.5 `date_planning`

The match is actively using the before-we-meet protocol and/or setting up an in-person date.

User-facing meaning:

- mutual expectations check
- safety setup
- date logistics

## 3.6 `post_date_reflection`

A date has likely happened or been scheduled to happen, and Delfa is collecting private reflection data.

User-facing meaning:

- both users can privately indicate whether they want to continue
- both users can close gracefully

## 3.7 `continuing`

Both users have indicated they want to keep seeing each other.

User-facing meaning:

- this remains the user's active connection
- no new match is surfaced
- Delfa reduces structure and allows a more natural continuation

## 3.8 `closed_early`

The match was ended before the graceful-disconnect threshold was reached.

User-facing meaning:

- users could leave without being trapped
- closure is minimal
- calibration data is lighter

## 3.9 `closed_gracefully`

The match was ended after minimum meaningful interaction and used structured closure.

User-facing meaning:

- respectful closure
- better feedback
- richer future calibration

## 3.10 `timed_out`

The match ended due to inactivity or failure to progress.

User-facing meaning:

- the app closed the match because it stalled

## 3.11 `safety_closed`

The match ended because of block, report, abuse handling, or trust-and-safety intervention.

User-facing meaning:

- the match ended immediately
- normal lifecycle thresholds do not apply

## 4. Allowed Transitions

### 4.1 Standard flow

- `matched` -> `discovery_active`
- `discovery_active` -> `ready_to_meet_pending`
- `ready_to_meet_pending` -> `ready_to_meet_mutual`
- `ready_to_meet_mutual` -> `date_planning`
- `date_planning` -> `post_date_reflection`
- `post_date_reflection` -> `continuing`
- `post_date_reflection` -> `closed_gracefully`

### 4.2 Exit flow

- `matched` -> `closed_early`
- `discovery_active` -> `closed_early`
- `discovery_active` -> `closed_gracefully`
- `ready_to_meet_pending` -> `closed_gracefully`
- `ready_to_meet_mutual` -> `closed_gracefully`
- `date_planning` -> `closed_gracefully`
- `post_date_reflection` -> `closed_gracefully`
- `continuing` -> `closed_gracefully`

### 4.3 Timeout flow

- `matched` -> `timed_out`
- `discovery_active` -> `timed_out`
- `ready_to_meet_pending` -> `timed_out`
- `ready_to_meet_mutual` -> `timed_out`
- `date_planning` -> `timed_out`
- `post_date_reflection` -> `timed_out`

### 4.4 Safety flow

Any active state may transition immediately to:

- `safety_closed`

## 5. State Rules

## 5.1 `matched`

Entry:

- compatibility engine creates one active match only after the candidate clears Delfa's first-match quality floor
- during launch mode, optional founder or ops review can approve the first surfaced match

Allowed actions:

- open the match
- begin chat
- begin getting to know each other
- leave immediately
- block/report

Exit triggers:

- first meaningful interaction -> `discovery_active`
- no meaningful interaction within timeout window -> `timed_out`
- user exits -> `closed_early`

## 5.2 `discovery_active`

Entry:

- either user sends an opening message
- either user answers the first guided prompt

Allowed actions:

- complete round 1 voice prompt
- complete round 2 shared micro-experience
- complete round 3 deeper disclosure prompt
- chat
- use voice notes if enabled
- signal ready to meet
- leave now
- graceful disconnect if threshold met
- block/report

Exit triggers:

- one user signals ready -> `ready_to_meet_pending`
- immediate exit before threshold -> `closed_early`
- graceful disconnect after threshold -> `closed_gracefully`
- inactivity -> `timed_out`

## 5.3 `ready_to_meet_pending`

Entry:

- one user privately taps `I'm ready to meet`

Allowed actions:

- continue chatting and using the shared prompts
- other user may also signal ready
- either user may withdraw interest
- graceful disconnect
- block/report

Exit triggers:

- second user signals ready -> `ready_to_meet_mutual`
- graceful disconnect -> `closed_gracefully`
- inactivity -> `timed_out`

## 5.4 `ready_to_meet_mutual`

Entry:

- both users have privately signaled readiness

Allowed actions:

- begin before-we-meet protocol
- continue chatting
- date planning
- graceful disconnect
- block/report

Exit triggers:

- protocol starts -> `date_planning`
- graceful disconnect -> `closed_gracefully`
- inactivity -> `timed_out`

## 5.5 `date_planning`

Entry:

- mutual ready-to-meet has been revealed
- one or both users begin the before-we-meet flow

Allowed actions:

- complete expectations check
- use safety setup
- suggest or confirm date details
- close gracefully
- block/report

Exit triggers:

- planned date recorded or likely completed -> `post_date_reflection`
- graceful disconnect -> `closed_gracefully`
- inactivity -> `timed_out`

## 5.6 `post_date_reflection`

Entry:

- date planning completed
- expected date window passes

Allowed actions:

- privately indicate `continue`
- privately indicate `need more time`
- privately indicate `not a fit`
- graceful disconnect
- block/report

Exit triggers:

- both users choose `continue` -> `continuing`
- either user chooses `not a fit` -> `closed_gracefully`
- inactivity -> `timed_out`

## 5.7 `continuing`

Entry:

- both users indicate they want to keep seeing each other

Allowed actions:

- keep the connection active
- mark it no longer progressing
- gracefully close
- block/report

Exit triggers:

- either user ends the connection -> `closed_gracefully`

## 6. Guided Interaction Threshold Rules

## 6.1 Full graceful disconnect threshold

The full graceful-disconnect flow should unlock only after `minimum meaningful interaction`.

Default threshold:

- match active for at least `24 hours`
- and at least one mutual exchange in each direction
- and one of:
  - both completed `round 1`
  - both completed one guided phase and exchanged meaningful chat replies

Rationale:

- enough signal to justify reflective closure
- not so much friction that users feel trapped

## 6.2 Before threshold

Before threshold, users must still be able to leave immediately.

Available path:

- `Leave now`

Behavior:

- fast exit
- minimal shared closure
- lighter calibration

Optional prompt:

- Delfa may offer `Try one more guided interaction before closing`
- this must be skippable with one tap

## 7. Timeout Rules

## 7.1 Initial response timeout

If neither user engages within `72 hours` of match creation:

- send one reminder
- if still inactive by `96 hours`, move to `timed_out`

## 7.2 Discovery inactivity timeout

If a match in `discovery_active` has no mutual activity for `5 days`:

- send a gentle nudge
- if there is still no mutual activity within `48 hours`, move to `timed_out`

## 7.3 Ready-to-meet / planning timeout

If a match enters `ready_to_meet_pending`, `ready_to_meet_mutual`, or `date_planning` and stalls for `5 days`:

- send one nudge
- if still inactive within `48 hours`, move to `timed_out`

## 7.4 Reflection timeout

If `post_date_reflection` receives no response from either user for `4 days`:

- move to `timed_out`

## 8. Ready-to-Meet Rules

## 8.1 Availability

The `I'm ready to meet` control should appear only after:

- both users complete `round 2`
- or both users complete `round 1` and the system has at least `medium confidence` in:
  - `intent`
  - `life_direction`
  - `lifestyle`

After both users complete `round 3`, Delfa should nudge more directly toward deciding whether to meet.

## 8.2 Privacy

- one-sided readiness is private
- mutual readiness is revealed only when both users opt in

## 8.3 Reversal

Either user may withdraw readiness before a date is confirmed.

This returns the match to:

- `discovery_active`

## 9. Before-We-Meet Protocol

The protocol should contain three parts:

1. `Mutual expectations check`
   - what each person hopes this date will be

2. `Safety setup`
   - check-in timer
   - trusted contact options
   - venue guidance where relevant

3. `Practical planning`
   - time, place, format

## 10. Exit System

## 10.1 `Leave now`

Always available.

Use for:

- low interest
- no chemistry
- changed mind
- discomfort
- low effort

Behavior:

- immediate closure
- minimal shared signal
- never blocked by thresholds

## 10.2 `Graceful disconnect`

Available after minimum meaningful interaction.

Use for:

- genuine mismatch after some exploration
- values mismatch
- pace mismatch
- chemistry not growing
- communication mismatch

Behavior:

- structured shared closure
- richer private calibration

## 10.3 `Block / report`

Always available.

Behavior:

- immediate separation
- no threshold
- no further lifecycle checks

## 11. Next-Match Unlock Rules

## 11.1 General rule

A user becomes eligible for the next match only when the current match reaches a closed state:

- `closed_early`
- `closed_gracefully`
- `timed_out`
- `safety_closed`

or when the active connection is no longer continuing.

## 11.2 No punitive hard lock for honest exits

Delfa should not punish occasional early exits.

However:

- repeated very-early exits should reduce future confidence in the user's readiness and follow-through
- this should affect ranking cadence softly, not via explicit punishment screens

## 11.3 Better closure, better future matching

Users who consistently:

- engage in the shared prompts in good faith
- close respectfully
- complete post-date reflection

should benefit through:

- stronger calibration
- higher trust in their stated preferences
- better next-match precision

## 12. Safety Overrides

At every state, the following actions must bypass normal lifecycle logic:

- block
- report
- hide profile from the other user
- end match immediately

Safety logic always supersedes:

- getting-to-know-you thresholds
- ready-to-meet logic
- timeout timers
- next-match unlock friction

## 13. Data to Record

Every match should record:

- state transitions
- guided-phase completion counts
- voice-prompt completion counts
- shared micro-experience outcomes
- mutual exchange counts
- inactivity events
- nudges sent
- readiness signals
- before-we-meet completion
- reflection outcomes
- exit type
- closure reasons
- safety actions

## 14. Default Product Decisions

These are the decisions locked for V1:

- one active match at a time
- guided interaction should stay limited to `3` rounds
- round 1 should be voice-preferred with text fallback
- round 2 should be a shared micro-experience
- round 3 should be a slightly deeper reciprocal disclosure prompt
- graceful disconnect is encouraged, not forced
- users may always leave immediately
- full graceful disconnect unlocks after minimum meaningful interaction
- ready-to-meet is private until mutual
- ready-to-meet should appear as soon as there is enough signal, not only after long chat history
- matches should not sit in limbo for more than roughly one week without nudges and expiry
- the next match unlocks when the current one is properly resolved
- safety overrides all other lifecycle logic

## 15. Open Calibration Areas

These are intentionally left adjustable during testing:

- exact timeout durations
- exact guided-phase threshold values
- exact nudge timing
- exact cadence impact of repeated early exits
- exact conditions for readiness prompt appearance
