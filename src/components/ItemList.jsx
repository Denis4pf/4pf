import React from "react";
import thumbail from "../img/elliot.gif";

const ItemList = ({ post }) => (
  <ul className="list">
    {post.map((item) => (
      <li key={item.id} className="list-item">
        <section className="list-item-content">
          <span className="list-item-title">{item.title}</span>
          <p>
            <p>
              <b>{item.id}</b> 
            </p>
            {item.body}
          </p>
        </section>

        <img
          src={thumbail}
          alt="Miniatura de la película"
          className="list-item-thumbail"
        />
      </li>
    ))}
  </ul>
);

export default ItemList;
