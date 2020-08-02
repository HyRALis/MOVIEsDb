import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  itemType: "",
  itemId: "",
  itemInfo: {},
  itemCredits: {},
  recomended: [],
};

export default function details(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.setUrlParams:
      return {
        ...state,
        itemType: payload.itemType,
        itemId: payload.id,
      };
    case actionTypes.fetchItemMovies:
      return {
        ...state,
        itemInfo: payload.itemInfo,
        itemCredits: payload.itemCredits,
        recomended: payload.recomended,
      };
    case actionTypes.fetchItemSeries:
      return {
        ...state,
        itemInfo: payload.itemInfo,
        itemCredits: payload.itemCredits,
        recomended: payload.recomended,
      };
    default:
      return state;
  }
}
