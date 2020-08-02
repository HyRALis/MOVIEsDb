import React, { Fragment } from "react";
import spinner from "../Assets/images/spinner-orange.gif";

export default function Spinner() {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
}
