import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../SideBar/sidebar.jsx';
import "./manage-pet-gallery.css";
import { FaPaw } from 'react-icons/fa';
import princess from '../../Assets/images/dog-princess.jpg';
import master from '../../Assets/images/dog-master.jpg';

export default function ManagePetGallery() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    petName: '',
    petBreed: '',
    petType: '',
    petGender: '',
    petAge: '',
    petImage: null,
  });

  const [filterType, setFilterType] = useState('all');

  const pets = [
    { id: 1, name: "Princess", type: "dog", image: princess, description: "A sweet and friendly pup." },
    { id: 2, name: "Master", type: "dog", image: master, description: "A playful and energetic dog." },
    { id: 3, name: "Pipo", type: "cat", image: "/images/pipo.jpg", description: "A curious and loving cat." },
    { id: 4, name: "Bella", type: "dog", image: "/images/bella.jpg", description: "A gentle and affectionate dog." },
    { id: 5, name: "Charlie", type: "dog", image: "/images/charlie.jpg", description: "A smart and obedient companion." },
    { id: 6, name: "Daisy", type: "cat", image: "/images/daisy.jpg", description: "A fluffy cat with a playful heart." },
    { id: 7, name: "Max", type: "dog", image: "/images/max.jpg", description: "Loyal, protective, and loving." },
    { id: 8, name: "Luna", type: "cat", image: "/images/luna.jpg", description: "A beautiful cat who loves cuddles." },
  ];

  const filteredPets = filterType === 'all' ? pets : pets.filter(pet => pet.type === filterType);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'petImage') {
      setFormData({ ...formData, petImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddPet = () => {
    alert('Pet added! (This is a simulation)');
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="main-content flex-grow-1" style={{ paddingLeft: '250px' }}>
        <header id="mpg-hero-container" className="position-relative text-center text-white">
          <div id="mpg-hero-bg" className="mpg-hero-bg"></div>
          <div id="mpg-hero-overlay" className="mpg-hero-overlay"></div>
          <h1 id="mpg-hero-title" className="mpg-hero-title">Adopt a Pet</h1>
          <div id="mpg-hero-cutout" className="mpg-hero-cutout"></div>
        </header>

        <div className="container mt-5">
          <div className="text-center mb-4">
            <h2 className="display-6 fw-bold">Find a New Friend</h2>
            <p className="text-muted">Browse through our selection of adorable pets waiting for a loving home.</p>
          </div>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <button
              className={`btn ${filterType === 'dog' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilterType('dog')}
            >
              Dogs
            </button>
            <button
              className={`btn ${filterType === 'cat' ? 'btn-secondary' : 'btn-outline-secondary'}`}
              onClick={() => setFilterType('cat')}
            >
              Cats
            </button>
            <button
              className={`btn ${filterType === 'all' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setFilterType('all')}
            >
              Show All
            </button>
          </div>

          <Row className="g-4">
            {filteredPets.map((pet) => (
              <Col key={pet.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow text-center pet-card">
                  <div className="pet-card-img-wrapper">
                    <Card.Img variant="top" src={pet.image} alt={pet.name} className="pet-card-img-top" />
                  </div>
                  <Card.Body className="pet-card-body">
                    <div className="paw-icon"><FaPaw /></div>
                    <Card.Title className="fw-bold">{pet.name}</Card.Title>
                    <Card.Text className="text-muted">{pet.description}</Card.Text>
                    <Link to={`/manage-pet-adoption-details/${pet.id}`} className="adopt-btn">
                      Adopt Me
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Button
            variant="primary"
            className="position-fixed"
            style={{ bottom: '20px', right: '20px', borderRadius: '50%' }}
            onClick={() => setShowModal(true)}
          >
            +
          </Button>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Pet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Pet Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleFormChange}
                    placeholder="Enter pet's name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Breed</Form.Label>
                  <Form.Control
                    type="text"
                    name="petBreed"
                    value={formData.petBreed}
                    onChange={handleFormChange}
                    placeholder="Enter pet's breed"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    name="petType"
                    value={formData.petType}
                    onChange={handleFormChange}
                  >
                    <option value="">Select type</option>
                    <option value="Dog">Dog</option>
                    <option value="Puppy">Puppy</option>
                    <option value="Cat">Cat</option>
                    <option value="Kitten">Kitten</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    name="petGender"
                    value={formData.petGender}
                    onChange={handleFormChange}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="petAge"
                    value={formData.petAge}
                    onChange={handleFormChange}
                    placeholder="Enter pet's age"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Pet Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="petImage"
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddPet}>
                Add Pet
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
