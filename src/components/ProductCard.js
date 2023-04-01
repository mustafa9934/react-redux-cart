import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../actions/AddToCart';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const AddProductToCart = (product) => {
        dispatch(AddToCart(product))
      }
  return (
    <div>
        <div className='w-100 bg-gray-200'>
            <div className='w-100 h-48 bg-gray-300 flex justify-center'>
                <img className='h-48 w-100' src={product.image} alt={product.title}/>
            </div>
            <div className='p-3'>
                <h3 className='text-lg font-medium py-2'><Link to={`product/${product.id}`}>{product.title}</Link></h3>
                <p className='text-slate-400'>{product.category}</p>
                <p>${product.price}</p>
                <button 
                  className='rounded-none bg-blue-600 py-2 px-3 mt-3 text-white'
                  onClick={() => AddProductToCart(product)}
                  >+ Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
