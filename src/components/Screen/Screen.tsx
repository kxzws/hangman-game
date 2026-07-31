import React from 'react';

import { HangmanSvg } from '../HangmanSvg';

type ScreenProps = {
  wrongGuessCount: number;
};

export const Screen = ({ wrongGuessCount }: ScreenProps) => {
  return <HangmanSvg wrongGuessCount={wrongGuessCount} />;
};
