import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore, combineReducers } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import {
  amineListReducer,
  pageNumberReducer,
  queryReducer,
  loadingReducer,
  errorReducer,
} from "./redux/Reducer";

let rootReducer = combineReducers({
  amines: amineListReducer,
  page: pageNumberReducer,
  query: queryReducer,
  loading: loadingReducer,
  error: errorReducer,
});

let myStore = legacy_createStore(rootReducer);
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
