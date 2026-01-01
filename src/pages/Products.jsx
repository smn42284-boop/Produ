import React, { useState, useEffect } from 'react';
import ProductCard from '../components/Products/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faStar, faHospital, faUniversity, faIndustry, faShoppingCart,faMoneyBillWave,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imagePaths, fallbackImages } from '../config/images';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
    const navigate = useNavigate(); 
    const industries = [
        {
          name: 'Healthcare',
          description: 'AI-powered diagnostics, patient care optimization, and medical research',
          icon: faHospital,
          image: imagePaths.industries.one,
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Education',
          description: 'Personalized learning, intelligent tutoring systems, and administrative automation',
          icon: faUniversity,
           image: imagePaths.industries.two,
          color: 'from-blue-500 to-purple-600'
        },
        {
          name: 'Manufacturing',
          description: 'Predictive maintenance, quality control, and supply chain optimization',
          icon: faIndustry,
           image: imagePaths.industries.three,
          color: 'from-gray-500 to-gray-600'
        },
        {
          name: 'Retail & E-commerce',
          description: 'Personalized recommendations, inventory management, and customer service automation',
          icon: faShoppingCart,
           image: imagePaths.industries.four,
          color: 'from-yellow-500 to-yellow-600'
        },
        {
          name: 'Finance & Banking',
          description: 'Fraud detection, risk assessment, algorithmic trading, and customer service',
          icon: faMoneyBillWave,
           image: imagePaths.industries.five,
          color: 'from-emerald-500 to-gray-600'
        }
      ];
    

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'AI Analytics Pro',
        description: 'Advanced AI-powered analytics platform for business intelligence with real-time insights and predictive modeling.',
        category: 'Analytics',
        rating: 4.8,
        isPopular: true,
        isFeatured: true,
        features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Multi-language support'],
        image: imagePaths.products.aiAnalytics,
        fallback: fallbackImages.product,
        detailedDescription: `
          AI Analytics Pro is our flagship analytics platform that transforms raw data into actionable insights. 
          Using advanced machine learning algorithms, it helps businesses predict trends, optimize operations, 
          and make data-driven decisions.
          
          **Key Capabilities:**
          • Real-time data processing from multiple sources
          • Predictive analytics with 95% accuracy
          • Customizable dashboards for different departments
          • Natural language queries for non-technical users
          • Automated report generation
          
          **Use Cases:**
          • Sales forecasting and trend analysis
          • Customer behavior prediction
          • Operational efficiency optimization
          • Risk assessment and management
          
          **Integration:** Works with Salesforce, Google Analytics, MySQL, PostgreSQL, and REST APIs.
        `
      },
      {
        id: 2,
        name: 'Smart CRM',
        description: 'Intelligent customer relationship management system with AI assistance for better customer engagement.',
        category: 'CRM',
        rating: 4.6,
        isPopular: true,
        isFeatured: false,
        features: ['Lead scoring', 'Automated follow-ups', 'Sentiment analysis', 'Integration ready'],
       image: imagePaths.products.one,
        fallback: fallbackImages.product
      },
      {
        id: 3,
        name: 'CyberShield AI',
        description: 'AI-driven cybersecurity solution for proactive threat detection and automated response.',
        category: 'Security',
        rating: 4.9,
        isPopular: true,
        isFeatured: true,
        features: ['Real-time monitoring', 'Anomaly detection', 'Automated response', 'Compliance reporting'],
        image: imagePaths.products.two,
        fallback: fallbackImages.product
      },
      {
        id: 4,
        name: 'AutomateFlow',
        description: 'Workflow automation platform that uses AI to streamline business processes.',
        category: 'Automation',
  
        rating: 4.5,
        isPopular: false,
        isFeatured: false,
        features: ['Process mining', 'Task automation', 'Smart routing', 'Analytics dashboard'],
        image: imagePaths.products.three,
        fallback: fallbackImages.product
      },
      {
        id: 5,
        name: 'VisionAI',
        description: 'Computer vision solution for image and video analysis with industry-leading accuracy.',
        category: 'Computer Vision',
        rating: 4.7,
        isPopular: true,
        isFeatured: false,
        features: ['Object detection', 'Face recognition', 'Quality inspection', 'Real-time processing'],
        image: imagePaths.products.four,
        fallback: fallbackImages.product
      },
      {
        id: 6,
        name: 'ChatGPT Enterprise',
        description: 'Enterprise-grade conversational AI with custom training and advanced security features.',
        category: 'NLP',
        rating: 4.8,
        isPopular: true,
        isFeatured: true,
        features: ['Custom training', 'Multi-language', 'API access', 'Advanced analytics'],
        image: imagePaths.products.five,
        fallback: fallbackImages.product
      },
      {
        id: 7,
        name: 'DataForge AI',
        description: 'Advanced data processing and ETL platform powered by machine learning algorithms.',
        category: 'Data Processing',
        rating: 4.4,
        isPopular: false,
        isFeatured: false,
        features: ['Data cleaning', 'Automated ETL', 'Pattern recognition', 'Data validation'],
        image: imagePaths.products.six,
        fallback: fallbackImages.product
      },
      {
        id: 8,
        name: 'PredictaBot',
        description: 'AI-powered forecasting tool for sales, inventory, and market trends prediction.',
        category: 'Analytics',
        rating: 4.7,
        isPopular: true,
        isFeatured: false,
        features: ['Sales forecasting', 'Demand prediction', 'Trend analysis', 'Risk assessment'],
        image: imagePaths.products.seven,
        fallback: fallbackImages.product
      },
      {
        id: 9,
        name: 'LegalEagle AI',
        description: 'Legal document analysis and contract review powered by natural language processing.',
        category: 'Legal Tech',
        rating: 4.9,
        isPopular: false,
        isFeatured: true,
        features: ['Contract review', 'Compliance check', 'Risk analysis', 'Document summarization'],
        image: imagePaths.products.eight,
        fallback: fallbackImages.product
      },
      {
        id: 10,
        name: 'HealthAI Monitor',
        description: 'Healthcare monitoring and diagnostic assistance system for medical professionals.',
        category: 'Healthcare',
        rating: 4.9,
        isPopular: true,
        isFeatured: true,
        features: ['Patient monitoring', 'Diagnostic support', 'Treatment recommendations', 'Health analytics'],
        image: imagePaths.products.nine,
        fallback: fallbackImages.product
      },
      {
        id: 11,
        name: 'EduMind AI',
        description: 'Personalized learning platform with adaptive AI tutors and progress tracking.',
        category: 'Education',
        rating: 4.6,
        isPopular: false,
        isFeatured: false,
        features: ['Adaptive learning', 'Progress tracking', 'Skill assessment', 'Personalized content'],
       image: imagePaths.products.ten,
        fallback: fallbackImages.product
      },
      {
        id: 12,
        name: 'RetailSense AI',
        description: 'Retail analytics and customer behavior prediction for e-commerce and physical stores.',
        category: 'Retail',
        rating: 4.5,
        isPopular: true,
        isFeatured: false,
        features: ['Customer analytics', 'Inventory optimization', 'Sales prediction', 'Personalized marketing'],
       image: imagePaths.products.eleven,
        fallback: fallbackImages.product
      }
    ];
   

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    
    // Select recommended products (top-rated, popular, or featured)
    const recommended = mockProducts
      .filter(product => product.isPopular || product.isFeatured)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    
    setRecommendedProducts(recommended);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, products]);

  const categories = ['all', 'Analytics', 'CRM', 'Security', 'Automation', 'Computer Vision', 'NLP', 'Data Processing', 'Legal Tech', 'Healthcare', 'Education', 'Retail'];
