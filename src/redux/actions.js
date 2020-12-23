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
 

 export const doAddToFavorites = (id) => dispatch => {
     dispatch ({
         type: ADD_FAVORITE, 
         payload: id
     })
 };

 export const doRemoveFavorites = (id) => dispatch => {
    dispatch ({
        type: REMOVE_FAVORITE, 
        payload: id
    })
};

export const doClearFavorites = (id) => dispatch => {
    dispatch ({
        type: CLEAR_FAVORITE, 
        payload: id
    })
};