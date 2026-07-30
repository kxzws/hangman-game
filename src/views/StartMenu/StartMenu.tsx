import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getRandomWord, isValidGameWord, MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants';

import { Container, ErrorMessage, Label, StartBtn, WordInput } from './styled';

type GameMode = 'random' | 'word';

export const StartMenu = () => {
  const [gameMode, setGameMode] = useState<GameMode>('random');
  const [customWord, setCustomWord] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const handleGameModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGameMode(event.target.value as GameMode);
    setValidationError('');
  };

  const handleCustomWordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomWord(event.target.value);
    setValidationError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (gameMode === 'word' && !isValidGameWord(customWord)) {
      setValidationError(
        `Enter ${MIN_WORD_LENGTH}-${MAX_WORD_LENGTH} Latin letters without spaces.`
      );

      return;
    }

    const word = gameMode === 'random' ? getRandomWord() : customWord.toLowerCase();

    navigate('/game', { state: { word } });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Label htmlFor="random">
        <input
          id="random"
          type="radio"
          name="gameType"
          value="random"
          checked={gameMode === 'random'}
          onChange={handleGameModeChange}
        />
        random
      </Label>

      <Label htmlFor="word">
        <input
          id="word"
          type="radio"
          name="gameType"
          value="word"
          checked={gameMode === 'word'}
          onChange={handleGameModeChange}
        />
        word
      </Label>

      {gameMode === 'word' && (
        <>
          <WordInput
            id="custom-word"
            type="text"
            value={customWord}
            onChange={handleCustomWordChange}
            aria-invalid={Boolean(validationError)}
            aria-describedby={validationError ? 'custom-word-error' : undefined}
          />
          {validationError && <ErrorMessage id="custom-word-error">{validationError}</ErrorMessage>}
        </>
      )}

      <StartBtn type="submit">Start</StartBtn>
    </Container>
  );
};
