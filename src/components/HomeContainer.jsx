import React, { useState, useEffect, useCallback } from "react";

//styles
import "../styles/home.css";

// components
import HomeView from "./HomeView";

// config
import { API_REQUEST, ITEMS_FOR_PAGE } from "../config/config";

// utils
import POST_CACHE from "../utils/cache";

export default function Home() {
  const [maxRange, setMaxRange] = useState(ITEMS_FOR_PAGE);
  const [minRange, setMinRange] = useState(0);
  const [postsRange, setPostsRange] = useState([]);

  const [posts, setPosts] = useState(null);
  const [postsFiltered, setPostsFiltered] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const setStatusResquet = (posts, error = false) => {
    setIsLoading(false);
    if (error) {
      setError(error);
      return;
    }
    setError(false);
    setPosts(posts);
  };

  const loadAllPosts = useCallback(() => {
    if ("posts" in POST_CACHE) {
      setStatusResquet(POST_CACHE["posts"]);
      return;
    }

    API_REQUEST.getAsync("posts")
      .then((response) => response.json())
      .then((posts) => {
        setStatusResquet(posts);
        POST_CACHE["posts"] = posts;
      })
      .catch((error) => {
        setStatusResquet(null, true);
      });
  }, []);

  const setPostsRangeMemo = useCallback(() => {
    if (posts) {
      const newPostRange = [...postsRange, ...posts.slice(minRange, maxRange)];
      setPostsRange(newPostRange);
    }
  }, [posts, minRange, maxRange]);

  const onChangeSearch = ({ target }) => {
    setSearch(target.value.replace(/  {2,}/, ""));
  };

  useEffect(() => {
    // es importante que la variable search este definida o sea distinta a una
    // cadena vacia, ya que coincidira con todas los titulos de los posts
    if (posts && search) {
      const regex = new RegExp(`${search}`, "gi");
      const postsFilteredArray = posts.filter((post) => {
        return regex.test(post.title);
      });
      setPostsFiltered(postsFilteredArray);
    } else {
      // ponemos nulo, para que no se muestren todos los posts si no hay
      // una busqueda o el usuario borro todo lo q tenia el input de buscar
      // asi los posts de busqueda se eliminan
      setPostsFiltered(null);
    }
  }, [posts, search]);

  useEffect(() => {
    loadAllPosts();
  }, [loadAllPosts]);

  useEffect(() => {
    setPostsRangeMemo();
  }, [setPostsRangeMemo]);

  useEffect(() => sessionStorage.clear(), []);
  return (
    <HomeView
      {...{
        onChangeSearch,
        search,
        isLoading,
        error,
        maxRange,
        setMaxRange,
        minRange,
        setMinRange,
      }}
      countPost={posts?.length}
      // comprobamos si hay almenos algun post filtrado
      posts={postsFiltered || postsRange}
    />
  );
}
