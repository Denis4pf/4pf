import React from "react";

import { ITEMS_FOR_PAGE } from "../config/config";

export default function ButtonLoadPosts({
  isLoading,
  error,
  maxRange,
  setMaxRange,
  minRange,
  setMinRange,
  countPost,
}) {
  const setRanges = (min, max) => {
    setMinRange(min);
    setMaxRange(max);
  };

  const loadMorePost = () => {
    if (countPost) {
      const correctRange =
        minRange < maxRange && maxRange + ITEMS_FOR_PAGE <= countPost;
      if (correctRange) {
        setRanges(minRange + ITEMS_FOR_PAGE, maxRange + ITEMS_FOR_PAGE);
      } else if (maxRange < countPost) {
        const postsCount = maxRange + (countPost - maxRange);
        setRanges(maxRange, postsCount);
      }
    }
  };

  return countPost && !isLoading && !error ? (
    <button
      onClick={loadMorePost}
      className="button button-center button-success"
    >
      <i className="fa fa-arrow-right fa-margin-r"></i>
      Cargar más publicaciones
    </button>
  ) : null;
}
