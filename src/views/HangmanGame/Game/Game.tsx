import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alphabet, ResultModal, Screen, Word } from '../../../components';
import { ALPHABET, MAX_INCORRECT_GUESSES } from '../../../constants/game';
import { GameStatus, getGameStatus, getIncorrectGuesses } from '../../../utils/game';

import { Container, IncorrectGuesses } from './styled';

type GameProps = {
  word: string;
};

export const Game = ({ word }: GameProps) => {
  const navigate = useNavigate();

  const [guesses, setGuesses] = useState<string[]>([]);

  const incorrectGuesses = getIncorrectGuesses(word, guesses);
  const gameStatus = getGameStatus(word, guesses, MAX_INCORRECT_GUESSES);
  const isFinished = gameStatus !== GameStatus.Playing;

  const handleGuess = (letter: string) => {
    if (isFinished || guesses.includes(letter)) {
      return;
    }

    setGuesses((currentGuesses) => [...currentGuesses, letter]);
  };

  return (
    <Container>
      <Screen wrongGuessCount={incorrectGuesses.length} />
      <Word word={word} guesses={guesses} revealWord={isFinished} />
      <IncorrectGuesses>
        Incorrect guesses: {incorrectGuesses.join(', ') || 'None'}
      </IncorrectGuesses>
      <Alphabet
        letters={ALPHABET}
        guessedLetters={guesses}
        disabled={isFinished}
        onGuess={handleGuess}
      />

      {isFinished && (
        <ResultModal
          hasWon={gameStatus === GameStatus.Won}
          word={word}
          onBackToStart={() => navigate('/')}
        />
      )}
    </Container>
  );
};
