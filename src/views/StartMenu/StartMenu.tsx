import React from 'react';
import { Link } from 'react-router-dom';

import * as styled from './styled';

export const StartMenu = () => {
  return (
    <styled.Container>
      <styled.Label htmlFor="random">
        <input id="random" type="radio" name="gameType" value="random" defaultChecked />
        random
      </styled.Label>

      <styled.Label htmlFor="word">
        <input id="word" type="radio" name="gameType" value="word" />
        word
      </styled.Label>

      <styled.StartBtn to="/game">Start</styled.StartBtn>
    </styled.Container>
  );
};
