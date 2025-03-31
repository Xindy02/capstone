import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaw } from 'react-icons/fa';
import "../../Assets/styles/main.css";
import "./pet-gallery.css";
import princess from '../../Assets/images/dog-princess.jpg';
import master from '../../Assets/images/dog-master.jpg';

export default function PetGallery() {
  // ✅ useState should be inside the component
  const [pets] = useState([
    { id: 1, name: "Princess", type: "dog", image: princess, description: "A sweet and friendly pup." },
    { id: 2, name: "Master", type: "dog", image: master, description: "A playful and energetic dog." },
    { id: 3, name: "Pipo", type: "cat", image: "/images/pipo.jpg", description: "A curious and loving cat." },
    { id: 4, name: "Bella", type: "dog", image: "/images/bella.jpg", description: "A gentle and affectionate dog." },
    { id: 5, name: "Charlie", type: "dog", image: "/images/charlie.jpg", description: "A smart and obedient companion." },
    { id: 6, name: "Daisy", type: "cat", image: "/images/daisy.jpg", description: "A fluffy cat with a playful heart." },
    { id: 7, name: "Max", type: "dog", image: "/images/max.jpg", description: "Loyal, protective, and loving." },
    { id: 8, name: "Luna", type: "cat", image: "/images/luna.jpg", description: "A beautiful cat who loves cuddles." },
  ]);

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="navbar">
        <div className="navbar-header">
          <img width="90px" height="85px" src="/images/QCACAC-LOGO.png" alt="LOGO" />
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
        <h1 id="hero-title" className="hero-title">Adopt a Pet</h1>
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
                  <Link to={`/pet-details/${pet.id}`} className="adopt-btn">
                    Adopt Me
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


     