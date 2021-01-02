import {
    ADD_FAVORITE, 
    REMOVE_FAVORITE, 
    CLEAR_FAVORITE
} from"./actionTypes";


 export const addFavorite = index => {
    return {
        type: ADD_FAVORITE,
        payload: index 
    }
 };

 export const removeFavorite = index => {
    return {
        type: REMOVE_FAVORITE,
        payload: index,

            favorite: {

                name: "name of the pose",
                image: "url of the pose",
                isFavorite: false
            }
        }
    }

export const clearFavorite = index => {
    return {
        type: CLEAR_FAVORITE, 
        payload: index,
    }
};