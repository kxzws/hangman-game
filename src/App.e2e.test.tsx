import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

const renderApp = (initialEntries: string[] = ['/']) => {
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

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
    renderApp();
  });

  it('lets a player win a game', async () => {
    const user = userEvent.setup();

    await startCustomWordGame(user, 'cat');

    await guessLetters(user, ['c', 'a', 't']);

    const dialog = screen.getByRole('dialog');
    const backButton = screen.getByRole('button', { name: 'Back to start screen' });

    expect(dialog).toHaveTextContent('You won!');
    expect(screen.getByLabelText('Word to guess: c a t')).toHaveTextContent('c a t');
    expect(backButton).toHaveFocus();

    await user.tab();
    expect(backButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(backButton).toHaveFocus();
  });

  it('ends a game after six incorrect guesses and reveals the word', async () => {
    const user = userEvent.setup();

    await startCustomWordGame(user, 'cat');

    await guessLetters(user, ['b', 'd', 'e', 'f', 'g', 'h']);

    expect(screen.getByRole('dialog')).toHaveTextContent('You lost!');
    expect(screen.getByRole('dialog')).toHaveTextContent('The word was: cat');
    expect(screen.getByText('incorrect guesses: b, d, e, f, g, h')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^q$/ })).toBeDisabled();
  });

  it('announces the revealed letters in the word label', async () => {
    const user = userEvent.setup();

    await startCustomWordGame(user, 'cat');

    expect(screen.getByLabelText('Word to guess: blank blank blank')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^c$/ }));

    expect(screen.getByLabelText('Word to guess: c blank blank')).toBeInTheDocument();
  });
});

describe('game route guard', () => {
  it('returns a direct game visit without state to the start menu', () => {
    renderApp(['/game']);

    expect(screen.getByRole('form', { name: 'Start a Hangman game' })).toBeInTheDocument();
  });
});
