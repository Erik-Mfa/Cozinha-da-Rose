import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="text-3xl font-bold font-dancing text-pink-500" href="#">
          Cozinha da Rose
        </a>
        <nav className="hidden md:flex space-x-8">
          <a className="text-gray-700 hover:text-pink-500 transition-colors" href="#menu">
            Menu
          </a>
          <a className="text-gray-700 hover:text-pink-500 transition-colors" href="#about">
            About Us
          </a>
          <a className="text-gray-700 hover:text-pink-500 transition-colors" href="#contact">
            Contact
          </a>
        </nav>
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 6h16M4 12h16m-7 6h7" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              className="text-gray-700 hover:text-pink-500 transition-colors" 
              href="#menu"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              className="text-gray-700 hover:text-pink-500 transition-colors" 
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              className="text-gray-700 hover:text-pink-500 transition-colors" 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
