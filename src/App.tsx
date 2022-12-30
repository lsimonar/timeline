import Board from './components/Board/Board';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { allCards } from "./utils/cards";
import { peopleCards } from "./utils/PeopleCards";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

  function App() {
    return (
      <>
        <BrowserRouter>
          <div className="app-ctn">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/world-history" element={<Board deck = {allCards} lifes ={5} />} />
            <Route path="/famous-characters" element={<Board deck = {peopleCards} lifes ={5} />} />
          </Routes>  
          </div>
        </BrowserRouter>
      </>
    )
}

export default App;
