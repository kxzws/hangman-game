import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

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

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Main>
    </AppLayout>
  );
};

export default App;
