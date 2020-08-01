import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import SectionBar from "./Section/SectionBar";
import Carosel from "./Carousel/Carosel";

import SectionConsts from "../sectionsConsts";

export default function LandingMain({
  CardTitle,
  ImageBuilder,
  GenreIdToString,
}) {
  const pageSelector = useSelector((state) => state.landing.pageSelected);
  return (
    <Fragment>
      <main>
        {window.innerWidth > 800 ? (
          <Carosel
            SectionType={SectionConsts[pageSelector][0]}
            CardTitle={CardTitle}
            ImageBuilder={ImageBuilder}
            GenreToString={GenreIdToString}
          />
        ) : (
          <SectionBar
            SectionType={SectionConsts[pageSelector][0]}
            CardTitle={CardTitle}
            ImageBuilder={ImageBuilder}
            GenreToString={GenreIdToString}
          />
        )}
        <SectionBar
          SectionType={SectionConsts[pageSelector][1]}
          CardTitle={CardTitle}
          ImageBuilder={ImageBuilder}
          GenreToString={GenreIdToString}
        />
        <SectionBar
          SectionType={SectionConsts[pageSelector][2]}
          CardTitle={CardTitle}
          ImageBuilder={ImageBuilder}
          GenreToString={GenreIdToString}
        />
      </main>
    </Fragment>
  );
}
