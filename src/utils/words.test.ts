import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../constants/words';

import { isValidGameWord } from './words';

describe('isValidGameWord', () => {
  it('accepts Latin words within the permitted length', () => {
    expect(isValidGameWord('hangman')).toBe(true);
    expect(isValidGameWord('ABC')).toBe(true);
  });

  it.each([
    ['a'.repeat(MIN_WORD_LENGTH - 1)],
    ['a'.repeat(MAX_WORD_LENGTH + 1)],
    ['two words'],
    ['word1'],
  ])('rejects %p', (word) => {
    expect(isValidGameWord(word)).toBe(false);
  });
});
