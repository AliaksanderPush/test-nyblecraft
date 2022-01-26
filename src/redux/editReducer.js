import { EDIT_NOUTE } from "./type";

const initialState = {
  editNoutes: [],
};

export const EditReducer = (state = initialState, action) => {
   switch (action.type) {
    case EDIT_NOUTE:
		const {generalText, id, text} = action;
      return {
        ...state,
       editNoutes: {generalText, id, text}
      };
	  default:
        return state;
   
      
      
  }
};