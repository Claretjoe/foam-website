
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
  Headphones
} from 'lucide-react';

// import Hero from '../Components/Hero';
import Hero from '../../Components/Hero/Hero'
import ProductCard from '../../Components/ProductCard/ProductCard';

import './Home.css';

const products = [
  {
    id: 1,
    name: 'Premium Comfort Mattress',
    category: 'Mattresses',
    price: 85000,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    name: 'Luxury Sleeping Pillow',
    category: 'Pillows',
    price: 12000,
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 3,
    name: 'Premium Bedding Collection',
    category: 'Bedding',
    price: 35000,
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 4,
    name: 'Classic Foam Mattress',
    category: 'Mattresses',
    price: 65000,
    tag: '',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80'
  }
];

const categories = [
  {
    name: 'Beds & Mattresses',
    description: 'Experience exceptional comfort and support.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    category: 'beds'
  },
  {
    name: 'Pillows',
    description: 'Enjoy softer and more relaxing nights.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80',
    category: 'pillows'
  },
  {
    name: 'Bedding Materials',
    description: 'Complete your bedroom with elegant essentials.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
    category: 'bedding'
  }
];

function Home() {

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(
      localStorage.getItem('urcomfort-cart') || '[]'
    );

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(
      'urcomfort-cart',
      JSON.stringify(existingCart)
    );

    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="home-page">

      {/* Hero Section */}
      <Hero />

      {/* Introduction */}
      <section className="intro-section page-container">
        <span className="eyebrow">WELCOME TO URCOMFORT</span>

        <h2 className="section-title">
          More Than Comfort,
          <br />
          It's a Better Way to Live.
        </h2>

        <p className="section-subtitle">
          At UrComfort, we believe quality rest is an
          essential part of a beautiful life. From carefully
          crafted foam mattresses to luxurious pillows and
          bedding materials, we bring comfort closer to you.
        </p>

        <Link to="/about" className="text-link">
          Discover Our Story <ArrowRight size={17} />
        </Link>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="page-container">

          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE OUR COLLECTION</span>
              <h2 className="section-title">
                Shop By Category
              </h2>
            </div>

            <Link to="/shop" className="text-link">
              View All <ArrowRight size={17} />
            </Link>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                to={`/shop?category=${category.category}`}
                className="category-card"
                key={category.category}
              >
                <img src={category.image} alt={category.name} />

                <div className="category-overlay">
                  <span>EXPLORE COLLECTION</span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <div className="category-arrow">
                    <ArrowRight size={19} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section page-container">

        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR FAVOURITES</span>
            <h2 className="section-title">
              Featured Products
            </h2>
            <p className="section-subtitle">
              Discover some of our most loved comfort essentials.
            </p>
          </div>

          <Link to="/shop" className="text-link">
            Shop All Products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-section">

        <div className="page-container">

          <div className="why-heading">
            <span className="eyebrow">THE URCOMFORT DIFFERENCE</span>

            <h2 className="section-title">
              Comfort You Can Trust.
            </h2>

            <p className="section-subtitle">
              We are committed to making quality comfort
              accessible through products you can depend on.
            </p>
          </div>

          <div className="benefits-grid">

            <div className="benefit-card">
              <ShieldCheck size={35} />
              <h3>Quality Products</h3>
              <p>
                Carefully selected products designed
                with comfort and durability in mind.
              </p>
            </div>

            <div className="benefit-card">
              <Truck size={35} />
              <h3>Reliable Delivery</h3>
              <p>
                Convenient delivery arrangements to
                help get your purchases to you.
              </p>
            </div>

            <div className="benefit-card">
              <Award size={35} />
              <h3>Excellent Value</h3>
              <p>
                Comfort-focused products at prices
                that offer great value.
              </p>
            </div>

            <div className="benefit-card">
              <Headphones size={35} />
              <h3>Customer Support</h3>
              <p>
                We're here to help you find the right
                products for your comfort.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section page-container">

        <span className="eyebrow">CUSTOMER EXPERIENCES</span>

        <h2 className="section-title">
          Comfort Worth Talking About.
        </h2>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p>
            "A comfortable home begins with quality essentials.
            UrComfort is all about making everyday rest more
            enjoyable."
          </p>

          <h4>UrComfort Customer</h4>
          <span>Customer Experience</span>
        </div>

      </section>

      {/* Final Call To Action */}
      <section className="home-cta">
        <div className="page-container">

          <span>MAKE YOUR COMFORT A PRIORITY</span>

          <h2>
            Your Perfect Rest
            <br />
            Starts Here.
          </h2>

          <Link to="/shop" className="cta-button">
            Explore Our Shop <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Home;
