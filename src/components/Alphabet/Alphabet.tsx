import React from 'react';

import { Container, Key, Row } from './styled';

type AlphabetProps = {
  letters: string[];
  guessedLetters: string[];
  disabled: boolean;
  onGuess: (letter: string) => void;
};

export const Alphabet = ({ letters, guessedLetters, disabled, onGuess }: AlphabetProps) => {
  return (
    <Container aria-label="Letter keyboard">
      {[letters.slice(0, 10), letters.slice(10, 19), letters.slice(19)].map((row) => (
        <Row key={`keyboard-row-${row[0]}`}>
          {row.map((letter) => (
            <Key
              key={letter}
              type="button"
              disabled={disabled || guessedLetters.includes(letter)}
              onClick={() => onGuess(letter)}
            >
              {letter}
            </Key>
          ))}
        </Row>
      ))}
    </Container>
  );
};
