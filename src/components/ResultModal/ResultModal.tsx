import React from 'react';

import { BackButton, Dialog, Overlay, ResultMessage, ResultWord } from './styled';

type ResultModalProps = {
  hasWon: boolean;
  word: string;
  onBackToStart: () => void;
};

export const ResultModal = ({ hasWon, word, onBackToStart }: ResultModalProps) => {
  return (
    <Overlay>
      <Dialog role="dialog" aria-modal="true" aria-labelledby="game-result-title">
        <ResultMessage id="game-result-title">
          {hasWon ? (
            'You won!'
          ) : (
            <>
              You lost!
              <span>
                The word was: <ResultWord>{word}</ResultWord>
              </span>
            </>
          )}
        </ResultMessage>
        <BackButton type="button" onClick={onBackToStart}>
          Back to start screen
        </BackButton>
      </Dialog>
    </Overlay>
  );
};
