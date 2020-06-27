import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Carosel.scss";
import CaroselSlide from "./CaroselSlide";
import { changeSlide } from "../Redux/Actions/caroselActions";

export default function Carosel({
  SectionType,
  CardTitle,
  ImageBuilder,
  GenreToString,
}) {
  const PopularMovies = useSelector((state) => state.landing.popularMovies);
  const PopularSeries = useSelector((state) => state.landing.popularSeries);
  let slideNo = useSelector((state) => state.caroselState.caroselSlide);

  const dispatch = useDispatch();

  const caroselSelector = (SectionType) => {
    switch (SectionType) {
      case "POPULAR_MOVIES":
        return PopularMovies;
      case "POPULAR_SERIES":
        return PopularSeries;
      default:
        return null;
    }
  };
  const increment = (slideNo, array) => {
    let slideNumber = Math.abs(slideNo);
    if (slideNumber < array.length - 1) {
      slideNo += 1;
      dispatch(changeSlide(slideNo));
    } else if (slideNumber === array.length - 1) {
      slideNo = 0;
      dispatch(changeSlide(slideNo));
    }
  };
  const decrement = (slideNo, array) => {
    let slideNumber = Math.abs(slideNo);
    if (slideNumber < array.length - 1) {
      slideNo -= 1;
      dispatch(changeSlide(slideNo));
    } else if (slideNumber === array.length - 1) {
      slideNo = 0;
      dispatch(changeSlide(slideNo));
    }
  };

  const caroselCss = (slideNo) => {
    let translate = 0;
    translate = slideNo * 100;
    return translate;
  };

  return (
    <div className="carosel-container">
      {slideNo !== 0 ? (
        <button
          id="goLeft"
          onClick={(e) => increment(slideNo, caroselSelector(SectionType))}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
      ) : (
        ""
      )}

      <button
        id="goRight"
        onClick={(e) => decrement(slideNo, caroselSelector(SectionType))}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
      {PopularMovies.length !== 0
        ? caroselSelector(SectionType).map((item, index) => (
            <CaroselSlide
              key={item.id}
              Content={item}
              CardTitle={CardTitle}
              ImageBuilder={ImageBuilder}
              GenreToString={GenreToString}
              CaroselCss={caroselCss}
              CaroselSelector={caroselSelector}
              SectionType={SectionType}
              ID={item.id}
            />
          ))
        : ""}
    </div>
  );
}
