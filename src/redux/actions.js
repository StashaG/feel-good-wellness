import {
    ADD_FAVORITE, 
    DELETE_FAVORITE, 
    SAVE_RECIPE, 
    FILTER_LIST
} from"./actionTypes";


 export const addFavorite = index => {
    return {
        type: 'FAVORITE_ADDED',
        payload: {
            index: index
        }
    };
 };

 export const removeFavorite = index => {
    return {
        type: 'FAVORITE_REMOVED',
        payload: {
            index: index
        }
    };
 };