import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductSingle from './pages/ProductSingle';
import Events from './pages/Events';
import Industries from './pages/Industries';
import About from './pages/About';
import { imagePaths, fallbackImages } from '../src/config/images';
import Contact from './pages/Contact';
import Admin from './pages/Admin'; 
import ArticleSingle from './pages/ArticleSingle';
import Articles from './pages/Articles';


function App() {

  return (
    <Router>
      
         <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<ProductSingle />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          // Add this route to your App.js
<Route path="/articles/:id" element={<ArticleSingle />} />
        
<Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="articles" element={<Articles/>}/>
          <Route path="/admin/*" element={<Admin />} />
            <Route path="/admin" element={<Home />} />
        </Routes>
  
      </Layout>
    
     
    </Router>
  );
}

export default App;