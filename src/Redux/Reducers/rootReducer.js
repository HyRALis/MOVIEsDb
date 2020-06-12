import { combineReducers } from "redux";
import landingReducer from "./landingReducer";
import differentTabReducers from "./differentTabReducer";

export default combineReducers({
  landing: landingReducer,
  //differentTab: differentTabReducers,
});
