import React from 'react'
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
    }, [productId]) 
    const handleMinusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }));
    }
    const handlePlusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
      }));
    }
  return (
    <div className='flex justify-between items-center  bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md my-3'>
     <img src={detail.image} alt={detail.name} className='w-[5rem] h-[4rem]' />
     <h3 className=''>{detail.name}</h3>
     <p>{detail.price * quantity}</p>
     <div className='flex gap-2 items-center'> 
      <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
      <span>{quantity}</span>
      <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
     </div>
    </div>
  )
}

export default CartItem