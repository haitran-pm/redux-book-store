import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import bookReducer from "../features/book/reducer";

const innitialState = {};

const store = createStore(
  combineReducers({
    book: bookReducer,
  }),
  innitialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
