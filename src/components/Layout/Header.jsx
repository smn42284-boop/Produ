import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
         <Link to="/" className="flex items-center group">
            <div>    
             <img 
                src="/images/logo.png" 
                alt="AI Solution Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-royal-blue">AI</span>Solution
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition duration-300 ${
                  location.pathname === item.path
                    ? 'text-royal-blue font-bold'
                    : 'text-gray-700 hover:text-royal-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link
  to="/contact"
  className={`px-6 py-2 rounded-lg font-medium border-2 transition duration-300 ${
    location.pathname === '/contact'
      ? 'bg-royal-blue text-white border-royal-blue'
      : 'bg-white text-royal-blue border-black hover:bg-royal-blue hover:text-white'
  }`}
>
  Contact
</Link>

          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg transition duration-300 ${
                    location.pathname === item.path
                      ? 'bg-royal-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;