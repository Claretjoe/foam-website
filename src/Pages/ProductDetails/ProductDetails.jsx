import { Link, useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <h1>Product Not Found</h1>
        <Link to="/shop">Return to Shop</Link>
      </main>
    );
  }

  const price = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <main className="product-details-page">

      <div className="product-details-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-details-layout">

        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-content">

          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-price">
            {price}
          </p>

          <p className="product-details-description">
            {product.description}
          </p>

          <button
            type="button"
            className="product-details-add-button"
            onClick={() => {
              alert('We will connect this button to the shopping cart next.');
            }}
          >
            Add to Cart
          </button>

          <p className="product-details-note">
            Contact our team if you need assistance selecting a product.
          </p>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;