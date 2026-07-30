export type GameLocationState = {
  word: string;
};

export const isGameLocationState = (state: unknown): state is GameLocationState => {
  if (typeof state !== 'object' || state === null || !('word' in state)) {
    return false;
  }

  return typeof state.word === 'string';
};
