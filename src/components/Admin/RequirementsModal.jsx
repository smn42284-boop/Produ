// src/components/Admin/RequirementsModal.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, faUser, faBuilding, faMapMarkerAlt, 
  faEnvelope, faPhone, faBriefcase, faClipboard,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';

const RequirementsModal = ({ contact, onClose, updateContactStatus }) => {
  if (!contact) return null;

  const handleStatusChange = (e) => {
    updateContactStatus(contact.id, e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Inquiry Details</h2>
            <p className="text-gray-600">Submitted on {new Date(contact.submitted_at).toLocaleDateString()}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-500 text-xl" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Personal Information Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2 text-royal-blue" />
                  Personal Information
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <FontAwesomeIcon icon={faUser} className="mr-3 text-gray-400" />
                      <span className="text-gray-900 font-medium">{contact.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-gray-400" />
                      <span className="text-gray-900 font-medium">{contact.email}</span>
                    </div>
                  </div>

                  {contact.phone && (
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                      <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                        <FontAwesomeIcon icon={faPhone} className="mr-3 text-gray-400" />
                        <span className="text-gray-900 font-medium">{contact.phone}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Location Information */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-royal-blue" />
                  Location
                </h3>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-gray-400" />
                  <span className="text-gray-900 font-medium">{contact.country}</span>
                </div>
              </div>
            </div>

            {/* Professional Information Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faBuilding} className="mr-2 text-royal-blue" />
                  Professional Information
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Company</label>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <FontAwesomeIcon icon={faBuilding} className="mr-3 text-gray-400" />
                      <span className="text-gray-900 font-medium">{contact.company}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Job Title</label>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                      <FontAwesomeIcon icon={faBriefcase} className="mr-3 text-gray-400" />
                      <span className="text-gray-900 font-medium">{contact.job_title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submission Info */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faCalendarDay} className="mr-2 text-royal-blue" />
                  Submission Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-500">Submitted Date:</span>
                    <span className="text-gray-900 font-medium">
                      {new Date(contact.submitted_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-gray-500">Submitted Time:</span>
                    <span className="text-gray-900 font-medium">
                      {new Date(contact.submitted_at).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Requirements - Full Width */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FontAwesomeIcon icon={faClipboard} className="mr-2 text-royal-blue" />
              Project Requirements
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {contact.requirements || 'No requirements provided.'}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Characters: {contact.requirements?.length || 0}</span>
                  <span>Words: {contact.requirements?.split(/\s+/).filter(Boolean).length || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <span className="text-gray-700 mr-3">Update Status:</span>
            <select
              value={contact.status}
              onChange={handleStatusChange}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-royal-blue focus:border-blue-500"
            >
              <option value="new">🆕 New</option>
              <option value="contacted">💬 Contacted</option>
              <option value="resolved">✅ Resolved</option>
            </select>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => window.location.href = `mailto:${contact.email}`}
              className="px-5 py-2 bg-royal-blue text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Send Email
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsModal;