import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart"
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
