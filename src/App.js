import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import SearchBar from "./Components/SearchBar";
import SectionBar from "./Components/SectionBar";

import {
  fetchPopuMovies,
  fetchPopuSeries,
  fetchTrendingAll,
  fetchGenres,
} from "./Redux/Actions/landingActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopuMovies());
    dispatch(fetchPopuSeries());
    dispatch(fetchTrendingAll());
    dispatch(fetchGenres());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <SectionBar />
        <SectionBar />
        <SectionBar />
      </main>
      <SearchBar />
    </div>
  );
}

export default App;
