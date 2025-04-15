import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../stores/cart'

const Detail = () => {
    const {slug} = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity -1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity
        }))
    }
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h2 className='text-2xl md:text-3xl text-center mb-8 font-semibold'>PRODUCT DETAIL</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='w-full max-w-md mx-auto'>
                <img 
                    src={detail.image} 
                    alt={detail.name} 
                    className='w-full h-auto object-cover rounded-lg shadow-lg' 
                />
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl md:text-4xl uppercase font-bold'>{detail.name}</h1>
                <p className='font-bold text-2xl md:text-3xl text-slate-800'>₦{detail.price}</p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex gap-2 justify-center items-center h-12'>
                        <button 
                            className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors' 
                            onClick={handleMinusQuantity}
                        >
                            -
                        </button>
                        <span className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>
                            {quantity}
                        </span>
                        <button 
                            className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors'
                            onClick={handlePlusQuantity}
                        >
                            +
                        </button>
                    </div>
                    <button 
                        className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-slate-800 transition-colors w-full sm:w-auto'
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
                <div className='mt-4'>
                    <h3 className='text-lg font-semibold mb-2'>Description</h3>
                    <p className='text-gray-600 leading-relaxed'>
                        {detail.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail