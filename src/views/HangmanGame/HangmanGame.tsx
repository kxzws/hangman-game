import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Screen, Word } from '../../components';
import { isGameLocationState } from '../../utils/game';
import { isValidGameWord } from '../../utils/words';

import { Container } from './styled';

export const HangmanGame = () => {
  const location = useLocation();

  if (!isGameLocationState(location.state) || !isValidGameWord(location.state.word)) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <Screen />
      <Word />
    </Container>
  );
};
