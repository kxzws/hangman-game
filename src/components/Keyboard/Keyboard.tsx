import React from 'react';

import { Container, Key } from './styled';

type KeyboardProps = {
  letters: string[];
  guessedLetters: string[];
  disabled: boolean;
  onGuess: (letter: string) => void;
};

export const Keyboard = ({ letters, guessedLetters, disabled, onGuess }: KeyboardProps) => {
  return (
    <Container aria-label="Letter keyboard">
      {letters.map((letter) => (
        <Key
          key={letter}
          type="button"
          disabled={disabled || guessedLetters.includes(letter)}
          onClick={() => onGuess(letter)}
        >
          {letter}
        </Key>
      ))}
    </Container>
  );
};
