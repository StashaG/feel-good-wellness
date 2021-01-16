import {  
  ADD_FAVORITE, 
  REMOVE_FAVORITE, 
  CLEAR_ITEMS, 
  HANDLE_YOGA_ITEMS 
} from "../actionTypes";

const initialState =  [];

export default function(state = initialState, action) {
  switch (action.type) {
    case HANDLE_YOGA_ITEMS: 
      return [
        ...state,
        ...action.payload,
      ]
      case ADD_FAVORITE:
        console.log(action.payload.id);
        const target = state.findIndex(x => x.id === action.payload.id)
        const items = [...state]
        items[target].isFavorite = true
        return items;

      case CLEAR_ITEMS:
        return [];
      default: 
        return state;
    }
  }