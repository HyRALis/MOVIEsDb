import React from "react";
import { useSelector } from "react-redux";

import "./SectionBar.scss";
import Card from "./Card";

export default function SectionBar({
  SectionType,
  CardTitle,
  ImageBuilder,
  GenreToString,
}) {
  const PopularMovies = useSelector((state) => state.landing.popularMovies);
  const RatedMovies = useSelector((state) => state.differentTab.ratedMovies);
  const PopularSeries = useSelector((state) => state.landing.popularSeries);
  const RatedSeries = useSelector((state) => state.differentTab.ratedSeries);
  const TrendingAll = useSelector((state) => state.landing.trending);
  const TrendingMovies = useSelector(
    (state) => state.differentTab.trendingMovies
  );
  const TrendingSeries = useSelector(
    (state) => state.differentTab.trendingSeries
  );

  const SectionSelector = (SectionType) => {
    switch (SectionType) {
      case "POPULAR_MOVIES":
        return { Data: PopularMovies, Title: "Popular Movies" };
      case "RATED_MOVIES":
        return { Data: RatedMovies, Title: "Highest Rated Movies" };
      case "TRENDING_MOVIES":
        return { Data: TrendingMovies, Title: "Trending Movies" };
      case "POPULAR_SERIES":
        return { Data: PopularSeries, Title: "Popular Series" };
      case "RATED_SERIES":
        return { Data: RatedSeries, Title: "Higest Rated Series" };
      case "TRENDING_SERIES":
        return { Data: TrendingSeries, Title: "Trending Series" };
      case "TRENDING_ALL":
        return { Data: TrendingAll, Title: "Trending" };

      default:
        return null;
    }
  };

  const HorisontalScrolling = (evt) => {
    evt = window.event || evt;
    var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
    document.getElementsByClassName("section-container")[0].scrollLeft -=
      delta * 40;
  };

  return (
    <div className="section-container" onWheel={HorisontalScrolling}>
      <div className="section-title">{SectionSelector(SectionType).Title}</div>
      <div className="section-main">
        {PopularMovies.length !== 0
          ? SectionSelector(SectionType).Data.map((item) => (
              <Card
                key={item.id}
                Content={item}
                CardTitle={CardTitle}
                ImageBuilder={ImageBuilder}
                GenreToString={GenreToString}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
