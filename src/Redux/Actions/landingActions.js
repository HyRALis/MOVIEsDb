import * as actionTypes from "./actionTypes";

export function fetchPopuMovies() {
  return async function (dispatch) {
    const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
    const fetchedMoviesData = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    const MoviesData = await fetchedMoviesData.json();

    await dispatch({
      type: actionTypes.fetchPopuMovies,
      movies: MoviesData.results,
    });
  };
}

export function fetchPopuSeries() {
  return async function (dispatch) {
    const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
    const fetchedSeriesData = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
    );
    const SeriesData = await fetchedSeriesData.json();

    await dispatch({
      type: actionTypes.fetchPopuSeries,
      series: SeriesData.results,
    });
  };
}

export function fetchTrendingAll() {
  return async function (dispatch) {
    const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
    const fetchedTrendingData = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    );
    const TrendingData = await fetchedTrendingData.json();

    await dispatch({
      type: actionTypes.fetchTrendingAll,
      trending: TrendingData.results,
    });
  };
}

export function fetchGenres() {
  return async function (dispatch) {
    const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
    const fetchedGenresData = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
    );
    const GenresData = await fetchedGenresData.json();

    await dispatch({
      type: actionTypes.fetchGenres,
      genres: GenresData.genres,
    });
  };
}
