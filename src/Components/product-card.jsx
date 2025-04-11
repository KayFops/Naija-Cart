import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart } from '../stores/cart'
const ProductCard = (props) => {
  const carts = useSelector(store => store.cart.items);
  console.log(carts);
  const {id, name, price, image, slug} = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1

    }));

  } 
  return (
    <div className='border-1 w-full sm:w-80 md:w-70 mt-2 m-auto shadow-sm hover:shadow-lg rounded-xl pb-5 mb-5'>

      <div className='w-full h-48 sm:h-64 overflow-hidden'>
        <Link to={slug}>
        <img className='w-full h-48 sm:h-64 object-cover object-top drop-shadow-[0_80px_30px_#0007] rounded-xl'
          src={image} alt="" />
          </Link>
      </div>
      <div className='mt-4 flex flex-col gap-2 px-2 sm:px-4'>
        <h1 className=' text-sm md:text-lg sm:text-xl font-bold'>{name}</h1>
        <p className='text-sm sm:text-base'>{props.description}</p>
        <p className='flex items-center gap-2 text-sm sm:text-base'><Star className='text-yellow-500'  /><span className='text-gray-600'><span className='text-black'>4.8 </span>(167)</span></p>
        <p className='font-bold text-md md:text-2xl sm:text-xl'>₦{price}</p>
        
        <div className='mt-2 flex justify-center'>
          <button className='flex items-center gap-2 bg-[#0F973D] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base' onClick={handleAddToCart}>
            <ShoppingCart />Add to Cart
          </button>
        </div>
      </div>
  </div>
    
  )
}

export default ProductCard