import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CartSlice.actions

export default CartSlice.reducer