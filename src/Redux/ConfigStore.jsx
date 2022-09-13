import { createStore, combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const reducer = combineReducers({
  //key: value
  counter: CounterReducer,
});

const store = createStore(reducer);

export default store;
