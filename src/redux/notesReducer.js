import { NOUTE_CREATE } from "./type";

const initialState = {
  noutes: [],
};

export const NoutesReducer = (state = initialState, action) => {
  console.log("action notereducer>>>", action);
  switch (action.type) {
    case NOUTE_CREATE:
      return {
        ...state,
        noutes: [...state.noutes, action.data],
      };
    case "GET_ALL_NOUTES":
      const noutesNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });
      return {
        ...state,
        comments: noutesNew,
      };
    default:
      return state;
  }
};
