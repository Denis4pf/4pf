import React from "react";

// components
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ItemListLoading from "./ItemListLoading";

const ItemList = ({ posts }) => (
  <ul className="list">
    {posts.map((post) => (
      <LazyLoad
        key={post.id}
        offset={[-100, 100]}
        placeholder={<ItemListLoading />}
      >
        <li key={post.id}>
          <Link to={`/post/${post.id}`} className="list-item">
            <section className="list-item-content">
              <h3 className="list-item-title">{post.title}</h3>
              <p>
                {post.body.length >= 206
                  ? post.body.substring(0, 206) + " [...]"
                  : post.body}
              </p>
            </section>

            <LazyLoad
              placeholder={
                <img
                  src={`https://picsum.photos/5/5`}
                  className="list-item-thumbail"
                  alt="Cargando imágen"
                />
              }
              once
            >
              <img
                src="https://picsum.photos/200/200"
                alt="Miniatura de la película"
                className="list-item-thumbail"
              />
            </LazyLoad>
          </Link>
        </li>
      </LazyLoad>
    ))}
  </ul>
);

export default ItemList;
