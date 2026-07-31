import React from 'react';

import { BackButton, Dialog, Overlay } from './styled';

type ResultModalProps = {
  hasWon: boolean;
  word: string;
  onBackToStart: () => void;
};

export const ResultModal = ({ hasWon, word, onBackToStart }: ResultModalProps) => {
  const message = hasWon ? 'You won!' : `You lost! The word was: ${word}`;

  return (
    <Overlay>
      <Dialog role="dialog" aria-modal="true" aria-labelledby="game-result-title">
        <p id="game-result-title">{message}</p>
        <BackButton type="button" onClick={onBackToStart}>
          Back to start screen
        </BackButton>
      </Dialog>
    </Overlay>
  );
};
