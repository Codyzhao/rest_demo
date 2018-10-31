import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const inistalState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  inistalState,
  applyMiddleware(...middleware)
);

export default store;
