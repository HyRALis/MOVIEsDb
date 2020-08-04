import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  itemMovies,
  itemSeries,
  activeDetails,
} from "../../Redux/Actions/detailsActions";
import SectionConsts from "../../sectionsConsts";

import "../Carousel/Carosel.scss";

import CaroselSlide from "../Carousel/CaroselSlide";
import Spinner from "../Spinner";
import SectionBar from "../Section/SectionBar";
import Credits from "./Credits";

export default function ItemInfo({ ImageBuilder, CardTitle, GenreToString }) {
  const dispatch = useDispatch();
  const pageSelector = useSelector((state) => state.landing.pageSelected);
  const itemType = useSelector((state) => state.details.itemType);
  const itemId = useSelector((state) => state.details.itemId);
  const itemInfo = useSelector((state) => state.details.itemInfo);
  const itemCredits = useSelector((state) => state.details.itemCredits);
  const recomended = useSelector((state) => state.details.recomended);

  useEffect(() => {
    if (itemType === "movie") {
      dispatch(itemMovies(itemId));
    } else if (itemType === "tv") {
      dispatch(itemSeries(itemId));
    }
    dispatch(activeDetails());
  }, [dispatch, itemId]);

  return (
    <Fragment>
      {itemInfo !== "undefined" ? (
        <main>
          <div className="carosel-container">
            <CaroselSlide
              Content={itemInfo}
              ImageBuilder={ImageBuilder}
              CardTitle={CardTitle}
              GenreToString={GenreToString}
              ID={itemInfo.id}
              inCarosel={false}
            />
          </div>
          <Credits ImageBuilder={ImageBuilder} />

          {recomended !== undefined && (
            <SectionBar
              SectionType={SectionConsts[pageSelector][0]}
              CardTitle={CardTitle}
              ImageBuilder={ImageBuilder}
              GenreToString={GenreToString}
            />
          )}
        </main>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
}
