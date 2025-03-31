import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    console.log("Pet ID from URL:", id); // Debugging ID

    const pets = [
      { id: "1", name: "Princess", age: "2 years", breed: "Golden Retriever", image: "/images/princess.jpg", description: "A sweet and friendly pup." },
      { id: "2", name: "Master", age: "3 years", breed: "Labrador", image: "/images/master.jpg", description: "A playful and energetic dog." },
    ];

    const foundPet = pets.find((p) => String(p.id) === String(id));

    console.log("Found Pet:", foundPet); // Debugging if pet is found

    setPet(foundPet);
  }, [id]);

  if (!pet) {
    return <h2 className="text-center mt-5">Pet not found!</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={pet.image} alt={pet.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{pet.name}</h2>
          <p className="card-text"><strong>Age:</strong> {pet.age}</p>
          <p className="card-text"><strong>Breed:</strong> {pet.breed}</p>
          <p className="card-text"><strong>Description:</strong> {pet.description}</p>
          <Link to="/adoption-form" className="btn btn-primary">Adopt {pet.name}</Link>
          <Link to="/" className="btn btn-secondary ms-2">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
