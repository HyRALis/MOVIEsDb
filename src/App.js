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
  fetchMoviesGenres,
  fetchSeriesGenres,
} from "./Redux/Actions/landingActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesGenres());
    dispatch(fetchSeriesGenres());
    dispatch(fetchPopuMovies());
    dispatch(fetchPopuSeries());
    dispatch(fetchTrendingAll());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <SectionBar SectionType={1} />
        <SectionBar SectionType={2} />
        <SectionBar SectionType={3} />
      </main>
      <SearchBar />
    </div>
  );
}

export default App;
