export const MIN_WORD_LENGTH = 3;
export const MAX_WORD_LENGTH = 30;

const WORD_PATTERN = /^[a-zA-Z]+$/;

export const LOCAL_WORDS = [
  'anchor',
  'autumn',
  'balloon',
  'bicycle',
  'blanket',
  'bridge',
  'cactus',
  'candle',
  'castle',
  'cherry',
  'cloud',
  'compass',
  'crystal',
  'dolphin',
  'dragon',
  'eclipse',
  'feather',
  'forest',
  'galaxy',
  'harbor',
  'island',
  'jungle',
  'lantern',
  'meadow',
  'mountain',
  'ocean',
  'orchid',
  'puzzle',
  'rainbow',
  'rocket',
  'shadow',
  'sunrise',
  'thunder',
  'valley',
  'whisper',
  'winter',
] as const;

export const isValidGameWord = (word: string): boolean =>
  WORD_PATTERN.test(word) && word.length >= MIN_WORD_LENGTH && word.length <= MAX_WORD_LENGTH;

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * LOCAL_WORDS.length);

  return LOCAL_WORDS[randomIndex];
};
