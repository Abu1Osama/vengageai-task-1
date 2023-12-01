import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./Reducer";

const rootReducer = combineReducers({
  contactReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
