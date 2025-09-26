import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const trendingProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">Elevate Your</span>
          <br />
          <span className="block mt-2">Mobile Experience.</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto my-6">
          Discover the hottest accessories that match your vibe. Gen-Z approved style and tech, all in one place.
        </p>
        <Link 
          to="/shop" 
          className="inline-block bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold text-lg px-8 py-3 rounded-full hover:scale-105 transform transition-transform duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Trending Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
