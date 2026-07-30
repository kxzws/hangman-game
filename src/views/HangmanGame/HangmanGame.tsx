import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Screen, Word } from '../../components';
import { isValidGameWord } from '../../constants';

import { Container } from './styled';

type GameLocationState = {
  word?: string;
};

export const HangmanGame = () => {
  const location = useLocation();
  const word = (location.state as GameLocationState | null)?.word;

  if (!word || !isValidGameWord(word)) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Screen />
      <Word />
    </Container>
  );
};
