import { combineReducers } from "redux";
import landingReducer from "./landingReducer";
import differentTabReducers from "./differentTabReducer";
import caroselReducer from "./caroselReducer";
import detailsReducer from "./detailsReducer";
export default combineReducers({
  landing: landingReducer,
  differentTab: differentTabReducers,
  caroselState: caroselReducer,
  details: detailsReducer,
});
