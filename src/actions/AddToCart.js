import { ADD_TOCART } from "../actionTypes/AddToCartTypes"

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