import React from "react";

// styles
import "../../../styles/home.css";

// components
import CoverPageHome from './components/CoverpageView';
import List from "../../Lists/Home/List";
import ButtonLoadPosts from "../../Buttons/ButtonLoadPosts";
import Container from "../../containers/Container"; 

export default function HomeView({
  onChangeSearch,
  search,
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
      <CoverPageHome />

      <input
        type="text"
        name="buscar"
        id="buscar"
        onChange={onChangeSearch}
        value={search}
        placeholder="Buscar películas..."
        minLength="1"
        className="input"
      />
      <List {...{ isLoading, posts, error }} />
      <ButtonLoadPosts
        {...{
          search,
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
