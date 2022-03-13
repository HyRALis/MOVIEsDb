import React from "react";

import "./Card.scss";
import { useSelector } from "react-redux";

export default function Card({ Content, ImageBuilder, Index }) {
  const width = useSelector((state) => state.landing.width);

  const lazyLoading = (index, width) => {
    if (width > 800) {
      if (index > 8) {
        return "lazy";
      } else {
        return "eager";
      }
    } else {
      if (index > 4) {
        return "lazy";
      } else {
        return "eager";
      }
    }
  };

  return (
    <div className="card-container">
      <img
        loading={lazyLoading(Index, width)}
        src={ImageBuilder(Content).Credits}
        alt={Content.name}
      />
      <h3>{Content.name}</h3>
      {Content.character !== undefined ? (
        <h3> Playing as {Content.character} </h3>
      ) : (
        <h3> {Content.job} </h3>
      )}
    </div>
  );
}
