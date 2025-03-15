import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../SideBar/sidebar.jsx';
import "./manage-pet-gallery.css";

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

  // Sample data for testing
  const pets = [
    { id: 1, PetName: "Buddy", PetBreed: "Golden Retriever", PetType: "Dog", PetGender: "Male", PetAge: "3", PetImage: "buddy.jpg" },
    { id: 2, PetName: "Mittens", PetBreed: "Persian Cat", PetType: "Cat", PetGender: "Female", PetAge: "2", PetImage: "mittens.jpg" },
    { id: 3, PetName: "Charlie", PetBreed: "Beagle", PetType: "Dog", PetGender: "Male", PetAge: "4", PetImage: null },
    { id: 3, PetName: "Charlie", PetBreed: "Beagle", PetType: "Dog", PetGender: "Male", PetAge: "4", PetImage: null },
  ];

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
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="content-area">
  <h2 className="text-center mb-4">Manage Pet Gallery</h2>
  <Row>
    {pets.map((pet) => (
      <Col xs={12} sm={6} md={4} lg={3} key={pet.id} className="mb-4">
        <Card className="h-100 card">
          <Card.Img
            variant="top"
            src={pet.PetImage ? `/images/${pet.PetImage}` : '/images/sample-dog1.jpg'}
            alt={pet.PetName || 'Default pet'}
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title className="card-title">{pet.PetName}</Card.Title>
            <Card.Text className="card-text">
              <strong>Breed:</strong> {pet.PetBreed}
              <br />
              <strong>Type:</strong> {pet.PetType}
              <br />
              <strong>Gender:</strong> {pet.PetGender}
              <br />
              <strong>Age:</strong> {pet.PetAge}
            </Card.Text>
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
              Close
            </Button>
            <Button variant="primary" onClick={handleAddPet}>
              Add Pet
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
