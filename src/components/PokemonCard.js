import React from "react";

function PokemonCard({ name, key, image, types }) {
  return (
    <div key={key} className="PokemonCard">
      <div>
        <div className="CardContent">
          <div className="PokemonImage">
            <img src={image}></img>
          </div>
          <div className="PokemonName">{name}</div>
          <div className="Types">
            <div className={`Type Type${types[0].type.name}`}>
              {types[0].type.name}
            </div>
            {types[1] ? (
              <div className={`Type Type${types[1].type.name}`}>
                {types[1].type.name}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
