import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaw } from 'react-icons/fa';
import "../../Assets/styles/main.css";
import "./pet-gallery.css";
import Logo from '../../Assets/images/QCACAC-LOGO.png';
import princess from '../../Assets/images/dog-princess.jpg';
import master from '../../Assets/images/dog-master.jpg';
import pipo from '../../Assets/images/cat-pipo.jpg';
import daisy from '../../Assets/images/cat-daisy.jpg';
import luna from '../../Assets/images/cat-luna.jpg';
import max from '../../Assets/images/dog-max.jpg';
import charlie from '../../Assets/images/dog-charlie.jpg';
import bella from '../../Assets/images/dog-bella.jpg';


export default function PetGallery() {
  // ✅ useState should be inside the component
  const [pets] = useState([
    { id: 1, name: "Princess", type: "dog", image: princess, description: "A sweet and friendly pup." },
    { id: 2, name: "Master", type: "dog", image: master, description: "A playful and energetic dog." },
    { id: 3, name: "Pipo", type: "cat", image: pipo, description: "A curious and loving cat." },
    { id: 4, name: "Bella", type: "dog", image: bella, description: "A gentle and affectionate dog." },
    { id: 5, name: "Charlie", type: "dog", image: charlie, description: "A smart and obedient companion." },
    { id: 6, name: "Daisy", type: "cat", image: daisy, description: "A fluffy cat with a playful heart." },
    { id: 7, name: "Max", type: "dog", image: max, description: "Loyal, protective, and loving." },
    { id: 8, name: "Luna", type: "cat", image: luna, description: "A beautiful cat who loves cuddles." },
  ]);

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="navbar">
        <div className="navbar-header">
        <img className="qcacac-logo" width="90px" height="85px" src="/images/QCACAC-LOGO.png" alt="LOGO" />
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
       <header id="hero-container" className="position-relative text-center text-white">
        <div id="hero-bg" className="hero-bg"></div> {/* Background Image */}
        <div id="hero-overlay" className="hero-overlay"></div> {/* Dark Overlay */}
        <h1 id="hero-title" className="hero-title">ADOPT A PET</h1>
        <div id="hero-cutout" className="hero-cutout"></div> {/* Triangle Cutout */}
      </header>

      {/* Pet Gallery Section */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold">Find a New Friend</h2>
          <p className="text-muted">Browse through our selection of adorable pets waiting for a loving home.</p>
        </div>

        {/* Filter Buttons (Future Functionality) */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-outline-primary">Dogs</button>
          <button className="btn btn-outline-secondary">Cats</button>
        </div>

        {/* Pet Cards Grid */}
        <div className="row">
          {pets.map((pet) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={pet.id}>
              <div className="card shadow text-center pet-card">
                {/* Image wrapper added */}
                <div className="pet-card-img-wrapper">
                  <img src={pet.image} alt={pet.name} className="pet-card-img-top" />
                </div>
                <div className="pet-card-body">
                <div className="paw-icon"><FaPaw /></div>
                  <h5 className="pet-card-title fw-bold">{pet.name}</h5>
                  <p className="pet-card-text text-muted">{pet.description}</p>
                  <Link to={`/pet-details/${pet.id}`} className="adopt-btn">Meet {pet.name}</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer bg-dark text-white py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Logo Section */}
        <div className="footer-logo-container text-center text-md-start mb-4 mb-md-0">
  <img src={Logo} alt="Animal Care & Adoption Center" className="footer-logo" />
        </div>

        {/* Visit Us Section */}
        <div className="footer-section text-center">
          <h5>Visit Us</h5>
          <p className="footer-text text-start">
    Clemente St., Lupang Pangako, Payatas Quezon City, <br />Philippines
  </p>
  <p className="footer-text text-start">Tel: 0965 804 7447</p>
        </div>

        {/* Opening Hours Section */}
        <div className="footer-section text-center">
          <h5>Opening Hours</h5>
          <p className="footer-text text-start">Monday – Friday: 09:00 am – 09:00 pm</p>
          <p className="footer-text text-start">Saturday – Sunday: Closed</p>
        </div>
      </div>

      {/* Copyright & Links */}
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


     