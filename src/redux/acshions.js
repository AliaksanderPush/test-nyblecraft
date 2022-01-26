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
    const url = " http://localhost:3004/noutes";
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    const notes = await result.json();
    dispatch({
      type: GET_ALL_NOUTES,
      data: notes,
    });
    console.log(notes);
  };
};

export const postData = async (data) => {
  const url = " http://localhost:3004/requests";
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: data,
  });
  return await result;
};

export const deleteData = async (id) => {
  const url = " http://localhost:3004/requests/" + id;
  const result = await fetch(url, {
    method: "DELETE",
  });
  return await result;
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
    tags: tagText,
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
