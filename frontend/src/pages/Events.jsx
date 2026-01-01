import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationModal from '../components/Events/RegistrationModal'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { imagePaths, fallbackImages } from '../config/images';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faUsers, 
  faClock,
  faTicketAlt,
  faChevronRight,
  faChevronLeft,
  faExpand,
  faChalkboardTeacher, 
  faBuilding, 
  faComments, 
  faCode, 
  faVideo
} from '@fortawesome/free-solid-svg-icons';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);


 const upcomingEvents = [
  {
    id: 1,
    title: 'AI Innovation Summit 2026',
    tagline: 'The Future of Artificial Intelligence',
    category: 'conference',
    description: 'Join us for the premier AI conference...',
    date: 'June 15-17, 2026',
    time: '9:00 AM - 6:00 PM Daily',
    location: 'Uk Sunderland',
    attendees: '500+',
    price: '$499 - $1,299',
    image: imagePaths.events.one,
    fallback: fallbackImages.event,
    highlights: [
      'Keynote by AI pioneer Dr. Sarah Chen',
      'Live AI product demonstrations',
      'Startup pitch competition ($50K prize)',
      'Exclusive networking dinner',
      'Hands-on workshop sessions'
    ],
    registrationLink: '/contact?event=ai-summit'
  },
  {
    id: 2,
    title: 'Tech Startup AI Workshop',
    tagline: 'Accelerate Your Startup with AI',
    category: 'workshop', // Add category
    description: 'A comprehensive workshop designed specifically...',
    date: 'May 20, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Sunderland, UK',
    attendees: '150',
    price: '$299 (Early Bird: $199)',
    image: imagePaths.events.two,
    fallback: fallbackImages.event,
    highlights: [
      'AI implementation roadmap',
      'Cost-effective AI solutions',
      'Case studies from successful startups',
      'One-on-one consultation sessions',
      'AI tools demonstration'
    ],
    registrationLink: '/contact?event=startup-workshop'
  },
  {
    id: 3,
    title: 'Enterprise AI Transformation Conference',
    tagline: 'Scaling AI in Large Organizations',
    category: 'conference', // Add category
    description: 'Exclusive conference for enterprise leaders...',
    date: 'July 10-12, 2026',
    time: '8:30 AM - 5:30 PM',
    location: 'Sunderland, UK',
    attendees: '300+',
    price: '$899 - $2,499',
    image: imagePaths.events.three,
    fallback: fallbackImages.event,
    highlights: [
      'Enterprise AI strategy sessions',
      'ROI calculation workshops',
      'Change management best practices',
      'Vendor evaluation framework',
      'Executive roundtables'
    ],
    registrationLink: '/contact?event=enterprise-conference'
  },
  {
    id: 4,
    title: 'Global Robotics & AI Expo 2026',
    tagline: 'Discover the Next Generation of Intelligent Automation',
    category: 'expo', // Add category
    description: 'A world-class expo featuring cutting-edge robotics...',
    date: 'August 22-24, 2026',
    time: '9:30 AM - 5:30 PM Daily',
    location: 'London, UK',
    attendees: '700+',
    price: '$399 - $1,499',
    image: imagePaths.events.four,
    fallback: fallbackImages.event,
    highlights: [
      'Live humanoid robot showcases',
      'Automation system engineering workshops',
      'Robotics startup pitch arena',
      'AI-powered manufacturing demonstrations',
      'Industry partnership networking session'
    ],
    registrationLink: '/contact?event=robotics-expo'
  },
  {
    id: 5,
    title: 'AI Ethics & Governance Forum',
    tagline: 'Responsible AI Development',
    category: 'forum', // Add category
    description: 'Discuss ethical considerations, governance frameworks, and responsible AI development practices with industry leaders and policymakers.',
    date: 'September 15, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Sunderland, UK',
    attendees: '200',
    price: 'Free',
    image: imagePaths.events.five,
    fallback: fallbackImages.event,
    highlights: [
      'Ethical AI framework discussions',
      'Regulatory compliance guidance',
      'Bias detection workshops',
      'Transparency in AI systems',
      'Industry standards development'
    ],
    registrationLink: '/contact?event=ethics-forum'
  },
  {
    id: 6,
    title: 'AI Developer Hackathon',
    tagline: 'Code, Create, Innovate',
    category: 'hackathon', // Add category
    description: '48-hour coding marathon where developers build innovative AI solutions. Compete for prizes, network with peers, and showcase your skills.',
    date: 'October 10-12, 2026',
    time: 'Friday 6 PM - Sunday 6 PM',
    location: 'Sunderland, UK',
    attendees: '100',
    price: '$50',
    image: imagePaths.events.six,
    fallback: fallbackImages.event,
    highlights: [
      '$10,000 in total prizes',
      'Industry mentor support',
      'API and dataset access',
      'Job recruitment opportunities',
      'Demo day presentations'
    ],
    registrationLink: '/contact?event=hackathon'
  }
];

  // Past Events with Photo Galleries
  const pastEvents = [
    {
      id: 1,
      title: 'Digital Transformation Conference 2025',
      date: 'March 10-12, 2025',
      location: 'Sunderland, UK',
      attendees: '800+',
      description: 'Annual conference on digital transformation and AI integration in enterprises.',
      photos: [
        { id: 1, src: imagePaths.events.five, caption: 'Main stage keynote presentation' },
        { id: 2, src: imagePaths.events.six, caption: 'Networking session with industry leaders' },
        { id: 3, src: imagePaths.events.seven, caption: 'Panel discussion on AI ethics' },
        { id: 4, src: imagePaths.events.eight, caption: 'Innovation award ceremony' },
        { id: 5, src: imagePaths.events.nine, caption: 'Hands-on workshop session' },
        { id: 6, src: imagePaths.events.ten, caption: 'Partnership announcement' }
      ],
      highlights: [
        '45+ expert speakers',
        '30+ AI solution providers',
        '15 hands-on workshops',
        '$100K innovation grant awarded'
      ]
    },
    {
      id: 2,
      title: 'Machine Learning Bootcamp',
      date: 'February 5-9, 2025',
      location: 'Sunderland, UK',
      attendees: '200',
      description: 'Intensive bootcamp for developers looking to master machine learning techniques.',
      photos: [
        { id: 1, src: imagePaths.events.eleven, caption: 'Deep learning workshop' },
        { id: 2, src: imagePaths.events.twelve, caption: 'Coding sessions in progress' },
        { id: 3, src: imagePaths.events.thirteen, caption: 'Data visualization exercises' },
        { id: 4, src: imagePaths.events.fourteen, caption: 'Graduation ceremony' },
        { id: 5, src: imagePaths.events.fifteen, caption: 'AI model demonstrations' },
        { id: 6, src: imagePaths.events.sixteen, caption: 'Networking dinner' }
      ],
      highlights: [
        '5-day intensive program',
        'Practical project implementation',
        'Industry expert mentors',
        'Job placement assistance'
      ]
    },
    {
      id: 3,
      title: 'AI in Healthcare Symposium',
      date: 'November 15-16, 2025',
      location: 'Sunderland, Uk',
      attendees: '350',
      description: 'Focused symposium on AI applications in healthcare and medical research.',
      photos: [
        { id: 1, src: imagePaths.events.seventeen, caption: 'Medical AI demonstrations' },
        { id: 2, src: imagePaths.events.eighteen, caption: 'Research paper presentations' },
        { id: 3, src: imagePaths.events.nineteen, caption: 'Pharmaceutical AI solutions' },
        { id: 4, src: imagePaths.events.twenty, caption: 'Healthcare analytics workshop' },
        { id: 5, src: imagePaths.events.tone, caption: 'Doctor-AI collaboration panel' },
        { id: 6, src: imagePaths.events.ttwo, caption: 'Precision medicine showcase' }
      ],
      highlights: [
        'Medical AI breakthroughs',
        'FDA approval pathways',
        'Patient data privacy discussions',
        'Clinical trial optimization'
      ]
    },
    {
      id: 4,
      title: 'Global AI Leaders Forum',
      date: 'September 20-22, 2025',
      location: 'London, UK',
      attendees: '600+',
      description: 'International gathering of AI thought leaders and policymakers.',
      photos: [
        { id: 1, src: imagePaths.events.tthree, caption: 'International delegates' },
        { id: 2, src: imagePaths.events.tfour, caption: 'Policy making session' },
        { id: 3, src: imagePaths.events.tfive, caption: 'Business leaders roundtable' },
        { id: 4, src: imagePaths.events.tsix, caption: 'AI ethics charter signing' },
        { id: 5, src: imagePaths.events.tseven, caption: 'Cultural night event' },
        { id: 6, src: imagePaths.events.teight, caption: 'International partnerships' }
      ],
      highlights: [
        '30+ countries represented',
        'Government policy discussions',
        'International collaborations',
        'Global AI standards'
      ]
    }
  ];
  const [categoryFilter, setCategoryFilter] = useState('all');
