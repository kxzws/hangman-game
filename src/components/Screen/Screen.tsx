import React from 'react';

import { HangmanSvg } from '../HangmanSvg';

import { Container } from './styled';

type ScreenProps = {
  wrongGuessCount: number;
};

export const Screen = ({ wrongGuessCount }: ScreenProps) => {
  return (
    <Container
      role="img"
      aria-label={`Hangman drawing with ${wrongGuessCount} incorrect guess${
        wrongGuessCount === 1 ? '' : 'es'
      }`}
    >
      <HangmanSvg wrongGuessCount={wrongGuessCount} />
    </Container>
  );
};
