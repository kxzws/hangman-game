import React from 'react';

import { Container } from './styled';

type WordProps = {
  word: string;
  guesses: string[];
  revealWord: boolean;
};

export const Word = ({ word, guesses, revealWord }: WordProps) => {
  const displayedWord = word
    .split('')
    .map((letter) => (revealWord || guesses.includes(letter) ? letter : '_'))
    .join(' ');
  const accessibleWord = word
    .split('')
    .map((letter) => (revealWord || guesses.includes(letter) ? letter : 'blank'))
    .join(' ');

  return <Container aria-label={`Word to guess: ${accessibleWord}`}>{displayedWord}</Container>;
};
