import React, { useContext, useEffect, useState } from "react";
import "./Time.css";
import treinador from "../../Assets/Images/treinador.png";
import { Context } from "../../context/CtxApp";

export default function Time() {
  const [favorites, setFavorites] = useState();

  const con = JSON.parse(localStorage.getItem("favorites"));
  const removePokemon = (index) => {
    con.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(con));
    setFavorites(con);
  };
  useEffect(() => {}, [con]);

  const { BACKGROUND_COLORS } = useContext(Context);

  return (
    <>
      <h1 className="time-title">Seu time</h1>
      <div className="container-time">
        {con === null && (
          <>
            <div>
              Clique na estrela do pokemon que você deseja adicionar ao seu time
            </div>
          </>
        )}
        {con != undefined && (
          <>
            <img src={treinador} alt="Treinador" />
            <div className="pokemons">
              {con.length === 0 && (
                <div>
                  Você retirou todos seus pokemons e agora está sem time
                </div>
              )}
              {con.length !== 0 &&
                con.map((favorite, index) => (
                  <div className="pokemon" onClick={() => removePokemon(index)}>
                    <img
                      src={favorite.sprites.front_default}
                      style={{
                        backgroundColor: `#${
                          BACKGROUND_COLORS[favorite.types[0].type.name]
                        }`,
                      }}
                    />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
