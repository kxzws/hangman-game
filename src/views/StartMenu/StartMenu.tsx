import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants/words';
import { getRandomWord, isValidGameWord } from '../../utils/words';

import { Container, ErrorMessage, Label, ModeGroup, StartBtn, WordInput } from './styled';

// eslint-disable-next-line no-shadow
enum GameMode {
  Random = 'random',
  Word = 'word',
}

export const StartMenu = () => {
  const navigate = useNavigate();

  const [gameMode, setGameMode] = useState<GameMode>(GameMode.Random);
  const [customWord, setCustomWord] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleGameModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGameMode = event.target.value;

    if (nextGameMode !== GameMode.Random && nextGameMode !== GameMode.Word) {
      return;
    }

    setGameMode(nextGameMode);
    setValidationError('');
  };

  const handleCustomWordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomWord(event.target.value);
    setValidationError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (gameMode === GameMode.Word && !isValidGameWord(customWord)) {
      setValidationError(
        `Enter ${MIN_WORD_LENGTH}-${MAX_WORD_LENGTH} Latin letters without spaces.`
      );

      return;
    }

    const word = gameMode === GameMode.Random ? getRandomWord() : customWord.toLowerCase();

    navigate('/game', { state: { word } });
  };

  return (
    <Container aria-label="Start a Hangman game" onSubmit={handleSubmit}>
      <ModeGroup aria-label="Game mode">
        <Label htmlFor="random">
          <input
            id="random"
            type="radio"
            name="gameType"
            value={GameMode.Random}
            checked={gameMode === GameMode.Random}
            onChange={handleGameModeChange}
          />
          random
        </Label>

        <Label htmlFor="word">
          <input
            id="word"
            type="radio"
            name="gameType"
            value={GameMode.Word}
            checked={gameMode === GameMode.Word}
            onChange={handleGameModeChange}
          />
          word
        </Label>
      </ModeGroup>

      {gameMode === GameMode.Word && (
        <>
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
          {validationError && (
            <ErrorMessage id="custom-word-error" role="alert">
              {validationError}
            </ErrorMessage>
          )}
        </>
      )}

      <StartBtn type="submit">Start</StartBtn>
    </Container>
  );
};
