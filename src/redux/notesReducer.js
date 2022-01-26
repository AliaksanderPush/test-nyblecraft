import { NOUTE_CREATE, REMOVE_NOUTE, EDIT_NOUTE_SAVE } from "./type";

const initialState = {
  noutes: [],
};

export const NoutesReducer = (state = initialState, action) => {
  console.log('NoutesReducer>>',action)
    switch (action.type) {
    case NOUTE_CREATE:
      return {
        ...state,
        noutes: [...state.noutes, action.data, ],
      };
   
      case REMOVE_NOUTE:
        return (() => {
          const {id} = action;
          const {noutes} = state;
          const nextNoutes = noutes.filter(item => item.id !== id);
          return {
            ...state,
            noutes: nextNoutes
          }
        })();
              
        case EDIT_NOUTE_SAVE:
            const {id} = action;
            const {noutes} = state;
            const indexId = noutes.findIndex(item => item.id == id) 
            const newInfo = [...noutes.slice(0, indexId),action, ...noutes.slice(indexId+1)];
     
            return {
              ...state,
                noutes:newInfo     
            }     
       
              /*    
          case "GET_ALL_NOUTES":
          const noutesNew = action.data.map((res) => {
            return {
              text: res.name,
              id: res.id,
            };
          });
          return {
            ...state,
          noutes: noutesNew,
      };
       */
      default:
        return state;
    
      
  }
  
};
