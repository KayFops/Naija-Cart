import React from 'react';
import { ShoppingCart } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import Testimonials from '../Components/Testimonials';
import { products } from '../data/products';
import ProductCard from '../Components/product-card';
import FirstContentImg from "../assets/firstContentImg.png";
import SellNaija from "../assets/SellNaija.png";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const hoverEffect = {
  whileHover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 300 },
  },
};

const Home = () => {
  return (
    <div>
      {/* First Content */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='bg-[#E7F6EC] w-full min-h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-10 pt-[5rem] md:pt-[12rem] px-[1.5rem] sm:px-[3rem] md:px-[70px]'
      >
        <div className='text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold pb-5 md:pb-10'>
            Shop with confidence, <br />Buy with ease
          </h1>
          <p className='text-lg sm:text-xl pb-5 md:pb-10'>
            Trusted Vendors, Secure Payments, Fast Delivery. Connect with the best marketplace in Nigeria.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 pb-7 justify-center md:justify-start'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex gap-2 items-center justify-center px-[1rem] border rounded-md text-base sm:text-lg w-full sm:w-[12rem] h-[3rem] sm:h-[3.5rem] text-white bg-[#FF9017]'
            >
              Start shopping <ShoppingCart />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border w-full sm:w-[12rem] h-[3rem] sm:h-[3.5rem] px-[1rem] text-base sm:text-lg text-[#0F973D] border-[#0F973D] bg-white rounded-md'
            >
              Become a vendor
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={fadeIn}
          
        >
          <img src={FirstContentImg} alt="" className='w-full rounded-2xl' />
        </motion.div>
      </motion.section>

      {/* Product */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='bg-[#F9FAFB]'
      >
        <div className='px-[1.5rem] sm:px-[3rem] md:px-[70px] py-5'>
          <h1 className='text-2xl sm:text-3xl my-5 font-bold'>Popular Products</h1>
          <p className='text-lg sm:text-xl md:text-2xl'>
            Discover our most popular products loved by customers across Nigeria
          </p>
        </div>
        <div className='px-[1.5rem] sm:px-[3rem] md:px-[70px] flex flex-wrap md:grid grid-cols-6 gap-2 md:gap-2 my-5 md:my-10'>
          {['All Products', 'Electronics', 'Fashion', 'Home and Kitchen', 'Beauty and health'].map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              className='bg-white hover:bg-[#0F973D] hover:text-white transition-colors duration-300 rounded-xl md:rounded-3xl px-2 md:px-0 text-xs sm:text-sm md:text-lg md:w-[12rem] py-1 md:py-3'
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[1.5rem] sm:px-[3rem] md:px-[70px] gap-5'>
          {products.map((product, key) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: key * 0.1 }}
            >
              <ProductCard data={product} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Testimonials />

      {/* Sell on Naija-cart */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='bg-[#E7F6EC] w-full min-h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-10 pt-[5rem] md:pt-[7rem] px-[1.5rem] sm:px-[3rem] md:px-[70px]'
      >
        <div className='text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold pb-5'>Sell on Naija-cart</h1>
          <p className='text-base sm:text-lg md:text-xl pb-5'>
            Join thousands of vendors already growing their business with Nigeria's trusted online marketplace.
          </p>
          <ul className='mb-10'>
            {[
              'Reach millions of shoppers across Nigeria',
              'Easy product listing and management tools',
              'Secure and timely payments',
              'Dedicated seller support',
              'Analytics to track your sales performance',
              'Promote your products with special offers'
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                whileInView="visible"
                whileHover={{ x: 10 }}
                className='flex items-center gap-3 text-sm sm:text-base md:text-lg lg:text-2xl py-2'
              >
                <FiCheckCircle className='text-[#0F973D]' /> {item}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={fadeIn}
        >
          <img src={SellNaija} alt="" className='w-full rounded-2xl' />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
