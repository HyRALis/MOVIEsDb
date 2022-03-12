import * as actionTypes from "./actionTypes";

export const fetchPoluparMovies = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchedMoviesData = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  );
  const MoviesData = await fetchedMoviesData.json();
  MoviesData.results.forEach((movie) => {
    movie.media_type = "movie";
  });

  await dispatch({
    type: actionTypes.fetchPoluparMovies,
    movies: MoviesData.results,
  });
};

export const fetchPoluparSeries = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchedSeriesData = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
  );
  const SeriesData = await fetchedSeriesData.json();
  SeriesData.results.forEach((movie) => {
    movie.media_type = "tv";
  });

  await dispatch({
    type: actionTypes.fetchPoluparSeries,
    series: SeriesData.results,
  });
};

export const fetchTrendingAll = () => async (dispatch) => {
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

export const fetchMoviesGenres = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchedMoviesGenresData = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
  );
  const MoviesGenresData = await fetchedMoviesGenresData.json();

  await dispatch({
    type: actionTypes.fetchMoviesGenres,
    moviesGenres: MoviesGenresData.genres,
  });
};

export const fetchSeriesGenres = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchedSeriesGenresData = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`
  );
  const SeriesGenresData = await fetchedSeriesGenresData.json();

  await dispatch({
    type: actionTypes.fetchSeriesGenres,
    seriesGenres: SeriesGenresData.genres,
  });
};

export const moviesActive = () => (dispatch) => {
  dispatch({
    type: actionTypes.movies,
    pageSelected: actionTypes.movies,
  });
};
export const seriesActive = () => (dispatch) => {
  dispatch({
    type: actionTypes.series,
    pageSelected: actionTypes.series,
  });
};
export const homeActive = () => (dispatch) => {
  dispatch({
    type: actionTypes.landing,
    pageSelected: actionTypes.landing,
  });
};
export const artistActive = () => (dispatch) => {
  dispatch({
    type: actionTypes.artists,
    pageSelected: actionTypes.artists,
  });
};

export const changeWidth = (width) => {
  return {
    type: actionTypes.resizeWindow,
    payload: width,
  };
};
