import { ADD_FAVORITE } from "../actionTypes";
import { REMOVE_FAVORITE } from "../actionTypes";
import { CLEAR_FAVORITE } from "../actionTypes";


const initialState = {
  favorites: []
};

export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_FAVORITE: 
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      }
    case REMOVE_FAVORITE:
      return {
        ...state.slice(0, action.index), //should this be ...state.favorites.slice
        ...state.slice(action.index + 1)
      }

      case CLEAR_FAVORITE:
      return state.map((index) => {
        if (index === action.index) {
          return {
            ...state,
            favorites:[]
          }
        }
      })
      default: 
        return state;
    }
  }




