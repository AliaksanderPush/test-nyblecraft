import {
  NOUTE_CREATE,
  GET_ALL_NOUTES,
  REMOVE_NOUTE,
  EDIT_NOUTE,
  EDIT_NOUTE_SAVE,
  TAG_CREATE,
  TAG_SEARCH,
  TAG_REMOVE,
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
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    const notes = await result.json();
    dispatch({
      type: GET_ALL_NOUTES,
      data: notes,
    });
  };
};

export const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  return await result;
};

export const deleteData = async (url, id) => {
  const result = await fetch(url + id, {
    method: "DELETE",
  });
  return await result;
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
