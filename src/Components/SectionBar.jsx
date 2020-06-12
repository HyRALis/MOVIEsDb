import React from "react";
import { useSelector } from "react-redux";

import "./SectionBar.scss";
import Card from "./Card";

export default function SectionBar({ SectionType }) {
  const PopularMovies = useSelector((state) => state.landing.popularMovies);
  const PopularSeries = useSelector((state) => state.landing.popularSeries);
  const TrendingAll = useSelector((state) => state.landing.trending);

  const SectionSelector = (SectionType) => {
    switch (SectionType) {
      case 1:
        return PopularMovies;
      case 2:
        return PopularSeries;
      case 3:
        return TrendingAll;
      default:
        return TrendingAll;
    }
  };

  const cardTitle = (listItem) => {
    if (typeof listItem.title != "undefined") {
      return listItem.title;
    } else if (typeof listItem.original_name != "undefined") {
      return listItem.original_name;
    } else if (typeof listItem.original_title != "undefined") {
      return listItem.original_title;
    }
  };

  const imageBuilder = (listItem) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${listItem.poster_path}`;
    return imgUrl;
  };

  const HorisontalScrolling = (evt) => {
    evt = window.event || evt;
    var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
    document.getElementsByClassName("section-container")[0].scrollLeft -=
      delta * 40;
  };

  return (
    <div className="section-container" onWheel={HorisontalScrolling}>
      <div className="section-title">Section Title</div>
      <div className="section-main">
        {typeof PopularMovies != "undefined"
          ? SectionSelector(SectionType).map((item) => (
              <Card
                key={item.id}
                Content={item}
                CardTitle={cardTitle}
                ImageBuilder={imageBuilder}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
