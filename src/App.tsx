import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { AppLayout, Main } from './styled';
import { HangmanGame, StartMenu } from './views';

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
