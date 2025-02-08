import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-4">ExtremeVisuals</h3>
            <p className="text-gray-400">Experience the extraordinary with our visually stunning products.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <i className="bi bi-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <i className="bi bi-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <i className="bi bi-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2023 ExtremeVisuals. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
