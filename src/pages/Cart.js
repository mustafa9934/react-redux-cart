import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decreaseItem, increaseItem} from '../actions/AddToCart'

const Cart = () => {
  const {items} = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const decreaseItemMethod = (item) => {
    dispatch(decreaseItem(item))
  }
  const increaseItemMethod = (item) => {
    dispatch(increaseItem(item))
  }

  return (
    <div className="">
      {items && items.map(item => {
        return <div className='container mx-auto bg-gray-300' key={item.id}>
          <div className='w-100 mt-4 p-4 flex space-between space-x-10'>
            <img src={item.image} alt={item.title} className="w-1/12 h-100" />
            <div className='w-2/4'>
              <h2 className='text-2xl font-bold'>{item.title}</h2>
              <p className='mt-2'>${item.price}</p>
            </div>
            <div className='flex py-2 h-16 w-1/6'>
                <button className='p-4 bg-slate-600 text-white' onClick={() => decreaseItemMethod(item)}>-</button>
                <input className='w-16 bg-slate-50 text-center' placeholder={item.quantity} disabled/>
                <button className='p-4 bg-slate-600 text-white' onClick={() => increaseItemMethod(item)}>+</button>
              </div>
            <div className='w-1/6'>
              <h2 className='text-xl font-bold'>Total Price</h2>
              <h2 className='text-l'>${item.totalPrice}</h2>
            </div>
            <div>
              Remove
            </div>
          </div>
        </div>
      })}
      </div>
  )
}

export default Cart