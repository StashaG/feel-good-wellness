import {
    ADD_FAVORITE, 
    REMOVE_FAVORITE, 
    CLEAR_FAVORITE
} from"./actionTypes";


 export const addFavorite = id => {
    return {
        type: ADD_FAVORITE,
        payload: id,
        
    }
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

export const clearFavorite = id => {
    return {
        type: CLEAR_FAVORITE, 
        payload: id,
    }
};