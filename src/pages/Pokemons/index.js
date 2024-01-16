import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 100; i++) {
      endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
    return response;
  };

  return (
    <div>
      <div>
        <div className="Grid">
          {pokemons.map((pokemon, key, image, types) => (
            <PokemonCard
              image={pokemon.data.sprites.front_default}
              key={key}
              name={pokemon.data.name}
              types={pokemon.data.types}
            ></PokemonCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemons;
