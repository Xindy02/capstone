import React from 'react';
import { Link } from "react-router-dom";
import "../../Assets/styles/main.css"; 
import "./services.css";
import Logo from '../../Assets/images/QCACAC-LOGO.png';

const qcacacServices = [
  { title: "FREE ANTI-RABIES", image: "your-image-url-1.jpg" },
  { title: "SPAY & NEUTER", image: "your-image-url-2.jpg" },
  { title: "Microchipping", image: "your-image-url-3.jpg" }
];

const animalWelfareServices = [
  { title: "ANIMAL RESCUE POUND TRUCKS", image: "your-image-url-4.jpg" },
  { title: "Veterinary Clinic Teleconsult", image: "your-image-url-5.jpg" },
  { title: "STRAY ANIMALS AS SERVICE DOGS", image: "your-image-url-6.jpg" }
];

export default function Services() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="navbar">
        <div className="navbar-header">
          <img className="qcacac-logo" width="90px" height="85px" src={Logo} alt="LOGO" />
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

      {/* Hero Section */}
      <header id="services-hero-container" className="position-relative text-center text-white">
        <div id="services-hero-bg" className="services-hero-bg"></div> {/* Background Image */}
        <div id="services-hero-overlay" className="services-hero-overlay"></div> {/* Dark Overlay */}
        <h1 id="services-hero-title" className="services-hero-title">SERVICES</h1>
        <div id="services-hero-cutout" className="services-hero-cutout"></div> {/* Triangle Cutout */}
      </header>

     {/* Services Section */}
<div className="container my-5">
  {/* Quezon City Animal Care and Adoption Center Services */}
  <h2 className="text-center mb-4">Quezon City Animal Care and Adoption Center Services</h2>
  <div className="d-flex justify-content-center gap-3">
    {qcacacServices.map((service, index) => (
      <div className="card service-card" key={index} style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px", /* Set a fixed width to make them equal */
          height: "200px" /* Set a fixed height to make them uniform */
        }}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h3 className="service-title">{service.title}</h3>
        </div>
      </div>
    ))}
  </div>

  {/* Animal Welfare */}
  <h2 className="text-center mt-5 mb-4">Animal Welfare</h2>
  <div className="d-flex justify-content-center gap-3">
    {animalWelfareServices.map((service, index) => (
      <div className="card service-card" key={index} style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px", /* Set a fixed width to make them equal */
          height: "200px" /* Set a fixed height to make them uniform */
        }}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h3 className="service-title">{service.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="footer-logo-container text-center text-md-start mb-4 mb-md-0">
            <img src={Logo} alt="Animal Care & Adoption Center" className="footer-logo" />
          </div>

          <div className="footer-section text-center">
            <h5>Visit Us</h5>
            <p className="footer-text text-start">
              Clemente St., Lupang Pangako, Payatas Quezon City, <br />Philippines
            </p>
            <p className="footer-text text-start">Tel: 0965 804 7447</p>
          </div>

          <div className="footer-section text-center">
            <h5>Opening Hours</h5>
            <p className="footer-text text-start">Monday – Friday: 09:00 am – 09:00 pm</p>
            <p className="footer-text text-start">Saturday – Sunday: Closed</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <hr className="footer-divider" />
          <p>&copy; 2025 Animal Care & Adoption Center. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
            <a href="/contact" className="text-white ms-2">Contact Us</a>
          </p>
        </div>
      </footer>
    </div>
  );
}