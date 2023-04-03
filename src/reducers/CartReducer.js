import { ADD_TOCART, DECREASE_ITEM, INCREASE_ITEM } from '../actionTypes/AddToCartTypes'

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
        checkProduct.totalPrice += product.price;
        checkProduct.quantity ++;
        state.totalQuantity ++;
     } else {
      state.items.push({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        totalPrice: product.price,
        quantity: 1,
        image: product.image
      })
      state.totalQuantity ++;
     }
      return {...state}
    case DECREASE_ITEM:
      let checkItem = state.items.find(item => item.id === action.payload.id)
      if (checkItem && checkItem.quantity > 0) {
        checkItem.quantity --;
        checkItem.totalPrice -= action.payload.price;
        state.totalQuantity --;
      }
      return {...state}
    case INCREASE_ITEM:
      let checkItem1 = state.items.find(item => item.id === action.payload.id)
      if (checkItem1) {
        checkItem1.quantity ++;
        checkItem1.totalPrice += action.payload.price;
        state.totalQuantity ++;
      }
      return {...state}
    default:
      return state;
  }
}