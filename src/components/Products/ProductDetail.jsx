import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faCheck, 
  faDollarSign, 
  faTag, 
  faCalendarAlt,
  faShieldAlt,
  faHeadset,
  faChartLine,
  faCogs,
  faDownload,
  faClock,
  faUsers,
  faGlobe,
  faMobileAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-royal-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Mock related products (excluding current one)
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-600 hover:text-royal-blue transition duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Products
        </button>
      </div>

      {/* Product Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="text-8xl mb-6 md:mb-0 md:mr-8">{product.image}</div>
              <div className="flex-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                  <span className="text-sm font-medium">{product.category}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{product.description}</p>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span className="text-3xl font-bold">${product.price}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faTag} className="mr-2" />
                    <span>Enterprise License</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Detailed Description */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700">
                    {product.detailedDescription}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-4">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{feature}</h3>
                        <p className="text-gray-600 text-sm">
                          Comprehensive implementation with full support and documentation
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCogs} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Platform</div>
                        <div className="font-medium">Web, Mobile, API</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faDatabase} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Data Storage</div>
                        <div className="font-medium">Unlimited with encryption</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faMobileAlt} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Mobile Support</div>
                        <div className="font-medium">iOS & Android apps</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faGlobe} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Languages</div>
                        <div className="font-medium">50+ languages supported</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Uptime SLA</div>
                        <div className="font-medium">99.9% guaranteed</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUsers} className="text-royal-blue mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">User Limit</div>
                        <div className="font-medium">Unlimited users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-royal-blue to-blue-600 text-white rounded-xl shadow-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Get Started Now</h3>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">${product.price}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  <p className="text-blue-100">Billed annually or monthly</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="mr-3" />
                    <span>Full feature access</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="mr-3" />
                    <span>24/7 priority support</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="mr-3" />
                    <span>Unlimited users</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="mr-3" />
                    <span>Custom training available</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-white text-royal-blue py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 mb-4"
                >
                  Request Demo
                </button>
                
                <button className="w-full bg-transparent border-2 border-white py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
                  Download Brochure
                </button>
              </div>

              {/* Support & Services */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Support & Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faHeadset} className="text-royal-blue mr-3" />
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <div className="text-gray-600 text-sm">Phone, email, and chat</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-royal-blue mr-3" />
                    <div>
                      <div className="font-medium">Security First</div>
                      <div className="text-gray-600 text-sm">Enterprise-grade security</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-royal-blue mr-3" />
                    <div>
                      <div className="font-medium">Performance</div>
                      <div className="text-gray-600 text-sm">99.9% uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Products</h3>
                  <div className="space-y-4">
                    {relatedProducts.slice(0, 3).map(relatedProduct => (
                      <div 
                        key={relatedProduct.id}
                        onClick={() => navigate(`/product/${relatedProduct.id}`)}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition duration-300"
                      >
                        <div className="text-3xl mr-3">{relatedProduct.image}</div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{relatedProduct.name}</div>
                          <div className="text-gray-600 text-sm">{relatedProduct.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-royal-blue to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using {product.name} to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-royal-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;