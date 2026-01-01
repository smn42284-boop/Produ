import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faArrowRight,
  faKey,
  faClock,
  faBan
} from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin, loginError, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ 
    username: '', 
    password: '' 
  });
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [displayError, setDisplayError] = useState('');

  // Check lockout status on component mount and when loginError changes
  useEffect(() => {
    checkLockoutStatus();
    
    // Update display error based on lockout status
    if (isLockedOut) {
      setDisplayError(`Account temporarily locked. Too many failed attempts. Try again in ${formatTime(remainingTime)}`);
    } else if (loginError) {
      setDisplayError(loginError);
    } else {
      setDisplayError('');
    }
  }, [loginError, isLockedOut, remainingTime]);

  // Check if user is locked out
  const checkLockoutStatus = () => {
    const storedLockout = localStorage.getItem('loginLockout');
    const failedAttempts = parseInt(localStorage.getItem('failedAttempts') || '0');
    
    // Check if user has 5 or more failed attempts and is within lockout period
    if (failedAttempts >= 5 && storedLockout) {
      const lockoutData = JSON.parse(storedLockout);
      const now = Date.now();
      
      if (now < lockoutData.until) {
        setIsLockedOut(true);
        const remaining = Math.ceil((lockoutData.until - now) / 1000);
        setRemainingTime(remaining);
      } else {
        // Lockout expired
        localStorage.removeItem('loginLockout');
        localStorage.removeItem('failedAttempts');
        setIsLockedOut(false);
      }
    } else {
      setIsLockedOut(false);
    }
  };

  // Countdown timer for lockout
  useEffect(() => {
    let timer;
    if (isLockedOut && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Lockout expired
            localStorage.removeItem('loginLockout');
            localStorage.removeItem('failedAttempts');
            setIsLockedOut(false);
            setDisplayError('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLockedOut, remainingTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check lockout before attempting login
    checkLockoutStatus();
    
    if (isLockedOut) {
      setDisplayError(`Account is locked. Please wait ${formatTime(remainingTime)} before trying again.`);
      return; // Stop here, don't call onLogin
    }
    
    // Only proceed with login if not locked out
    onLogin(credentials);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Check if form should be disabled
  const isFormDisabled = isLoading || isLockedOut;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg ${
              isLockedOut 
                ? 'bg-gradient-to-r from-red-500 to-red-600' 
                : 'bg-gradient-to-r from-royal-blue to-blue-600'
            }`}>
              <FontAwesomeIcon 
                icon={isLockedOut ? faBan : faKey} 
                className="text-white text-2xl" 
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Sign in to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error/Lockout Message */}
            {displayError && (
              <div className={`border-l-4 p-4 rounded-lg ${
                isLockedOut 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-yellow-50 border-yellow-500'
              }`}>
                <div className="flex items-center">
                  <div className={`mr-3 text-lg ${
                    isLockedOut ? 'text-red-500' : 'text-yellow-500'
                  }`}>
                    {isLockedOut ? '🔒' : '⚠️'}
                  </div>
                  <div>
                    <p className={`font-medium ${
                      isLockedOut ? 'text-red-700' : 'text-yellow-700'
                    }`}>
                      {displayError}
                    </p>
                    {isLockedOut && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        Time remaining: {formatTime(remainingTime)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Username Field */}
            <div className="space-y-2">
              <label className={`block font-medium ${
                isFormDisabled ? 'text-gray-500' : 'text-gray-700'
              }`}>
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className={isFormDisabled ? "text-gray-300" : "text-gray-400"} 
                  />
                </div>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-300 ${
                    isFormDisabled 
                      ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'border-gray-300 focus:ring-royal-blue hover:border-gray-400'
                  }`}
                  placeholder="Enter username"
                  required
                  disabled={isFormDisabled}
                  onFocus={() => {
                    if (isLockedOut) {
                      setDisplayError(`Account is locked. Please wait ${formatTime(remainingTime)} before trying again.`);
                    }
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className={`block font-medium ${
                  isFormDisabled ? 'text-gray-500' : 'text-gray-700'
                }`}>
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon 
                    icon={faLock} 
                    className={isFormDisabled ? "text-gray-300" : "text-gray-400"} 
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition duration-300 ${
                    isFormDisabled 
                      ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'border-gray-300 focus:ring-royal-blue hover:border-gray-400'
                  }`}
                  placeholder="Enter password"
                  required
                  disabled={isFormDisabled}
                  onFocus={() => {
                    if (isLockedOut) {
                      setDisplayError(`Account is locked. Please wait ${formatTime(remainingTime)} before trying again.`);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 right-0 pr-3 flex items-center transition duration-300 ${
                    isFormDisabled 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  disabled={isFormDisabled}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  className={`w-4 h-4 rounded focus:ring-royal-blue border-gray-300 ${
                    isFormDisabled 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-royal-blue'
                  }`}
                  disabled={isFormDisabled}
                />
                <label htmlFor="remember" className={`ml-3 ${
                  isFormDisabled ? 'text-gray-500' : 'text-gray-700'
                }`}>
                  Remember me
                </label>
              </div>
              
              <Link 
                to="/forgot-password"
                className={`text-sm transition duration-300 ${
                  isFormDisabled 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-royal-blue hover:text-blue-700'
                }`}
                onClick={(e) => {
                  if (isFormDisabled) {
                    e.preventDefault();
                  }
                }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isFormDisabled}
              className={`w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                isLockedOut
                  ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                  : isLoading
                    ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-700 hover:to-royal-blue hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
              } ${isFormDisabled ? 'opacity-75' : ''}`}
              onClick={() => {
                if (isLockedOut) {
                  setDisplayError(`Account is locked. Please wait ${formatTime(remainingTime)} before trying again.`);
                }
              }}
            >
              {isLockedOut ? (
                <>
                  <FontAwesomeIcon icon={faBan} />
                  <span>Account Locked ({formatTime(remainingTime)})</span>
                </>
              ) : isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </button>
          </form>

          {/* Additional Lockout Info */}
          {isLockedOut && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center text-gray-600 text-sm">
                <p className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  Your account has been temporarily locked due to multiple failed login attempts.
                </p>
                <p className="mt-2">
                  This is a security measure to protect your account from unauthorized access.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;