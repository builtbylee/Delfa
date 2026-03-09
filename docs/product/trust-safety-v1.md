# Delfa Trust and Safety V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready trust and safety operating spec`

## 1. Goal

Make trust and safety core infrastructure, not an afterthought.

## 2. Core Rules

1. `Safety overrides lifecycle`
   Block, report, and immediate exit must work from any state.

2. `Trust should be staged`
   Require enough verification to reduce fake inventory without making onboarding feel punitive.

3. `Date safety is product value`
   Safety tools should be integrated into the date flow.

## 3. Verification Model

Recommended stages:

1. `Account integrity`
   - unique phone/email
   - device abuse checks
   - duplicate-account detection

2. `Basic authenticity`
   - selfie/liveness
   - photo consistency check

3. `Optional stronger verification`
   - government ID or equivalent, where available
   - used for stronger trust tier, not as a universal hard requirement at signup

## 4. Trust Tiers

- `baseline`
  - account created, limited trust

- `verified`
  - basic authenticity completed

- `verified_plus`
  - stronger verification completed

- `restricted`
  - account under safety limitation

## 5. Report Categories

- harassment or abuse
- scam or fake profile
- hate or discrimination
- sexual pressure
- coercive off-platform pressure
- underage concern
- no-show or bad-faith behavior
- safety concern before or during date

## 6. Enforcement Actions

- warning
- feature limitation
- match freeze
- suspension
- permanent ban

Repeat-offender prevention should use:

- device and account integrity checks
- media and liveness checks
- reviewer notes for launch-mode manual ops

## 7. Date Safety

The before-we-meet flow should include:

- trusted contact sharing
- check-in reminder
- venue and timing details
- clear path to safety guidance

## 8. User-Facing Safety Surfaces

Minimum V1 surfaces:

- trust and safety hub
- report and block from every match state
- verification status in profile context
- date safety options in before-we-meet

## 9. Guardrails

- do not expose sensitive identity data publicly
- do not rely on background checks as a primary safety strategy
- do not bury reporting behind too many taps
- do not treat safety as only a moderation back-office concern

## 10. Success Criteria

The trust/safety system is working when:

- fake or low-trust inventory is reduced
- users understand what verification means
- report handling is fast enough to protect trust
- date safety tools are used without killing conversion
