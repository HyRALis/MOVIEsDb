import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./SectionBar.scss";

import Bubble from "../Bubble";
import { setParams } from "../../Redux/Actions/detailsActions";

export default function Card({
  Content,
  ImageBuilder,
  CardTitle,
  GenreToString,
}) {
  const dispatch = useDispatch();

  const moviesGenres = useSelector((state) => state.landing.moviesGenres);
  const seriesGenres = useSelector((state) => state.landing.seriesGenres);
  const genreList = [...moviesGenres, ...seriesGenres];

  return (
    <Link
      to={`/item`}
      style={{ textDecoration: "none" }}
      className="card-container"
      onClick={() => dispatch(setParams(Content.id, Content.media_type))}
    >
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
    </Link>
  );
}
