import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CartTab from './stores/cartTab';
// import Layout from './Components/layout';
import Detail from './Pages/detail';
import FirstContent from './Components/FirstContent';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/cartTab" element={<CartTab />} />
        <Route path="/firstContent" element={<FirstContent />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/home" element={<Layout />} />  */}
        <Route path="/:slug" element={<Detail />} />
             
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

