import React, { useState, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Credits.scss";

import Spinner from "../Spinner";
const Card = lazy(() => import("./Card"));

export default function Credits({ ImageBuilder }) {
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.details.itemCredits);
  const [option, setOption] = useState("Cast");

  return (
    <div className="credits">
      <div className="credits-nav">
        <button
          className={option === "Cast" ? "active btn-credits" : "btn-credits"}
          onClick={() => setOption("Cast")}
        >
          Cast
        </button>
        {credits.crew !== undefined && (
          <button
            className={option === "Crew" ? "active btn-credits" : "btn-credits"}
            onClick={(e) => setOption("Crew")}
          >
            Crew
          </button>
        )}
      </div>
      {credits !== undefined && (
        <div className="credits-main">
          {option === "Crew" &&
            credits.crew !== undefined &&
            credits.crew.map((item, index) => (
              <Suspense key={item.id} fallback={<Spinner />}>
                <Card key={index} Content={item} ImageBuilder={ImageBuilder} />
              </Suspense>
            ))}
          {option === "Cast" &&
            credits.cast !== undefined &&
            credits.cast.map((item, index) => (
              <Suspense key={item.id} fallback={<Spinner />}>
                <Card key={index} Content={item} ImageBuilder={ImageBuilder} />
              </Suspense>
            ))}
        </div>
      )}
    </div>
  );
}