const [filteredEvents, setFilteredEvents] = useState(upcomingEvents);
const eventCategories = ['all', ...new Set(upcomingEvents.map(event => event.category))];
const categoryNames = {
  all: 'All Events',
  conference: 'Conferences',
  workshop: 'Workshops',
  expo: 'Expos',
  forum: 'Forums',
  hackathon: 'Hackathons',
  webinar: 'Webinars'
};
const filterEventsByCategory = (category) => {
  setCategoryFilter(category);
  if (category === 'all') {
    setFilteredEvents(upcomingEvents);
  } else {
    const filtered = upcomingEvents.filter(event => event.category === category);
    setFilteredEvents(filtered);
  }
};
const getCategoryIcon = (category) => {
  switch(category) {
    case 'conference': return faUsers;
    case 'workshop': return faChalkboardTeacher;
    case 'expo': return faBuilding;
    case 'forum': return faComments;
    case 'hackathon': return faCode;
    case 'webinar': return faVideo;
    default: return faCalendarAlt;
  }
};

  // Gallery Navigation
  const nextGallery = () => {
    setCurrentGallery((prev) => (prev + 1) % pastEvents.length);
  };

  const prevGallery = () => {
    setCurrentGallery((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Events & Conferences
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our industry-leading events or explore highlights from past conferences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Upcoming Events Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Upcoming Promotional Events
              </h2>
              <p className="text-gray-600 mt-2">
                Join our exclusive events designed to transform your business
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-600 font-medium">Register Now</span>
            </div>
          </div>

          {/* Upcoming Events Grid */}
          <div className="space-y-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="md:flex">
                  {/* Event Visual */}
                  <div className="md:w-2/5">
  <div className="relative h-72 md:h-full overflow-hidden rounded-xl shadow-md">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover"
      onError={(e) => e.target.src = event.fallback}
    />

    {/* Optional overlay */}
    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">
      {event.date}
    </div>
  </div>
</div>


                  {/* Event Details */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-royal-blue font-medium text-lg">
                          {event.tagline}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        Upcoming
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {event.description}
                    </p>

                    {/* Event Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <FontAwesomeIcon icon={faChevronRight} className="text-royal-blue mr-2 text-sm" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Event Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faClock} className="text-royal-blue mb-2" />
                        <div className="font-medium">{event.time}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-royal-blue mb-2" />
                        <div className="font-medium">{event.location.split(',')[0]}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faUsers} className="text-royal-blue mb-2" />
                        <div className="font-medium">{event.attendees}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FontAwesomeIcon icon={faTicketAlt} className="text-royal-blue mb-2" />
                        <div className="font-medium">{event.price}</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     
<button
  onClick={() => setSelectedEvent(event)}
  className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mb-3"
>
  Register Now
</button>
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events with Photo Galleries */}
        <section className="py-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Event Highlights
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Relive the excitement from our previous events through photo galleries
            </p>
          </div>

          {/* Gallery Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevGallery}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {pastEvents[currentGallery].title}
              </h3>
              <p className="text-gray-600">
                {pastEvents[currentGallery].date} • {pastEvents[currentGallery].location}
              </p>
            </div>
            
            <button
              onClick={nextGallery}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* Current Event Gallery */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            {/* Event Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pastEvents[currentGallery].title}
                  </h3>
                  <div className="flex items-center text-gray-600 mt-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>{pastEvents[currentGallery].date}</span>
                    <span className="mx-2">•</span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span>{pastEvents[currentGallery].location}</span>
                    <span className="mx-2">•</span>
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>{pastEvents[currentGallery].attendees} attendees</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600">
                {pastEvents[currentGallery].description}
              </p>
              
              {/* Event Highlights */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Event Achievements:</h4>
                <div className="flex flex-wrap gap-2">
                  {pastEvents[currentGallery].highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-royal-blue rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FontAwesomeIcon icon={faExpand} className="mr-2" />
                Event Gallery ({pastEvents[currentGallery].photos.length} photos)
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pastEvents[currentGallery].photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedImage({...photo, event: pastEvents[currentGallery].title})}
                  >
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4 group-hover:opacity-90 transition duration-300">
                    <img
  src={photo.src}
  alt={photo.caption}
  className="w-full h-full object-cover rounded-lg"
/>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                      {photo.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-royal-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Host an Event With Us
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in partnering with AISolutions for your next event? 
            We provide venues, speakers, and sponsorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?interest=host-event"
              className="bg-white text-royal-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Partner With Us
            </Link>
            
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedImage.event}</h3>
                <p className="text-gray-600">{selectedImage.caption}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-8 flex items-center justify-center">
            <img 
  src={selectedImage.src} 
  alt={selectedImage.caption}
  className="max-h-[60vh] w-auto object-contain"
 />

            </div>
          </div>
        </div>
      )} {selectedEvent && (
  <RegistrationModal 
    event={selectedEvent}
    isOpen={!!selectedEvent}
    onClose={() => setSelectedEvent(null)}
  />
)}
    </div>
    
  );
 
};

export default Events;