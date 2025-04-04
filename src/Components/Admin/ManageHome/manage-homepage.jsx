import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./manage-homepage.css";
import { FaPaw } from 'react-icons/fa';
import Sidebar from '../SideBar/sidebar.jsx';
import Logo from "../../Assets/images/QCACAC-LOGO.png";
import HeroImage1 from "../../Assets/images/hero-image.jpg";
import Event1 from "../../Assets/images/event1.jpg";
import Event2 from "../../Assets/images/event2.jpg";
import Event3 from "../../Assets/images/event3.jpg";
import aboutImage from "../../Assets/images/qcacac-building.jpeg";
import petImage from "../../Assets/images/dog-cat.png";


  

const eventsData = [
  {
    date: "23 MAR",
    title: "Studio Day For Dogs",
    time: "2024-03-23 @ 09:00 - 2024-03-24 @ 20:00",
    location: "Dublin",
    tag: "Family Fun Day",
    img: Event1,
  },
  {
    date: "29 APR",
    title: "Pups in the Park",
    time: "2023-04-29 @ 09:30 - 2023-04-30 @ 17:30",
    location: "Cork",
    tag: "Family Fun Day",
    img: Event2,
  },
  {
    date: "22 APR",
    title: "Pups in the Park",
    time: "2023-04-22 @ 09:30 - 2023-04-23 @ 17:30",
    location: "Dublin",
    tag: "Family Fun Day",
    img: Event3,
  },
];

const photos = [
  { 
    id: 1, 
    title: "Camp Pag-ibig 2025", 
    desc: "Bringing pawsitive vibes and joy to CAMP PAG-IBIG 2025! 🐾✨",
    overlay: true,
    images: [
      "/images/camp1.jpg",
      "/images/camp2.jpg",
      "/images/camp3.jpg",
      "/images/camp4.jpg",
      "/images/camp5.jpg",
      "/images/camp6.jpg",
      "/images/camp7.jpg",
      "/images/camp8.jpg",
      "/images/camp9.jpg",
      "/images/camp10.jpg"
    ]
  },
  { id: 2, 
    title: "Mental Health Project 2024", 
    desc: "We are proud to be part of the Mental Health Project 2024, in partnership with the UP Engineering Student Council! 🐾💙", 
    overlay: true,
    images: [
      "/images/mentalhealth1.jpg",
      "/images/mentalhealth2.jpg",
      "/images/mentalhealth3.jpg",
      "/images/mentalhealth4.jpg",
      "/images/mentalhealth5.jpg",
      "/images/mentalhealth6.jpg",
      "/images/mentalhealth7.jpg",
      "/images/mentalhealth8.jpg",
      "/images/mentalhealth9.jpg",
      "/images/mentalhealth10.jpg",
    ]
  },
  { id: 3, 
    title: "CAR-FREE, CAREFREE",
    desc: "Give a furry friend a forever home and spread the love! 🤍🏡 ", 
    overlay: true,
    images: [
      "/images/carefree1.jpg",
      "/images/carefree2.jpg",
      "/images/carefree3.jpg",
      "/images/carefree4.jpg",
      "/images/carefree5.jpg",
      "/images/carefree6.jpg",
      "/images/carefree7.jpg",
      "/images/carefree8.jpg",
      "/images/carefree9.jpg",
      "/images/carefree10.jpg",
    ]
  },
  { id: 4, 
  title: "WORLD SPAY DAY",
  desc: "Bilang bahagi ng pagdiriwang ng World Spay Day, nagsagawa ng libreng kapon at iba pang animal care services ang QC Veterinary Department katuwang ang tanggapan ni Coun. Joseph Visaya sa SM Novaliches", 
  overlay: true,
  images: [
    "/images/spay1.jpg",
    "/images/spay2.jpg",
    "/images/spay3.jpg",
    "/images/spay4.jpg",
    "/images/spay5.jpg",
    "/images/spay6.jpg",
    "/images/spay7.jpg",
    "/images/spay8.jpg",
    "/images/spay9.jpg",
    "/images/spay10.jpg",
  ]
},
]

const videos = [
  { id: 1, title: 'How to Groom Your Dog at Home', url: 'https://www.youtube.com/embed/VIDEO_ID_1' },
  { id: 2, title: 'Essential Cat Care Tips', url: 'https://www.youtube.com/embed/VIDEO_ID_2' },
  { id: 3, title: 'Training Your Puppy: Beginner Tips', url: 'https://youtu.be/egpmutxd1hw?si=cZuI-ahdviJcUsB8' },
];


