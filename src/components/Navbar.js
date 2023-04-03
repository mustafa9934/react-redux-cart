import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {totalQuantity} = useSelector(state => state.cart)
  return (
    <div className='bg-gray-800 h-16 text-white'>
      <div className='container px-6 h-16 mx-auto flex justify-between items-center'>
        <a href="">Logo</a>
        <nav className='nav'>
          <ul className='flex flex-row space-x-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link> <span className='bg-gray-300 text-gray-900 py-1 px-2 rounded-full'>{totalQuantity}</span> </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
