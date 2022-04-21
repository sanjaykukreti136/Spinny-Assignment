import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore, combineReducers } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { countReducer, loginReducer } from "./redux/Reducer";

let rootReducer = combineReducers({
  count: countReducer,
  logged: loginReducer,
});

let myStore = legacy_createStore(rootReducer);
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
