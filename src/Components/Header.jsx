import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingBag } from "react-icons/fi";
import { ShoppingCart } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import about from '../Pages/About';
const Header = () => {
     const [nav, setNav] = useState(false)
     const handleNav = () => [
        setNav(!nav)
     ]
     const [totalQuantity, setTotalQuantity] = useState(0);
     const carts = useSelector(store => store.cart.items);
     const dispatch = useDispatch();
     useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
     }, [carts])
     const handleOpenTabCart = () => {
      dispatch(toggleStatusTab());
     } 
  return (
    <nav className='fixed bg-white w-full flex justify-between items-center h-24  px-[70px] m-auto text-black z-10' >
         <Link to='/'><h2 className='flex w-full text-3xl font-bold text-[#FF9017] items-center'><span className='text-[#0F973D]'><FiShoppingBag /></span>Naija <span className='text-[#0F973D]'>-Cart</span></h2></Link>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to='/'>Home</Link></li>
            <li className='p-4'><Link to='/'>Categories</Link></li>
            <li className='p-4'><Link to='/'>Deals</Link></li>
            <li className='p-4'><Link to='/'>Vendors</Link></li>
            <li className='p-4'><Link to='/about'>About</Link></li>
        </ul>
        <label className='hidden md:flex border rounded-md items-center px-4 py-2' htmlFor=""><CiSearch /><input className='px-2 placeholder::pr-[100px] ' type="search" name="" id="" placeholder='Search' /></label>
        <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenTabCart}>
          <div className='w-6 relative'><ShoppingCart size={30}/></div>
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
        </div>
        <div className='hidden md:flex my-3'>
        <Link to='/signin' className='bg-[#E7F6EC] mx-2 font-bold text-[#0F973D] px-6 py-2 rounded hover:bg-[#00df9a] hover:scale-105 duration-300 '>Sign In</Link> 
            <Link to='/signup' className='bg-[#0F973D] mx-4 font-bold text-white px-6 py-2 rounded hover:bg-gray-300 hover:text-[#00df9a] hover:scale-105 duration-300'>Sign Up</Link>
                               
            </div>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20} /> }
        </div>
        <div  className={nav ? 'md:hidden fixed left-0 top-0 w-[70%] text-white border-r border-r-gray-900 h-full  bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
        <Link to='/'><h2 className='flex w-full text-2xl pl-5 pt-5 font-bold text-[#FF9017]'>Naija <span className='text-[#0F973D]'>-Cart</span></h2></Link>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><Link to='/'>Home</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/about'>Categories</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/about'>Deals</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/about'>Vendors</Link></li>
            <li className='p-4 '><Link to='/contact'>About</Link></li> 
            <ul className='flex'>
            <li className='flex my-3'><Link to='/signin' className='bg-[#E7F6EC] mx-2 font-bold text-[#0F973D] px-6 py-2 rounded hover:bg-[#00df9a] hover:scale-105 duration-300 '>Sign In</Link> </li>
            <li className='flex my-3'><Link to='/signup' className='bg-[#0F973D] mx-4 font-bold text-white px-6 py-2 rounded hover:bg-gray-300 hover:text-[#00df9a] hover:scale-105 duration-300'>Sign Up</Link> </li>
            </ul>
            
            </ul>
            
        </div>
    </nav>
  )
}

export default Header