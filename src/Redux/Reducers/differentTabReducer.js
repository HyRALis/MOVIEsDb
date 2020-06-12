import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  trendingMovies: [],
  latestMovies: [],
  trendingSeies: [],
};

export default function landingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.fetchLatestMovies:
      return [];
    case actionTypes.fetchTrendingMovies:
      return [];
    default:
      return state;
  }
}
