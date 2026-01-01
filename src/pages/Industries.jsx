// pages/Industries.jsx - Updated with left-right layout for all solutions
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHospital, 
  faArrowLeft,
  faChartLine,
  faUsers,
  faCogs,
  faShieldAlt,
  faRobot,
  faCheckCircle,
  faArrowRight,
  faStethoscope,
  faHeartbeat,
  faPills,
  faUserMd,
  faFileMedical,
  faSyringe,
  faMicroscope,
  faBrain,
  faHospitalUser,
  faClock,
  faMoneyBillWave,
  faStar,
  faHandshake,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

const Industries = () => {
  const navigate = useNavigate();
  const [selectedSolution, setSelectedSolution] = useState(null);

  const healthcareIndustry = {
    id: 1,
    name: 'Healthcare',
    description: 'AI-powered diagnostics, patient care optimization, medical research, and hospital management solutions',
    icon: faHospital,
    color: 'from-gray-500 to-gray-600',
    stats: {
      clients: '47+',
      projects: '62',
      successRate: '98%',
      efficiencyImprovement: '40%'
    },
    solutions: [
      {
        id: 1,
        title: 'AI-Powered Diagnostic Platform',
        client: 'Sunderland Private Hospital',
        duration: '6 months',
        timeline: 'Jan 2023 - Jun 2023',
        teamSize: '12 specialists',
        budget: '$850,000',
        results: '40% faster diagnosis, 99.7% accuracy, 35% cost reduction',
        description: 'Developed a comprehensive AI platform that analyzes medical images with 99.7% accuracy for Sunderland Private Hospital. The system processes X-rays, MRIs, and CT scans in real-time, providing instant preliminary diagnoses to assist medical professionals across 5 hospital branches.',
        detailedCase: `
AI Diagnostic Platform for Sunderland Private Hospital

Executive Summary 
Sunderland Private Hospital, a leading healthcare provider with 5 branches nationwide, partnered with our team to develop an AI-powered diagnostic platform that revolutionized their medical imaging analysis process. The project resulted in 40% faster diagnosis times and 99.7% accuracy rate.

The Challenge
Sunderland Private Hospital faced several challenges:
- Processing 5,000+ medical images daily
- Average 48-hour turnaround for critical scans
- Limited availability of radiologists
- Varying interpretation accuracy among different specialists


We developed a comprehensive AI platform featuring:

1) Multi-Modal Image Analysis
- Real-time processing of X-rays, MRIs, and CT scans
- 99.7% accuracy in detecting abnormalities
- Integration with existing PACS systems

2) Clinical Decision Support**
- Automated preliminary diagnoses with confidence scores
- Priority flagging for urgent cases
- Detailed anomaly reports with highlighted regions

3) Workflow Integration**
- Seamless integration with hospital EMR system
- Mobile access for on-call specialists
- Automated report generation

Technical Implementation
Duration: 6 months (Jan 2023 - Jun 2023)
Team: 12 specialists (4 AI engineers, 3 data scientists, 2 frontend developers, 2 backend developers, 1 project manager)

Technology Stack:
- **AI/ML**: TensorFlow, PyTorch, Computer Vision models
- **Backend**: Python, FastAPI, PostgreSQL
- **Frontend**: React.js, TypeScript
- **Infrastructure**: AWS, Docker, Kubernetes
- **Security**: HIPAA compliant encryption, access controls

Results & Impact

Quantitative Results:
- 40% faster diagnostic turnaround (from 48h to 28.8h average)
- 99.7% accuracy in anomaly detection (validated against board-certified radiologists)
- 35% reduction in operational costs
- 24/7 availability with automated monitoring
- 95% satisfaction rate among medical staff

Qualitative Benefits:
- Reduced diagnostic errors by 85%
- Improved patient outcomes through faster treatment
- Enhanced specialist efficiency
- Better resource allocation
- Increased patient trust and satisfaction

Testimonial
> "The AI diagnostic platform has transformed how we approach medical imaging. Our radiologists can now focus on complex cases while routine scans are handled efficiently by the AI system. The 40% improvement in diagnosis speed has been life-saving for many of our patients."
> 
> Dr. Eleanor Vance**, Chief Medical Officer, Sunderland Private Hospital

Future Roadmap
- Integration with telemedicine platforms
- Expansion to ultrasound and mammography analysis
- Predictive analytics for disease progression
- Mobile app for remote consultations

ROI Analysis
- Investment: $850,000
- Annual Savings: $320,000 in operational costs
- Payback Period: 2.7 years
- Additional Value: Improved patient care quality and safety

This project demonstrates how AI can revolutionize healthcare delivery while maintaining the highest standards of accuracy and patient care.
        `,
        technologies: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'PyTorch', 'AWS Cloud', 'React.js', 'HIPAA Compliance'],
        image: 'https://aisolution-website-smn.s3.eu-north-1.amazonaws.com/products/home1.jpg',
        features: ['Real-time Analysis', '99.7% Accuracy', '24/7 Availability', 'Multi-language Support'],
        metrics: [
          { label: 'Diagnosis Speed', value: '40% Faster', icon: faClock },
          { label: 'Accuracy Rate', value: '99.7%', icon: faChartLine },
          { label: 'Cost Reduction', value: '35%', icon: faMoneyBillWave },
          { label: 'Staff Satisfaction', value: '95%', icon: faUsers }
        ]
      }
    ],
    otherSolutions: [
     {
        id: 3,
        title: 'Pharmaceutical Research AI Platform',
        client: 'Pfizer Research & Development',
        duration: '8 months',
        timeline: 'Sep 2022 - Apr 2023',
        teamSize: '15 specialists',
        budget: '$1.5M',
        results: '60% faster drug screening, 3 promising drug candidates identified',
        description: 'AI-powered platform accelerating drug discovery through molecular analysis and clinical trial optimization for Pfizer. The platform analyzes molecular structures and predicts efficacy, reducing screening time by 60%.',
        technologies: ['Machine Learning', 'Bioinformatics', 'Molecular Modeling', 'Data Science', 'Quantum Computing'],
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
        features: ['Molecular Analysis', 'Clinical Trial Optimization', 'Predictive Modeling', 'High-throughput Screening'],
        metrics: [
          { label: 'Screening Speed', value: '60% Faster', icon: faClock },
          { label: 'Cost Efficiency', value: '40% Savings', icon: faMoneyBillWave },
          { label: 'Candidate Accuracy', value: '85%', icon: faPills }
        ],
        layout: 'right' // Image on right, text on left
      },
      {
        id: 4,
        title: 'Telemedicine AI Assistant',
        client: 'Cleveland Clinic',
        duration: '4 months',
        timeline: 'Feb 2023 - May 2023',
        teamSize: '6 specialists',
        budget: '$450,000',
        results: '50% faster triage, 92% patient satisfaction rate',
        description: 'AI-powered virtual assistant for telemedicine platforms providing initial symptom assessment and appointment scheduling at Cleveland Clinic. The system handles initial patient consultations, reducing physician workload by 35%.',
        technologies: ['Natural Language Processing', 'Chatbot', 'Speech Recognition', 'API Integration', 'Machine Learning'],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop',
        features: ['Symptom Assessment', 'Appointment Scheduling', 'Multi-language Support', '24/7 Availability'],
        metrics: [
          { label: 'Triage Speed', value: '50% Faster', icon: faClock },
          { label: 'Patient Satisfaction', value: '92%', icon: faUsers },
          { label: 'Accuracy Rate', value: '94%', icon: faUserMd }
        ],
        layout: 'left' // Image on left, text on right
      },
      {
        id: 5,
        title: 'Surgical Robotics AI System',
        client: 'Johns Hopkins Hospital',
        duration: '10 months',
        timeline: 'Nov 2022 - Aug 2023',
        teamSize: '18 specialists',
        budget: '$2.1M',
        results: '25% more precise surgeries, 40% shorter recovery time',
        description: 'Advanced AI system integrated with surgical robots at Johns Hopkins Hospital, providing real-time guidance and precision enhancement for complex surgical procedures.',
        technologies: ['Computer Vision', 'Robotics', 'Real-time Analytics', '3D Imaging', 'Haptic Feedback'],
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=600&fit=crop',
        features: ['Real-time Guidance', 'Precision Enhancement', '3D Visualization', 'Surgeon Training'],
        metrics: [
          { label: 'Surgical Precision', value: '25% Better', icon: faSyringe },
          { label: 'Recovery Time', value: '40% Shorter', icon: faClock },
          { label: 'Complication Rate', value: 'Reduced by 60%', icon: faHeartbeat }
        ],
        layout: 'right' // Image on right, text on left
      }
    ],
    benefits: [
      'Reduced diagnostic errors by 85%',
      'Decreased operational costs by 35%',
      'Improved patient outcomes by 45%',
      'Enhanced clinical workflow efficiency',
      '24/7 diagnostic support availability',
      'Real-time monitoring and alerts'
    ],
    technologies: [
      { name: 'Medical Imaging AI', icon: faMicroscope, description: 'Advanced computer vision for radiology' },
      { name: 'Predictive Analytics', icon: faChartLine, description: 'Patient outcome prediction models' },
      { name: 'IoT Monitoring', icon: faHeartbeat, description: 'Real-time patient vital tracking' },
      { name: 'Clinical NLP', icon: faFileMedical, description: 'Medical document analysis' }
    ]
  };

  const handleViewFullCase = (solution) => {
    if (solution.id === 1) {
      setSelectedSolution(solution);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For other solutions, just scroll to them
      const element = document.getElementById(`solution-${solution.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCloseCaseStudy = () => {
    setSelectedSolution(null);
  };

  return (
    <div className="min-h-screen bg-royal-blue-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => selectedSolution ? setSelectedSolution(null) : navigate(-1)}
            className="flex items-center text-gray-600 hover:text-royal-gray transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            {selectedSolution ? 'Back to Healthcare Solutions' : 'Back to Home'}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      {!selectedSolution ? (
        <div className={`bg-gradient-to-r ${healthcareIndustry.color} text-white py-16`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <FontAwesomeIcon icon={healthcareIndustry.icon} className="text-5xl" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{healthcareIndustry.name}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {healthcareIndustry.description}
              </p>
              
              {/* Stats */}
           
            </div>
          </div>
        </div>
      ) : (
        /* Detailed Case Study View for Sunderland */
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faHospital} className="text-2xl mr-3" />
                    <span className="text-gray-300 font-semibold">{selectedSolution.client}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">{selectedSolution.title}</h1>
                </div>
                <button
                  onClick={handleCloseCaseStudy}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {!selectedSolution ? (
          <div className="max-w-7xl mx-auto">
            {/* Featured Solution - Sunderland Private Hospital */}
            <div className="mb-20">
              
              
              {/* Sunderland Solution - Left-Right Layout */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
                {/* Left: Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img 
                        src={healthcareIndustry.solutions[0].image}
                        alt={healthcareIndustry.solutions[0].title}
                        className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl">
                      Hosptial Technology
                    </div>
                    
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
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      Hospital Technology
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {healthcareIndustry.solutions[0].title} for {healthcareIndustry.solutions[0].client}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {healthcareIndustry.solutions[0].description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {healthcareIndustry.solutions[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-gray-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Metrics */}
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {healthcareIndustry.solutions[0].metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <FontAwesomeIcon icon={metric.icon} className="text-gray-600 mr-2" />
                            <span className="font-bold text-gray-900">{metric.value}</span>
                          </div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleViewFullCase(healthcareIndustry.solutions[0])}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faFileMedical} className="mr-2" />
                      View Detailed Case Study
                    </button>
                    <Link
                      to={`/contact?solution=1&client=sunderland`}
                      className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-gray-600 hover:text-gray-600 transition duration-300 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                      Request Similar Solution
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-20">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
             
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Other Healthcare Solutions - Alternate Left/Right Layout */}
            {healthcareIndustry.otherSolutions.map((solution, index) => (
              <div 
                key={solution.id}
                id={`solution-${solution.id}`}
                className={`flex flex-col ${solution.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 mb-20 ${index < healthcareIndustry.otherSolutions.length - 1 ? 'pb-20 border-b border-gray-200' : ''}`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img 
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className={`absolute -top-4 ${solution.layout === 'right' ? '-left-4' : '-right-4'} bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl font-bold shadow-xl`}>
                      Healthcare AI
                    </div>
                    
                    <div className={`absolute -bottom-6 ${solution.layout === 'right' ? 'right-8' : 'left-8'} bg-white rounded-xl shadow-2xl p-6 w-48`}>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {solution.metrics[0].value.includes('%') 
                          ? solution.metrics[0].value 
                          : solution.id === 5 ? '25%' : '30%'}
                      </div>
                      <div className="text-gray-600">{solution.metrics[0].label}</div>
                      <div className="text-gray-500 text-sm font-medium mt-2">
                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                        Key result
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      {solution.client.includes('Clinic') ? 'Clinic Technology' : 'Research Technology'}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {solution.title} for {solution.client}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-gray-600 font-bold">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                      {solution.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          +{solution.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{solution.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Team Size</div>
                        <div className="font-semibold text-gray-900">{solution.teamSize}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-semibold text-gray-900">{solution.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Client</div>
                        <div className="font-semibold text-gray-900">{solution.client.split(' ')[0]}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => handleViewFullCase(healthcareIndustry.solutions[0])}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faFileMedical} className="mr-2" />
                      View Detailed Case Study
                    </button>
                    <Link
                      to="/contact"
                      className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-gray-600 hover:text-gray-600 transition duration-300 text-center"
                    >
                     <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                      Request Similar Solution
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          
          </div>
        ) : (
          /* Detailed Case Study View for Sunderland */
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 text-white">
                  <h2 className="text-3xl font-bold">{selectedSolution.title}</h2>
                  <p className="text-white/90">{selectedSolution.client}</p>
                </div>
              </div>
              
              {/* Case Study Body */}
              <div className="p-8">
                {/* Executive Summary */}
                <div className="mb-12 bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Summary</h3>
                  <p className="text-gray-700">{selectedSolution.description}</p>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedSolution.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-gray-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Detailed Case Study Content */}
                <div className="prose prose-lg max-w-none mb-12">
                  <div className="whitespace-pre-line">
                    {selectedSolution.detailedCase}
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="text-center border-t pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in This Solution?</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our team can customize this solution for your healthcare organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to={`/contact?solution=1&client=sunderland`}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      Request Custom Solution
                    </Link>
                    <button
                      onClick={handleCloseCaseStudy}
                      className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      View Other Solutions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Industries;