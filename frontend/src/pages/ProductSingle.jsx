import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faShoppingCart, 
  faCalendarAlt, 
  faUsers, 
  faIndustry, 
  faCheckCircle,
  faDollarSign,
  faClock,
  faChartLine,
  faShieldAlt,
  faStar,
  faLightbulb,
  faCogs,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductSingle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Lead AI Scientist',
      experience: '12 years in ML research',
      image: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/people/sarah.jpeg',
      skills: ['Deep Learning', 'Computer Vision', 'NLP']
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Full Stack Developer',
      experience: '8 years in web development',
      image: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/people/micheal.jpeg',
      skills: ['React', 'Node.js', 'Python']
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Data Engineer',
      experience: '7 years in data pipelines',
      image: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/people/emma.jpg',
      skills: ['Spark', 'Hadoop', 'Airflow']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'UX/UI Designer',
      experience: '6 years in product design',
      image: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/people/david.jpeg',
      skills: ['Figma', 'User Research', 'Prototyping']
    }
  ]);

  const [developmentTimeline] = useState([
    { phase: 'Discovery & Planning', duration: '2 weeks', description: 'Requirements gathering and planning' },
    { phase: 'Design & Prototyping', duration: '3 weeks', description: 'UI/UX design and prototype creation' },
    { phase: 'Development', duration: '8 weeks', description: 'Core feature development' },
    { phase: 'Testing & QA', duration: '2 weeks', description: 'Comprehensive testing and bug fixing' },
    { phase: 'Deployment', duration: '1 week', description: 'Production deployment and setup' },
    { phase: 'Post-Launch Support', duration: 'Ongoing', description: 'Monitoring and support' }
  ]);

  const [exampleCompanies] = useState([
    { name: 'TechCorp Inc.', logo: '🏢', industry: 'Technology', useCase: 'Sales forecasting and customer analytics' },
    { name: 'Global Bank Ltd.', logo: '🏦', industry: 'Finance', useCase: 'Fraud detection and risk assessment' },
    { name: 'HealthCare Plus', logo: '🏥', industry: 'Healthcare', useCase: 'Patient data analysis and treatment optimization' },
    { name: 'Retail Giant Co.', logo: '🛒', industry: 'Retail', useCase: 'Inventory optimization and demand prediction' }
  ]);

  const [pricingPlans] = useState([
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Up to 10,000 data points/month', 'Basic analytics dashboard', 'Email support', 'Standard integrations'],
      recommended: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'For growing enterprises',
      features: ['Up to 100,000 data points/month', 'Advanced analytics', 'Priority support', 'Custom integrations', 'API access'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions',
      features: ['Unlimited data points', 'Custom AI models', '24/7 dedicated support', 'On-premise deployment', 'Custom development'],
      recommended: false
    }
  ]);

  const product = {
    id: 1,
    name: 'AI Analytics Pro',
    tagline: 'Advanced AI-powered analytics platform for business intelligence',
    description: 'Transform raw data into actionable insights with our cutting-edge AI analytics platform. Using advanced machine learning algorithms, AI Analytics Pro helps businesses predict trends, optimize operations, and make data-driven decisions with 95% accuracy.',
    rating: 4.8,
    category: 'Analytics',
    mainImage: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/ai-analytics-dashboard.jpg',
    galleryImages: [
      'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/events/one.jpeg',
      'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/events/three.jpg',
      'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/events/four.jpg'
    ],
    features: [
      { icon: faChartLine, title: 'Real-time Analytics', description: 'Process and analyze data in real-time from multiple sources' },
      { icon: faLightbulb, title: 'Predictive Modeling', description: 'Forecast trends with 95% accuracy using ML algorithms' },
      { icon: faCogs, title: 'Custom Dashboards', description: 'Fully customizable dashboards for different departments' },
      { icon: faShieldAlt, title: 'Enterprise Security', description: 'Bank-level security with encryption and compliance' }
    ],
    requirements: [
      'Modern web browser (Chrome 80+, Firefox 75+, Safari 13+)',
      'Minimum 4GB RAM for optimal performance',
      'Internet connection (5Mbps recommended)',
      'API access for custom integrations'
    ],
    industries: ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Technology', 'Education']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-royal-blue transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{product.tagline}</p>
                
                <div className="flex items-center mb-8">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}/5</span>
                  <span className="text-gray-400 ml-2">(128 reviews)</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm">Prediction Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'pricing', 'team', 'timeline', 'case-studies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium text-lg whitespace-nowrap border-b-2 transition duration-300 ${
                  activeTab === tab
                    ? 'border-royal-blue text-royal-blue'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
                <p className="text-gray-700 text-lg mb-8">{product.description}</p>
                
                {/* Gallery */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {product.galleryImages.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${product.name} screenshot ${index + 1}`}
                        className="rounded-xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition duration-300"
                      />
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-start mb-4">
                         
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Requirements</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-3">
                      {product.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue mr-3" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Industries */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faIndustry} className="mr-3 text-royal-blue" />
                    Recommended Industries
                  </h3>
                  <div className="space-y-2">
                    {product.industries.map((industry, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">{industry}</span>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue-500" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Accuracy Rate</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Implementation Time</span>
                      <span className="font-bold">4-6 Weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ROI Period</span>
                      <span className="font-bold">3-6 Months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Customer Satisfaction</span>
                      <span className="font-bold">98%</span>
                    </div>
                  </div>
                </div>

                {/* Example Companies */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Example Companies Served</h3>
                  <div className="space-y-4">
                    {exampleCompanies.map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                        <div className="text-2xl">{company.logo}</div>
                        <div>
                          <div className="font-semibold">{company.name}</div>
                          <div className="text-sm text-gray-500">{company.industry}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pricing Plans</h2>
              <p className="text-gray-600 mb-8">Choose the plan that fits your business needs</p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl p-8 ${
                      plan.recommended
                        ? 'bg-gradient-to-br from-royal-blue to-blue-600 text-white border-2 border-blue-500 transform scale-105 shadow-2xl'
                        : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-6 ${plan.recommended ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className={`text-lg ${plan.recommended ? 'text-blue-100' : 'text-gray-600'}`}>{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={`mr-3 ${plan.recommended ? 'text-royal-blue-300' : 'text-royal-blue-500'}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                        plan.recommended
                          ? 'bg-white text-royal-blue hover:bg-gray-100'
                          : 'bg-royal-blue text-white hover:bg-blue-700'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included in Every Plan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-royal-blue text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Security & Compliance</h4>
                      <p className="text-gray-600">GDPR, HIPAA, SOC2 compliant with enterprise-grade encryption</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faClock} className="text-royal-blue text-xl mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                      <p className="text-gray-600">Round-the-clock technical support with dedicated account managers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Development Team</h2>
              <p className="text-gray-600 mb-8">Meet the experts who will help develop your AI solution</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden  border border-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                      <p className="text-royal-blue font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-royal-blue text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
                    <p className="text-gray-300">Schedule a consultation with our team</p>
                  </div>
                  <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300 flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Development Timeline</h2>
              <p className="text-gray-600 mb-8">Typical project timeline from start to finish</p>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
                
                {developmentTimeline.map((phase, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 ${
                      index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 relative ${
                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute top-6 w-4 h-4 rounded-full bg-royal-blue border-4 border-white">
                        {index % 2 === 0 ? (
                          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-blue-200"></div>
                        ) : (
                          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-blue-200"></div>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-blue-100 text-royal-blue px-3 py-1 rounded-full font-semibold">
                          {phase.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600">{phase.description}</p>
                      
                      {index === 2 && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2">💡 Development Phase Includes:</h4>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm">
                            <li className="flex items-center">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue-500 mr-2" />
                              Backend API development
                            </li>
                            <li className="flex items-center">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue-500 mr-2" />
                              Frontend dashboard creation
                            </li>
                            <li className="flex items-center">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue-500 mr-2" />
                              AI model training
                            </li>
                            <li className="flex items-center">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-royal-blue-500 mr-2" />
                              Database integration
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center bg-royal-blue-50 text-royal-blue-800 px-6 py-3 rounded-full">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  <span className="font-semibold">Total Project Duration: 14-16 Weeks</span>
                </div>
              </div>
            </div>
          )}

          {/* Case Studies Tab */}
          {activeTab === 'case-studies' && (
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
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-royal-blue to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-xl">
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
              to="/contact?project=healthcare-ai"
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
                
                
          )}
        </div>
        
      </div>

      
    </div>
    
  );
};

export default ProductSingle;