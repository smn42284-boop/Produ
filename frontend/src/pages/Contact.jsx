import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faUserTie, 
  faGlobe,
  faDatabase,
  faShieldAlt,
  faPaperPlane,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const countries = [
    'Myanmar (Burma)',
    'United States', 
    'Canada', 
    'United Kingdom', 
    'Australia', 
    'Germany', 
    'France', 
    'Japan',
    'China', 
    'India', 
    'Singapore', 
    'United Arab Emirates', 
    'Thailand',
    'Malaysia',
    'Vietnam',
    'Philippines',
    'Indonesia',
    'Brazil', 
    'Mexico', 
    'South Africa',
    'Other'
  ];

  const jobTitles = [
    'CEO / Founder',
    'CTO / Technical Director',
    'IT Manager',
    'Software Developer',
    'Data Scientist',
    'AI/ML Engineer',
    'Project Manager',
    'Business Analyst',
    'Marketing Director',
    'Operations Manager',
    'Student',
    'Researcher',
    'Government Official',
    'Other'
  ];

  const onSubmit = async (data) => {
  setIsSubmitting(true);
  setSubmitStatus(null);
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Save to localStorage (simulating backend storage)
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...data,
      id: Date.now(),
      submitted_at: new Date().toISOString(),
      status: 'new'
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Also save to admin panel contacts WITH JOB TITLE AND COUNTRY
    const adminContacts = JSON.parse(localStorage.getItem('adminContacts') || '[]');
    adminContacts.push({
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      job_title: data.job_title || '', // ADD JOB TITLE
      country: data.country || '',     // ADD COUNTRY
      requirements: data.requirements,
      submitted_at: new Date().toISOString(),
      status: 'new'
    });
    localStorage.setItem('adminContacts', JSON.stringify(adminContacts));
    
    setSubmitStatus({ 
      type: 'success', 
      message: '✅ Thank you! Your information has been submitted successfully. We\'ll contact you within 24 hours.',
      submissionId: Date.now()
    });
    reset();
  } catch (error) {
    setSubmitStatus({ 
      type: 'error', 
      message: '❌ Form submitted successfully (saved locally). Note: Backend server is not connected.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-royal-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or ready to transform your business with AI? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="text-royal-blue mt-1">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@aisolutions.com</p>
                    <p className="text-gray-600 text-sm">support@aisolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-royal-blue mt-1">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+959 1234 5567 (Myanmar)</p>
                    <p className="text-gray-600 text-sm">+44 20 7123 4567 (UK)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-royal-blue mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Offices</h3>
                    <p className="text-gray-600">Yangon, Myanmar</p>
                    <p className="text-gray-600">Sunderland, UK</p>
                    <p className="text-gray-600">Singapore</p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h2>
                <p className="text-gray-600">
                  Please fill out the form below. The more details you provide, the better we can assist you.
                </p>
              
              </div>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-yellow-50 text-yellow-800 border border-yellow-200'}`}>
                  <div className="flex items-center">
                    <FontAwesomeIcon 
                      icon={submitStatus.type === 'success' ? faCheckCircle : faDatabase} 
                      className={`mr-3 ${submitStatus.type === 'success' ? 'text-green-500' : 'text-yellow-500'}`} 
                    />
                    <div>
                      <span>{submitStatus.message}</span>
                      {submitStatus.submissionId && (
                        <p className="text-sm mt-1">
                          Submission ID: <code className="bg-gray-100 px-2 py-1 rounded">{submitStatus.submissionId}</code>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faUserTie} className="mr-2 text-royal-blue" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Job Title <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('job_title', { required: 'Job title is required' })}
                        className={`w-full px-4 py-3 border ${errors.job_title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent`}
                      >
                        <option value="">Select your job title</option>
                        {jobTitles.map((title, index) => (
                          <option key={index} value={title}>{title}</option>
                        ))}
                      </select>
                      {errors.job_title && (
                        <p className="text-red-500 text-sm mt-1">{errors.job_title.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-royal-blue" />
                    Contact Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        placeholder="+959 1234 5567"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('country', { required: 'Country is required' })}
                        className={`w-full px-4 py-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent`}
                      >
                        <option value="">Select your country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Requirements */}
                <div>
                  <label className="block text-gray-700 mb-2">
                    Project Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register('requirements', { 
                      required: 'Requirements are required',
                      minLength: { value: 20, message: 'Please provide more details (minimum 20 characters)' }
                    })}
                    rows="6"
                    className={`w-full px-4 py-3 border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent`}
                    placeholder="Please describe your project in detail. Include your goals, challenges, timeline, and budget if possible..."
                  />
                  {errors.requirements && (
                    <p className="text-red-500 text-sm mt-1">{errors.requirements.message}</p>
                  )}
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                    <span>Please provide as much detail as possible for a better response</span>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-gray-700 mb-2">How did you hear about us?</label>
                  <select
                    {...register('source')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="search">Search Engine (Google, Bing)</option>
                    <option value="social">Social Media (LinkedIn, Twitter, Facebook)</option>
                    <option value="referral">Referral/Recommendation</option>
                    <option value="event">Event/Conference</option>
                    <option value="ad">Online Advertisement</option>
                    <option value="article">Blog/Article</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    {...register('privacy_consent', { required: 'You must agree to the privacy policy' })}
                    className="w-4 h-4 text-royal-blue rounded focus:ring-royal-blue mt-1"
                    id="privacy"
                  />
                  <label htmlFor="privacy" className="ml-3 text-gray-700">
                    I agree to the <a href="#" className="text-royal-blue hover:underline">Privacy Policy</a> and 
                    consent to AISolutions contacting me about my inquiry. <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.privacy_consent && (
                  <p className="text-red-500 text-sm mt-1">{errors.privacy_consent.message}</p>
                )}

                {/* Newsletter */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('newsletter')}
                    className="w-4 h-4 text-royal-blue rounded focus:ring-royal-blue"
                    id="newsletter"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-gray-700">
                    Subscribe to our newsletter for AI insights, tips, and updates
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-royal-blue to-blue-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Submit Your Information
                    </>
                  )}
                </button>
              </form>

      
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;