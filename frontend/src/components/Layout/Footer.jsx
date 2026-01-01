import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AISolutions</h3>
            <p className="text-gray-400">
              Providing cutting-edge AI solutions for businesses worldwide. 
              Empowering innovation through artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-white transition duration-300">
                  Articles
                </Link>
              </li>
              {/* ADD ADMIN LINK HERE */}
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <span className="text-gray-400">info@aisolution.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
                <span className="text-gray-400">+959772602145</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                <span className="text-gray-400">UK Sunderland</span>
              </li>
              <li>
                <div className="hidden md:flex items-center space-x-4">
                            <Link
                              to="/contact"
                              className="bg-white text-royal-blue border-2 border-black px-6 py-2 rounded-lg font-medium hover:border-white-700 transition duration-300"
                            >
                              Contact US
                            </Link>
                          </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest AI trends and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-royal-blue px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright - Keep Admin link here too */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AISolutions. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link to="/admin/login" className="hover:text-white transition duration-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Admin Portal
            </Link>
            {' | '}
            <button 
              onClick={() => alert('Privacy Policy page coming soon!')} 
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </button>
            {' | '}
            <button 
              onClick={() => alert('Terms of Service page coming soon!')} 
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;