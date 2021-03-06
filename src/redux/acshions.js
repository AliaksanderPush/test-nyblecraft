import {
  NOUTE_CREATE,
  GET_ALL_NOUTES,
  REMOVE_NOUTE,
  EDIT_NOUTE,
  EDIT_NOUTE_SAVE,
  TAG_CREATE,
  TAG_SEARCH,
  TAG_REMOVE,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ACTIVE_CLASS_ON,
  ACTIVE_CLASS_OFF,
} from "./type";
import { url } from "../helpers/url";

export function nouteCreate(id, generalText, text) {
  const req = { id, generalText, text };
  const request = JSON.stringify(req);
  postData(request);
  return {
    type: NOUTE_CREATE,
    data: req,
  };
}

export const noutesLoad = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(`${url}/noutes`);
      const notes = await result.json();
      dispatch({
        type: GET_ALL_NOUTES,
        data: notes,
      });
    } catch (error) {
      dispatch(errorOn());
      errOff();
      throw new Error(
        `Could not fetch ${url}, status: ${console.error(error)}`
      );
    }
  };
};

export const postData = async (data) => {
  const result = await fetch(`${url}/noutes`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }
};

export const deleteData = async (id) => {
  const result = await fetch(`${url}/noutes/${id}`, {
    method: "DELETE",
  });
  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }
};

export const putData = async (id, data) => {
  const result = await fetch(`${url}/noutes/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }
};

export function removeNoute(id) {
  deleteData(id);
  return {
    type: REMOVE_NOUTE,
    id,
  };
}
export function editNoute(id, text, generalText) {
    return {
    type: EDIT_NOUTE,
    text,
    generalText,
    id,
  };
}
export function editNouteSave(id, generalText, text) {
  const req = { id, generalText, text };
  const request = JSON.stringify(req);
  putData(id, request);
  return {
    type: EDIT_NOUTE_SAVE,
    text,
    generalText,
    id,
  };
}

export function createTag(tagId, tagText) {
  return {
    type: TAG_CREATE,
    id: tagId,
    tag: tagText,
  };
}
export function removeTag(id) {
  return {
    type: TAG_REMOVE,
    id,
  };
}

export function searchTag(tagId) {
  return {
    type: TAG_SEARCH,
    id: tagId,
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
export function errorOn() {
  return {
    type: ERROR_DISPLAY_ON,
  };
}

export function activeOff() {
  return {
    type: ACTIVE_CLASS_OFF,
  };
}
export function activeOn() {
  return {
    type: ACTIVE_CLASS_ON,
  };
}

export function errOff() {
  setTimeout((dispatch) => {
    dispatch(errorOff());
  }, 4000);
}
