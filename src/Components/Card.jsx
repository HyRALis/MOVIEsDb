import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./SectionBar.scss";
import Bubble from "./Bubble";

export default function Card({ Content, ImageBuilder, CardTitle }) {
  const genres = useSelector((state) => state.landing.genres);

  const GenreIdToString = (genre_id, genres) => {
    const genreName = genres.filter((genre) => genre.id === genre_id);
    console.log(genreName);
    return genreName[0].name;
  };

  return (
    <div className="card-container">
      <img src={ImageBuilder(Content)} alt={CardTitle(Content)} />
      <h3>{CardTitle(Content)}</h3>
      <div className="genres-container">
        {genres.length !== 0
          ? Content.genre_ids.map((genre) => (
              <Bubble key={genre.id} Genre={GenreIdToString(genre, genres)} />
            ))
          : ""}
      </div>
    </div>
  );
}
