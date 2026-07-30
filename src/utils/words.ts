import { LOCAL_WORDS, MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../constants/words';

const WORD_PATTERN = /^[a-zA-Z]+$/;

export const isValidGameWord = (word: string): boolean =>
  WORD_PATTERN.test(word) && word.length >= MIN_WORD_LENGTH && word.length <= MAX_WORD_LENGTH;

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * LOCAL_WORDS.length);

  return LOCAL_WORDS[randomIndex];
};
