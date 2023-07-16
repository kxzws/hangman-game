import React from 'react';

import { Screen, Word } from '../../components';

import * as styled from './styled';

export const HangmanGame = () => {
  return (
    <styled.Container>
      <Screen />
      <Word />
    </styled.Container>
  );
};
