import React from "react";
import logo from "../Assets/images/logo.png";
import { ReactComponent as MovieIcon } from "../Assets/svgs/movies.svg";
import { ReactComponent as TVIcon } from "../Assets/svgs/tvseries.svg";
import { ReactComponent as ArtistIcon } from "../Assets/svgs/artists.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img className="nav-logo" src={logo} alt="logo" />
      <ul className="navbar-list">
        <li className="nav-item">
          <div className="nav-link">
            <MovieIcon height="2.75rem" width="2.75rem" fill="currentColor" />
            <span className="nav-text">Movies</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <TVIcon height="2.75rem" width="2.75rem" fill="currentColor" />
            <span className="nav-text">TV series</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <ArtistIcon height="2.75rem" width="2.75rem" fill="currentColor" />
            <span className="nav-text">Artists</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
