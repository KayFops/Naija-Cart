import React from 'react'
import { Outlet } from 'react-router-dom'
import CartItem from './CartItem'

const Layout = ({ children }) => {
  const showCart = true // This should be determined based on the current route

  return (
    <div>
      {/* Header/Navigation */}
      {children}
      {/* Only show CartItem on specific pages */}
      {showCart && <CartItem />}
    </div>
  )
}

export default Layout