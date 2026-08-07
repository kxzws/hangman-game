import React from 'react';

import { Svg } from './styled';

type HangmanSvgProps = {
  wrongGuessCount: number;
};

export const HangmanSvg = ({ wrongGuessCount }: HangmanSvgProps) => {
  return (
    <Svg viewBox="0 0 200 240" aria-hidden="true">
      <path d="M19 220 C58 218 133 222 181 220" />
      <path d="M61 220 C59 163 62 83 60 20" />
      <path d="M60 20 C87 18 114 22 140 20" />
      <path d="M140 20 C139 31 141 43 140 55" />
      {wrongGuessCount >= 1 && (
        <path d="M159 75 C159 86 151 94 140 94 C128 94 120 87 121 75 C120 63 129 55 140 55 C151 55 159 64 159 75" />
      )}
      {wrongGuessCount >= 2 && <path d="M140 95 C138 113 142 132 140 150" />}
      {wrongGuessCount >= 3 && <path d="M140 110 C129 116 120 123 110 130" />}
      {wrongGuessCount >= 4 && <path d="M140 110 C150 117 160 123 170 130" />}
      {wrongGuessCount >= 5 && <path d="M140 150 C132 163 122 175 115 185" />}
      {wrongGuessCount >= 6 && <path d="M140 150 C148 163 158 174 165 185" />}
    </Svg>
  );
};
