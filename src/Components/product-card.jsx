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
    <div className='border-1 w-70 mt-2 m-auto shadow-sm hover:shadow-lg rounded-xl pb-5 mb-5'>

      <div className='w-full h-64 overflow-hidden'>
        <Link to={slug}>
        <img className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] rounded-xl'
          src={image} alt="" />
          </Link>
      </div>
      <div className='mt-4 flex flex-col gap-2 px-4'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p>{props.description}</p>
        <p className='flex items-center gap-2'><Star className='text-yellow-500'  /><span className='text-gray-600'><span className='text-black'>4.8 </span>(167)</span></p>
        <p className='font-bold text-3xl'>₦{price}</p>
        
        <div className='mt-2 flex justify-center'>
          <button className='flex items-center gap-2 bg-gray-200 text-black px-6 py-2 rounded-md hover:bg-gray-400 hover:text-white transition-all duration-300' onClick={handleAddToCart}>
            <ShoppingCart />Add to Cart
          </button>
        </div>
      </div>
  </div>
    
  )
}

export default ProductCard