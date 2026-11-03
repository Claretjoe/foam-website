import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopDropdown.css';

const categories = [
  { name: 'All Products', path: '/shop' },
  { name: 'Foams & Mattresses', path: '/shop/foams' },
  { name: 'Beds & Bed Frames', path: '/shop/beds' },
  { name: 'Pillows', path: '/shop/pillows' },
  { name: 'Bedsheets & Pillowcases', path: '/shop/bedsheets' },
  { name: 'Duvets & Comforters', path: '/shop/duvets' },
  { name: 'Bedding Accessories', path: '/shop/accessories' },
];

function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shop-menu">
      <button
        type="button"
        className="shop-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Shop <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="shop-menu-list">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="shop-menu-item"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;