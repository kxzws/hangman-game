import React from 'react';

import { Header as StyledHeader, Heading, PencilIcon, TitleGroup } from './styled';

export const Header = () => {
  return (
    <StyledHeader>
      <TitleGroup>
        <Heading>Hangman Game</Heading>
        <PencilIcon viewBox="0 0 32 32" aria-hidden="true">
          <path d="M7 24 L9 19 L23 5 L27 9 L13 23 Z" />
          <path d="M20 8 L24 12" />
          <path d="M7 24 L13 23 L9 19 Z" />
        </PencilIcon>
      </TitleGroup>
    </StyledHeader>
  );
};
