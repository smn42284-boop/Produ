import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import { useLocation } from 'react-router-dom';
import { imagePaths, fallbackImages } from '../config/images';
import PromoSection from '../components/Home/PromoSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faHeadset, 
  faShieldAlt, 
  faChartLine,
  faRobot,
  faCloud,
  faCogs,
   faCalendarAlt, 
   faStar,
  faUser, 
  faTag, 
  faArrowRight,
  faClock,
   faEye,
  faHospital, 
  faUniversity, 
  faIndustry, 
  faShoppingCart,
  faMoneyBillWave,

} from '@fortawesome/free-solid-svg-icons';


  
const Home = () => {
 const [selectedSolution, setSelectedSolution] = useState(null);
  const features = [
    {
      icon: faRobot,
      title: 'AI-Powered Solutions',
      description: 'Harness the power of artificial intelligence to transform your business operations.'
    },
    {
      icon: faChartLine,
      title: 'Data Analytics',
      description: 'Gain valuable insights from your data with our advanced analytics platform.'
    },
    {
      icon: faShieldAlt,
      title: 'Enterprise Security',
      description: 'Keep your data safe with our state-of-the-art security solutions.'
    },
    {
      icon: faCogs,
      title: 'Custom Integration',
      description: 'Seamlessly integrate our solutions with your existing infrastructure.'
    }
  ];
  const articles = [
      
      {
            id: 1,
            title: 'The Future of AI in Business: AI Solution 2025 Insights',
            excerpt: 'Discover how AI Solition plan to use artificial intelligence to transform business operations in the coming year and what you need to know to stay ahead.',
            category: 'AI Trends',
            author: 'Dr. Sarah Chen',
            date: 'Jan 15, 2025',
            readTime: '8 min read',
            views: '2.4k',
            image: imagePaths.articles.one,
                  fallback: fallbackImages.articles,
            tags: ['AI', 'Business', 'Future', 'Predictions']
          },
      
      {
            id: 3,
            title: 'Ai-Solution: Guiding Towards More Ethical Products',
            excerpt: 'Exploring the ethical considerations in AI development and how to create responsible AI systems with AI-Solution.',
            category: 'Ethics',
            author: 'Dr. James Wilson',
            date: 'Jan 5, 2025',
            readTime: '10 min read',
            views: '1.8k',
            image: imagePaths.articles.three,
                  fallback: fallbackImages.articles,
            tags: ['Ethics', 'Responsible AI', 'Governance']
          },
      
      {
            id: 5,
            title: 'AI-Solution in Healthcare: Saving Lives with Smart Technology',
            excerpt: 'Exploring the groundbreaking applications of AI in healthcare and medical diagnostics.',
            category: 'Healthcare',
            author: 'Dr. Sarah Chen',
            date: 'Dec 20, 2025',
            readTime: '11 min read',
            views: '3.5k',
            image: imagePaths.articles.five,
                  fallback: fallbackImages.articles,
            tags: ['Healthcare', 'Medical AI', 'Diagnostics']
          },
      
    ];
   
   

    
  

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      feedback: 'AISolutions transformed our data analysis process. 40% efficiency increase!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartUpXYZ',
      feedback: 'The AI chatbot implementation was seamless and highly effective.',
      rating: 5
    }
  ];
  const services = [
    { name: 'AI Solutions', icon: faBrain, description: 'Custom AI Development' },
    { name: 'Customer Support', icon: faHeadset, description: '24/7 Assistance' },
    { name: 'Data Security', icon: faShieldAlt, description: 'Enterprise Security' },
    { name: 'Analytics', icon: faChartLine, description: 'Business Insights' },
    { name: 'Automation', icon: faRobot, description: 'Process Automation' },
    { name: 'Cloud AI', icon: faCloud, description: 'Cloud Integration' },
  ];
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




  return (
    <div>
      {/* Hero - Full screen */}
      <Hero />

<div className="relative z-30 -mt-12">
  <div className="absolute -inset-x-6 h-20 bg-gradient-to-r from-gray-300 to-gray-300 rounded-lg transform -rotate-1 border-2 border-black opacity-100 top-8"></div>
  <div className="absolute -inset-x-6 h-20 bg-gradient-to-r from-royal-blue to-royal-blue rounded-lg transform rotate-1 border-2 border-black opacity-100 top-8">
    <div className="container h-full mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-full gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center h-full group relative"
          >
            <h4 className="text-white font-bold text-base md:text-lg text-center leading-tight px-1 whitespace-nowrap">
              {service.name}
            </h4>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-6 bg-white/70 rounded-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      {/* Everything else - Limited container */}
      <div className="container mx-auto px-4 md:pt-40 max-w-7xl">
    

{/* Featured Products Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured AI Solutions
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Discover our top-rated AI products that are transforming businesses worldwide
      </p>
    </div>
    
    {/* Featured Products Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Product 1: AI Analytics Pro */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/ai-analytics-dashboard.jpg"
            alt="AI Analytics Pro"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-100 text-royal-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              Analytics
            </span>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
              <span className="font-bold text-gray-900">4.8</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">AI Analytics Pro</h3>
          
          <p className="text-gray-600 mb-4">
            Advanced AI-powered analytics platform for business intelligence with real-time insights and predictive modeling.
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Real-time analytics
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Predictive modeling
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Custom dashboards
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            
            <Link
              to="/product"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Product 2: CyberShield AI */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/two.jpeg"
            alt="CyberShield AI"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
         
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-royal-blue-700 text-royal-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              Security
            </span>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
              <span className="font-bold text-gray-900">4.9</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">CyberShield AI</h3>
          
          <p className="text-gray-600 mb-4">
            AI-driven cybersecurity solution for proactive threat detection and automated response.
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Real-time monitoring
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Anomaly detection
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Automated response
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
           
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Product 3: ChatGPT Enterprise */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/five.jpeg"
            alt="ChatGPT Enterprise"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
         
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-100 text-black-700 text-sm font-semibold px-3 py-1 rounded-full">
              NLP
            </span>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
              <span className="font-bold text-gray-900">4.8</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">ChatGPT Enterprise</h3>
          
          <p className="text-gray-600 mb-4">
            Enterprise-grade conversational AI with custom training and advanced security features.
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Custom training
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Multi-language support
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                Advanced analytics
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
           
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    {/* CTA Button */}
    <div className="text-center mt-12">
      <Link
        to="/products"
        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl"
      >
        <span>View All Products</span>
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </Link>
    </div>
  </div>
</section>

        <PromoSection />
       {/* Industries We Serve - Card Layout */}


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



   {/* Testimonials Section - FULL WIDTH Royal Blue Background */}
<div className=" p-8 relative w-screen  left-1/2 right-1/2 -mx-[50vw] bg-royal-blue">
  <div className="relative mx-auto max-w-6xl px-4">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        What Our Clients Say
      </h2>
      <p className="text-blue-100 text-lg md:text-xl max-w-4xl mx-auto">
        Join 500+ satisfied clients who have transformed their businesses with our AI solutions
      </p>
    </div>
    
    {/* 3 Comment Boxes - Full Width Container */}
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300 h-full">
          
          
          {/* Rating */}
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Comment */}
          <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed">
            "AISolutions transformed our data analysis process. Their AI platform helped us achieve 40% higher efficiency and significant cost savings. The support team is exceptional!"
          </p>
          
          {/* Client Info */}
          <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
              SJ
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
              <p className="text-gray-600">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300 h-full">
  
          
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed">
            "The AI chatbot implementation was seamless and highly effective. Our customer satisfaction increased by 35% within the first month. Highly recommended for any business!"
          </p>
          
          <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
              MC
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
              <p className="text-gray-600">CEO, StartUpXYZ</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-2 transition duration-300 h-full">

          
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed">
            "Enterprise security solution exceeded our expectations. 99.9% threat detection accuracy with zero false positives. Their team's expertise in AI security is unparalleled."
          </p>
          
          <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
              RD
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Robert Davis</h4>
              <p className="text-gray-600">Security Director, GlobalBank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
      </div>
      {/* Our Best Projects Section */}
<section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    {/* Section Header */}
    <div className="text-center mb-16">
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Our Best Projects
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Showcasing innovative AI solutions that delivered exceptional results for our clients
      </p>
    </div>
    
    {/* Project 1: Image Left, Text Right */}
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 md:mb-28">
      {/* Left: Image */}
      <div className="lg:w-1/2">
        <div className="relative group">
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/home1.jpg"
              alt="AI Healthcare Platform"
              className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-xl">
            Healthcare AI
          </div>
          
          {/* Stats Card */}
          <div className="absolute -bottom-6 left-8 bg-white rounded-xl shadow-2xl p-6 w-48">
            <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
            <div className="text-gray-600">Faster Diagnosis</div>
            <div className="text-gray-500 text-sm font-medium mt-2">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Results achieved
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Content */}
      <div className="lg:w-1/2">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-royal-blue text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Healthcare Technology
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Diagnostic Platform for Global Hospital Chain
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Developed a comprehensive AI platform that analyzes medical images with 99.7% accuracy. 
            The system processes X-rays, MRIs, and CT scans in real-time, providing instant preliminary 
            diagnoses to assist medical professionals.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-royal-blue font-bold">✓</span>
            </div>
            <span className="text-gray-700">Real-time Analysis</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-royal-blue font-bold">✓</span>
            </div>
            <span className="text-gray-700">99.7% Accuracy</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-royal-blue font-bold">✓</span>
            </div>
            <span className="text-gray-700">24/7 Availability</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-royal-blue font-bold">✓</span>
            </div>
            <span className="text-gray-700">Multi-language</span>
          </div>
        </div>
        
       
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
        <Link 
  to="/industries"
  className="bg-royal-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl inline-block text-center"
