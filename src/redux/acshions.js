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
  ACTIVE_CLASS_OFF
} from "./type";
import { urlNotes, urlTags } from "../helpers/url";

export function nouteCreate(id, generalText, text) {
  const req = { id, generalText, text };
  const request = JSON.stringify(req);
  postData(urlNotes, request);
  return {
    type: NOUTE_CREATE,
    data: req,
  };
}

export const noutesLoad = (url) => {
  return async (dispatch) => {
    try {
      const result = await fetch(url);
      const notes = await result.json();
      dispatch({
        type: GET_ALL_NOUTES,
        data: notes,
      });
    } catch(error) {
      dispatch(errorOn());
      errOff();
      throw new Error(`Could not fetch ${url}, status: ${console.error(error)}`);
      
    }
  }
};

export const postData =  (url, data) => {
  return async (dispatch) => {
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: data,
      });
    } catch(error) {
      dispatch(errorOn());
      errOff();
      throw new Error(`Could not fetch ${url}, status: ${console.error(error)}`);
      
    }
  }
    
};

export const deleteData = (url, id) => {
  return async (dispatch) => {
    try {
      const result = await fetch(url + id, {
        method: "DELETE",
      });
    } catch(error) {
      dispatch(errorOn());
      errOff();
      throw new Error(`Could not fetch ${url}, status: ${console.error(error)}`);
      
    }
  }
 
};

export function removeNoute(id) {
  deleteData(urlNotes, id);
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
  return {
    type: EDIT_NOUTE_SAVE,
    text,
    generalText,
    id,
  };
}

export function createTag(tagId, tagText) {
  const req = { id: tagId, tags: tagText };
  const request = JSON.stringify(req);
  postData(urlTags, request);
  return {
    type: TAG_CREATE,
    id: tagId,
    tags: tagText,
  };
}
export function removeTag(id) {
  deleteData(urlTags, id);
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
   dispatch(errorOff())
 },4000)
}