import React from "react";

// styles
import "../styles/home.css";

//files
import portada from "../img/portada.svg";

// components
import List from "./List";
import ButtonLoadPosts from "./ButtonLoadPosts";
import Container from "./Container";

export default function HomeView({
  isLoading,
  posts,
  error,
  maxRange,
  setMaxRange,
  minRange,
  setMinRange,
  countPost,
}) {
  return (
    <Container posts={posts}>
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
      <List {...{ isLoading, posts, error }} />
      <ButtonLoadPosts
        {...{
          isLoading,
          error,
          countPost,

          maxRange,
          setMaxRange,

          minRange,
          setMinRange,
        }}
      />
    </Container>
  );
}
