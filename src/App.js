import React from 'react';

import './App.css';
//import Ball from './components/Ball.component';
import Lottery from './components/Lottery.component';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="JackPot" maxNum={10} numBalls={2} />
    </div>
  );
}

export default App;
