import React from "react";

import "./Card.scss";

export default function Card({ Content, ImageBuilder }) {
  return (
    <div className="card-container">
      <img src={ImageBuilder(Content).Credits} alt={Content.name} />
      <h3>{Content.name}</h3>
      {Content.character !== undefined ? (
        <h3> Playing as {Content.character} </h3>
      ) : (
        <h3> Position: {Content.job} </h3>
      )}
    </div>
  );
}
