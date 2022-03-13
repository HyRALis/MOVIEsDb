import React, { useState, lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Credits.scss";

import Spinner from "../Spinner";
const Card = lazy(() => import("./Card"));

export default function Credits({ ImageBuilder }) {
  const credits = useSelector((state) => state.details.itemCredits);
  const [option, setOption] = useState("cast");
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  const creditsToDisplay = (creditsProperty) => {
    if (credits[creditsProperty] && credits[creditsProperty].length) {
      return credits[creditsProperty];
    } else {
      return [];
    }
  };

  useEffect(() => {
    setCardsToDisplay(creditsToDisplay(option));
  }, [option, credits]);

  return (
    <div className="credits">
      <div className="credits-nav">
        <button
          className={option === "cast" ? "active btn-credits" : "btn-credits"}
          onClick={() => setOption("cast")}
        >
          Cast
        </button>
        {
          (credits.crew &&
          credits.crew.length !== 0) &&
          (
            <button
              className={option === "crew" ? "active btn-credits" : "btn-credits"}
              onClick={(e) => setOption("crew")}
            >
              Crew
            </button>
          )
        }
      </div>
      <div className="credits-main">
        {cardsToDisplay.map((item, index) => (
          <Suspense key={item.id} fallback={<Spinner />}>
            <Card key={index} Content={item} ImageBuilder={ImageBuilder} />
          </Suspense>))
        }
      </div>
    </div>
  );
}
