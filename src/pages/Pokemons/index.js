import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  var PokemonsQuantity = 100;

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < PokemonsQuantity; i++) {
      endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i);
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
    return response;
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    console.log(value);

    if (value == "todos") {
      getPokemons();
    } else {
      getPokemons();
      const filtered = pokemons.filter((pokemon) => {
        const allTypes = pokemon.data.types.map((type) => type.type.name);
        return allTypes.includes(value);
      });

      setPokemons(filtered);
    }
  };

  const pokemonQuantityUpdade = (event) => {
    PokemonsQuantity = Number(event.target.value) + 1;
    getPokemons();
  };

  return (
    <div>
      <div>
        <div className="SetupSettings">
          <div className="PokemonsQuantitySetup">
            <span className="PokemonsQuantitySetupChild">
              Quantidade de Pokemons:
            </span>
            <input
              className="PokemonsQuantitySetupChild"
              type="number"
              placeholder="100"
              min={1}
              max={100000}
              onChange={pokemonQuantityUpdade}
            ></input>
            <button
              className="PokemonsQuantitySetupChild"
              onClick={() => {
                PokemonsQuantity = 100;
                getPokemons();
              }}
            >
              X
            </button>
          </div>
          <div className="PokemonsFilterSetup">
            <select name="types" onChange={handleFilter}>
              <option value="todos" name="todos">
                Todos
              </option>
              <option value="normal" name="normal">
                Normal
              </option>
              <option value="grass" name="grass">
                Grass
              </option>
              <option value="poison" name="poison">
                Poison
              </option>
              <option value="fire" name="fire">
                Fire
              </option>
              <option value="flying" name="flying">
                Flying
              </option>
              <option value="water" name="water">
                Water
              </option>
              <option value="bug" name="bug">
                Bug
              </option>
              <option value="electric" name="electric">
                Electric
              </option>
              <option value="ground" name="ground">
                Ground
              </option>
              <option value="fairy" name="fairy">
                Fairy
              </option>
              <option value="dark" name="dark">
                Dark
              </option>
              <option value="dragon" name="dragon">
                Dragon
              </option>
              <option value="ghost" name="ghost">
                Ghost
              </option>
              <option value="ice" name="ice">
                Ice
              </option>
              <option value="psychic" name="psychic">
                Psychic
              </option>
              <option value="rock" name="rock">
                Rock
              </option>
              <option value="steel" name="steel">
                Steel
              </option>
              <option value="fighting" name="fighting">
                Fighting
              </option>
            </select>
          </div>
        </div>
      </div>
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
