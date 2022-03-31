import Getpokemons from "./components/Getpokemons";
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import PokemonUnit from "./components/PokemonUnit";


function App() {
  return (
    <div className="App">
      
      <h1 className="pokedex">PODEDEX BY LORENZO</h1>
      <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonUnit/>} />
          <Route path="/" element={<Getpokemons/>} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
