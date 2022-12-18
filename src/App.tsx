import { useState } from 'react';
import Board from './components/Board/Board';
import Lifes from './components/Lifes/Lifes';
import './App.scss';

  function App() {
    const [lifes, setLifes] = useState<number>(5);

    return (
      <div className="app-ctn">
        <div className="lifes-ctn">
          <Lifes lifes={lifes} />
        </div>
        <Board lifes={lifes} setLifes={setLifes} />
      </div>
    )
}

export default App;
