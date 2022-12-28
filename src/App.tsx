import { useState } from 'react';
import Board from './components/Board/Board';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { allCards } from "./utils/cards";
import { peopleCards } from "./utils/PeopleCards";
import { Card } from './utils/types';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

  function App() {
    const [lifes, setLifes] = useState<number>(5);
    const [selectedDeck, setSelectedDeck] = useState<Card[]|undefined>()
    return (
      <>
        <BrowserRouter>
          <div className="app-ctn">
          <Routes>
            <Route path="/" element={<HomePage setSelectedDeck={setSelectedDeck}/>} />
            <Route path="/world-history" element={<Board deck = {allCards} lifes ={5} setLifes={setLifes} />} />
            <Route path="/famous-characters" element={<Board deck = {peopleCards} lifes ={5} setLifes={setLifes} />} />
          </Routes>  
          </div>
        </BrowserRouter>
      </>
    )
}

export default App;
