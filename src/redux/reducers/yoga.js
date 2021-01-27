import {
  CLEAR_ITEMS,
  HANDLE_YOGA_ITEMS,
  TOGGLE_FAVORITE,
} from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case HANDLE_YOGA_ITEMS:
      return [...state, ...action.payload];
    case CLEAR_ITEMS:
      const resetYogaData = state.map((item) => {
        if (item.isFavorite) item.isFavorite = false;
        return item;
      });
      return resetYogaData;
    case TOGGLE_FAVORITE:
      const target = state.findIndex((x) => x.id === action.payload.id);
      const items = [...state];
      items[target].isFavorite = !items[target].isFavorite;
      return items;
    default:
      return state;
  }
}
