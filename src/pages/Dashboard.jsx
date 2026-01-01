import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignOutAlt, 
  faUsers, 
  faEnvelope, 
  faCalendarAlt,
  faCalendar,
  faChartBar, 
  faEye, 
  faEyeSlash,
  faCheckCircle,
  faTimesCircle,
  faTrash,
  faDownload,
  faFilter,
  faGlobe,
  faUserTie,
  faBuilding,
  faPhone,
  faClock,
  faChartLine,
  faExternalLinkAlt,
  faCopy,
  faSearch,
  faTimes,
  faMapMarkerAlt,
  faCalendarDays,
  faClipboardCheck,
  faKey,
  faLock,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Dashboard = ({ onLogout }) => {
  const [eventRegistrations, setEventRegistrations] = useState([]);
  const [timeFilter, setTimeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  // In Admin.jsx, update fetchEventRegistrations function
const fetchEventRegistrations = async () => {
  try {
    // Try real API first
    const token = localStorage.getItem('adminToken');
    const response = await axios.get('http://localhost:5000/api/events/registrations', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setEventRegistrations(response.data.data || []);
  } catch (error) {
    console.log('Using mock event registrations from localStorage');
    
    // Fallback to localStorage data
    const mockRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    
    // If no localStorage data, create sample data
    if (mockRegistrations.length === 0) {
      const sampleData = [
        {
          id: 1,
          event_title: 'AI Innovation Summit 2026',
          full_name: 'John Smith',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          company: 'Tech Corp Inc.',
          position: 'CTO',
          registration_date: '2026-01-15T10:30:00Z',
          status: 'confirmed'
        },
        {
          id: 2,
          event_title: 'Tech Startup Workshop',
          full_name: 'Sarah Johnson',
          email: 'sarah@example.com',
          phone: '+1 (555) 987-6543',
          company: 'StartUpXYZ',
          position: 'Founder',
          registration_date: '2026-01-10T14:20:00Z',
          status: 'pending'
        }
      ];
      localStorage.setItem('eventRegistrations', JSON.stringify(sampleData));
      setEventRegistrations(sampleData);
    } else {
      setEventRegistrations(mockRegistrations);
    }
  }
};
  const [analytics, setAnalytics] = useState({
    totalQueries: 0,
    todayQueries: 0,
    weekQueries: 0,
    monthQueries: 0,
    newQueries: 0,
    contactedQueries: 0,
    resolvedQueries: 0,
    countries: 0,
    jobTitles: 0,
    companies: 0,
    // Add breakdown by status for each time period
    todayNew: 0,
    todayContacted: 0,
    todayResolved: 0,
    weekNew: 0,
    weekContacted: 0,
    weekResolved: 0,
    monthNew: 0,
    monthContacted: 0,
    monthResolved: 0
  });
  
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedContacts = localStorage.getItem('adminContacts');
    fetchEventRegistrations();
    if (savedContacts) {
      try {
        const parsedContacts = JSON.parse(savedContacts);
        
        // Ensure each contact has required fields
        const enrichedContacts = parsedContacts.map(contact => ({
          ...contact,
          job_title: contact.job_title || 'Not specified',
          country: contact.country || 'Not specified',
          company: contact.company || 'Not specified',
          status: contact.status || 'new'
        }));
        
        setContacts(enrichedContacts);
        setFilteredContacts(enrichedContacts);
        
        const analyticsData = calculateAnalytics(enrichedContacts);
        setAnalytics(analyticsData);
        
      } catch (error) {
        console.log('Error loading saved contacts:', error);
        loadMockData();
      }
    } else {
      loadMockData();
    }
  }, []);
  const [eventCategoryFilter, setEventCategoryFilter] = useState('all');
const [filteredEventRegistrations, setFilteredEventRegistrations] = useState([]);
  const [eventFilter, setEventFilter] = useState('all');
const uniqueEventTitles = [...new Set(eventRegistrations.map(r => r.event_title).filter(Boolean))];
const getGroupedEvents = () => {
  const groups = {};
  
  eventRegistrations.forEach(reg => {
    if (!groups[reg.event_title]) {
      groups[reg.event_title] = [];
    }
    groups[reg.event_title].push(reg);
  });
  
  return Object.entries(groups).map(([eventName, registrations]) => ({
    eventName,
    registrations
  }));
};
const countByStatus = (registrations, status) => {
  return registrations.filter(r => r.status === status).length;
};

// Get overall event status (for color coding)
const getEventStatus = (registrations) => {
  const confirmed = countByStatus(registrations, 'confirmed');
  const total = registrations.length;
  
  if (confirmed === total) return 'good'; // All confirmed
  if (confirmed >= total * 0.5) return 'warning'; // Half confirmed
  return 'neutral'; // Less than half confirmed
};
const getFilteredEvents = () => {
  const grouped = getGroupedEvents();
  
  if (eventFilter === 'all') {
    return grouped;
  }
  
  return grouped.filter(group => group.eventName === eventFilter);
};
// Get count for an event
const getEventCount = (eventName) => {
  return eventRegistrations.filter(r => r.event_title === eventName).length;
};

  // Load mock data
  const loadMockData = () => {
    const mockContacts = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '+959772602145',
        job_title: 'CTO',
        company: 'Tech Innovations Ltd.',
        country: 'Myanmar',
        requirements: 'Looking for AI-powered analytics solution for our e-commerce platform. Need real-time customer behavior tracking and predictive sales analysis.',
        submitted_at: new Date().toISOString(),
        status: 'new'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        phone: '+959772602146',
        job_title: 'Operations Manager',
        company: 'Global Retail Solutions',
        country: 'UK',
        requirements: 'Need a custom AI chatbot for customer support that can handle multiple languages and integrate with our existing CRM system.',
        submitted_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        status: 'contacted'
      },
      {
        id: 3,
        name: 'Michael Chen',
        email: 'michael.chen@example.com',
        phone: '+959772602147',
        job_title: 'Security Director',
        company: 'Secure Systems Inc.',
        country: 'Singapore',
        requirements: 'Interested in CyberShield AI for enhanced security monitoring across our network infrastructure. Need threat detection and automated response.',
        submitted_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        status: 'resolved'
      },
      {
        id: 4,
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        phone: '+959772602148',
        job_title: 'Quality Assurance Lead',
        company: 'Manufacturing Pro',
        country: 'USA',
        requirements: 'Looking for VisionAI solution for quality control automation in our production lines. Need image recognition for defect detection.',
        submitted_at: new Date().toISOString(), // Today
        status: 'new'
      },
      {
        id: 5,
        name: 'David Brown',
        email: 'david.brown@example.com',
        job_title: 'Head of Innovation',
        company: 'FinTech StartUp',
        country: 'Australia',
        requirements: 'Need AI solution for real-time fraud detection in financial transactions with machine learning capabilities.',
        submitted_at: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
        status: 'contacted'
      },
      {
        id: 6,
        name: 'Lisa Wong',
        email: 'lisa.wong@example.com',
        phone: '+959772602149',
        job_title: 'Marketing Director',
        company: 'Digital Marketing Pro',
        country: 'Hong Kong',
        requirements: 'Looking for AI tools for customer segmentation and personalized marketing campaigns.',
        submitted_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        status: 'resolved'
      },
      {
        id: 7,
        name: 'Robert Kim',
        email: 'robert.kim@example.com',
        phone: '+959772602150',
        job_title: 'Data Analyst',
        company: 'Analytics Corp',
        country: 'South Korea',
        requirements: 'Need AI-powered data visualization tools for business intelligence reporting.',
        submitted_at: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
        status: 'new'
      },
      {
        id: 8,
        name: 'Maria Garcia',
        email: 'maria.garcia@example.com',
        phone: '+959772602151',
        job_title: 'HR Manager',
        company: 'Global HR Solutions',
        country: 'Spain',
        requirements: 'Looking for AI recruitment tools for candidate screening and matching.',
        submitted_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        status: 'contacted'
      }
    ];
    
    const analyticsData = calculateAnalytics(mockContacts);
    setAnalytics(analyticsData);
    setContacts(mockContacts);
    setFilteredContacts(mockContacts);
    
    // Save to localStorage
    localStorage.setItem('adminContacts', JSON.stringify(mockContacts));
  };

  // Calculate date ranges
  const getDateRanges = () => {
    const today = new Date();
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 7);
    const weekStart = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), weekAgo.getDate());
    
    const monthAgo = new Date(today);
    monthAgo.setDate(today.getDate() - 30);
    const monthStart = new Date(monthAgo.getFullYear(), monthAgo.getMonth(), monthAgo.getDate());
    
    return { todayStart, weekStart, monthStart };
  };

  const calculateAnalytics = (contactsData) => {
    const { todayStart, weekStart, monthStart } = getDateRanges();
    
    // Filter by time periods
    const todayContacts = contactsData.filter(contact => 
      new Date(contact.submitted_at) >= todayStart
    );
    
    const weekContacts = contactsData.filter(contact => 
      new Date(contact.submitted_at) >= weekStart
    );
    
    const monthContacts = contactsData.filter(contact => 
      new Date(contact.submitted_at) >= monthStart
    );
    
    // Count queries by status for each time period
    const todayNew = todayContacts.filter(contact => contact.status === 'new').length;
    const todayContacted = todayContacts.filter(contact => contact.status === 'contacted').length;
    const todayResolved = todayContacts.filter(contact => contact.status === 'resolved').length;
    
    const weekNew = weekContacts.filter(contact => contact.status === 'new').length;
    const weekContacted = weekContacts.filter(contact => contact.status === 'contacted').length;
    const weekResolved = weekContacts.filter(contact => contact.status === 'resolved').length;
    
    const monthNew = monthContacts.filter(contact => contact.status === 'new').length;
    const monthContacted = monthContacts.filter(contact => contact.status === 'contacted').length;
    const monthResolved = monthContacts.filter(contact => contact.status === 'resolved').length;
    
    // Overall counts
    const newQueries = contactsData.filter(contact => contact.status === 'new').length;
    const contactedQueries = contactsData.filter(contact => contact.status === 'contacted').length;
    const resolvedQueries = contactsData.filter(contact => contact.status === 'resolved').length;
    
    const countries = new Set(contactsData.map(c => c.country)).size;
    const jobTitles = new Set(contactsData.map(c => c.job_title)).size;
    const companies = new Set(contactsData.map(c => c.company)).size;
    
    return {
      totalQueries: contactsData.length,
      todayQueries: todayContacts.length,
      weekQueries: weekContacts.length,
      monthQueries: monthContacts.length,
      newQueries,
      contactedQueries,
      resolvedQueries,
      countries,
      jobTitles,
      companies,
      // Status breakdown by time period
      todayNew,
      todayContacted,
      todayResolved,
      weekNew,
      weekContacted,
      weekResolved,
      monthNew,
      monthContacted,
      monthResolved
    };
  };

  const filterContactsByTime = (contactsData, filter) => {
    const { todayStart, weekStart, monthStart } = getDateRanges();
    
    switch(filter) {
      case 'today':
        return contactsData.filter(contact => 
          new Date(contact.submitted_at) >= todayStart
        );
      case 'week':
        return contactsData.filter(contact => 
          new Date(contact.submitted_at) >= weekStart
        );
      case 'month':
        return contactsData.filter(contact => 
          new Date(contact.submitted_at) >= monthStart
        );
      default:
        return contactsData;
    }
  };
  // Add this function inside your Admin component (with other functions like handleLogout)

const updateRegistrationStatus = async (registrationId, newStatus) => {
  try {
    const token = localStorage.getItem('adminToken');
    await axios.put(
      `http://localhost:5000/api/events/registrations/${registrationId}/status`,
      { status: newStatus },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    // Update local state
    setEventRegistrations(prev => 
      prev.map(reg => 
        reg.id === registrationId ? { ...reg, status: newStatus } : reg
      )
    );
    
  } catch (error) {
    console.error('Failed to update registration status:', error);
    alert('Failed to update status. Please try again.');
  }
};
const eventNamesFromRegistrations = [
  ...new Set(eventRegistrations.map(r => r.event_title).filter(Boolean))
];




  // Filter contacts based on search, time, and status filters
  useEffect(() => {
    
    let filtered = contacts;
    if (eventCategoryFilter === 'all') {
    setFilteredEventRegistrations(eventRegistrations);
  } else {
    setFilteredEventRegistrations(
      eventRegistrations.filter(r => (r.event_category || 'uncategorized') === eventCategoryFilter)
    );
  }

    // Apply time filter
    filtered = filterContactsByTime(filtered, timeFilter);

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(contact => contact.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(contact => 
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.company.toLowerCase().includes(searchLower) ||
        contact.job_title.toLowerCase().includes(searchLower) ||
        contact.country.toLowerCase().includes(searchLower) ||
        contact.requirements.toLowerCase().includes(searchLower)
      );
    }

    setFilteredContacts(filtered);
  }, [searchQuery, contacts, timeFilter, statusFilter,eventRegistrations, eventCategoryFilter]);
const eventCategoriesFromRegistrations = [
  'all',
  ...new Set(eventRegistrations.map(r => r.event_category || 'uncategorized'))
];

  const updateContactStatus = (id, newStatus) => {
    const updatedContacts = contacts.map(contact => 
      contact.id === id ? { ...contact, status: newStatus } : contact
    );
    
    setContacts(updatedContacts);
    
    // Reapply filters
    let filtered = updatedContacts;
    filtered = filterContactsByTime(filtered, timeFilter);
    if (statusFilter !== 'all') {
      filtered = filtered.filter(contact => contact.status === statusFilter);
    }
    if (searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      filtered = filtered.filter(contact => 
        contact.name.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower) ||
        contact.company.toLowerCase().includes(searchLower) ||
        contact.job_title.toLowerCase().includes(searchLower) ||
        contact.country.toLowerCase().includes(searchLower) ||
        contact.requirements.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredContacts(filtered);
    localStorage.setItem('adminContacts', JSON.stringify(updatedContacts));
    
    const analyticsData = calculateAnalytics(updatedContacts);
    setAnalytics(analyticsData);
  };

  const handleTimeFilterChange = (filter, status = 'all') => {
    setTimeFilter(filter);
    setStatusFilter(status);
  };

  const handleStatusFilterChange = (filter) => {
    setStatusFilter(filter);
    setTimeFilter('all'); // Reset time when status filter is applied
  };
  const [activeTab, setActiveTab] = useState('contacts'); 

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getTimeIcon = (period) => {
    switch(period) {
      case 'today': return faCalendarAlt;
      case 'week': return faCalendarAlt;
      case 'month': return faCalendar;
      default: return faChartLine;
    }
  };

  const getTimeLabel = (period) => {
    switch(period) {
      case 'today': return 'Today';
      case 'week': return 'This Week';
      case 'month': return 'This Month';
      default: return 'All Time';
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const formatRequirements = (text) => {
    if (!text) return 'No requirements provided.';
    
    return text
      .split('. ')
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0)
      .map(sentence => sentence.endsWith('.') ? sentence : sentence + '.')
      .join('\n\n');
  };

 

  

  // Requirements Modal Component
  const RequirementsModal = ({ contact, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Project Requirements</h2>
              <p className="text-gray-600 text-sm">From {contact.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-royal-blue text-white rounded flex items-center justify-center font-medium">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{contact.name}</div>
                  <div className="text-gray-600 text-sm">{contact.job_title}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="text-gray-500">Email</div>
                  <div className="font-medium">{contact.email}</div>
                </div>
                {contact.phone && (
                  <div className="text-sm">
                    <div className="text-gray-500">Phone</div>
                    <div className="font-medium">{contact.phone}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-gray-500 text-sm">Company</div>
                <div className="font-medium">{contact.company || 'Not specified'}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-gray-500 text-sm">Country</div>
                  <div className="font-medium flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-400" />
                    {contact.country || 'Not specified'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Submitted</div>
                  <div className="font-medium">{new Date(contact.submitted_at).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">Project Requirements</h3>
              <button
                onClick={() => copyToClipboard(contact.requirements)}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faCopy} />
                <span>Copy</span>
              </button>
            </div>
            
            <div className="bg-gray-50 rounded p-4 border border-gray-200">
              <div className="whitespace-pre-line text-gray-700">
                {formatRequirements(contact.requirements)}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                window.open(`mailto:${contact.email}?subject=Regarding your inquiry from AISolutions`, '_blank');
              }}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-200"
            >
              Reply via Email
            </button>
            <select
              value={contact.status}
              onChange={(e) => updateContactStatus(contact.id, e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-royal-blue focus:border-blue-500"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedContact && (
        <RequirementsModal 
          contact={selectedContact} 
          onClose={() => setSelectedContact(null)} 
        />
      )}

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 text-sm">Manage all contact and register form submissions</p>
            </div>
            <div className="flex items-center space-x-3">
             
              <button
                onClick={onLogout}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-200 flex items-center transition duration-300"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
        <div className="flex border-b border-gray-200 mb-6">
    <button
      onClick={() => setActiveTab('contacts')}
      className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
        activeTab === 'contacts'
          ? 'border-royal-blue text-royal-blue'
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
    >
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
      Contact Inquiries ({analytics.totalQueries})
    </button>
    
    <button
      onClick={() => setActiveTab('events')}
      className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
        activeTab === 'events'
          ? 'border-royal-blue text-royal-blue'
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
    >
      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
      Event Registrations ({eventRegistrations.length})
    </button>
  </div>

      
 {activeTab === 'contacts' ? (
      <div className="container mx-auto px-4 py-6">
        {/* Interactive Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Total Queries Card */}
          <div 
            className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow transition duration-300 cursor-pointer ${
              timeFilter === 'all' && statusFilter === 'all' ? 'ring-2 ring-royal-blue' : ''
            }`}
            onClick={() => {
              handleTimeFilterChange('all', 'all');
              setSearchQuery('');
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Queries</p>
                <p className="text-2xl font-semibold text-gray-900">{formatNumber(analytics.totalQueries)}</p>
               
              </div>
              <div className="bg-blue-50 text-royal-blue p-2 rounded">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
          
          {/* Today's Queries Card */}
          <div 
            className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow transition duration-300 cursor-pointer ${
              timeFilter === 'today' ? 'ring-2 ring-royal-blue' : ''
            }`}
            onClick={() => {
              handleTimeFilterChange('today', 'all');
              setSearchQuery('');
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Today</p>
                <p className="text-2xl font-semibold text-gray-900">{formatNumber(analytics.todayQueries)}</p>
                
              </div>
              <div className="bg-blue-50 text-royal-blue p-2 rounded">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
          </div>
          
          {/* This Week's Queries Card */}
          <div 
            className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow transition duration-300 cursor-pointer ${
              timeFilter === 'week' ? 'ring-2 ring-royal-blue' : ''
            }`}
            onClick={() => {
              handleTimeFilterChange('week', 'all');
              setSearchQuery('');
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">This Week</p>
                <p className="text-2xl font-semibold text-gray-900">{formatNumber(analytics.weekQueries)}</p>
               
              </div>
              <div className="bg-blue-50 text-royal-blue p-2 rounded">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
          </div>
          
          {/* This Month's Queries Card */}
          <div 
            className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow transition duration-300 cursor-pointer ${
              timeFilter === 'month' ? 'ring-2 ring-royal-blue' : ''
            }`}
            onClick={() => {
              handleTimeFilterChange('month', 'all');
              setSearchQuery('');
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">This Month</p>
                <p className="text-2xl font-semibold text-gray-900">{formatNumber(analytics.monthQueries)}</p>
               
              </div>
              <div className="bg-blue-50 text-royal-blue p-2 rounded">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-royal-blue focus:border-blue-500"
                  placeholder="Search by name, email, company, job title, or requirements..."
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(timeFilter !== 'all' || statusFilter !== 'all' || searchQuery) && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
                <span className="text-gray-600 text-sm">Active filters:</span>
                <div className="flex flex-wrap gap-2">
                  {timeFilter !== 'all' && (
                    <div className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                      <FontAwesomeIcon icon={getTimeIcon(timeFilter)} className="mr-1" />
                      <span>{getTimeLabel(timeFilter)}</span>
                      <button
                        onClick={() => setTimeFilter('all')}
                        className="text-blue-500 hover:text-blue-700 ml-2"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  )}
                  
                  {statusFilter !== 'all' && (
                    <div className="inline-flex items-center space-x-1 bg-gray-50 text-gray-700 px-3 py-1 rounded text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        statusFilter === 'new' ? 'bg-gray-500' :
                        statusFilter === 'contacted' ? 'bg-blue-500' :
                        'bg-cyan-500'
                      }`}></div>
                      <span className="ml-1">Status: {statusFilter}</span>
                      <button
                        onClick={() => setStatusFilter('all')}
                        className="text-gray-500 hover:text-gray-700 ml-2"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  )}
                  
                  {searchQuery && (
                    <div className="inline-flex items-center space-x-1 bg-gray-50 text-gray-700 px-3 py-1 rounded text-sm">
                      <FontAwesomeIcon icon={faSearch} className="mr-1" />
                      <span>Search: "{searchQuery}"</span>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-gray-500 hover:text-gray-700 ml-2"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {(timeFilter !== 'all' || statusFilter !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setTimeFilter('all');
                    setStatusFilter('all');
                    setSearchQuery('');
                  }}
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Status Quick Filter Buttons */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleStatusFilterChange('all')}
              className={`px-4 py-2 rounded text-sm transition duration-300 flex items-center space-x-2 ${
                statusFilter === 'all'
                  ? 'bg-royal-blue text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>All Status</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                {analytics.totalQueries}
              </span>
            </button>
            
            <button
              onClick={() => handleStatusFilterChange('new')}
              className={`px-4 py-2 rounded text-sm transition duration-300 flex items-center space-x-2 ${
                statusFilter === 'new'
                  ? 'bg-gray-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span>New</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
                {timeFilter === 'today' ? analytics.todayNew : 
                 timeFilter === 'week' ? analytics.weekNew :
                 timeFilter === 'month' ? analytics.monthNew :
                 analytics.newQueries}
              </span>
            </button>
            
            <button
              onClick={() => handleStatusFilterChange('contacted')}
              className={`px-4 py-2 rounded text-sm transition duration-300 flex items-center space-x-2 ${
                statusFilter === 'contacted'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Contacted</span>
              <span className="bg-blue-200 text-blue-700 px-2 py-0.5 rounded text-xs">
                {timeFilter === 'today' ? analytics.todayContacted : 
                 timeFilter === 'week' ? analytics.weekContacted :
                 timeFilter === 'month' ? analytics.monthContacted :
                 analytics.contactedQueries}
              </span>
            </button>
            
            <button
              onClick={() => handleStatusFilterChange('resolved')}
              className={`px-4 py-2 rounded text-sm transition duration-300 flex items-center space-x-2 ${
                statusFilter === 'resolved'
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
              }`}
            >
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Resolved</span>
              <span className="bg-cyan-200 text-cyan-700 px-2 py-0.5 rounded text-xs">
                {timeFilter === 'today' ? analytics.todayResolved : 
                 timeFilter === 'week' ? analytics.weekResolved :
                 timeFilter === 'month' ? analytics.monthResolved :
                 analytics.resolvedQueries}
              </span>
            </button>
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h2 className="font-medium text-gray-900">Customer Inquiries</h2>
                <p className="text-gray-600 text-sm">
                  Showing {filteredContacts.length} inquiries
                  {timeFilter !== 'all' && ` from ${getTimeLabel(timeFilter).toLowerCase()}`}
                  {statusFilter !== 'all' && ` with status: ${statusFilter}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
              <div className="mt-2 sm:mt-0">
               
              </div>
            </div>
          </div>
          
          {filteredContacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50 transition duration-150">
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">{contact.name}</div>
                        <div className="text-gray-500 text-sm flex items-center">
                          <FontAwesomeIcon icon={faBuilding} className="mr-1 text-xs" />
                          {contact.company}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-gray-700 flex items-center">
                          <FontAwesomeIcon icon={faUserTie} className="mr-2 text-gray-400 text-sm" />
                          {contact.job_title}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-gray-700">{contact.email}</div>
                        {contact.phone && (
                          <div className="text-gray-500 text-sm flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-1 text-xs" />
                            {contact.phone}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          contact.status === 'new' 
                            ? 'bg-gray-100 text-gray-800 border border-gray-200'
                            : contact.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'bg-royal-blue-100 text-cyan-800 border border-cyan-200'
                        }`}>
                          {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="text-royal-blue hover:text-blue-700 text-sm flex items-center transition duration-300"
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                            View Details
                          </button>
                          <select
                            value={contact.status}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-1 focus:ring-royal-blue focus:border-blue-500 transition duration-300"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-400 mb-4">
                <FontAwesomeIcon icon={faSearch} size="2x" />
              </div>
              <h3 className="text-gray-900 font-medium mb-2">No inquiries found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery 
                  ? 'No results found for your search. Try different keywords.'
                  : timeFilter !== 'all'
                  ? `No inquiries from ${getTimeLabel(timeFilter).toLowerCase()}. Try a different time period.`
                  : statusFilter !== 'all'
                  ? `No inquiries with status "${statusFilter}". Try a different status.`
                  : 'No customer inquiries yet. They will appear here once submitted through the contact form.'}
              </p>
              {(searchQuery || timeFilter !== 'all' || statusFilter !== 'all') && (
                <button
                  onClick={() => {
                    setTimeFilter('all');
                    setStatusFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-royal-blue text-white rounded text-sm hover:bg-blue-700 transition duration-300"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
          
        </div>
      </div>
 ):
 (
     <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900">Event Registrations</h3>
        <p className="text-gray-600 text-sm">
          {eventRegistrations.length} total registration{eventRegistrations.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      {/* Simple filter dropdown */}
      <div className="mt-4 lg:mt-0">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
          <select
            value={eventFilter}
            onChange={(e) => setEventFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm"
          >
            <option value="all">All Events</option>
            {uniqueEventTitles.map(eventName => (
              <option key={eventName} value={eventName}>
                {eventName} ({getEventCount(eventName)})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    {/* Display grouped registrations */}
    {getFilteredEvents().length > 0 ? (
      <div className="space-y-6">
        {getFilteredEvents().map(eventGroup => (
          <div key={eventGroup.eventName} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Event Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">{eventGroup.eventName}</h4>
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                    {eventGroup.registrations.length} people
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    getEventStatus(eventGroup.registrations) === 'good' ? 'bg-green-100 text-green-800' :
                    getEventStatus(eventGroup.registrations) === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {countByStatus(eventGroup.registrations, 'confirmed')} confirmed
                  </span>
                </div>
              </div>
            </div>
            
            {/* Registrations List */}
            <div className="divide-y divide-gray-100">
              {eventGroup.registrations.map(reg => (
                <div key={reg.id} className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{reg.full_name}</div>
                    <div className="text-gray-600 text-sm">{reg.email}</div>
                    {reg.company && (
                      <div className="text-gray-500 text-xs mt-1">
                        <FontAwesomeIcon icon={faBuilding} className="mr-1" />
                        {reg.company}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      reg.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      reg.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {reg.status}
                    </span>
                    
                    <select 
                      value={reg.status}
                      onChange={(e) => {
                        // Update this registration's status
                        const updated = eventRegistrations.map(r => 
                          r.id === reg.id ? {...r, status: e.target.value} : r
                        );
                        setEventRegistrations(updated);
                        localStorage.setItem('eventRegistrations', JSON.stringify(updated));
                      }}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-12">
        <div className="text-gray-400 text-4xl mb-4">📅</div>
        <h3 className="text-gray-900 font-medium mb-2">
          {eventFilter === 'all' 
            ? 'No event registrations yet' 
            : `No registrations for "${eventFilter}"`}
        </h3>
        <p className="text-gray-600">
          Users can register for events on the Events page.
        </p>
      </div>
    )}
  </div>
)}
</div>
  );
};

export default Dashboard; 