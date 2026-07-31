import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { isGameLocationState } from '../../utils/game';
import { isValidGameWord } from '../../utils/words';

import { Game } from './Game';

export const HangmanGame = () => {
  const location = useLocation();

  if (!isGameLocationState(location.state) || !isValidGameWord(location.state.word)) {
    return <Navigate to="/" replace />;
  }

  const word = location.state.word.toLowerCase();

  return <Game word={word} />;
};
