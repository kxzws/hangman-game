import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Keyboard, Screen, Word } from '../../../components';
import { ALPHABET, MAX_INCORRECT_GUESSES } from '../../../constants/game';
import { GameStatus, getGameStatus, getIncorrectGuesses } from '../../../utils/game';

import { Container, NewGameButton, StatusMessage } from './styled';

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
      <Screen incorrectGuesses={incorrectGuesses} maxIncorrectGuesses={MAX_INCORRECT_GUESSES} />
      <Word word={word} guesses={guesses} revealWord={isFinished} />
      {isFinished && (
        <>
          <StatusMessage role="status">
            {gameStatus === GameStatus.Won ? 'You won!' : `You lost. The word was ${word}.`}
          </StatusMessage>
          <NewGameButton type="button" onClick={() => navigate('/')}>
            New game
          </NewGameButton>
        </>
      )}
      <Keyboard
        letters={ALPHABET}
        guessedLetters={guesses}
        disabled={isFinished}
        onGuess={handleGuess}
      />
    </Container>
  );
};
