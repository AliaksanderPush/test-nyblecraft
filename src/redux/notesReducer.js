import {
  NOUTE_CREATE,
  REMOVE_NOUTE,
  EDIT_NOUTE_SAVE,
  TAG_SEARCH,
} from "./type";

const initialState = {
  noutes: [],
};

export const NoutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOUTE_CREATE:
      return {
        ...state,
        noutes: [...state.noutes, action.data],
      };

    case REMOVE_NOUTE:
      return (() => {
        const { id } = action;
        const { noutes } = state;
        const nextNoutes = noutes.filter((item) => item.id !== id);
        return {
          ...state,
          noutes: nextNoutes,
        };
      })();

    case EDIT_NOUTE_SAVE:
      const { id } = action;
      const { noutes } = state;
      const indexId = noutes.findIndex((item) => item.id === id);
      const newInfo = [
        ...noutes.slice(0, indexId),
        action,
        ...noutes.slice(indexId + 1),
      ];

      return {
        ...state,
        noutes: newInfo,
      };

    case TAG_SEARCH:
      return (() => {
        const { id } = action;
        const { noutes } = state;
        const searchNoutes = noutes.filter((item) => item.id === id);
        return {
          ...state,
          noutes: searchNoutes,
        };
      })();

    case "GET_ALL_NOUTES":
      return {
        ...state,
        noutes: action.data,
      };

    default:
      return state;
  }
};
