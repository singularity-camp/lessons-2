import { gql, useQuery } from "@apollo/client";
import { Pokemon } from "./types";

const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemons: pokemon_v2_pokemon {
      id
      name
      height
      weight2
    }
  }
`;

function usePokemons() {
  return useQuery<{ pokemons: Pokemon[] }>(POKEMONS_QUERY);
}

export default usePokemons;
