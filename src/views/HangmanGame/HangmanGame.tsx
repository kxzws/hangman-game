import React from 'react';

import { Screen, Word } from '../../components';

import { Container } from './styled';

export const HangmanGame = () => {
  return (
    <Container>
      <Screen />
      <Word />
    </Container>
  );
};
