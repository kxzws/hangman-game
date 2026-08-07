import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { HangmanGame, StartMenu } from './views';

import { AppLayout, Main } from './styled';

const App = () => {
  return (
    <AppLayout>
      <Header />
      <Main>
        <Routes>
          <Route path="/game" element={<HangmanGame />} />

          <Route path="/" element={<StartMenu />} />
        </Routes>
      </Main>
    </AppLayout>
  );
};

export default App;
