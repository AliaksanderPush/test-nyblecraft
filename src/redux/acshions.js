import { NOUTE_CREATE, GET_ALL_NOUTES } from "./type";

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
