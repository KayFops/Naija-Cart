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
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<><Header /><About /></>} />
        <Route path="/cartTab" element={<><Header /><CartTab /></>} />
        <Route path="/firstContent" element={<><Header /><FirstContent /></>} />
        <Route path="/:slug" element={<><Header /><Detail /></>} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/home" element={<Layout />} />  */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App