import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [])
  return (
    <div className='container mx-auto px-6 py-10'>
      <div className='grid grid-cols-1 large:grid-cols-4 medium:grid-cols-2 small:grid-cols-1 gap-4'>
        {products && products.map(product => {
            return <div className='w-100 bg-gray-200' key={product.id}>
            <div className='w-100 h-48 bg-gray-300 flex justify-center'>
                <img className='h-48 w-100' src={product.image} alt={product.title}/>
            </div>
            <div className='p-3'>
                <h3 className='text-lg font-medium py-2'><Link to={`product/${product.id}`}>{product.title}</Link></h3>
                <p className='text-slate-400'>{product.category}</p>
                <p>${product.price}</p>
                <button className='rounded-none bg-blue-600 py-2 px-3 mt-3 text-white'>+ Add to cart</button>
            </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Home
