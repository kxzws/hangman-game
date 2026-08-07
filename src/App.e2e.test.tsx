import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

const startCustomWordGame = async (user: ReturnType<typeof userEvent.setup>, word: string) => {
  await user.click(screen.getByRole('radio', { name: 'word' }));
  await user.type(screen.getByRole('textbox', { name: 'Word to guess' }), word);
  await user.click(screen.getByRole('button', { name: 'Start' }));
};

const guessLetters = (user: ReturnType<typeof userEvent.setup>, letters: string[]) =>
  letters.reduce(async (guesses, letter) => {
    await guesses;
    await user.click(screen.getByRole('button', { name: letter }));
  }, Promise.resolve());

describe('Hangman game e2e', () => {
  beforeEach(() => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    );
  });

  it('lets a player win a game', async () => {
    const user = userEvent.setup();

    await startCustomWordGame(user, 'cat');

    await guessLetters(user, ['c', 'a', 't']);

    expect(screen.getByRole('dialog')).toHaveTextContent('You won!');
    expect(screen.getByLabelText('Word to guess')).toHaveTextContent('c a t');
  });

  it('ends a game after six incorrect guesses and reveals the word', async () => {
    const user = userEvent.setup();

    await startCustomWordGame(user, 'cat');

    await guessLetters(user, ['b', 'd', 'e', 'f', 'g', 'h']);

    expect(screen.getByRole('dialog')).toHaveTextContent('You lost!');
    expect(screen.getByRole('dialog')).toHaveTextContent('The word was: cat');
    expect(screen.getByText('incorrect guesses: b, d, e, f, g, h')).toBeInTheDocument();
  });
});
