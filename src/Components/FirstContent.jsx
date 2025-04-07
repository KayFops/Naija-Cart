import React from 'react'
import FirstContentImg from "../assets/firstContentImg.png"

const FirstContent = () => {
  return (
    <div className='bg-[#E7F6EC] w-full h-screen grid md:grid-cols-2 gap-10 pt-[200px] px-[70px]'>
        <div className=''>
            <h1 className='text-8xl font-bold pb-10 '>Shop with confidence, Buy with ease</h1>
            <p className='text-xl pb-10'>Trusted Vendors, Secure Payments, Fast Delivery. Connect with the best marketplace in Nigeria.</p>
            <div>
                <button>Start shopping</button>
                <button>Become a vendor</button>
            </div>
        </div>
        <div>
            <img src={FirstContentImg} alt="" className='w-full rounded-2xl' />
        </div>
    </div>
  )
}

export default FirstContent