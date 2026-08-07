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

- [Node.js](https://nodejs.org/) 24 LTS
- npm (included with Node.js)

### Install and start

```bash
git clone https://github.com/kxzws/hangman-game.git
cd hangman-game
npm ci
npm start
```

The development server serves the game at
[http://localhost:5173/hangman-game/](http://localhost:5173/hangman-game/), matching
its GitHub Pages path.

## Available commands

| Command                | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm start`            | Runs the app locally in development mode.              |
| `npm run build`        | Type-checks and creates an optimized build in `dist/`. |
| `npm run preview`      | Serves the production build locally.                   |
| `npm test`             | Starts Vitest in watch mode.                           |
| `npm run test:ci`      | Runs the Vitest suite once, suitable for CI.           |
| `npm run lint`         | Checks TypeScript and TSX files with ESLint.           |
| `npm run lint:fix`     | Automatically fixes lint issues where possible.        |
| `npm run format`       | Formats project files with Prettier.                   |
| `npm run format:check` | Verifies formatting without changing files.            |
| `npm run check`        | Runs formatting verification and linting.              |
| `npm run typecheck`    | Checks TypeScript without creating output files.       |

## Technology stack

- **React 18** and **TypeScript** for the user interface and type-safe game logic
- **Vite** with the React plugin for the development server and production builds
- **React Router** for navigation between the start screen and game screen
- **styled-components** and **Sass** for styling
- **ESLint** and **Prettier** for code quality and consistent formatting
- **Vitest**, **jsdom**, and **React Testing Library** for unit and end-to-end UI tests
- **GitHub Actions** for pull-request checks and GitHub Pages deployments

## Deployment

Pushing to `main` builds the app with Vite and deploys the `dist/` artifact to
[GitHub Pages](https://kxzws.github.io/hangman-game/). The Vite base path and React
Router basename are both configured for `/hangman-game/`.

## Project details

- The game is self-contained: random words come from a local curated list, so no
  external API is needed to play.
- Invalid or missing game state redirects safely back to the start screen.
- The game uses an accessible, button-based on-screen alphabet keyboard with
  labels for its interactive controls.

## AI assistance

This project’s documentation was updated with assistance from **Codex by OpenAI**,
an AI coding agent.
