import * as actionTypes from "../Actions/actionTypes";

let initialState = {
  caroselSlide: 0,
};

export default function caroselReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.slideLeft:
      return {
        ...state,
        caroselSlide: action.payload,
      };
    case actionTypes.slideRight:
      return {
        ...state,
        caroselSlide: action.payload,
      };
    default:
      return state;
  }
}
