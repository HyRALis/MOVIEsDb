import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  pageSelected: "HOME",
  width: 0,
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
    case actionTypes.movies:
      return {
        ...state,
        pageSelected: action.pageSelected,
      };
    case actionTypes.series:
      return {
        ...state,
        pageSelected: action.pageSelected,
      };
    case actionTypes.landing:
      return {
        ...state,
        pageSelected: action.pageSelected,
      };
    case actionTypes.artists:
      return {
        ...state,
        pageSelected: action.pageSelected,
      };
    case actionTypes.details:
      return {
        ...state,
        pageSelected: action.payload,
      };
    case actionTypes.resizeWindow:
      return {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
}
