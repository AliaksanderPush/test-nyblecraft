import { combineReducers } from "redux";
import { NoutesReducer } from "./notesReducer";
import { EditReducer } from "./editReducer";
import { TagReducer } from "./tagReducer";
import {AppReducer} from './appReducer';
import {ActiveReducer} from './activeReducer';

export const rootReducer = combineReducers({
  NoutesReducer,
  EditReducer,
  TagReducer,
  AppReducer,
  ActiveReducer
});
