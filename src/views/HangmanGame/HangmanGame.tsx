import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Keyboard, Screen, Word } from '../../components';
import { ALPHABET, MAX_INCORRECT_GUESSES } from '../../constants/game';
import { getGameStatus, getIncorrectGuesses, isGameLocationState } from '../../utils/game';
import { isValidGameWord } from '../../utils/words';

import { Container, NewGameButton, StatusMessage } from './styled';

type GameProps = {
  word: string;
};

const Game = ({ word }: GameProps) => {
  const navigate = useNavigate();
  const [guesses, setGuesses] = useState<string[]>([]);
  const incorrectGuesses = getIncorrectGuesses(word, guesses);
  const gameStatus = getGameStatus(word, guesses, MAX_INCORRECT_GUESSES);
  const isFinished = gameStatus !== 'playing';

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
            {gameStatus === 'won' ? 'You won!' : `You lost. The word was ${word}.`}
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

export const HangmanGame = () => {
  const location = useLocation();

  if (!isGameLocationState(location.state) || !isValidGameWord(location.state.word)) {
    return <Navigate to="/" replace />;
  }

  const word = location.state.word.toLowerCase();

  return <Game key={word} word={word} />;
};
