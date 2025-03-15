import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-signup.css";

import person_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (action === "Login") {
      console.log("Logging in with:", formData);
      alert("Login functionality coming soon!");
    } else {
      console.log("Signing up with:", formData);
      alert("Sign-up functionality coming soon!");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
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

          <div className="inputs">
            {action === "Sign Up" && (
              <div className="input">
                <img src={person_icon} alt="Person Icon"className="icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        <div className="input">
          {action === "Sign Up" && (
          <>
          <img src={password_icon} alt="Password Icon" className="icon" />
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </>
        )}
        </div>
      </div>

          {/* Submit Button */}
            <button className="action-button" onClick={handleSubmit}>
              {action}
            </button>

            <div className="auth-links">
              {action === "Login" && (
                <div className="forgot-password">
                  <a href="#" onClick={() => alert("Forgot Password clicked!")}>Lost Password?</a>
                </div>
              )}

              <span className="toggle-text" onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}>
                {action === "Login" ? "Create an account" : "Already have an account? Login"}
              </span>
            </div>
                      

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          
          {/* Google Login Button */}
          <div id="g_id_continue-with-google"></div> 
          <button className="gsi-material-button" onClick={() => window.google?.accounts.id.prompt()}>
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: "block" }}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span>Continue with Google</span>
            </div>
          </button>
       

        {/* Facebook Login Button */}
      {/* Facebook Login Button */}
<div id="f_id_continue-with-facebook"></div> 
<button className="fsi-material-button" onClick={() => {/* Add Facebook login logic here */}}>
  <div className="fsi-material-button-state"></div>
  <div className="fsi-material-button-content-wrapper">
    <div className="fsi-material-button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: "block" }}>
        <path fill="#1877F2" d="M24 0c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm0 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"></path>
        <path fill="#4C4C4C" d="M30.043 24.625l.713-4.75h-4.3v-3.13c0-1.67.81-3.58 3.23-3.58h2.45v-4.7c-.88-.12-3.9-.37-7.35-.37-7.72 0-13.1 4.5-13.1 12.71v4.56h-4.4v4.75h4.4v12.5h4.75v-12.5h4.44z"></path>
      </svg>
    </div>
    <span>Continue with Facebook</span>
  </div>
        </button>
         </div>

        {/* Right Section: Image */}
        <div className="image-container">
          <img src="/images/QCACAC-LOGO.png" alt="QCACAC Logo" />
        </div>
      </div>
    </div>
  );
};
