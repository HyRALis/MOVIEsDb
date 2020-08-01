import React from "react";
import { useSelector } from "react-redux";

import "./Carosel.scss";
import Bubble from "../Bubble";
import { useEffect } from "react";

export default function CaroselSlide({
  Content,
  ImageBuilder,
  CardTitle,
  GenreToString,
  CaroselCss,
  ID,
}) {
  const moviesGenres = useSelector((state) => state.landing.moviesGenres);
  const seriesGenres = useSelector((state) => state.landing.seriesGenres);
  const genreList = [...moviesGenres, ...seriesGenres];

  let slideNo = useSelector((state) => state.caroselState.caroselSlide);

  useEffect(() => {
    document.getElementById(`${ID}`).style.backgroundImage = `url(${
      ImageBuilder(Content).Backdrop
    })`;
  }, []);

  return (
    <div
      className="slide-container"
      style={{
        transform: `translateX(${CaroselCss(slideNo)}%)`,
      }}
    >
      <div className="backdrop-carosel" id={`${ID}`}>
        <div className="carosel-tint">
          <img src={ImageBuilder(Content).Poster} alt={CardTitle(Content)} />
          <div className="slide-info">
            <h1 className="title">{CardTitle(Content)}</h1>
            <div className="genres-container">
              {seriesGenres.length !== 0 &&
                moviesGenres.length !== 0 &&
                Content.genre_ids.map((genre) => (
                  <Bubble key={genre} Genre={GenreToString(genre, genreList)} />
                ))}
            </div>
            <h3 className="chapter-title"> Description </h3>
            <h4 className="description">{Content.overview}</h4>
            <button>More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
