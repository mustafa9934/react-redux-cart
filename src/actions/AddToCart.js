import { ADD_TOCART, DECREASE_ITEM, INCREASE_ITEM } from "../actionTypes/AddToCartTypes"

export const AddToCart = (product) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_TOCART,
            payload: product
        })
    } catch (error) {
        console.log(error);
    }
  }

export const decreaseItem = id => async (dispatch) => {
    try {
        dispatch({
            type: DECREASE_ITEM,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}
export const increaseItem = id => async (dispatch) => {
    try {
        dispatch({
            type: INCREASE_ITEM,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }    
}