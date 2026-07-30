import React from 'react';

import { Container } from './styled';

type ScreenProps = {
  incorrectGuesses: string[];
  maxIncorrectGuesses: number;
};

export const Screen = ({ incorrectGuesses, maxIncorrectGuesses }: ScreenProps) => {
  const remainingGuesses = maxIncorrectGuesses - incorrectGuesses.length;

  return (
    <Container aria-live="polite">
      <p>Attempts remaining: {remainingGuesses}</p>
      <p>Incorrect guesses: {incorrectGuesses.join(', ') || 'None'}</p>
    </Container>
  );
};