>
  View Similar Solutions
</Link>
          <Link 
  to="/contact?category=healthcare"
  className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-royal-blue hover:text-royal-blue transition duration-300 inline-block text-center"
>
  Contact Us 
</Link>
        </div>
      </div>
    </div>
    
    {/* Divider */}
    <div className="flex justify-center mb-20">
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="mx-8">
        
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
    
    {/* Project 2: Image Right, Text Left (Alternating) */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
      {/* Right: Image */}
      <div className="lg:w-1/2">
        <div className="relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Financial Fraud Detection AI"
              className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -top-4 -left-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl font-bold shadow-xl">
            FinTech AI
          </div>
          
          <div className="absolute -bottom-6 right-8 bg-white rounded-xl shadow-2xl p-6 w-48">
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">Fraud Detection</div>
            <div className="text-gray-500 text-sm font-medium mt-2">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
              Accuracy rate
            </div>
          </div>
        </div>
      </div>
      
      {/* Left: Content */}
      <div className="lg:w-1/2">
        <div className="mb-6">
          <span className="inline-block bg-g-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Financial Technology
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Real-time Fraud Detection System for International Bank
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Built an advanced AI system that monitors millions of transactions in real-time, 
            detecting fraudulent patterns with unprecedented accuracy. The system uses machine learning 
            algorithms that continuously improve their detection capabilities.
          </p>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">✓</span>
            </div>
            <span className="text-gray-700">Real-time Monitoring</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">✓</span>
            </div>
            <span className="text-gray-700">99.9% Accuracy</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">✓</span>
            </div>
            <span className="text-gray-700">Instant Alerts</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-gray-600 font-bold">✓</span>
            </div>
            <span className="text-gray-700">Global Coverage</span>
          </div>
        </div>
        
        
        <div className="flex flex-col sm:flex-row gap-4">
           <Link 
  to="/industries"
  className="bg-royal-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl inline-block text-center"
>
  View Similar Solutions
</Link>
          <button className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-gray-600 hover:text-gray-600 transition duration-300">
            Contact Us 
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {articles.map((article) => (
                   <div 
                     key={article.id} 
                     className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200"
                   >
                     {/* Article Image/Icon */}
                     <div className="bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
                      <img
     src={article.image}
     alt={article.title}
     className="w-full h-48 object-cover rounded-lg"
     onError={(e) => e.target.src = article.fallback}
   />
   
                     </div>
                     
                     {/* Article Content */}
                     <div className="p-6">
                       {/* Category */}
                       <div className="mb-4">
                         <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-royal-blue rounded-full text-sm font-semibold">
                           <FontAwesomeIcon icon={faTag} className="mr-1" />
                           {article.category}
                         </span>
                       </div>
                       
                       {/* Title */}
                       <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-royal-blue transition duration-300">
                         {article.title}
                       </h3>
                       
                       {/* Excerpt */}
                       <p className="text-gray-600 mb-4 line-clamp-2">
                         {article.excerpt}
                       </p>
                       
                       {/* Meta Info */}
                       <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                         <div className="flex items-center">
                           <FontAwesomeIcon icon={faUser} className="mr-1" />
                           <span>{article.author}</span>
                         </div>
                         <div className="flex items-center">
                           <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                           <span>{article.date}</span>
                         </div>
                       </div>
                       
                       {/* Stats */}
                       <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                         <div className="flex items-center">
                           <FontAwesomeIcon icon={faClock} className="mr-1" />
                           <span>{article.readTime}</span>
                         </div>
                         <div className="flex items-center">
                           <FontAwesomeIcon icon={faEye} className="mr-1" />
                           <span>{article.views} views</span>
                         </div>
                       </div>
                       
                       {/* Tags */}
                       <div className="flex flex-wrap gap-2 mb-6">
                         {article.tags.slice(0, 2).map((tag, index) => (
                           <span 
                             key={index} 
                             className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 transition duration-300 cursor-pointer"
                           >
                             {tag}
                           </span>
                         ))}
                         {article.tags.length > 2 && (
                           <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                             +{article.tags.length - 2}
                           </span>
                         )}
                       </div>
                       
                       {/* Read More */}
                       <Link
                         to={`/articles/${article.id}`}
                         className="inline-flex items-center text-royal-blue hover:text-blue-700 font-medium group"
                       >
                         <span>Read Article</span>
                         <FontAwesomeIcon 
                           icon={faArrowRight} 
                           className="ml-2 transform group-hover:translate-x-1 transition duration-300" 
                         />
                       </Link>
                     </div>
                   </div>
                 ))}
               </div>
    <div className="text-center mt-8">
      <a
        href="/articles"
        className="inline-flex items-center text-royal-blue hover:text-blue-700 font-semibold transition duration-300">
        View All Articles
      </a>
    </div>
  </div>
</section>

    </div>
    
  );
};

export default Home;