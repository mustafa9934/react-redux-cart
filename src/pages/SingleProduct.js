import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState("");
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    })
  return (
    <div className='container mx-auto py-10'>
      {product && (
        <div className='flex flex-row'>
            <img src={product.image} alt={product.title} className="w-50 h-60"/>
            <div>
            <div className='p-3 px-16'>
                <h3 className='text-lg font-medium py-2'><Link to={`product/${product.id}`}>{product.title}</Link></h3>
                <p>{product.description}</p>
                <p className='text-slate-400'>{product.category}</p>
                <p>${product.price}</p>
                <button className='rounded-none bg-blue-600 py-2 px-3 mt-3 text-white'>+ Add to cart</button>
            </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
