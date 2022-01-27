import { TAG_CREATE, TAG_REMOVE } from "./type";

const initialState = {
  tags: [],
};

export const TagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_CREATE:
      return {
        ...state,
        tags: [...state.tags, action],
      };
    case TAG_REMOVE:
      return (() => {
        const { id } = action;
        const { tags } = state;
        const nextTag = tags.filter((item) => item.id !== id);
        return {
          ...state,
          tags: nextTag,
        };
      })();

    default:
      return state;
  }
};
