import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
     <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute opacity-100 inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/img1.avf")'
        }}
      >
        <div ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-black md:text-5xl lg:text-6xl font-bold  mb-6">
            Build your Project with
            <span className="block text-black mt-2">AI-Powered Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8">
            We deliver cutting-edge artificial intelligence solutions that drive innovation, 
            efficiency, and growth for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-block bg-royal-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-lg shadow-lg"
            >
              Find Products
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-royal-blue transition duration-300 text-lg"
            >
              Contact US
            </Link>
          </div>
        </div>
        
    
      </div>
    </section>
  );
};

export default Hero;