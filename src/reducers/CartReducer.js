import { ADD_TOCART } from '../actionTypes/AddToCartTypes'

const initialState = {
  items: [],
  totalQuantity: 0
}

export const CartSlice = (state= initialState, action) => {
  switch(action.type){
    case ADD_TOCART:
      const product = action.payload;
      const checkProduct = state.items.find(item => item.id === product.id)
     if (checkProduct) {
        checkProduct.price += action.payload.price;
        checkProduct.quantity ++;
        state.totalQuantity ++;
     } else {
      state.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        totalPrice: product.price,
        quantity: 1
      })
      state.totalQuantity ++;
     }
      return {...state}
    default:
      return state;
  }
}