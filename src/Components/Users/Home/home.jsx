import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/styles/main.css";
import "./home.css";
import HeroImage from '../../Assets/images/hero-image.jpg'; 
import BGImage from '../../Assets/images/qcacac-bg.jpg'; 

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionsRef = useRef([]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div style={{ backgroundImage: `url(${BGImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

      <header className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="overlay"></div>
        <div className="container">
          <h1>Welcome to the QC Animal Care and Adoption Center</h1>
          <p>Find your perfect companion and give them a forever home!</p>
          <a href="/adopt" className="btn btn-primary">Adopt a Pet</a>
          <a href="/donate" className="btn btn-outline-secondary">Donate Now</a>
        </div>
      </header>

      <section className={`mission-vision-section scroll-transition ${isVisible ? 'visible' : ''}`} ref={(el) => sectionsRef.current.push(el)}>
        <div className="paw-container">
          <div className="paw">
            <div className="paw-main">
              <h3>Our Mission</h3>
              <p>To provide compassionate care and find loving homes for abandoned and stray animals, ensuring they live a life of dignity and love.</p>
            </div>
          </div>
          <div className="paw">
            <div className="paw-main">
              <h3>Our Vision</h3>
              <p>A world where every animal has a loving home and all animals live free from neglect, cruelty, and abuse.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-section fade-in-scale" ref={(el) => sectionsRef.current.push(el)}>
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
              <img src={image} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="prev-btn" onClick={showPrev}>&#10094;</button>
            <div className="lightbox-content">
              <img src={images[currentIndex]} alt="lightbox" />
              <button className="close-btn" onClick={closeLightbox}>&#10005;</button>
            </div>
            <button className="next-btn" onClick={showNext}>&#10095;</button>
          </div>
        )}
      </div>

      <section className="events-announcements" ref={(el) => sectionsRef.current.push(el)}>
        <h2>Pet Events & Announcements</h2>
        <div className="events-container">
          <div className="event">
            <h3>Adoption Fair</h3>
            <p>Join us this weekend for a special adoption event at QC Park!</p>
          </div>
          <div className="event">
            <h3>Vaccination Drive</h3>
            <p>Free vaccinations available for stray and adopted pets. Visit our center on March 10.</p>
          </div>
          <div className="event">
            <h3>Volunteer Orientation</h3>
            <p>Learn how you can help! Attend our volunteer orientation on April 5.</p>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2025 Animal Care & Adoption Center. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a> | <a href="/contact" className="text-white">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}
