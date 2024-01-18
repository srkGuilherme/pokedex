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
    const value = event.target.name;

    if (event.target.checked) {
      const filtered = pokemons.filter((pokemon) => {
        const allTypes = pokemon.data.types.map((type) => type.type.name);
        console.log(allTypes);
        return allTypes.includes(value);
      });

      setPokemons(filtered);
    } else {
      getPokemons();
    }
  };

  const pokemonQuantityUpdade = (event) => {
    PokemonsQuantity = Number(event.target.value) + 1;
    getPokemons();
  };
  console.log(pokemons);
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
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="normal"
                  onClick={handleFilter}
                ></input>
                <label for="normal">Normal</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="grass"
                  onClick={handleFilter}
                ></input>
                <label for="grass">Grass</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="poison"
                  onClick={handleFilter}
                ></input>
                <label for="poison">Poison</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="fire"
                  onClick={handleFilter}
                ></input>
                <label for="fire">Fire</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="flying"
                  onClick={handleFilter}
                ></input>
                <label for="flying">Flying</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="water"
                  onClick={handleFilter}
                ></input>
                <label for="water">Water</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="bug"
                  onClick={handleFilter}
                ></input>
                <label for="bug">Bug</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="electric"
                  onClick={handleFilter}
                ></input>
                <label for="electric">Electric</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="ground"
                  onClick={handleFilter}
                ></input>
                <label for="ground">Ground</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="fairy"
                  onClick={handleFilter}
                ></input>
                <label for="fairy">Fairy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="dark"
                  onClick={handleFilter}
                ></input>
                <label for="dark">Dark</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="dragon"
                  onClick={handleFilter}
                ></input>
                <label for="dragon">Dragon</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="ghost"
                  onClick={handleFilter}
                ></input>
                <label for="ghost">Ghost</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="ice"
                  onClick={handleFilter}
                ></input>
                <label for="ice">Ice</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="psychic"
                  onClick={handleFilter}
                ></input>
                <label for="psychic">Psychic</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="rock"
                  onClick={handleFilter}
                ></input>
                <label for="rock">Rock</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="steel"
                  onClick={handleFilter}
                ></input>
                <label for="steel">Steel</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="fighting"
                  onClick={handleFilter}
                ></input>
                <label for="fighting">Fighting</label>
              </li>
            </ul>
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
