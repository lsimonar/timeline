import { useState } from 'react';
import Board from './components/Board/Board';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { allCards } from "./utils/cards";
import { peopleCards } from "./utils/PeopleCards";
import { Card } from './utils/types';

  function App() {
    const [lifes, setLifes] = useState<number>(5);
    const [selectedDeck, setSelectedDeck] = useState<Card[]|undefined>()
    return (
      <>
      <div className="app-ctn">
       {!selectedDeck ?  
      <HomePage setSelectedDeck={setSelectedDeck}/> : <Board deck = {selectedDeck} lifes ={5} setLifes={setLifes} />
       }</div>
      </>
    )
}

export default App;
