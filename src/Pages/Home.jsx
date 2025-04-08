import React from 'react'
import { ShoppingCart } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import Testimonials from '../Components/Testimonials';
import { products } from '../data/products';
import ProductCard from '../Components/product-card';
import FirstContentImg from "../assets/firstContentImg.png"
import SellNaija from "../assets/SellNaija.png"
const Home = () => {
  return (
    <div>
      {/* First Content */}
      <div className='bg-[#E7F6EC] w-full h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-10 pt-[10rem] md:pt-[12rem] px-[3rem] md:px-[70px] '>
              <div className=''>
                  <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold pb-10 md:text-left text-center'>Shop with  confidence, <br />Buy with ease</h1>
                  <p className='text-xl pb-10'>Trusted Vendors, Secure Payments, Fast Delivery. Connect with the best marketplace in Nigeria.</p>
                  <div className='flex gap-5 pb-7'>
                      <button className='flex gap-2 items-center px-[1rem] border rounded-md text-lg w-[12rem] h-[3.5rem] text-white bg-[#FF9017]'>Start shopping <ShoppingCart /></button>
                      <button className='border w-[12rem] h-[3.5rem] px-[1rem] text-lg text-[#0F973D] border-[#0F973D] bg-white rounded-md'>Become a vendor</button>
                  </div>
              </div>
              <div>
                  <img src={FirstContentImg} alt="" className='w-full rounded-2xl' />
              </div>
          </div>
      {/* Product */}
      
      <div className='bg-[#F9FAFB]'>
        <div className='px-[3rem] md:px-[70px] py-5'>
        <h1 className='text-3xl my-5 font-bold'>Popular Products</h1>
        <p className='text-xl md:text-2xl'>Discover our most popular products loved by customers across Nigeria</p>
        </div>
        <div className='px-[3rem] flex md:px-[70px] md:grid grid-cols-6 gap-1 md:gap-2 my-10'>
          <button className='bg-white px-2 md:px-0 font-bold  rounded-xl md:rounded-3xl md:text-lg text-[9px] md:w-[12rem] py-1 md:py-3 hover:bg-[#0F973D] hover:text-white'>All Products</button>
          <button className='bg-white hover:bg-[#0F973D] hover:text-white rounded-xl md:rounded-3xl px-2 md:px-0 text-[9px] font-bold md:text-lg md:w-[12rem] py-3'>Electronics</button>
          <button className='bg-white hover:bg-[#0F973D] hover:text-white rounded-xl md:rounded-3xl px-2 md:px-0 text-[9px] font-bold md:text-lg md:w-[12rem] py-3'>Fashion</button>
          <button className='bg-white hover:bg-[#0F973D] hover:text-white rounded-xl md:rounded-3xl px-2 md:px-0 text-[9px] font-bold md:text-lg md:w-[12rem] py-3'>Home and Kitchen</button>
          <button className='bg-white hover:bg-[#0F973D] hover:text-white rounded-xl md:rounded-3xl px-2 md:px-0 text-[9px] font-bold md:text-lg md:w-[12rem]  py-3'>Beauty and health</button>
        </div>
        <div className='grid md:grid-cols-4 px-[70px] gap-5'>
          {products.map((product, key) =>
            <ProductCard key={key} data={product}/>
          
          )}
        </div>

      </div>
      <Testimonials />
      {/* Sell on Naija-cart */}
      <div className='bg-[#E7F6EC] w-full h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-10 pt-[7rem]  px-[3rem] md:px-[70px] '>
              <div className=''>
                  <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold pb-5'>Sell on Naija-cart</h1>
                  <p className='text-md md:text-xl pb-5'>Join thousands of vendors already growing their business with Nigeria's trusted online marketplace.</p>
                  <ul className='mb-10'>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Reach millions of shoppers across Nigeria</li>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Easy product listing and management tools</li>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Secure and timely payments</li>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Dedicated seller support</li>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Analytics to track your sales performance</li>
                    <li className='flex items-center gap-3 text-md md:text-2xl py-2'><FiCheckCircle className='text-[#0F973D]'/> Promote your products with special offers</li>
                  </ul>
              </div>
              <div>
                  <img src={SellNaija} alt="" className='w-full rounded-2xl' />
              </div>
          </div>
    </div>
  )
}

export default Home