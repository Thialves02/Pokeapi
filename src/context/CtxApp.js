import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
  const [data, setData] = useState([]);
  const BACKGROUND_COLORS = {
    bug: "6F7734",
    dark: "402B1D",
    dragon: "5735DF",
    electric: "D1D132",
    fairy: "DE68DE",
    fighting: "8A7F8A",
    fire: "BA2525",
    flying: "717FC6",
    ghost: "4040AC",
    grass: "5D9A2E",
    ground: "BA9829",
    ice: "48B8E1",
    normal: "81868B",
    poison: "7D237D",
    psychic: "C0295B",
    rock: "9C8022",
    steel: "8A8A95",
    water: "307ECD",
  };

  return (
    <Context.Provider value={{ data, setData, BACKGROUND_COLORS }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
