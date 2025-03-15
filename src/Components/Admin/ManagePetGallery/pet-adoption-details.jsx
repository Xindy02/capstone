import React from 'react';
import { Container, Row, Col, Table, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const petDetails = {
  1: {
    image: '/images/dog1.jpg',
    videos: ['/videos/dog1.mp4'],
    story: 'Buddy is a playful and energetic dog looking for a loving family.',
    behavior: 'Friendly, active, good with kids.',
    details: { name: 'Buddy', age: '2 years', breed: 'Labrador Retriever', gender: 'Male' },
  },
  2: {
    image: '/images/cat1.jpg',
    videos: ['/videos/cat1.mp4'],
    story: 'Whiskers is a calm and affectionate cat who loves to cuddle.',
    behavior: 'Gentle, loves to nap, good with other pets.',
    details: { name: 'Whiskers', age: '3 years', breed: 'Siamese', gender: 'Female' },
  },
  3: {
    image: '/images/dog2.jpg',
    videos: ['/videos/dog2.mp4'],
    story: 'Max is a loyal companion with a heart of gold.',
    behavior: 'Protective, loves the outdoors, well-trained.',
    details: { name: 'Max', age: '4 years', breed: 'Golden Retriever', gender: 'Male' },
  },
};

export default function PetAdoptionDetails() {
  const { id } = useParams();
  const pet = petDetails[id];

  if (!pet) return <p>Pet not found.</p>;

  return (
    <Container className="py-4" id={`pet-details-${id}`}>
      {/* Pet Image and Details Section */}
      <Row className="mb-4" id="pet-main-info">
        <Col md={5} id="pet-image-container">
          <Image
            id={`pet-image-${id}`}
            src={pet.image}
            alt={pet.details.name}
            fluid
          />
        </Col>
        <Col md={7} id="pet-info-table-container">
          <h2 id="pet-name">{pet.details.name}</h2>
          <Table striped bordered hover id="pet-info-table">
            <tbody>
              <tr id="pet-age-row">
                <th id="pet-age-label">Age</th>
                <td id="pet-age-value">{pet.details.age}</td>
              </tr>
              <tr id="pet-breed-row">
                <th id="pet-breed-label">Breed</th>
                <td id="pet-breed-value">{pet.details.breed}</td>
              </tr>
              <tr id="pet-gender-row">
                <th id="pet-gender-label">Gender</th>
                <td id="pet-gender-value">{pet.details.gender}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Pet Story Section */}
      <Row className="mb-4" id="pet-story-section">
        <Col>
          <h3 id="pet-story-title">Story</h3>
          <p id="pet-story-content">{pet.story}</p>
        </Col>
      </Row>

      {/* Pet Behavior Section */}
      <Row className="mb-4" id="pet-behavior-section">
        <Col>
          <h3 id="pet-behavior-title">Behavior</h3>
          <p id="pet-behavior-content">{pet.behavior}</p>
        </Col>
      </Row>

      {/* Pet Videos Section */}
      <Row id="pet-videos-section">
        <Col>
          <h3 id="pet-videos-title">Videos</h3>
          {pet.videos.map((video, index) => (
            <video
              key={index}
              id={`pet-video-${index + 1}`}
              src={video}
              controls
              width="100%"
              className="mb-3"
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
