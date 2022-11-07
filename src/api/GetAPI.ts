import axios from "axios";
import { POKEMONS } from "../constants";

//Henter ut data
export const getPokemon = async (name: string) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      return response.data;
    });
};
export const getAllPokemon = async (name: string) => {
  const listOfPokemons = [];
  for (var i = 0; i < POKEMONS.length; i++) {
    listOfPokemons.push(getPokemon(POKEMONS[i]));
  }
  return listOfPokemons;
};

export const NotInUse = async () => {
  return await Promise.all(
    POKEMONS.map(async (pokemon) => getPokemon(pokemon))
  );
};
