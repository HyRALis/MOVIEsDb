import * as actionTypes from "./actionTypes";

export const fetchRatedMovies = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchRatedMoviesData = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`
  );
  const ratedMoviesData = await fetchRatedMoviesData.json();

  await dispatch({
    type: actionTypes.fetchRatedMovies,
    ratedMovies: ratedMoviesData.results,
  });
};

export const fetchRatedSeries = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchRatedSeriesData = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=vote_average.desc&page=1`
  );
  const ratedSeriesData = await fetchRatedSeriesData.json();

  await dispatch({
    type: actionTypes.fetchRatedSeries,
    ratedSeries: ratedSeriesData.results,
  });
};

export const fetchTrendingMovies = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchTrendingMoviesData = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  );
  const trendingMoviesData = await fetchTrendingMoviesData.json();

  await dispatch({
    type: actionTypes.fetchTrendingMovies,
    trendingMovies: trendingMoviesData.results,
  });
};

export const fetchTrendingSeries = () => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const fetchTrendingSeriesData = await fetch(
    `
    https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`
  );
  const trendingSeriesData = await fetchTrendingSeriesData.json();

  await dispatch({
    type: actionTypes.fetchTrendingSeries,
    trendingSeries: trendingSeriesData.results,
  });
};
