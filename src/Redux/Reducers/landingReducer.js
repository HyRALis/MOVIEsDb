import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  isActive: true,
  genres: [],
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
    case actionTypes.fetchGenres:
      return {
        ...state,
        genres: action.genres,
      };
    default:
      return state;
  }
}
