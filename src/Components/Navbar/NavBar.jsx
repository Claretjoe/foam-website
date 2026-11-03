
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './Navbar.css';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setShopOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-name">UrComfort</span>
          <span className="brand-tagline">
            Your Comfort, Our Priority.
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <div className="shop-menu">
            <button
              className="shop-toggle"
              onClick={() => setShopOpen(!shopOpen)}
            >
              Shop <ChevronDown size={16} />
            </button>

            {shopOpen && (
              <div className="shop-dropdown">
                <Link to="/shop#beds" onClick={closeMenu}>
                  Beds & Mattresses
                </Link>
                <Link to="/shop#pillows" onClick={closeMenu}>
                  Pillows
                </Link>
                <Link to="/shop#bedding" onClick={closeMenu}>
                  Bedding Materials
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <div className="auth-links">
            <Link to="/signin" onClick={closeMenu}>
              Sign In
            </Link>
            <Link
              to="/signup"
              className="signup-button"
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </div>

          <Link
            to="/cart"
            className="cart-link"
            onClick={closeMenu}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag size={22} />
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;