const heroImages = [HeroImage1];

const heroTexts = [
  "a New Friendship",
  "Saving a Life",
  "Pure Joy",
  "an Act of Love",
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const sectionsRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    let charIndex = 0;
    const steadyText = "Pet Adoption is ";
    setTypedText(steadyText); // Set the steady text only once
  
    const interval = setInterval(() => {
      if (charIndex < heroTexts[textIndex].length) {
        setTypedText((prev) => prev + heroTexts[textIndex][charIndex]);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  
    return () => clearInterval(interval);
  }, [textIndex]);
  
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 5000);
  
    return () => clearInterval(heroInterval);
  }, []);

  
   return (
    <div className="d-flex">
    <Sidebar />
    <div className="content flex-grow-1">
      <header 
        className="hero-section" 
        style={{
          backgroundImage: `url(${heroImages[currentHeroIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1.5s ease-in-out",
        }}
      >
        <div className="home-hero-overlay"></div>
        <div className="home-hero-overlay-container">
          <div className="home-hero-overlay-content">
            <h3>Welcome to</h3>
            <h1>Quezon City Animal Care & Adoption Center</h1>
            <p>{typedText}</p>
            <p>
              Layunin ng Animal Care and Adoption Center na bigyan ng bagong buhay ang 
              mga aso at pusang nahuli mula sa mga kalsada ng Quezon City.
            </p>
            <a href="#contact-us" className="home-hero-overlay-contactus-btn">
              Contact Us
            </a>
            </div>
          </div>
      </header>
      </div>

      <section id="about-us" className="about-us container my-5">
      <div className="row align-items-center">
        <div id="about-text" className="col-md-6">
          <h6 id="about-heading" className="about-heading">ABOUT US</h6>
          <h2 id="about-title" className="about-title">QCACAC</h2>
          <p id="about-description">
          The Quezon City Government through the city’s Animal Welfare and Rehabilitation Program has established an adoption center for impounded and neglected animals.
          The 450-square meter pet adoption center in Barangay Payatas can provide temporary homes to up to 60 animals until they find a new family.  The facility also has a surgery room for dogs and cats that need to be neutered and spayed, and for other animals that need immediate medical attention.
          </p>
          <p id="about-highlight-description" className="about-highlight-description">
             There are two cages to separate sick animals from the healthy ones. This to prevent them from infecting the other healthy animals.  The animals will also be rehabilitated before being offered for adoption.
          </p>
        </div>
        <div id="about-image-container" className="col-md-6">
          <img id="about-image" src={aboutImage} alt="About Us" className="img-fluid rounded" />
        </div>
      </div>
    </section>

    <section id="vision-mission" className="vision-mission-section py-5 text-white">
            <div className="container text-center">
                <h3 className="vision-mission-title">VISION AND MISSION</h3>
                <div className="row d-flex justify-content-center align-items-stretch">
                    <div className="col-md-5 vision-box mx-2">
                        <FaPaw className="paw-icon" />
                        <h4>VISION</h4>
                        <p>A world where every animal has a loving home and all animals live free from neglect, cruelty, and abuse.</p>
                    </div>
                    <div className="col-md-5 mission-box mx-2">
                        <FaPaw className="paw-icon" />
                        <h4>MISSION</h4>
                        <p>To provide compassionate care and find loving homes for abandoned and stray animals, ensuring they live a life of dignity and love.</p>
                    </div>
                </div>
            </div>
            {/* Lightbox Modal */}

            {selectedImage && (
              <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content bg-transparent border-0">
                    <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setSelectedImage(null)}></button>
                    <img src={selectedImage} alt="Selected" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            )}
          </section>
            

         <section className="events-section py-5">
  <div className="container">
    {/* Events Section Title */}
    <div className="text-center mb-4">
      <h2 className="events-title">Upcoming Events</h2>
      <p className="events-subtitle">Stay updated with our latest activities</p>
    </div>

    <div className="d-flex justify-content-center gap-4 flex-wrap">
      {eventsData.map((event, index) => (
        <div className="event-card" key={index}>
          <div className="card">
            <div className="position-relative">
              <span className="event-date">{event.date}</span>
              <img src={event.img} className="card-img-top" alt={event.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text">
                <i className="bi bi-calendar-event me-1"></i>{event.time}
              </p>
              <p className="card-text">
                <i className="bi bi-geo-alt me-1"></i>{event.location}
              </p>
              <span className="badge event-tag">{event.tag}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="photo-gallery">
  <div className="container">
    <h4>PHOTO GALLERY</h4>
    <div className="row g-3">
      {photos.map((photo) => (
        <div key={photo.id} className="col-md-4">
          <div
            className="gallery-item"
            style={{ backgroundImage: `url(${photo.src || photo.images[0]})` }}
            onClick={() => {
              setSelectedImageIndex(0);
              setSelectedGallery(photo.images || [photo.src]); // Show only selected gallery
            }}
          >
            {photo.overlay && (
              <div className="overlay">
                <h2>{photo.title}</h2>
                <p>{photo.desc}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Lightbox Modal */}
  {selectedGallery && (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-transparent border-0">
          {/* Close Button */}
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            onClick={() => setSelectedGallery(null)}
          ></button>

          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner position-relative">
              {selectedGallery.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === selectedImageIndex ? "active" : ""}`}
                >
                  {/* Close Button Inside Image */}
                  <button
                    className="btn-close btn-close-white position-absolute"
                    style={{
                      top: "10px",
                      right: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "10px",
                      borderRadius: "50%",
                      zIndex: "10",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGallery(null);
                    }}
                  ></button>

                  <img src={src} alt={`Image ${index + 1}`} className="d-block w-100 rounded" />
                </div>
              ))}
            </div>

            {/* Show Controls Only If More Than 1 Image */}
            {selectedGallery.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex((prevIndex) =>
                      prevIndex === 0 ? selectedGallery.length - 1 : prevIndex - 1
                    )
                  }
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={() =>
                    setSelectedImageIndex((prevIndex) =>
                      prevIndex === selectedGallery.length - 1 ? 0 : prevIndex + 1
                    )
                  }
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )}
</section>

