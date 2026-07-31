import React from 'react';

import { Container, Key } from './styled';

type AlphabetProps = {
  letters: string[];
  guessedLetters: string[];
  disabled: boolean;
  onGuess: (letter: string) => void;
};

export const Alphabet = ({ letters, guessedLetters, disabled, onGuess }: AlphabetProps) => {
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
