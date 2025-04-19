import { combineReducers } from "redux";
import sideBarreducers from "./sideBarreducers";
import popupReducer from "./popupReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  popupReducer: popupReducer,
  sideBarreducers: sideBarreducers,
  todoReducer: todoReducer,
});

export default rootReducer;
