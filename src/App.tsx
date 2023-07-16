import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { HangmanGame, StartMenu } from './views';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/game" element={<HangmanGame />} />

        <Route path="/" element={<StartMenu />} />
      </Routes>
    </>
  );
};

export default App;
