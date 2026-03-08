# Delfa

Delfa is a relationship-first dating app designed to replace swipe fatigue with one high-quality match at a time.

## Core Product Principles

- One active match at a time
- Progressive profiling instead of a long upfront questionnaire
- Data-backed compatibility focused on long-term relationship outcomes
- Graceful disconnects instead of ghosting
- Incentives for effort, honesty, and follow-through

## Repository Structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── apps/
│   ├── api/
│   └── mobile/
├── docs/
│   ├── product/
│   └── research/
├── packages/
│   └── shared/
├── CHANGELOG.md
├── CLAUDE.md
├── ISSUES.md
├── README.md
├── RELEASE_MANIFEST.md
└── TECHNICAL_MANUAL.md
```

## Documentation

- `README.md`: repo overview and working conventions
- `TECHNICAL_MANUAL.md`: product and architecture blueprint
- `docs/product/profiler-v1.md`: first structured profiler spec and question architecture
- `docs/research/market-and-relationship-research.md`: evidence base for product and profiler decisions
- `docs/research/dating-app-strengths.md`: verified strengths from current dating apps worth adapting for Delfa
- `CHANGELOG.md`: chronological project changes
- `ISSUES.md`: current product and engineering backlog
- `RELEASE_MANIFEST.md`: release scope and version tracking
- `CLAUDE.md`: project context and recently completed work

## Initial Scope

This repository is currently documentation-first. The next implementation phase should use the architectural constraints defined in `TECHNICAL_MANUAL.md`.
