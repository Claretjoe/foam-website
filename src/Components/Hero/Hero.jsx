
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">WELCOME TO URCOMFORT</span>

        <h1>
          Experience the
          <br />
          Art of Better Sleep.
        </h1>

        <p>
          Discover quality mattresses, comfortable pillows
          and beautiful bedding materials designed to make
          every night special.
        </p>

        <Link to="/shop" className="hero-button">
          Explore Our Collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
