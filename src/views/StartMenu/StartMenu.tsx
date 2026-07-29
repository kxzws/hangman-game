import React from 'react';

import { Container, Label, StartBtn } from './styled';

export const StartMenu = () => {
  return (
    <Container>
      <Label htmlFor="random">
        <input id="random" type="radio" name="gameType" value="random" defaultChecked />
        random
      </Label>

      <Label htmlFor="word">
        <input id="word" type="radio" name="gameType" value="word" />
        word
      </Label>

      <StartBtn to="/game">Start</StartBtn>
    </Container>
  );
};
