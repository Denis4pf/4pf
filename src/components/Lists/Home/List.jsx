import React from "react";
import Loader from "../../Loader";
import ItemList from "./ItemList";

const List = ({ isLoading, posts, error }) => {
  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : posts && !error ? (
    <ItemList posts={posts} />
  ) : (
    <strong className="error-network">☹ Ocurrio un error de red.</strong>
  );
};

export default List;
