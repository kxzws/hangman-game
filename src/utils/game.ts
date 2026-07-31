export type GameLocationState = {
  word: string;
};

export enum GameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost',
}

export const isGameLocationState = (state: unknown): state is GameLocationState => {
  if (typeof state !== 'object' || state === null || !('word' in state)) {
    return false;
  }

  return typeof state.word === 'string';
};

export const getIncorrectGuesses = (word: string, guesses: string[]): string[] =>
  guesses.filter((letter) => !word.includes(letter));

export const getGameStatus = (
  word: string,
  guesses: string[],
  maxIncorrectGuesses: number
): GameStatus => {
  if (getIncorrectGuesses(word, guesses).length >= maxIncorrectGuesses) {
    return GameStatus.Lost;
  }

  return word.split('').every((letter) => guesses.includes(letter))
    ? GameStatus.Won
    : GameStatus.Playing;
};
