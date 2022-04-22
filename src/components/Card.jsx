import React from "react";
import "../css/Card.css";
let Card = ({ image_url, title }) => {
  return (
    <article class="card">
      <img src={image_url} alt={title} />
      <div class="text">
        <p>{title}</p>
      </div>
    </article>
  );
};

export default Card;
