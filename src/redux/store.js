import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

const logMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(action.type);
    return next(action);
  };

const store = createStore(reducer, applyMiddleware(logMiddleware));

export default store;
