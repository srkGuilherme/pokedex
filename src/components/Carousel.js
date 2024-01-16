import React from "react";
import axios from "axios";
import carouselImage from "../assets/images/carousel-background.jpg";
import { useEffect, useState } from "react";

function Carousel() {
  const [carouselPokemons, setCarouselPokemons] = useState([]);

  useEffect(() => {
    setCarousel();
  }, []);

  const setCarousel = () => {
    var endpoints = [];
    for (var i = 1; i < 10; i++) {
      endpoints.push(
        "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 100)
      );
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setCarouselPokemons(res));
    return response;
  };

  return (
    <div>
      <div className="CarouselBox">
        <div className="Carousel">
          <div
            className="Inner"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0 }}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {carouselPokemons.map((pokemon) => (
              <div className="CarouselCard" key={pokemon.data.id}>
                <div className="CarouselImages">
                  <img className="CarouselBackground" src={carouselImage}></img>
                  <img
                    className="CarouselPokemonImage"
                    src={pokemon.data.sprites.front_default}
                  ></img>
                </div>
                <span className="CarouselPokemonName">{pokemon.data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
