import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { Carousel, Modal, Button, Form } from "react-bootstrap";
import princess1 from "../../Assets/images/dog-princess.jpg";
import princess2 from "../../Assets/images/dog-princess2.jpg";
import princess3 from "../../Assets/images/dog-princess3.jpg";
import master1 from "../../Assets/images/dog-master.jpg";
import master2 from "../../Assets/images/dog-master2.jpg";
import master3 from "../../Assets/images/dog-master3.jpg";
import princessVideo from "../../Assets/videos/princess.mp4";
import masterVideo from "../../Assets/videos/master1.mp4";
import "./pet-details.css";

const pets = [
  {
    id: 1,
    name: "Princess",
    type: "dog",
    images: [princess1, princess2, princess3],
    video: princessVideo,
    description: "A sweet and friendly pup.",
    found: "Barangay Batasan",
    color: "White and Brown",
    breed: "Aspin",
    age: "2 years",
    story:
      "Princess was found wandering the streets of Barangay Batasan, looking for food and shelter. She was rescued and brought to the center, where she has been cared for ever since.",
  },
  {
    id: 2,
    name: "Master",
    type: "dog",
    images: [master1, master2, master3],
    video: masterVideo,
    description: "A playful and energetic dog.",
    found: "Barangay Commonwealth",
    color: "Black and White",
    breed: "Mixed Breed",
    age: "3 years",
    story:
      "Master was abandoned near a market in Barangay Commonwealth. He loves playing and is looking for an active owner.",
  },
];

export default function PetDetails() {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === parseInt(id));

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const [showAdoptModal, setShowAdoptModal] = useState(false);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setZoom(1);
    setShowImageModal(true);
  };

  if (!pet) return <h2 className="text-center mt-5">Pet not found</h2>;

  return (
    <div className="container pet-details-container mt-5">
      <div className="card pet-details-card">
        <Carousel className="pet-carousel">
          {pet.images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img}
                alt={`${pet.name} ${index + 1}`}
                className="pet-details-img"
                onClick={() => handleImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="card-body">
          <h2 className="fw-bold text-center">
            <FaPaw /> {pet.name}
          </h2>
          <p className="text-muted text-center">{pet.description}</p>

          <table className="table table-bordered mt-3">
          <tbody>
            <tr><th>Found In</th><td>{pet.found}</td></tr>
            <tr><th>Color</th><td>{pet.color}</td></tr>
            <tr><th>Breed</th><td>{pet.breed}</td></tr>
            <tr><th>Age</th><td>{pet.age}</td></tr>
          </tbody>
        </table>

        {/* Pet Story section below the table */}
        {pet.story && (
          <div className="mt-3">
            <tr><p>{pet.story}</p></tr>
          </div>
        )}

          {pet.video && (
            <div className="video-container mt-4">
              <video controls className="pet-video">
                <source src={pet.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="button-container">
            {/* Back Button with Arrow Icon */}
            <Link to="/pet-gallery" className="back-adoption-form-btn">
              Back
            </Link>

            {/* Adopt Me Button */}
            <Button className="adoption-form-btn" onClick={() => setShowAdoptModal(true)}>
              Adopt Me
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)} centered>
        <Modal.Body className="text-center">
          <div className="zoom-container">
            <img
              src={selectedImage}
              alt="Pet"
              className="img-fluid zoom-image"
              style={{ transform: `scale(${zoom})`, transition: "0.3s ease" }}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="secondary"
              onClick={() => setZoom(zoom === 1 ? 1.5 : 1)}
            >
              {zoom === 1 ? "Zoom In" : "Reset Zoom"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Adoption Form Modal */}
        <Modal
          show={showAdoptModal}
          onHide={() => setShowAdoptModal(false)}
          centered
          dialogClassName="pet-adoption-form-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Pet Adoption Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* First Name */}
              <Form.Group className="mb-3">
                <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" required />
              </Form.Group>

              {/* Last Name */}
              <Form.Group className="mb-3">
                <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" required />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              {/* Phone Number */}
              <Form.Group className="mb-3">
                <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" required />
              </Form.Group>

              {/* Home Number and Street (Updated Address Section) */}
              <Form.Group className="mb-3">
                <h5>ADDRESS</h5>
                <Form.Label>Home/Street Address <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your home/street address" required />
              </Form.Group>

              {/* City and Region (Row layout) */}
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>City <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" required />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Region <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your region" required />
                  </Form.Group>
                </div>
              </div>

              {/* Postal Code and Country (Row layout) */}
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Postal/Zip Code <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your postal/zip code" required />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your country" required />
                  </Form.Group>
                </div>
              </div>

              {/* Type of Pet */}
              <Form.Group className="mb-3">
                <Form.Label>Type of Pet <span className="text-danger">*</span></Form.Label>
                <div>
                  <Form.Check inline label="Dog" name="pettype" type="radio" id="dog" />
                  <Form.Check inline label="Puppy" name="pettype" type="radio" id="puppy" />
                  <Form.Check inline label="Cat" name="pettype" type="radio" id="cat" />
                  <Form.Check inline label="Kitten" name="pettype" type="radio" id="kiiten" />
                  <Form.Check inline label="Others" name="pettype" type="radio" id="others" />
                </div>
              </Form.Group>

              {/* Upload QCitizen ID or any valid ID */}
              <Form.Group className="mb-3">
                <Form.Label>Upload QCitizen ID or any valid ID <span className="text-danger">*</span></Form.Label>
                <Form.Control type="file" required />
              </Form.Group>

              {/* Buttons */}
              <div className="text-end">
                <Button className="adoption-form-cancel" onClick={() => setShowAdoptModal(false)}>
                  Cancel
                </Button>
                <Button className="adoption-form-submit" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
    </div>
  );
}
