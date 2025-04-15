import React from 'react'
import { FiShoppingBag } from "react-icons/fi";

const SignInOutText = () => {
  return (
    <div className='bg-[#1B1818] px-[40px] py-[20px] text-white rounded-xl m-[1rem] '>
     <h2 className='flex w-full text-3xl font-bold text-[#FF9017] items-center mb-5'><span className='text-[#0F973D]'><FiShoppingBag /></span>Naija <span className='text-[#0F973D]'>-Cart</span></h2>
       <div className='w-[25rem]'>
        <h1 className='text-5xl font-bold pb-2 '>Shop with confidence, Buy with ease</h1>
        <p className='text-[#E4DBDB] text-lg mb-[5rem]'>Trusted Vendors, Secure Payments, Fast Delivery. Connect with the best marketplace in Nigeria.</p> 
       </div>
       <div className='bg-[#3E3838] rounded-2xl p-5'>
        <p className='text-md'>
        As a vendor on Naija-Cart, I've been able to reach customers across Nigeria. The platform is user-friendly, and their support team is always there to help.  
        </p>

       </div>
    </div>
  )
}

export default SignInOutText