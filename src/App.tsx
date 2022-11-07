import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Table from "./components/MainTable";
import { POKEMONS } from "./constants";
import { getAllPokemon } from "./api/GetAPI";

function App() {
  return (
    <div className="App">
      <header></header>
      <Table />
      {console.log(getAllPokemon)}
    </div>
  );
}

export default App;
