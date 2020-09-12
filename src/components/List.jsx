import React from "react";
import Loader from "./Loader";
import ItemList from "./ItemList";

const List = ({ isLoading, post, error }) => {
  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : post && !error ? (
    <ItemList post={post} />
  ) : (
    <strong className="error-network">☹ Ocurrio un error de red.</strong>
  );
};

export default List;
