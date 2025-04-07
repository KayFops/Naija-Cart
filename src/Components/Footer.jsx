import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-[#111827] w-full py-10 px-[70px]'>
        <div className=' mx-auto grid lg:grid-cols-3 gap-10 text-gray-300'>
     <div>
     <Link to='/'><h2 className='flex w-full text-2xl font-bold text-[#FF9017]'>Naija <span className='text-[#0F973D]'>-Cart</span></h2></Link>
        <p className='py-4'>Nigeria's most trusted online marketplace for convenient and affordable shopping.</p>
        <button className='bg-[#FF9017] w-full rounded-md font-medium  px-6 py-3 text-white'>Subscribe</button>
        </div>
        <div className='lg:col-span-1 flex justify-between'>
            <div>
                <h6 className='font-medium text-white'>Quicklinks</h6>
                <ul>
                    <li className='text-gray-400 py-2 text-sm'>Shop</li>
                    <li className='text-gray-400 py-2 text-sm'>About us</li>
                    <li className='text-gray-400 py-2 text-sm'>Vendors</li>
                    <li className='text-gray-400 py-2 text-sm'>Supports</li>
                    <li className='text-gray-400 py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-white'>Policies</h6>
                <ul>
                    <li className='text-gray-400 py-2 text-sm'>Privacy Policy</li>
                    <li className='text-gray-400 py-2 text-sm'>Terms of Service</li>
                    <li className='text-gray-400 py-2 text-sm'>Return Policy</li>
                    <li className='text-gray-400 py-2 text-sm'>Shipping information</li>
                    <li className='text-gray-400 py-2 text-sm'>FAQ</li>
                </ul>
            </div>     
          </div>
          <div>
            <h6 className='font-medium text-white'>Stay Updated</h6>
            <p className='text-gray-400 py-2 '>Subscribe to get updates on new products and special offers.</p>
             <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" name="" id="" placeholder='Enter Email' />
                    <button className='bg-[#FF9017] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-white'>Subscribe</button>
                </div>
          </div>  
    </div>
    <div className='block mx-auto text-center w-full text-gray-400'>
        <hr className='bg-gray-400 my-5' />
    © 2025 NaijaCart. All rights reserved.
    </div>  

    </footer>
    
  )
}

export default Footer