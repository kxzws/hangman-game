import { GameStatus, getGameStatus, getIncorrectGuesses, isGameLocationState } from './game';

describe('game utilities', () => {
  it('accepts only a location state containing a string word', () => {
    expect(isGameLocationState({ word: 'hangman' })).toBe(true);
    expect(isGameLocationState({ word: 42 })).toBe(false);
    expect(isGameLocationState(null)).toBe(false);
  });

  it('returns each incorrect guess', () => {
    expect(getIncorrectGuesses('cat', ['c', 'b', 'a', 'd'])).toEqual(['b', 'd']);
  });

  it.each([
    ['playing', 'cat', ['c'], 6, GameStatus.Playing],
    ['won', 'cat', ['c', 'a', 't'], 6, GameStatus.Won],
    ['lost', 'cat', ['b', 'd', 'e'], 3, GameStatus.Lost],
  ])('reports a %s game', (_label, word, guesses, maxIncorrectGuesses, expectedStatus) => {
    expect(getGameStatus(word, guesses, maxIncorrectGuesses)).toBe(expectedStatus);
  });
});