<div className="container-fluid my-5" id="pet-care-videos">
  <section className="container-fluid">
    <h2 className="text-center mb-4 fw-bold text-dark">PET CARE</h2>
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {videos.map((video, index) => (
        <div className="video-card" key={video.id || `video-${index}`}>
          <div className="video-thumbnail">
            <iframe
              src={video.url}
              title={video.title}
              className="video-frame"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-title">{video.title}</p>
        </div>
      ))}
    </div>
  </section>
</div>

<section id="contact-us" className="container text-start py-4">
      <p id="contact-title">Get in Touch</p>
      <h2 id="contact-heading">CONTACT US</h2>
      
      <div id="contact-info" className="row mt-3">
        <div id="contact-location" className="col-md-3">
          <h5 className="fw-bold">Location</h5>
          <p>Clemente St., Lupang Pangako, Payatas, Quezon City,<br /> Philippinest</p>
        </div>
        <div id="contact-hours" className="col-md-3">
          <h5 className="fw-bold">Our Hours</h5>
          <p><strong>MON-FRI</strong> 09:00 - 19:00<br /><strong>SAT-SUN</strong> Closed</p>
        </div>
        <div id="contact-details" className="col-md-3">
          <h5 className="fw-bold">Contact Info</h5>
          <p><strong>Phone:</strong> 0965 804 7447<br /><strong>Email:</strong> qc.animalcareandadoption@gmail.com</p>
        </div>
        <div id="contact-social" className="col-md-3">
          <h5 className="fw-bold">Follow Us</h5>
          <div className="d-flex gap-2">
            <a id="facebook-link" href="#" className="btn btn-danger"><i className="bi bi-facebook"></i></a>
            <a id="twitter-link" href="#" className="btn btn-danger"><i className="bi bi-x"></i></a>
            <a id="instagram-link" href="#" className="btn btn-danger"><i className="bi bi-instagram"></i></a>
            <a id="youtube-link" href="#" className="btn btn-danger"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-start align-items-center mt-4">
        <div id="contact-form-container">
          <h4 id="form-title" className="fw-bold">Send us a Message</h4>
          <form id="contact-form">
            <div className="mb-2">
              <label id="name-label" className="form-label">Name <span className="text-danger">*</span></label>
              <input id="name-input" type="text" className="form-control" required />
            </div>
            <div className="mb-2">
              <label id="email-label" className="form-label">Email <span className="text-danger">*</span></label>
              <input id="email-input" type="email" className="form-control" required />
            </div>
            <div className="mb-2">
              <label id="message-label" className="form-label">Message <span className="text-danger">*</span></label>
              <textarea id="message-textarea" className="form-control" rows="4" required></textarea>
            </div>
            <button id="submit-button" type="submit" className="btn">Send Message</button>
          </form>
        </div>
        <img id="contact-image" src={petImage} alt="Pets" className="img-fluid" />
      </div>
    </section>

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

