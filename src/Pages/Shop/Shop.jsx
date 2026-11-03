import { Link } from 'react-router-dom';
import products from '../../Data/product';
// import ProductCard from "../../Components/ProductCard";
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Shop.css';

function Shop() {
  const categories = [
    { name: 'Foams & Mattresses', slug: 'foams' },
    { name: 'Beds & Bed Frames', slug: 'beds' },
    { name: 'Pillows', slug: 'pillows' },
    { name: 'Bedsheets & Pillowcases', slug: 'bedsheets' },
    { name: 'Duvets & Comforters', slug: 'duvets' },
  
    { name: 'Bedding Accessories', slug: 'accessories' },
  ];

  return (
    <main className="shop-page">

      <section className="shop-intro">
        <p className="shop-eyebrow">SOMNIFLEX COLLECTION</p>

        <h1>Shop Our Products</h1>

        <p>
          Find the right products to make your bedroom
          comfortable, stylish, and welcoming.
        </p>
      </section>

      <section className="shop-categories">

        <h2>Shop by Category</h2>

        <div className="shop-category-grid">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop/${category.slug}`}
              className="shop-category-card"
            >
              <span>{category.name}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

      </section>

      <section className="shop-products">

        <div className="shop-products-heading">
          <h2>All Products</h2>
          <p>{products.length} products</p>
        </div>

        <div className="shop-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default Shop;