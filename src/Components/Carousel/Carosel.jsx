import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Carosel.scss";
import CaroselSlide from "./CaroselSlide";
import { changeSlide } from "../../Redux/Actions/caroselActions";
import { useEffect } from "react";

export default function Carosel({
  SectionType,
  CardTitle,
  ImageBuilder,
  GenreToString,
}) {
  const PopularMovies = useSelector((state) => state.landing.popularMovies);
  const PopularSeries = useSelector((state) => state.landing.popularSeries);
  const slideNo = useSelector((state) => state.caroselState.caroselSlide);
  const openTab = useSelector((state) => state.landing.pageSelected);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSlide(0));
    console.log("rerender");
  }, [dispatch, openTab]);

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
    const slideNumber = Math.abs(slideNo);
    let slideParam = slideNo;
    if (slideNumber < array.length - 1) {
      slideParam += 1;
      dispatch(changeSlide(slideParam));
    } else if (slideNumber === array.length - 1) {
      slideParam = 0;
      dispatch(changeSlide(slideParam));
    }
  };
  const decrement = (slideNo, array) => {
    let slideNumber = Math.abs(slideNo);
    let slideParam = slideNo;
    if (slideNumber < array.length - 1) {
      slideParam -= 1;
      dispatch(changeSlide(slideParam));
    } else if (slideNumber === array.length - 1) {
      slideParam = 0;
      dispatch(changeSlide(slideParam));
    }
  };

  const caroselCss = (slideNo) => {
    let translate = 0;
    translate = slideNo * 100;
    return translate;
  };

  // setTimeout(() => {
  //   console.log(slideNo);
  //   decrement(slideNo, caroselSelector(SectionType));
  // }, 5000);

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
