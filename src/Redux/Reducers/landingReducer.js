import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  isActive: true,
  popularMovies: [],
  popularSeries: [],
  trending: [],
};

export default function landingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.landing:
      return {
        ...state,
        popularMovies: action.movies,
        popularSeries: action.series,
        trending: action.trending,
      };
    default:
      return state;
  }
}
