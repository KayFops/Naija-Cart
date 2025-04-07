import React from 'react'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div>layout <Outlet /></div>
  )
}

export default layout