import React, { useState } from "react";
import Bubble from "./Bubble";

export default function Card() {
  const [genre, setGenre] = useState("Some genre");

  return (
    <div className="card-container">
      <img src="" alt="" />
      <h3>Movie title</h3>
      <Bubble Gunre={genre} />
      <Bubble Gunre={genre} />
      <Bubble Gunre={genre} />
    </div>
  );
}
