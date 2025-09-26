
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const activeLinkStyle = {
    background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
          Adheeban Info Tech
        </NavLink>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-300 hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/shop" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-300 hover:text-white transition-colors">Shop</NavLink>
          <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-300 hover:text-white transition-colors">About</NavLink>
          <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-gray-300 hover:text-white transition-colors">Contact</NavLink>
        </div>
        <NavLink to="/cart" className="relative text-gray-300 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
