# Hangman Game

A responsive, browser-based take on the classic Hangman word game. Start with a
random word from the built-in list or enter a custom word, then uncover it one
letter at a time using the on-screen keyboard.

## Gameplay

1. Choose **random** to play with a word from the local curated list, or choose
   **word** to enter your own.
2. Custom words must contain 3–30 Latin letters only—no spaces, numbers, or
   symbols.
3. Select letters from the keyboard. Correct guesses reveal every occurrence;
   guessed letters cannot be selected again.
4. Reveal the whole word to win. Six incorrect guesses end the game and reveal
   the word.

The UI uses semantic controls and accessible labels, including validation
feedback for invalid custom words and a modal result announcement when the game
ends. Opening the game route without valid game state safely returns to the
start screen.

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) `>=24.15 <25`
- npm (included with Node.js)

### Install and start

```bash
git clone https://github.com/kxzws/hangman-game.git
cd hangman-game
npm ci
npm start
```

The development server is available at
[http://localhost:5173/hangman-game/](http://localhost:5173/hangman-game/),
which mirrors the production GitHub Pages path.

## Commands

| Command                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm start`            | Starts the Vite development server.                  |
| `npm run build`        | Type-checks and creates the optimized `dist/` build. |
| `npm run preview`      | Serves the production build locally.                 |
| `npm test`             | Starts Vitest in watch mode.                         |
| `npm run test:ci`      | Runs the Vitest suite once.                          |
| `npm run lint`         | Lints source files with Oxlint.                      |
| `npm run lint:fix`     | Applies available Oxlint fixes.                      |
| `npm run format`       | Formats the project with Prettier.                   |
| `npm run format:check` | Checks formatting without writing files.             |
| `npm run check`        | Runs formatting and lint checks.                     |
| `npm run typecheck`    | Checks TypeScript without emitting files.            |

## Stack and tests

- React 19, TypeScript, and React Router 7
- Vite 8 with the React plugin
- styled-components with Sass for global styles
- Vitest, jsdom, and React Testing Library
- Oxlint and Prettier
- GitHub Actions for pull-request quality checks and GitHub Pages deployment

The test suite covers word validation, game-status utilities, custom-word form
validation, and complete win/loss player flows.

## Deployment

Pushes to `main` build the app and deploy the `dist/` artifact to
[GitHub Pages](https://kxzws.github.io/hangman-game/). Vite and React Router
are both configured for the `/hangman-game/` base path, so the deployed site can
also serve its fallback route correctly.

## Project structure

```text
src/
├── components/  # Reusable game UI
├── constants/   # Game limits and local words
├── utils/       # Validation and game-state logic
└── views/       # Start and gameplay screens
```

## AI assistance

This project’s documentation was updated with assistance from **Codex by
OpenAI**, an AI coding agent.
