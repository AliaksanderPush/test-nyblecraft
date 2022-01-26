import { combineReducers } from "redux";
import { NoutesReducer } from "./notesReducer";
import { EditReducer } from "./editReducer";
import { TagReducer } from "./tagReducer";

export const rootReducer = combineReducers({
  NoutesReducer,
  EditReducer,
  TagReducer,
});
