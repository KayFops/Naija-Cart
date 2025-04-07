import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-8xl font-bold text-gray-800"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <h2 className="text-3xl font-semibold text-gray-700 mt-2">Page Not Found</h2>
      <p className="text-gray-500 mt-4">The page you are looking for does not exist.</p>
      <Link to="/">
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return Home
        </motion.button>
      </Link>
    </motion.div>
  </div>
  )
}

export default NotFound