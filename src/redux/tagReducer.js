import { TAG_CREATE, TAG_REMOVE } from "./type";

const initialState = {
  tag: [],
};

export const TagReducer = (state = initialState, action) => {
  console.log("tagreduser>>", action);
  switch (action.type) {
    case TAG_CREATE:
      return {
        ...state,
        tag: [...state.tag, action],
      };
    case TAG_REMOVE:
      return (() => {
        const { id } = action;
        const { tag } = state;
        const nextTag = tag.filter((item) => item.id !== id);
        return {
          ...state,
          tag: nextTag,
        };
      })();

    default:
      return state;
  }
};
