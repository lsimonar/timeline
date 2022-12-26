import { useState } from 'react';
import Board from './components/Board/Board';
import './App.scss';

  function App() {
    const [lifes, setLifes] = useState<number>(5);

    return (
      <div className="app-ctn">
        <Board lifes={5} setLifes={setLifes} />
      </div>
    )
}

export default App;
