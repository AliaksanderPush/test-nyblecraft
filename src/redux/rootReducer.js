import { combineReducers } from "redux";
import { NoutesReducer } from "./notesReducer";
import {EditReducer} from './editReducer';

export const rootReducer = combineReducers({
  NoutesReducer,
  EditReducer
});
