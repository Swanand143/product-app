import React from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

function procard({ id, name, imageUrl, description, price }) {
  return (
    <Link className="card" to={`/product/${id}`}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <p className="description">{description.substring(0, 100)}...</p>
      <div className="price-container">
        <span className="price">Price : {price}</span>
      </div>
    </Link>
  );
}

export default procard;
