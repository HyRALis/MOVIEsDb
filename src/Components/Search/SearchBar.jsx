import React from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" aria-label="Search field" />
        <button>Filter</button>
        <button>Search</button>
      </div>
    </div>
  );
}
