import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faUser, faEnvelope, faPhone, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const RegistrationModal = ({ event, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    event_title: event?.title || '',
    event_id: event?.id || 0
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save registration to localStorage
    const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    
    // In RegistrationModal.jsx, update the newRegistration object:
const newRegistration = {
  id: Date.now(),
  ...formData,
  registration_date: new Date().toISOString(),
  status: 'pending',
  event_date: event.date,
  event_location: event.location,
  event_price: event.price,
  event_category: event.category // Add category
};
    localStorage.setItem('eventRegistrations', JSON.stringify([...existingRegistrations, newRegistration]));
    
    setSubmitted(true);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              Register for {event.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            {event.date} • {event.location}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-green-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600">
              Thank you for registering for <strong>{event.title}</strong>. 
              We'll send confirmation details to {formData.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                placeholder="+44 1234 567890"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Position / Job Title
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                placeholder="CTO, Manager, etc."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-royal-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Complete Registration
              </button>
              <p className="text-gray-500 text-xs mt-2 text-center">
                You'll receive email confirmation within 24 hours.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;