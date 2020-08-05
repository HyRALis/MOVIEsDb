import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Credits.scss";

import Card from "./Card";

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
              <Card key={index} Content={item} ImageBuilder={ImageBuilder} />
            ))}
          {option === "Cast" &&
            credits.cast !== undefined &&
            credits.cast.map((item, index) => (
              <Card key={index} Content={item} ImageBuilder={ImageBuilder} />
            ))}
        </div>
      )}
    </div>
  );
}
