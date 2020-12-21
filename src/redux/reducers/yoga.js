import { ADD_FAVORITE } from "../actionTypes";

const initialState = {
  favorites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,  // balance: 139, transactions: []
       
      }
    }
    default:
      return state;
  }
}



