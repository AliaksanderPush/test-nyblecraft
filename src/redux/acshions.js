import { NOUTE_CREATE, GET_ALL_NOUTES, REMOVE_NOUTE, EDIT_NOUTE, EDIT_NOUTE_SAVE } from "./type";

export function nouteCreate(id, generalText, text) {
  console.log("action", id, generalText, text);
  return {
    type: NOUTE_CREATE,
    data: { id, generalText, text },
  };
}
export function noutesLoad() {
  return async (dispatch) => {
    try {
      const response = await fetch("../servise/db.json");
      const json = await response.json();
      dispatch({
        type: GET_ALL_NOUTES,
        data: json,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
export function removeNoute(id) {
  return {
    type: REMOVE_NOUTE,
    id
  }
}
  export function editNoute(id, text, generalText ) {
    return {
      type: EDIT_NOUTE,
      text,
      generalText,
      id
    }

}
export function editNouteSave(id, generalText, text) {
  return {
    type: EDIT_NOUTE_SAVE,
    text,
    generalText,
    id
  }

}