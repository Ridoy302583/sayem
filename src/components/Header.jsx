import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">ExtremeVisuals</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-400 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-300">Products</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-purple-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
