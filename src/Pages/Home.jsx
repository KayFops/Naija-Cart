import React from 'react'
import Testimonials from '../Components/Testimonials';
import { products } from '../data/products';
import ProductCard from '../Components/product-card';
import FirstContent from '../Components/FirstContent';
const Home = () => {
  return (
    <div>
      <FirstContent />
      {/* Product */}
      
      <div className='bg-[#F9FAFB]'>
        <div className='px-[70px] my-5'>
        <h1 className='text-3xl my-5 font-bold'>Popular Products</h1>
        <p >Discover our most popular products loved by customers across Nigeria</p>
        </div>
        <div className='px-[70px] flex gap-10 my-10'>
          <button className='bg-white rounded-3xl w-[150px] py-3'>All Products</button>
          <button className='bg-white rounded-3xl w-[150px] py-3'>Electronics</button>
          <button className='bg-white rounded-3xl w-[150px] py-3'>Fashion</button>
          <button className='bg-white rounded-3xl w-[150px] py-3'>Home and Kitchen</button>
          <button className='bg-white rounded-3xl w-[150px] py-3'>Beauty and health</button>
        </div>
        <div className='grid md:grid-cols-4 px-[70px] gap-5'>
          {products.map((product, key) =>
            <ProductCard key={key} data={product}/>
          
          )}
        </div>

      </div>
      <Testimonials />
    </div>
  )
}

export default Home