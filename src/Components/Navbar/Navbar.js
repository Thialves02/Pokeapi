import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png";
import { Context } from "../../context/CtxApp";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  const { setData } = useContext(Context);
  const history = useHistory();

  const search = async (e) => {
    e.preventDefault();

    const searchPokemon = e.target.searchPokemon.value;
    const formatedSearch = searchPokemon.toLowerCase();

    if (searchPokemon === "") {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=0&offset=0`
      );
      history.push("/");
      const body = await response.json();

      setData(body.results);
    } else {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatedSearch}`
      );
      history.push("/");
      const body = await response.json();
      setData(body);
    }
  };
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="form">
        <form onSubmit={search}>
          <input type="text" placeholder="Pesquisar" name="searchPokemon" />
        </form>
      </div>
      <Link to="/" className="home">
        <p>Home</p>
      </Link>
      <Link to="/time">
        <p>Meu time</p>
      </Link>
    </div>
  );
}
