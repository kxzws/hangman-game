import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HangmanSvg } from '../../components';
import { MAX_INCORRECT_GUESSES } from '../../constants/game';
import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants/words';
import { getRandomWord, isValidGameWord } from '../../utils/words';

import {
  Container,
  ErrorMessage,
  Label,
  ModeGroup,
  StartIllustration,
  StartBtn,
  WordField,
  WordInput,
} from './styled';

enum GameModeType {
  Random = 'random',
  Word = 'word',
}

export const StartMenu = () => {
  const navigate = useNavigate();

  const [gameMode, setGameMode] = useState<GameModeType>(GameModeType.Random);
  const [customWord, setCustomWord] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleGameModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGameMode = event.target.value;

    if (nextGameMode !== GameModeType.Random && nextGameMode !== GameModeType.Word) {
      return;
    }

    setGameMode(nextGameMode);
    if (nextGameMode === GameModeType.Random) {
      setCustomWord('');
    }
    setValidationError('');
  };

  const handleCustomWordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomWord(event.target.value);
    setValidationError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (gameMode === GameModeType.Word && !isValidGameWord(customWord)) {
      setValidationError(
        `Enter ${MIN_WORD_LENGTH}-${MAX_WORD_LENGTH} Latin letters without spaces.`
      );

      return;
    }

    const word = gameMode === GameModeType.Random ? getRandomWord() : customWord.toLowerCase();

    navigate('/game', { state: { word } });
  };

  return (
    <Container aria-label="Start a Hangman game" onSubmit={handleSubmit}>
      <StartIllustration aria-hidden="true">
        <HangmanSvg wrongGuessCount={MAX_INCORRECT_GUESSES} />
      </StartIllustration>
      <ModeGroup aria-label="Game mode">
        <Label htmlFor="random">
          <input
            id="random"
            type="radio"
            name="gameType"
            value={GameModeType.Random}
            checked={gameMode === GameModeType.Random}
            onChange={handleGameModeChange}
          />
          random
        </Label>

        <Label htmlFor="word">
          <input
            id="word"
            type="radio"
            name="gameType"
            value={GameModeType.Word}
            checked={gameMode === GameModeType.Word}
            onChange={handleGameModeChange}
          />
          word
        </Label>
      </ModeGroup>

      {gameMode === GameModeType.Word && (
        <WordField>
          <WordInput
            id="custom-word"
            type="text"
            value={customWord}
            onChange={handleCustomWordChange}
            placeholder="Enter a word"
            aria-label="Word to guess"
            aria-required="true"
            aria-invalid={Boolean(validationError)}
            aria-describedby={validationError ? 'custom-word-error' : undefined}
          />
          <ErrorMessage id="custom-word-error" role="alert">
            {validationError}
          </ErrorMessage>
        </WordField>
      )}

      <StartBtn type="submit">Start</StartBtn>
    </Container>
  );
};
