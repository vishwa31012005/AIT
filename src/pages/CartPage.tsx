import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center bg-gray-800 p-8 rounded-lg">
          <p className="text-xl text-gray-400 mb-4">Your cart is empty.</p>
          <Link to="/shop" className="inline-block bg-brand-purple text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-pink transition-colors">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-700 py-4 last:border-b-0">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-600 rounded-md">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg">-</button>
                  <span className="px-3">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg">+</button>
                </div>
                <p className="w-24 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Total: ${getCartTotal().toFixed(2)}</h2>
            <button className="mt-4 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold py-3 px-8 rounded-lg hover:scale-105 transform transition-transform duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
