import {
	ACTIVE_CLASS_ON,
	ACTIVE_CLASS_OFF,
  } from "./type";
  
  const initialState = {
	on: false,
  };
  
  export const ActiveReducer = (state = initialState, action) => {
	switch (action.type) {
	  case ACTIVE_CLASS_ON:
		return {
		  ...state,
		  on: true,
		};
	  case ACTIVE_CLASS_OFF:
		return {
		  ...state,
		  on: false,
		};
		  
	  default:
		return state;
	}
  };