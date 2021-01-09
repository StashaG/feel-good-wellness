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
        const target = [...state].find(x => x.id === action.payload.id)
        target.isFavorite = true;
        const items = [...state].filter(item => item.id !== action.payload.id)
        return items.concat(target);

      default: 
        return state;
    }
  }