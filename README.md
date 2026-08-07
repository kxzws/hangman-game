# Hangman Game

A browser-based implementation of the classic Hangman word game. Choose a random
word from the built-in word list or provide your own word, then uncover it one
letter at a time.

## Game rules

1. Start a game in either **random** or **word** mode.
2. In random mode, the app selects a word from its local word list. In word mode,
   enter a word made of 3–30 Latin letters, with no spaces.
3. Select letters from the on-screen keyboard. Correct guesses reveal every
   matching letter in the word; an already selected letter cannot be chosen again.
4. You win when every letter in the word has been revealed.
5. You lose after six incorrect guesses. When a game ends, the complete word is
   shown and you can return to the start screen to play again.

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (the active LTS release is recommended)
- npm (included with Node.js)

### Install and start

```bash
git clone https://github.com/kxzws/hangman-game.git
cd hangman-game
npm ci
npm start
```

The development server opens the game at [http://localhost:5173](http://localhost:5173).

## Available commands

| Command                | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm start`            | Runs the Vite development server.                      |
| `npm run dev`          | Alias for `npm start`.                                 |
| `npm run build`        | Type-checks and creates a production build in `dist/`. |
| `npm run preview`      | Serves the production build locally.                   |
| `npm test`             | Starts the Vitest runner in watch mode.                |
| `npm run test:ci`      | Runs tests once, suitable for CI.                      |
| `npm run lint`         | Checks TypeScript and TSX files with ESLint.           |
| `npm run lint:fix`     | Automatically fixes lint issues where possible.        |
| `npm run format`       | Formats project files with Prettier.                   |
| `npm run format:check` | Verifies formatting without changing files.            |
| `npm run check`        | Runs formatting verification and linting.              |
| `npm run deploy`       | Builds and publishes `dist/` to GitHub Pages.          |

## Technology stack

- **React 18** and **TypeScript** for the user interface and type-safe game logic
- **Vite** for the development server and production builds
- **React Router** for navigation between the start screen and game screen
- **styled-components** and **Sass** for styling
- **ESLint** and **Prettier** for code quality and consistent formatting
- **Vitest**, jsdom, and React Testing Library for test support
- **GitHub Actions** for pull-request formatting and lint checks

## Project details

- The game is self-contained: random words come from a local curated list, so no
  external API is needed to play.
- Invalid or missing game state redirects safely back to the start screen.
- The game uses an accessible, button-based on-screen alphabet keyboard with
  labels for its interactive controls.

## GitHub Pages deployment

`npm run deploy` first creates a production build, then publishes `dist/` to the
`gh-pages` branch. The Vite production base path is configured as
`/hangman-game/`, so assets and client-side routes work when the app is hosted at
`https://kxzws.github.io/hangman-game/`.

## AI assistance

This project’s documentation was updated with assistance from **Codex by OpenAI**,
an AI coding agent.
