import { veReducer } from "./veReducer";

import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  veReducer: veReducer,
});
