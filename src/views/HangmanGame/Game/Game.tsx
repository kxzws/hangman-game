import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alphabet, ResultModal, Screen, Word } from '../../../components';
import { ALPHABET, MAX_INCORRECT_GUESSES } from '../../../constants/game';
import { GameStatus, getGameStatus, getIncorrectGuesses } from '../../../utils/game';

import { Container, IncorrectGuesses, IncorrectGuessesGroup, WobblyLine } from './styled';

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
      <IncorrectGuessesGroup>
        <WobblyLine viewBox="0 0 460 8" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 4 C115 2 224 5 340 3 C382 2 422 4 459 3" />
        </WobblyLine>
        <IncorrectGuesses>
          incorrect guesses: {incorrectGuesses.length > 0 ? incorrectGuesses.join(', ') : 'none'}
        </IncorrectGuesses>
        <WobblyLine viewBox="0 0 460 8" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 3 C106 5 230 2 348 4 C387 5 424 2 459 4" />
        </WobblyLine>
      </IncorrectGuessesGroup>
      <Alphabet
        letters={ALPHABET}
        guessedLetters={guesses}
        disabled={isFinished}
        onGuess={handleGuess}
      />

      {isFinished ? (
        <ResultModal
          hasWon={gameStatus === GameStatus.Won}
          word={word}
          onBackToStart={() => navigate('/')}
        />
      ) : null}
    </Container>
  );
};
