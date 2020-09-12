import React from "react";

// styles
import "../styles/home.css";

//files
import portada from "../img/portada.svg";

// components
import List from "./List";

export default function HomeView({ isLoading, post, error, loadMorePost }) {
  return (
    <div className="app">
      <img src={portada} alt="Portada img" className="portada" />
      <h2 className="title">Películas más buscadas.</h2>
      <p>¡Elige la que más desees!</p>

      <input
        type="text"
        name="buscar"
        id="buscar"
        placeholder="Buscar películas..."
        minLength="1"
        className="input"
      />
      <List {...{ isLoading, post, error }} />
      {!isLoading && (
        <button
          onClick={loadMorePost}
          className="button button-center button-success"
        >
          Cargar más publicaciones
        </button>
      )}
    </div>
  );
}
