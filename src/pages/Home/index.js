import React from "react";
import Header from "../../components/Header";
import Pokemons from "../Pokemons";

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Pokemons></Pokemons>
    </div>
  );
}

export default Home;
