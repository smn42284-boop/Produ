import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faEye, faBullseye, faCalendarAlt, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { imagePaths, fallbackImages } from '../config/images';
const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning from Stanford. 10+ years in AI research.',
      expertise: 'Machine Learning, NLP',
      photo: imagePaths.people.sarah,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Former Google engineer. Expert in scalable AI systems.',
      expertise: 'System Architecture, Cloud Computing',
      photo: imagePaths.people.micheal,
    },
    {
      name: 'Dr. James Wilson',
      role: 'Lead Data Scientist',
      bio: 'Published researcher in AI ethics and fairness.',
      expertise: 'Data Ethics, Predictive Analytics',
      photo: imagePaths.people.james
    },
    {
      name: 'Lisa Thompson',
      role: 'Customer Success Director',
      bio: '15+ years in tech customer relations and support.',
      expertise: 'Client Relations, Solution Architecture',
      photo: imagePaths.people.lisa
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      bio: 'Specialized in AI product development and strategy.',
      expertise: 'Product Strategy, UX Design',
      photo: imagePaths.people.david
    },
    {
      name: 'Emma Watson',
      role: 'AI Research Lead',
      bio: 'Expert in neural networks and deep learning.',
      expertise: 'Deep Learning, Computer Vision',
      photo: imagePaths.people.emma
    }
  ];

  // Timeline data
  const timelineEvents = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to democratize AI technology' },
    { year: '2021', title: 'First Major Client', description: 'Secured Fortune 500 client partnership' },
    { year: '2022', title: 'Product Suite Launch', description: 'Launched 5 core AI products' },
    { year: '2023', title: 'International Expansion', description: 'Opened offices in 3 countries' },
    { year: '2024', title: 'AI Innovation Award', description: 'Received industry recognition for excellence' },
  ];

  // Client testimonials
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      feedback: 'AISolutions transformed our data analysis process. Our productivity increased by 40% within the first quarter!',
      rating: 5,
      position: 'CTO'
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Enterprises',
      feedback: 'The AI implementation was seamless. The support team was exceptional throughout the entire process.',
      rating: 5,
      position: 'Operations Director'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateStart',
      feedback: 'Their predictive analytics solution helped us identify market trends we would have otherwise missed.',
      rating: 5,
      position: 'CEO'
    },
    {
      name: 'Emily Williams',
      company: 'DataFirst Corp',
      feedback: 'The custom AI solution they built for us has revolutionized our customer service department.',
      rating: 4,
      position: 'Customer Experience Lead'
    }
  ];
   const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to democratize AI' },
    { year: '2021', title: 'First Major Client', description: 'Secured Fortune 500 client' },
    { year: '2022', title: 'Product Suite Launch', description: 'Launched 5 AI products' },
    { year: '2023', title: 'International Expansion', description: 'Opened offices in 3 countries' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AISolutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of artificial intelligence solutions
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* About Us Section with Picture */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Founded in 2020, AISolutions is a leading provider of artificial intelligence 
                solutions dedicated to transforming businesses through innovative technology. 
                We believe that AI should be accessible, practical, and transformative for 
                organizations of all sizes.
              </p>
              <p>
                Our team of experts combines deep technical expertise with industry knowledge 
                to deliver solutions that drive real business value. From startups to Fortune 
                500 companies, we've helped hundreds of organizations harness the power of AI 
                to solve complex challenges and unlock new opportunities.
              </p>
              <p>
                We're committed to ethical AI development, transparency, and creating solutions 
                that not only solve today's problems but also pave the way for future innovation.
              </p>
            </div>
            
            
          </div>
          
          {/* Picture/Illustration */}
          <div className="relative">
           
              <div className="bg-white rounded-2xl p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <img
  src={'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/people/page.webp'}
/>
                    
                  </div>
              
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-20"></div>
          </div>
        </div>

       
        {/* Vision, Mission, Goal Boxes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Purpose</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="text-royal-blue mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h2>
              <p className="text-gray-600 text-center">
                To be the global leader in accessible, ethical, and transformative AI solutions, 
                creating a future where artificial intelligence enhances every aspect of business 
                and daily life.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="text-royal-blue mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
              <p className="text-gray-600 text-center">
                To democratize access to cutting-edge AI technology, empowering businesses of all sizes 
                to harness the power of artificial intelligence for growth, efficiency, and innovation.
              </p>
            </div>
            
            {/* Goal */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="text-royal-blue mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faBullseye} className="text-white text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Goal</h2>
              <p className="text-gray-600 text-center">
                To deliver measurable value to 10,000+ businesses by 2025 through innovative AI solutions 
                that solve real-world problems and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team - Royal Blue Background */}
        <div className="mb-20">
          <div className=" p-8 relative w-screen  left-1/2 right-1/2 -mx-[50vw] bg-royal-blue">
            <div className="text-center mb-12 ">
              <h2 className="text-5xl text-white font-bold mb-4">Meet Our Team</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI research, 
                engineering, and business transformation.
              </p>
            </div>
            <div className="relative mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl ">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition duration-300"
                >
                  <img
  src={member.photo}
  alt={member.name}
  className="w-32 h-32 mx-auto object-cover rounded-full shadow-md"
  onError={(e) => { e.target.src = fallbackImages.people.default; }}
/>

                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-200 font-medium mb-3">{member.role}</p>
                    <p className="text-blue-100 text-sm mb-4">{member.bio}</p>
                    
                    {/* Expertise */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-sm text-blue-200">
                        <span className="font-semibold">Expertise:</span>
                        <span className="ml-2">{member.expertise}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Our Clients Think - Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
               
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i + testimonial.rating} icon={faStar} className="text-gray-300" />
                  ))}
                </div>
                
                {/* Feedback */}
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                
                {/* Client info */}
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-royal-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-royal-blue font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        
        </div>

        
      </div>
    </div>
  );
};

export default About;