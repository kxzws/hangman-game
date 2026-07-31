import React from 'react';

import { Container } from './styled';

type HangmanProps = {
  wrongGuessCount: number;
};

export const Hangman = ({ wrongGuessCount }: HangmanProps) => {
  return (
    <Container
      role="img"
      aria-label={`Hangman drawing with ${wrongGuessCount} incorrect guess${
        wrongGuessCount === 1 ? '' : 'es'
      }`}
    >
      <svg viewBox="0 0 200 240" aria-hidden="true">
        <line x1="20" y1="220" x2="180" y2="220" />
        <line x1="60" y1="220" x2="60" y2="20" />
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="55" />
        {wrongGuessCount >= 1 && <circle cx="140" cy="75" r="20" />}
        {wrongGuessCount >= 2 && <line x1="140" y1="95" x2="140" y2="150" />}
        {wrongGuessCount >= 3 && <line x1="140" y1="110" x2="110" y2="130" />}
        {wrongGuessCount >= 4 && <line x1="140" y1="110" x2="170" y2="130" />}
        {wrongGuessCount >= 5 && <line x1="140" y1="150" x2="115" y2="185" />}
        {wrongGuessCount >= 6 && <line x1="140" y1="150" x2="165" y2="185" />}
      </svg>
    </Container>
  );
};
