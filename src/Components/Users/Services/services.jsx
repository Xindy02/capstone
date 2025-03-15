import React from 'react'
import { Link } from "react-router-dom";
import "../../Assets/styles/main.css"; 

export default function services() {
  return (
    <div> {/* Navigation Bar */}
    <nav id="navbar" className="navbar">
      <div className="navbar-header">
        <img
          width="90px"
          height="85px"
          src="/images/QCACAC-LOGO.png"
          alt="LOGO"
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
  </div>
  )
}
