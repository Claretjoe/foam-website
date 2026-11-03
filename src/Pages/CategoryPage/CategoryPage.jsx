import { Link, useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';

const categoryNames = {
  foams: 'Foams & Mattresses',
  beds: 'Beds & Bed Frames',
  pillows: 'Pillows',
  bedsheets: 'Bedsheets & Pillowcases',
  duvets: 'Duvets & Comforters',
  accessories: 'Bedding Accessories',
};

function CategoryPage() {
  const { category } = useParams();

  const categoryName = categoryNames[category];

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  if (!categoryName) {
    return (
      <main className="category-page">
        <h1>Category Not Found</h1>
        <Link to="/shop">Return to Shop</Link>
      </main>
    );
  }

  return (
    <main className="category-page">

      <div className="category-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{categoryName}</span>
      </div>

      <section className="category-intro">
        <p className="category-eyebrow">SOMNIFLEX COLLECTION</p>
        <h1>{categoryName}</h1>
        <p>
          Explore our {categoryName.toLowerCase()} collection.
        </p>
      </section>

      {categoryProducts.length > 0 ? (
        <div className="category-product-grid">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p className="category-empty">
          No products are currently available in this category.
        </p>
      )}

      <Link to="/shop" className="category-back-link">
        ← Back to All Products
      </Link>

    </main>
  );
}

export default CategoryPage;