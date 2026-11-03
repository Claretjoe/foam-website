import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  return (
    <main className="cart-page">

      <div className="cart-heading">
        <p className="cart-eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Review your selected SomniFlex products.</p>
      </div>

      <section className="cart-empty">

        <div className="cart-empty-icon" aria-hidden="true">
          🛒
        </div>

        <h2>Your cart is empty</h2>

        <p>
          You haven't added any products to your cart yet.
          Explore our collection to find something you love.
        </p>

        <Link to="/shop" className="cart-shop-button">
          Continue Shopping
        </Link>

      </section>

    </main>
  );
}

export default Cart;