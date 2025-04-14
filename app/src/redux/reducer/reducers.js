import { combineReducers } from "redux";
import sideBarreducers from "./sideBarreducers";

const rootReducer = combineReducers({
  sideBarreducers: sideBarreducers,
});

export default rootReducer;
