import {
    ADD_FAVORITE, 
    REMOVE_FAVORITE, 
    CLEAR_ITEMS,
} from "./actionTypes";
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

export const fetchData = () => dispatch => {
    const yogaItems = [];
    oauth.get(
        "https://api.thenounproject.com/collection/yoga-pose-set-1/icons",
        null,
        null,
        function (e, data, res) {
          if (e) console.error(e);
          const yd = JSON.parse(data); //convert text yoga data into a JS object
       

          for (let i = 0; i < data.length ; i++) {
              
              yogaItems.push({ 
                  id: yd.icons[i].term_id,
                  name: yd.icons[i].term,
                  image: yd.icons[i].preview_url,
                  isFavorite: false, 
              });
  
          }
        }
        
      );
      return {
        type: ADD_FAVORITE,
        payload: yogaItems
        
    };
}

 export const addFavorite = (item) => {
     
    return {
        type: ADD_FAVORITE,
        payload: {...item},
        
    };
 };

 export const removeFavorite = id => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,

            favorite: {

                name: "name of the pose",
                image: "url of the pose",
                isFavorite: false
            }
        }
    }

    export const addYogaItems = id => {
        return {
            type: ADD_FAVORITE, 
            payload: id,
        }
    }

export const clearItems = id => {
    return {
        type: CLEAR_ITEMS, 
        payload: id,
    }
   
};