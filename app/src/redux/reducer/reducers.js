import { combineReducers } from "redux";
import sideBarreducers from "./sideBarreducers";
import popupReducer from "./popupReducer";

const rootReducer = combineReducers({
  popupReducer: popupReducer,
  sideBarreducers: sideBarreducers,
});

export default rootReducer;
