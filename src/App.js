import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";
import SectionConsts from "./sectionsConsts";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import SectionBar from "./Components/SectionBar";

import {
  fetchPopuMovies,
  fetchPopuSeries,
  fetchTrendingAll,
  fetchMoviesGenres,
  fetchSeriesGenres,
} from "./Redux/Actions/landingActions";

import {
  fetchRatedMovies,
  fetchTrendingMovies,
  fetchTrendingSeries,
  fetchRatedSeries,
} from "./Redux/Actions/movieActions";
import {} from "./Redux/Actions/actionTypes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesGenres());
    dispatch(fetchSeriesGenres());
    dispatch(fetchPopuMovies());
    dispatch(fetchPopuSeries());
    dispatch(fetchTrendingAll());
    dispatch(fetchRatedMovies());
    dispatch(fetchTrendingMovies());
    dispatch(fetchTrendingSeries());
    dispatch(fetchRatedSeries());
  }, []);

  const pageSelector = useSelector((state) => state.landing.pageSelected);

  return (
    <div className="App">
      <Navbar />
      {pageSelector !== "ACTORS" ? (
        <main>
          <SectionBar SectionType={SectionConsts[pageSelector][0]} />
          <SectionBar SectionType={SectionConsts[pageSelector][1]} />
          <SectionBar SectionType={SectionConsts[pageSelector][2]} />
        </main>
      ) : (
        ""
      )}
      <SearchBar />
    </div>
  );
}

export default App;
