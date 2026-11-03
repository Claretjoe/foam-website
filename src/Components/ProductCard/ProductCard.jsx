
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, ArrowUpRight } from 'lucide-react';

import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {product.tag && (
          <span className="product-tag">{product.tag}</span>
        )}

        <button
          className="wishlist-btn"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>

        <button
          className="quick-add"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>

      <div className="product-details">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <span className="product-price">
            ₦{Number(product.price).toLocaleString('en-NG')}
          </span>

          <Link to="/shop" className="product-view">
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
