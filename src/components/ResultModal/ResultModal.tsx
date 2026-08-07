import React, { useEffect, useRef } from 'react';

import { BackButton, Dialog, Overlay, ResultMessage, ResultStatus, ResultWord } from './styled';

type ResultModalProps = {
  hasWon: boolean;
  word: string;
  onBackToStart: () => void;
};

export const ResultModal = ({ hasWon, word, onBackToStart }: ResultModalProps) => {
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement as HTMLElement | null;

    backButtonRef.current?.focus();

    return () => {
      if (previouslyFocusedElement?.isConnected === true) {
        previouslyFocusedElement.focus();
      }
    };
  }, []);

  return (
    <Overlay>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-result-title"
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            event.preventDefault();
            backButtonRef.current?.focus();
          }
        }}
      >
        <ResultMessage id="game-result-title">
          {hasWon ? (
            <ResultStatus>You won!</ResultStatus>
          ) : (
            <>
              <ResultStatus>You lost!</ResultStatus>
              <span>
                The word was: <ResultWord>{word}</ResultWord>
              </span>
            </>
          )}
        </ResultMessage>
        <BackButton ref={backButtonRef} type="button" onClick={onBackToStart}>
          Back to start screen
        </BackButton>
      </Dialog>
    </Overlay>
  );
};
