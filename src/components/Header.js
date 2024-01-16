import React from "react";
import "../App.css";
import Logo from "../assets/images/logo-pokewiki.png";

function Header({ filteredPokemons }) {
  return (
    <div>
      <header className="Header">
        <div>
          <img src={Logo} className="Logo"></img>
        </div>
        {
          <div>
            <input
              onChange={(e) => filteredPokemons(e.target.value)}
              type="text"
              placeholder="Pesquisar"
              maxLength={30}
            ></input>
          </div>
        }
        <ul className="HeaderList">
          <li>Home</li>
          <li>Pokemons</li>
          <li>Aleatório</li>
          <li>Sobre</li>
        </ul>
      </header>
      <h1>Conheça mais sobre seus Pokémons favoritos!</h1>
    </div>
  );
}

export default Header;
