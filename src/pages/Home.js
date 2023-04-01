import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

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
        return <ProductCard product={product} key={product.id}/>
      })}
      </div>
    </div>
  )
}

export default Home
