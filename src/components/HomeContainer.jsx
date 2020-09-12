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
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const setStatusResquet = (posts, error = false) => {
    setIsLoading(false);
    if (error) {
      setError(error);
      return;
    }
    setError(false);
    setPost(posts);
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
    if (post) {
      const newPostRange = [...postsRange, ...post.slice(minRange, maxRange)];
      setPostsRange(newPostRange);
    }
  }, [post, minRange, maxRange]);

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
        isLoading,
        error,
        maxRange,
        setMaxRange,
        minRange,
        setMinRange,
      }}
      countPost={post?.length}
      posts={postsRange}
    />
  );
}
