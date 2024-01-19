import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [renderedPokemons, setRenderedPokemons] = useState([]);

  const handleQuantityUpdate = () => {
    var renderLoading = [];
    for (var i = 1; i < PokemonsQuantity; i++) {
      renderLoading.push(pokemons[i - 1]);
    }

    setRenderedPokemons(renderLoading);
  };

  var PokemonsQuantity = 6;

  const maxRenderAPI = 500;

  useEffect(() => {
    async function getPokemons() {
      var endpoints = [];
      for (var i = 1; i < maxRenderAPI; i++) {
        endpoints.push("https://pokeapi.co/api/v2/pokemon/" + i);
      }

      var response = await axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => {
          setPokemons(res);
          setTimeout(() => {
            setRenderedPokemons(pokemons);
          }, 200);
        });

      return response;
    }
    getPokemons();
  }, []); //

  const handleFilter = (event) => {
    const value = event.target.value;

    if (value == "todos") {
      setRenderedPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) => {
        const allTypes = pokemon.data.types.map((type) => type.type.name);
        return allTypes.includes(value);
      });
      setRenderedPokemons(filtered);
    }
  };

  const pokemonQuantityUpdade = (event) => {
    PokemonsQuantity = Number(event.target.value) + 1;
    handleQuantityUpdate();
  };

  return (
    <div>
      <div>
        <div className="SetupSettings">
          <div className="PokemonsQuantitySetup">
            <span className="PokemonsQuantitySetupChild">
              Pokémons na página:
            </span>

            <button
              className="QuantityButton"
              value={25}
              onClick={pokemonQuantityUpdade}
            >
              25
            </button>
            <button
              className="QuantityButton"
              value={50}
              onClick={pokemonQuantityUpdade}
            >
              50
            </button>
            <button
              className="QuantityButton"
              value={100}
              onClick={pokemonQuantityUpdade}
            >
              100
            </button>
            <button
              className="QuantityButton"
              value={250}
              onClick={pokemonQuantityUpdade}
            >
              250
            </button>

            <button
              className="QuantityButton"
              value={maxRenderAPI - 1}
              onClick={pokemonQuantityUpdade}
            >
              {maxRenderAPI}
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
          {renderedPokemons.map((pokemon, key, image, types) => (
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
