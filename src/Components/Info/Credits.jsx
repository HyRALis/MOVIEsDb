import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./Card";

export default function Credits({ ImageBuilder }) {
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.details.itemCredits);
  const [option, setOption] = useState("Cast");

  return (
    <div className="credits">
      <div className="credits-nav">
        <button className="btn-credits" onClick={() => setOption("Cast")}>
          Cast
        </button>
        {credits.crew !== undefined && (
          <button className="btn-credits" onClick={(e) => setOption("Crew")}>
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
