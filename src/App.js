import React from 'react';

import Game from './components/Game/Game';
import { GameContextProvider } from './store/game-context';

function App() {
  return (
    <GameContextProvider>
      <Game/>
    </GameContextProvider>
  );
}

export default App;
