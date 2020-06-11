import React from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" />
      <button>Filter</button>
      <button>Search</button>
    </div>
  );
}
