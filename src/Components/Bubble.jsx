import React from "react";
import "./Bubble.scss";

export default function Bubble({ Genre }) {
  return (
    <div className="bubble">
      <h5>{Genre}</h5>
    </div>
  );
}
