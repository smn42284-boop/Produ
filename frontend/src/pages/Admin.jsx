import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState('');

  // Check authentication on mount
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
    
    // Check if user is currently locked out
    const storedLockout = localStorage.getItem('loginLockout');
    if (storedLockout) {
      const lockoutData = JSON.parse(storedLockout);
      const now = Date.now();
      
      // Clear expired lockout
      if (now >= lockoutData.until) {
        localStorage.removeItem('loginLockout');
        localStorage.removeItem('failedAttempts');
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = (credentials) => {
    // Check lockout status first
    const storedLockout = localStorage.getItem('loginLockout');
    const failedAttempts = parseInt(localStorage.getItem('failedAttempts') || '0');
    
    // If locked out, show error and return immediately
    if (failedAttempts >= 5 && storedLockout) {
      const lockoutData = JSON.parse(storedLockout);
      const now = Date.now();
      
      if (now < lockoutData.until) {
        const remainingSeconds = Math.ceil((lockoutData.until - now) / 1000);
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        
        setLoginError(`Account is locked. Please wait ${minutes}:${seconds < 10 ? '0' : ''}${seconds} before trying again.`);
        return; // STOP HERE - Don't proceed with login
      } else {
        // Clear expired lockout
        localStorage.removeItem('loginLockout');
        localStorage.removeItem('failedAttempts');
      }
    }
    
    setIsLoading(true);
    setLoginError('');
    
    // Simulate API call
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        // Successful login
        setIsAuthenticated(true);
        sessionStorage.setItem('adminLoggedIn', 'true');
        
        // Reset failed attempts on successful login
        localStorage.removeItem('failedAttempts');
        localStorage.removeItem('loginLockout');
      } else {
        // Failed login
        const newFailedAttempts = failedAttempts + 1;
        localStorage.setItem('failedAttempts', newFailedAttempts.toString());
        
        if (newFailedAttempts >= 5) {
          // Set lockout for 2 minutes (120000 milliseconds)
          const lockoutUntil = Date.now() + 120000;
          localStorage.setItem('loginLockout', JSON.stringify({
            until: lockoutUntil,
            timestamp: new Date().toISOString()
          }));
          
          setLoginError('Too many failed attempts. Account locked for 2 minutes.');
        } else {
          setLoginError(`Invalid credentials. You have ${5 - newFailedAttempts} attempt(s) remaining.`);
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminLoggedIn');
    
    // Clear login error on logout
    setLoginError('');
    
    // Note: We DON'T clear failedAttempts or lockout on logout
    // This prevents users from logging out and immediately trying again
  };

  if (isLoading && !loginError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path="login" 
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <Login 
              onLogin={handleLogin} 
              loginError={loginError}
              isLoading={isLoading}
            />
          )
        } 
      />
      
      {/* Protected Routes */}
      <Route 
        path="dashboard" 
        element={
          isAuthenticated ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        } 
      />

      {/* Default redirect */}
      <Route 
        path="*" 
        element={
          <Navigate to={isAuthenticated ? "/admin/dashboard" : "/admin/login"} replace />
        } 
      />
    </Routes>
  );
};

export default Admin;