const handleProductClick = (product) => {
  if (product.id == 1) {
    navigate('/product'); // This should navigate to the detailed page
  } else {
    // For other products, you might want to show a message or do nothing
    alert('Detailed view coming soon! Currently only AI Analytics Pro has a detailed demo.');
  }
};

 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our AI Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered tools designed to transform your business
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 -mt-8 max-w-7xl">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Product Count */}
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-600">
              Showing <span className="font-bold">{filteredProducts.length}</span> of <span className="font-bold">{products.length}</span> products
            </div>
        
          </div>
        </div>

        {/* Products Grid */}
         <div className="mb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer transform transition-transform duration-300 hover:-translate-y-1"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>


        {/* Recommended Products Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recommended For You</h2>
              <p className="text-gray-600 mt-2">Top-rated solutions based on your interests</p>
            </div>
           
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-full h-48 flex items-center justify-center mb-6">
  <img 
    src={product.image} 
    alt={product.name}
    className="w-full h-full object-cover rounded-xl shadow-sm"
  />
</div>

                </div>

               
                  <div className="w-full  flex items-left justify-center mb-6">
               <div> <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3></div>
                   <div className="flex items-center bg-blue-50 px-2 py-1 rounded-lg">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                    <span className="font-bold text-gray-900">{product.rating}</span>
                  </div>
                  </div>


                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-royal-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>  
                </div>
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
                {product.isPopular && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                   
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center text-royal-blue hover:text-blue-700 font-medium"
            >
              <span>Need help choosing? Talk to our AI consultant</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Industry Solutions */}
        <section className="py-10 md:py-10 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Specialized AI solutions transforming businesses across sectors
              </p>
            </div>
            
            {/* Horizontal Cards Container */}
            <div className="relative">
              {/* Connecting Lines - Horizontal */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
              
              {/* Industry Cards - Horizontal Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                {industries.map((industry, index) => (
                  <Link
                    key={index}
                    to="/industries"
                    state={{ selectedIndustry: industry.name }} // Optional: pass industry data
                    className="relative group no-underline"
                  >
                    {/* Card */}
                    <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center h-full border border-gray-100 hover:border-gray/20 bg-white">
                      {/* Icon/Image */}
                      <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-cover"
                          onError={(e) => e.target.src = fallbackImages.industry}
                        />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {industry.description}
                      </p>
                      
                      <div className="mt-4">
                        <span className="inline-flex items-center text-gray font-medium text-sm">
                          View Solutions
                          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                        </span>
                      </div>
                    </div>
                    
                    {/* Connector Dots (between cards) */}
                    {index < industries.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-royal-blue rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
        
        
          </div>
        </section>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500 to-transparent rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center">
            
              <h2 className="text-3xl font-bold mb-4">Custom Enterprise Solutions</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Need a custom AI solution tailored to your specific business needs? 
                Our team of experts can build a bespoke AI platform just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Request Custom Solution
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">How do I choose the right AI solution?</h3>
              <p className="text-gray-600">Our AI consultant can analyze your business needs and recommend the perfect solution. Book a free consultation to get started.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Do you offer free trials?</h3>
              <p className="text-gray-600">Yes, most of our products offer 14-day free trials. No credit card required for the trial period.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Can I integrate with existing systems?</h3>
              <p className="text-gray-600">All our solutions come with comprehensive APIs and support for integration with popular platforms and custom systems.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">What support do you provide?</h3>
              <p className="text-gray-600">We offer 24/7 technical support, dedicated account managers, and comprehensive documentation for all our products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 