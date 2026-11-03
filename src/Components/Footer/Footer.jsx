
import React from 'react';
import { Link } from 'react-router-dom';
import {

  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Ur<span>Comfort</span>
          </Link>

          <p>
            Your Comfort, Our Priority.
            We provide quality foam, pillows and
            bedding materials designed to make
            every moment of rest worthwhile.
          </p>

          {/* <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          </div> */}
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Our Products</h3>
          <Link to="/shop?category=beds">Beds & Mattresses</Link>
          <Link to="/shop?category=pillows">Pillows</Link>
          <Link to="/shop?category=bedding">Bedding Materials</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>
            <MapPin size={17} />
            <span>Company Address, Nigeria</span>
          </p>

          <p>
            <Phone size={17} />
            <span>+2347089154342</span>
          </p>

          <p>
            <Mail size={17} />
            <span>hello@urcomfort.com</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} UrComfort.
          All Rights Reserved.
        </p>

        <a href="#top">
          Back to top <ArrowRight size={15} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
