import React from "react";
import { useSelector } from "react-redux";

import "./SectionBar.scss";
import Bubble from "./Bubble";

export default function Card({
  Content,
  ImageBuilder,
  CardTitle,
  GenreToString,
}) {
  const moviesGenres = useSelector((state) => state.landing.moviesGenres);
  const seriesGenres = useSelector((state) => state.landing.seriesGenres);
  const genreList = [...moviesGenres, ...seriesGenres];

  return (
    <div className="card-container">
      <img src={ImageBuilder(Content).Poster} alt={CardTitle(Content)} />
      <h3>{CardTitle(Content)}</h3>
      <div className="genres-container">
        {seriesGenres.length !== 0 &&
        moviesGenres.length !== 0 &&
        Content.genre_ids !== undefined
          ? Content.genre_ids.map((genre) => (
              <Bubble key={genre} Genre={GenreToString(genre, genreList)} />
            ))
          : ""}
      </div>
    </div>
  );
}
