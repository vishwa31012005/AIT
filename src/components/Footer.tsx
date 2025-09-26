import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Adheeban Info Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
