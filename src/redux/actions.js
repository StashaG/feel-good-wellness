import {
    ADD_FAVORITE, 
    DELETE_FAVORITE, 
    SAVE_RECIPE, 
    SAVE_FAVORITE,
    FILTER_LIST
} from"./actionTypes";


 export const addFavorite = index => {
    return {
        type: ADD_FAVORITE,
        payload: {
  
            favorite: {

                name: "name of the pose",
                image: "url of the pose",
                isFavorite: false
            }
        }
    }
 };

 export const removeFavorite = index => {
    return {
        type: DELETE_FAVORITE,
        payload: {

            favorite: {

                name: "name of the pose",
                image: "url of the pose",
                isFavorite: false
            }
        }
    }
 };