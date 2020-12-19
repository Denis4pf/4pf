import React from "react";
import portada from "../../../../img/portada.svg";
import { Link } from "react-router-dom";
const CoverPageHome = () => {
  return (
    <>
      <img src={portada} alt="Portada img" className="portada" />
      <h2 className="title">JSON Placeholder</h2>
      <p>
        Consumiendo una API pública con ReactJS
      </p>
      <nav className="navbar">
        <Link to="/users">
          <i className="fa fa-users"></i>
        </Link>
        <Link to="/photos">
          <i className="fa fa-image"></i>
        </Link>
        <Link to="/albums">
          <i className="fa fa-compact-disc"></i>
        </Link>
      </nav>
    </>
  );
};

export default CoverPageHome;
