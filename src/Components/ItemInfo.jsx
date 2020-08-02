import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  itemMovies,
  itemSeries,
  activeDetails,
} from "../Redux/Actions/detailsActions";

import "./Carousel/Carosel.scss";

import CaroselSlide from "./Carousel/CaroselSlide";
import Spinner from "./Spinner";

export default function ItemInfo({ ImageBuilder, CardTitle, GenreToString }) {
  const dispatch = useDispatch();
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
  }, [dispatch]);

  return (
    <main>
      {itemInfo !== "undefined" ? (
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
      ) : (
        <Spinner />
      )}
    </main>
  );
}
