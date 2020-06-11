import * as actionTypes from "./actionTypes";

export default function fetchLanding() {
  return async function (dispatch) {
    const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
    const fetchedMoviesData = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    const MoviesData = await fetchedMoviesData.json();

    const fetchedSeriesData = await fetch(
      `
        https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
    );
    const SeriesData = await fetchedSeriesData.json();

    const fetchedTrendingData = await fetch(
      `
        https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
    );
    const TrendingData = await fetchedTrendingData.json();

    await dispatch({
      type: actionTypes.landing,
      movies: MoviesData.results,
      series: SeriesData.results,
      trending: TrendingData.results,
    });
  };
}
