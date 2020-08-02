import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as MovieIcon } from "../Assets/svgs/movies.svg";
import { ReactComponent as TVIcon } from "../Assets/svgs/tvseries.svg";
import { ReactComponent as ArtistIcon } from "../Assets/svgs/artists.svg";
import "./Navbar.scss";
import logo from "../Assets/images/logo.png";

import {
  moviesActive,
  seriesActive,
  homeActive,
  artistActive,
} from "../Redux/Actions/landingActions";

import { movies, series, artists } from "../Redux/Actions/actionTypes";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  let navActive = useSelector((state) => state.landing.pageSelected);

  return (
    <div className="navbar-container">
      <img
        className="nav-logo"
        src={logo}
        alt="logo"
        onClick={() => dispatch(homeActive())}
      />
      <ul className="navbar-list">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={navActive === movies ? "nav-item active" : "nav-item"}
          onClick={() => dispatch(moviesActive())}
        >
          <li>
            <div className="nav-link">
              <MovieIcon height="2.75rem" width="2.75rem" fill="currentColor" />
              <span className="nav-text">Movies</span>
            </div>
          </li>
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={navActive === series ? "nav-item active" : "nav-item"}
          onClick={() => dispatch(seriesActive())}
        >
          <li>
            <div className="nav-link">
              <TVIcon height="2.75rem" width="2.75rem" fill="currentColor" />
              <span className="nav-text">TV series</span>
            </div>
          </li>
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={navActive === artists ? "nav-item active" : "nav-item"}
          onClick={() => dispatch(artistActive())}
        >
          <li>
            <div className="nav-link">
              <ArtistIcon
                height="2.75rem"
                width="2.75rem"
                fill="currentColor"
              />
              <span className="nav-text">Artists</span>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
