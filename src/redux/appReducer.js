import {
	ERROR_DISPLAY_OFF,
	ERROR_DISPLAY_ON,
  } from "./type";
  
  const initialState = {
	error: false,
  };
  
  export const AppReducer = (state = initialState, action) => {
	switch (action.type) {
	  case ERROR_DISPLAY_ON:
		return {
		  ...state,
		  error: true,
		};
	  case ERROR_DISPLAY_OFF:
		return {
		  ...state,
		  error: false,
		};
		  
	  default:
		return state;
	}
  };