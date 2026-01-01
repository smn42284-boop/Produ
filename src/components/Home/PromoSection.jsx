import React from 'react';
import { Link } from 'react-router-dom';
import { imagePaths, fallbackImages } from '../../config/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faChartLine, faAward } from '@fortawesome/free-solid-svg-icons';

const PromoSection = () => {
  const promos = [
    {
      title: 'AI Innovation Summit 2026',
      description: 'Join industry leaders at our premier AI conference. Keynote speeches, workshops, and networking opportunities.',
      cta: 'Explore Program',
      icon: faUsers,
      link: '/events',
      date: 'June 15-17, 2026',
      location: 'Sunderland, UK',
      duration: '9:00 AM - 6:00 PM',
      image: imagePaths.events.one,
      features: ['Hands-on workshop sessions', 'Live AI product demonstrations']
    },
    {
      title: 'Tech Startup AI Workshop',
      description: 'A comprehensive workshop designed specifically for startups looking to implement AI solutions.',
      link: '/events',
      cta: 'Explore Program',
      icon: faUsers,
      date: 'May, 2026',
      location: 'Sunderland, UK',
      duration: '10:00 AM - 4:00 PM',
      image: imagePaths.events.two,
      features: ['AI implementation roadmap', 'Case studies from successful startups']
    },
    {
      title: 'Enterprise AI Transformation Conference',
      description: 'Exclusive conference for enterprise leaders focused on scaling AI solutions across organizations.',
      cta: 'Explore Program',
      link: '/events',
      icon: faChartLine,
      date: 'July 10-12, 2026',
      location: 'Sunderland, Uk',
      duration: '8:30 AM - 5:30 PM',
      image: imagePaths.events.three,
      features: ['Enterprise AI strategy sessions', 'ROI calculation workshops']
    },
    {
      title: 'Global Robotics & AI Expo 2026',
      description: 'A world-class expo featuring cutting-edge robotics, autonomous systems, and AI-driven automation.',
      cta: 'Explore Program',
      link: '/events',
      icon: faAward,
      date: 'August 22-24, 2026',
      location: 'San Francisco, CA',
      image: imagePaths.events.four,
      duration: '9:30 - 5:30',
      features: ['Live humanoid robot showcases', 'Automation system engineering workshops']
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Promotional Events!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our latest promotional events to increase your knowledge and inspirations!
          </p>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promos.map((promo, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col"
            >
              {/* Image/Icon Top Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30"></div>
                
              <img 
    src={promo.image} 
    alt={promo.name}
    className="w-full h-full object-cover rounded-xl shadow-sm"
  />
                 
                
               
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <div className="text-royal-blue mr-3 mt-1">
                    <FontAwesomeIcon icon={promo.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {promo.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {promo.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  {promo.date && (
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-sm">{promo.date}</span>
                    </div>
                  )}
                  
                  {promo.location && (
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-sm">{promo.location}</span>
                    </div>
                  )}
                  
                  {promo.duration && (
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm">{promo.duration}</span>
                    </div>
                  )}
                  
                  {promo.features && (
                    <div className="flex flex-wrap gap-2">
                      {promo.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-royal-blue px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to={promo.link}
                  className="mt-auto block w-full bg-gradient-to-r from-royal-blue to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg group-hover:-translate-y-0.5 transform transition-transform duration-300"
                >
                  {promo.cta}
                  <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-flex items-center text-royal-blue hover:text-blue-700 font-semibold transition duration-300"
          >
            <span>View All Programs</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;