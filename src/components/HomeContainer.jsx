import React, { useState, useEffect, useCallback } from "react";

//styles
import "../styles/home.css";

// utils functions
import Api from "../utils/api";

// components
import HomeView from "./HomeView";

// config
import { API_URL, ITEMS_FOR_PAGE } from "../config/config";

export default function Home() {
  const [maxRange, setMaxRange] = useState(ITEMS_FOR_PAGE);
  const [minRange, setMinRange] = useState(0);
  const [postRange, setPostRange] = useState([]);
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

  const jsonRequest = useCallback(() => {
    return new Api(API_URL);
  }, []);

  const loadMorePost = () => {
    if (minRange < maxRange && maxRange + ITEMS_FOR_PAGE <= post.length) {
      setMinRange(minRange + ITEMS_FOR_PAGE);
      setMaxRange(maxRange + ITEMS_FOR_PAGE);
    } else {
      const postsCount = post.length;
      setMaxRange(maxRange + (postsCount - maxRange));
      setMinRange(maxRange + 1);
    }
  };

  useEffect(() => {
    jsonRequest()
      .getAsync("posts")
      .then((response) => response.json())
      .then((posts) => {
        setStatusResquet(posts);
      })
      .catch((error) => {
        setStatusResquet(null, true);
      });
  }, [jsonRequest]);

  useEffect(() => {
    if (post !== null) {
      setPostRange([...postRange, ...post.slice(minRange, maxRange)]);
    }
  }, [post, minRange, maxRange]);

  return <HomeView {...{ loadMorePost, isLoading, error }} post={postRange} />;
}
