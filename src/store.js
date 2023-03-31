import { configureStore } from '@reduxjs/toolkit'
import {CartSlice} from './reducers/CartReducer'
export const store = configureStore({
  reducer: {
    cart: CartSlice
  },
})