import { CLEAR_ITEMS, HANDLE_YOGA_ITEMS, TOGGLE_FAVORITE } from "./actionTypes";
import OAuth from "oauth";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SECRET = process.env.REACT_APP_API_SECRET;
const oauth = new OAuth.OAuth(
  "http://api.thenounproject.com",
  "http://api.thenounproject.com",
  API_KEY,
  API_SECRET,
  "1.0",
  null,
  "HMAC-SHA1"
);

const handleApiResponse = (items) => {
  const yogaItems = items.icons.map((icon) => {
    return {
      id: icon.term_id,
      name: icon.term,
      image: icon.preview_url,
      isFavorite: false,
    };
  });
  return {
    type: HANDLE_YOGA_ITEMS,
    payload: yogaItems.slice(0, 6),
  };
};

export const fetchData = () => (dispatch) => {
  oauth.get(
    "https://api.thenounproject.com/collection/yoga-pose-set-1/icons",
    null,
    null,
    function (e, data, res) {
      if (e) console.error("ERROR", e);
      const items = JSON.parse(data); //convert text yoga data into a JS object
      console.log(items);

      dispatch(handleApiResponse(items));
    }
  );
};

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: { id },
  };
};

export const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  };
};
