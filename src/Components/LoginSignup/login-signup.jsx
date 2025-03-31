import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register, login } from "../../services/auth";
import "./login-signup.css";

import person_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
// import { set } from "core-js/core/dict";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (action === "Sign Up") {
      if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      
      // Password matching validation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = async () => {

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (action == "Login") {
        const loginData = {
          username: formData.email,
          password: formData.password,
        };

        const response = await login(loginData)
        // console.log('Login successful:', response);

        localStorage.setItem('token', response.access_token);
        navigate('/dashboard');
      } else {
        const registrationData = {
          full_name: formData.full_name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }
        
        const response = await register(registrationData);
        
        setAction('Login');
        alert('Registration successful! Please login to continue.');
        
      }
    } catch (error) {
      console.error(`${action} failed:`, error.response?.data || error.message);

      // Handle specific error messages from your backend
      const errorMessage = error.response?.data?.detail || 
                         error.response?.data?.message || 
                         `${action} failed. Please try again.`;

      setErrors({ apiError: errorMessage })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="navbar">
        <div className="navbar-header">
          <img
            width="90px"
            height="85px"
            src="/images/QCACAC-LOGO.png"
            alt="QCACAC Logo"
          />
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/pet-gallery">Pet Gallery</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/qc-animal-pound">QC Animal Pound</a></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login-signup" className="btn login-button">Login</Link>
        </div>
      </nav>

      {/* Main Form Container */}
      <div className="login-signup-container">
        {/* Left Section: Login / Signup Form */}
        <div className="form-section">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

          {errors.apiError && (
            <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>
              {errors.apiError}
            </div>
          )}

          {/* FULL NAME */}
          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <img src={person_icon} alt="Person Icon"className="icon" />
                <input
                  type="text"
                  name="full_name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.full_name && <span className="error">{errors.full_name}</span>}
              </div>
            )}

          {/* EMAIL */}
          <div className="input">
            <img src={email_icon} alt="Email Icon" className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          

          {/* USERNAME SIGNUP*/}

          {action === "Sign Up" && (
            <div className="input">
              <img src={person_icon} alt="Person Icon" className="icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
          )}
        
          <div className="input">
            <img src={password_icon} alt="Password Icon" className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          {action === "Sign Up" && (
            <div className="input">
              <img src={password_icon} alt="Password Icon" className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          )}
      </div>

          {/* Submit Button */}
          <button 
            className="action-button" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              action
            )}
          </button>

          {/* Toggle between Login/Sign Up */}
          <div className="auth-links">
            {action === "Login" ? (
              <>
                <div className="forgot-password">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <span 
                  className="toggle-text" 
                  onClick={() => setAction("Sign Up")}
                >
                  Create an account
                </span>
              </>
            ) : (
              <span 
                className="toggle-text" 
                onClick={() => setAction("Login")}
              >
                Already have an account? Login
              </span>
            )}
          </div>
                      

          {/* Divider
          <div className="divider">
            <span>OR</span>
          </div> */}

          
          
       

        {/* Facebook Login Button */}
      {/* Facebook Login Button */}
         </div>

        {/* Right Section: Image */}
        <div className="image-container">
          <img src="/images/QCACAC-LOGO.png" alt="QCACAC Logo" />
        </div>
      </div>
    </div>
  );
};
