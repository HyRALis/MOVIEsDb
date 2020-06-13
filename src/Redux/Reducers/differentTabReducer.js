import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  ratedMovies: [],
  trendingMovies: [],
  ratedSeries: [],
  trendingSeries: [],
};

export default function landingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.fetchRatedMovies:
      return {
        ...state,
        ratedMovies: action.ratedMovies,
      };
    case actionTypes.fetchTrendingMovies:
      return {
        ...state,
        trendingMovies: action.trendingMovies,
      };
    case actionTypes.fetchRatedSeries:
      return {
        ...state,
        ratedSeries: action.ratedSeries,
      };
    case actionTypes.fetchTrendingSeries:
      return {
        ...state,
        trendingSeries: action.trendingSeries,
      };
    default:
      return state;
  }
}
