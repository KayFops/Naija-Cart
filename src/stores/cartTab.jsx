import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/cartItem'
import { Link } from 'react-router-dom'

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);

  return (
    <div className="pt-[5rem] w-full h-full bg-gray-100 grid grid-rows-[60px_1fr_60px] shadow-lg">
      {/* Header */}
      <h2 className="px-6 py-4 text-2xl font-semibold bg-gray-800 text-white">
        Shopping Cart
      </h2>

      {/* Cart Items */}
      <div className="overflow-y-auto px-4 sm:px-6 py-4 space-y-4 bg-white">
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        ) : (
          <div className="text-center text-gray-500 text-lg py-10">
            Your cart is empty.
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="grid grid-cols-2">
        <Link
          to="/"
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base font-medium text-center py-3 transition-colors duration-300"
        >
          CLOSE
        </Link>
        <Link
          to="/checkout"
          className="bg-amber-600 hover:bg-amber-500 text-white text-sm sm:text-base font-medium text-center py-3 transition-colors duration-300"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartTab;
