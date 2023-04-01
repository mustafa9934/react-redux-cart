import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-800 h-16 text-white'>
      <div className='container px-6 h-16 mx-auto flex justify-between items-center'>
        <a href="">Logo</a>
        <nav className='nav'>
          <ul className='flex flex-row space-x-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
