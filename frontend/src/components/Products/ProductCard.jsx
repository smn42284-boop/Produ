// components/Products/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = product.fallback || '/fallback-product.jpg';
          }}
        />
       
      </div>
      
      {/* Product Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
            <span className="font-bold text-gray-900">{product.rating}</span>
          </div>
        </div>
        
        <span className="inline-block bg-blue-100 text-royal-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        {/* Features */}
        <ul className="mb-4 space-y-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Demo Button - Only for AI Analytics Pro */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
                             to={'/product'}
                             className="text-royal-blue hover:text-blue-700 font-medium text-sm"
                           >
                              <button className="w-full bg-gradient-to-r from-royal-blue to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300">
              View Detailed 
            </button>
                           </Link>
           
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;