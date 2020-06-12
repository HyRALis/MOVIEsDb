import React from "react";
import { useSelector } from "react-redux";

import "./SectionBar.scss";
import Bubble from "./Bubble";

export default function Card({ Content, ImageBuilder, CardTitle }) {
  const moviesGenres = useSelector((state) => state.landing.moviesGenres);
  const seriesGenres = useSelector((state) => state.landing.seriesGenres);
  const genreList = [...moviesGenres, ...seriesGenres];

  const GenreIdToString = (genre_id, genreList) => {
    const genreName = genreList.filter((genre) => genre.id === genre_id);
    return genreName[0].name;
  };

  return (
    <div className="card-container">
      <img src={ImageBuilder(Content)} alt={CardTitle(Content)} />
      <h3>{CardTitle(Content)}</h3>
      <div className="genres-container">
        {seriesGenres.length !== 0 && moviesGenres.length !== 0
          ? Content.genre_ids.map((genre) => (
              <Bubble Genre={GenreIdToString(genre, genreList)} />
            ))
          : ""}
      </div>
    </div>
  );
}
