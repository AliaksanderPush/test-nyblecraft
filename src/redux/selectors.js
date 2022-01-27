export const createdNoutes = (state) => state.NoutesReducer.noutes;
export const editNoute = (state) => state.EditReducer.editNoutes;
export const getTags = (state) => state.TagReducer.tag;
export const getSearchTag = (state) => state.NoutesReducer;
export const errors = state =>  state.AppReducer.error;
export const activ = state => state.ActiveReducer.on;