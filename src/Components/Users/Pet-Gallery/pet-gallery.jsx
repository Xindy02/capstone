import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/styles/main.css";
import "./pet-gallery.css";

export default function PetGallery() {
  return (
    <div>
      {/* Navigation Bar */}
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
      

      {/* Pet Gallery Section */}
      <div className="petgallery-container mt-4">
        {/* Page Title */}
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="display-6">Explore Our Pets</h2>
          </div>
        </div>

        {/* Buttons to Filter by Type */}
        <div className="row mb-4 justify-content-center">
          <div className="col-auto">
            <a href="#dogs-section" className="btn-dog">
              Dogs
            </a>
            <a href="/cats" className="btn-cat">
              Cats
            </a>
          </div>
        </div>

        {/* Pet Cards Grid */}
        <div className="row">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4"
              key={`pet-image-${index}`}
            >
              <div className="card">
                <img
                  src={`/images/pet${index + 1}.jpg`}
                  alt={`Pet ${index + 1}`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Pet {index + 1}</h5>
                  <p className="card-text">
                    A short description about Pet {index + 1}.
                  </p>
                  <a
                    href={`/pet-details/${index + 1}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
