import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/cartItem'

const cartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab)
  return (
    <div className={`fixed top-0 right-0 bg-gray-500 shadow-2xl w-96 h-full grid grid-row-[60px_1fr_60px transform ${statusTab === false ? "translate-x-full" : ""}`}>
        <h2 className='p-5 text-white text-2xl '>Shopping Cart</h2>
        <div className='p-5'>
            {carts.map((item, key) =>
            <CartItem key={key} data={item}/> )}
        </div>
        <div className='grid grid-cols-2'>
            <button className='bg-black text-white'>CLOSE</button>
            <button className='bg-amber-600 text-white'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default cartTab