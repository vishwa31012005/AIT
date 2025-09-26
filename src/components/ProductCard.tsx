import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-brand-purple/20">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink mt-1">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-brand-purple text-white font-semibold py-2 rounded-lg hover:bg-gradient-to-r from-brand-purple to-brand-pink transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
