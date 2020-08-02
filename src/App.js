import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Navbar from "./Components/Navbar";
import LandingMain from "./Components/LandingMain";
import SearchBar from "./Components/Search/SearchBar";
import ItemInfo from "./Components/ItemInfo";
import ImageNotFound from "./Assets/images/ImageNotFound.png";

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
  }, [dispatch]);

  useEffect(() => {
    windowResize();
  });

  const pageSelector = useSelector((state) => state.landing.pageSelected);
  const itemType = useSelector((state) => state.details.itemType);
  const itemId = useSelector((state) => state.details.itemId);

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
    let posterImgUrl;
    let backdropImgUrl;
    if (listItem.poster_path == null && listItem.backdrop_path == null) {
      posterImgUrl = ImageNotFound;
      backdropImgUrl = ImageNotFound;
    } else if (
      listItem.poster_path !== null &&
      listItem.backdrop_path !== null
    ) {
      backdropImgUrl = `https://image.tmdb.org/t/p/original${listItem.backdrop_path}`;
      posterImgUrl = `https://image.tmdb.org/t/p/w500${listItem.poster_path}`;
    } else if (
      listItem.poster_path !== null &&
      listItem.backdrop_path == null
    ) {
      backdropImgUrl = ImageNotFound;
      posterImgUrl = `https://image.tmdb.org/t/p/w500${listItem.poster_path}`;
    } else if (
      listItem.poster_path == null &&
      listItem.backdrop_path !== null
    ) {
      backdropImgUrl = `https://image.tmdb.org/t/p/original${listItem.backdrop_path}`;
      posterImgUrl = ImageNotFound;
    }

    return { Poster: posterImgUrl, Backdrop: backdropImgUrl };
  };

  const genreIdToString = (genre_id, genreList) => {
    const genreName = genreList.filter((genre) => genre.id === genre_id);
    return genreName[0].name;
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {pageSelector !== "ARTISTS" ? (
            <Route
              exact
              path="/"
              render={(props) => (
                <LandingMain
                  {...props}
                  CardTitle={cardTitle}
                  ImageBuilder={imageBuilder}
                  GenreIdToString={genreIdToString}
                />
              )}
            />
          ) : (
            <main>Under Construction :)</main>
          )}
          {itemId !== "" && itemType !== "" && (
            <Route
              exact
              path="/item"
              render={(props) => (
                <ItemInfo
                  {...props}
                  CardTitle={cardTitle}
                  ImageBuilder={imageBuilder}
                  GenreToString={genreIdToString}
                />
              )}
            />
          )}
        </Switch>
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
