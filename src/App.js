import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";
import SectionConsts from "./sectionsConsts";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import SectionBar from "./Components/SectionBar";
import Carosel from "./Components/Carosel";

import {
  fetchPopuMovies,
  fetchPopuSeries,
  fetchTrendingAll,
  fetchMoviesGenres,
  fetchSeriesGenres,
  changeWidth,
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
  let width = useSelector((state) => state.landing.width);

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

  const windowResize = () => {
    window.addEventListener("resize", dispatch(changeWidth(window.innerWidth)));
    dispatch(changeWidth(window.innerWidth));
    window.removeEventListener(
      "resize",
      dispatch(changeWidth(window.innerWidth))
    );
  };

  const cardTitle = (listItem) => {
    if (typeof listItem.title != "undefined") {
      return listItem.title;
    } else if (typeof listItem.original_name != "undefined") {
      return listItem.original_name;
    } else if (typeof listItem.original_title != "undefined") {
      return listItem.original_title;
    }
  };

  const imageBuilder = (listItem) => {
    const posterImgUrl = `https://image.tmdb.org/t/p/w500${listItem.poster_path}`;
    const backdropImgUrl = `https://image.tmdb.org/t/p/w500${listItem.backdrop_path}`;
    return { Poster: posterImgUrl, Backdrop: backdropImgUrl };
  };

  const GenreIdToString = (genre_id, genreList) => {
    const genreName = genreList.filter((genre) => genre.id === genre_id);
    return genreName[0].name;
  };

  return (
    <div className="App">
      <Navbar />
      {pageSelector !== "ARTISTS" ? (
        <main>
          {window.innerWidth > 800 ? (
            <Carosel
              SectionType={SectionConsts[pageSelector][0]}
              CardTitle={cardTitle}
              ImageBuilder={imageBuilder}
              GenreToString={GenreIdToString}
            />
          ) : (
            <SectionBar
              SectionType={SectionConsts[pageSelector][0]}
              CardTitle={cardTitle}
              ImageBuilder={imageBuilder}
              GenreToString={GenreIdToString}
            />
          )}
          <SectionBar
            SectionType={SectionConsts[pageSelector][1]}
            CardTitle={cardTitle}
            ImageBuilder={imageBuilder}
            GenreToString={GenreIdToString}
          />
          <SectionBar
            SectionType={SectionConsts[pageSelector][2]}
            CardTitle={cardTitle}
            ImageBuilder={imageBuilder}
            GenreToString={GenreIdToString}
          />
        </main>
      ) : (
        <div>
          <h1> UNDER CONSTRUCTION !</h1>
        </div>
      )}
      <SearchBar />
    </div>
  );
}

export default App;
