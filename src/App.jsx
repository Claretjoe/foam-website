import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import Home from './pages/Home/Home';

import './App.css';

// function About() {
//   return <main className="page-container"><h1>About UrComfort</h1></main>;
// }

// function Shop() {
//   return <main className="page-container"><h1>Our Shop</h1></main>;
// }

// function Contact() {
//   return <main className="page-container"><h1>Contact Us</h1></main>;
// }

// function Cart() {
//   return <main className="page-container"><h1>Your Shopping Cart</h1></main>;
// }

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
