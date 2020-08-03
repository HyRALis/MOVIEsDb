import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Carosel.scss";
import Bubble from "../Bubble";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setParams } from "../../Redux/Actions/detailsActions";

export default function CaroselSlide({
  Content,
  ImageBuilder,
  CardTitle,
  GenreToString,
  CaroselCss,
  ID,
  inCarosel,
}) {
  const dispatch = useDispatch();
  const moviesGenres = useSelector((state) => state.landing.moviesGenres);
  const seriesGenres = useSelector((state) => state.landing.seriesGenres);
  const genreList = [...moviesGenres, ...seriesGenres];

  let slideNo = useSelector((state) => state.caroselState.caroselSlide);

  useEffect(() => {
    document.getElementById(`${ID}`).style.backgroundImage = `url(${
      ImageBuilder(Content).Backdrop
    })`;
  }, [Content]);

  return (
    <div
      className="slide-container"
      style={
        inCarosel
          ? {
              transform: `translateX(${CaroselCss(slideNo)}%)`,
            }
          : {}
      }
    >
      <div className="backdrop-carosel" id={`${ID}`}>
        <div className="carosel-tint">
          <img src={ImageBuilder(Content).Poster} alt={CardTitle(Content)} />
          <div className="slide-info">
            <h1 className="title">{CardTitle(Content)}</h1>
            <div className="genres-container">
              {!inCarosel
                ? seriesGenres.length !== 0 &&
                  moviesGenres.length !== 0 &&
                  Content.genres !== undefined &&
                  Content.genres.map((genre) => (
                    <Bubble key={genre.id} Genre={genre.name} />
                  ))
                : seriesGenres.length !== 0 &&
                  moviesGenres.length !== 0 &&
                  Content.genre_ids !== undefined &&
                  Content.genre_ids.map((genre) => (
                    <Bubble
                      key={genre}
                      Genre={GenreToString(genre, genreList)}
                    />
                  ))}
            </div>
            <h3 className="chapter-title"> Description </h3>
            <h4 className="description">{Content.overview}</h4>
            {inCarosel && (
              <Link
                to="/item"
                style={{ textDecoration: "none" }}
                className="btn-cta"
                onClick={() =>
                  dispatch(setParams(Content.id, Content.media_type))
                }
              >
                More Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

CaroselSlide.defaultProps = {
  inCarosel: true,
};
