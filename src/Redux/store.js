import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleWare = [thunk];

const reduxStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default reduxStore;
