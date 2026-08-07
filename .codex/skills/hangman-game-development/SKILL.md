---
name: hangman-game-development
description: Implement, review, or maintain features and fixes in the Hangman Game React repository. Use for gameplay, routing, responsive UI, accessibility, words, tests, Vite, GitHub Pages, CI, linting, and documentation changes in this repo.
---

# Hangman Game Development

Maintain the game as a small, dependency-light React 19 + TypeScript app. Preserve the pencil-style, responsive interface and the existing validation and deployment safeguards.

## Workaround

- Before every prompt analyzation and repo observation, pull latest changes for the branch.
- All features implement within new branch, and push changes to remote origin and create draft PR, if it's the first commit on the branch.

## Work in the existing architecture

- Keep game rules and word validation in `src/utils/`; add or update focused Vitest tests beside the utility.
- Keep screen-level orchestration in `src/views/` and reusable UI in `src/components/`. Place component styles in that component's `styled.ts` file.
- Pass a new game's word through React Router 7 location state. Validate that state in `HangmanGame` before rendering and redirect invalid or missing state to `/`.
- Prefix imperative `navigate` calls with `void` to satisfy the current router and linting setup.
- Use the local, alphabetically ordered `LOCAL_WORDS` list for random words. Accept custom words only when `isValidGameWord` allows 3–30 Latin letters.
- Make game UI changes keyboard-accessible: use real buttons/inputs, keep visible focus treatment, provide labels and relevant ARIA state, and prevent repeat guesses or guesses after a completed game.

## Respect deployment and tooling constraints

- Preserve `import.meta.env.BASE_URL` as the router basename and `/hangman-game/` as the Vite base path. Do not hard-code a root-only navigation assumption.
- Target Node `>=24.15 <25`. Keep `package-lock.json` synchronized with any dependency change.
- Follow the current TypeScript and Oxlint configuration, including arrow-function components and type-only imports.
- Prefer `styled-components` for component styling and retain the responsive layout at narrow widths.

## Verify changes proportionately

- For gameplay or validation changes, add or update tests for the behavior and edge case that motivated the change.
- Run `npm run check`, `npm run typecheck`, and `npm run test:ci` for code changes. Run `npm run build` when routing, Vite, dependencies, or deployment behavior changes.
- Before handoff, inspect the diff for accidental lockfile churn, broken formatting, and unintended edits. Update the README when setup, commands, game rules, or deployment behavior changes.

## Preserve demonstrated project preferences

- Favor contained fixes over broad rewrites.
- Keep interactions clear on both desktop and small screens.
- Keep the word list tidy and alphabetical.
- Treat review feedback about visual hierarchy, motion direction, and focus treatment as product requirements; adjust the smallest relevant style surface.
