import { ADD_YOGA_ITEMS } from "../actionTypes";

const initialState = {
  yogaItems: []
};

export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_YOGA_ITEMS: 
      return {
        ...state,
        yogaItems: state.addYogaItems,
      }
      default: 
        return state;
    }
  }