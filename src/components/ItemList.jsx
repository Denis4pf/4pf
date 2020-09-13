import React from "react";

// components
import { Link } from "react-router-dom";

// utils
import "../styles/lazy-load-images.min.css";

const ItemList = ({ posts }) => (
  <ul className="list">
    {posts.map((post) => (
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
          <a
            href={`https://picsum.photos/id/${post.id}/200/200`}
            className="lazy-load list-item-thumbail replace"
          >
            <img
              src={`https://picsum.photos/id/${post.id}/5/5`}
              alt="Miniatura de la película"
              className="preview"
            />
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

export default ItemList;
