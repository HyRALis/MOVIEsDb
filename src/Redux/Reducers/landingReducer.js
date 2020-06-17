import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  pageSelected: "HOME",
  moviesGenres: [],
  seriesGenres: [],
  popularMovies: [],
  popularSeries: [],
  trending: [],
};

export default function landingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.fetchPopuMovies:
      return {
        ...state,
        popularMovies: action.movies,
      };
    case actionTypes.fetchPopuSeries:
      return {
        ...state,
        popularSeries: action.series,
      };
    case actionTypes.fetchTrendingAll:
      return {
        ...state,
        trending: action.trending,
      };
    case actionTypes.fetchMoviesGenres:
      return {
        ...state,
        moviesGenres: action.moviesGenres,
      };
    case actionTypes.fetchSeriesGenres:
      return {
        ...state,
        seriesGenres: action.seriesGenres,
      };
    default:
      return state;
  }
}
