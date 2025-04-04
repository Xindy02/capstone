import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/styles/main.css";
import "./qc-animal-pound.css";
import Logo from '../../Assets/images/QCACAC-LOGO.png';

const PetDetailsFilter = ({ filters, setFilters, breeds, colors }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    // Reset dependent fields
    if (name === "petType") {
      setFilters({ petType: value, breed: "", color: "", customBreed: "", customColor: "" });
    }
  };

  const handleFind = () => {
    const appliedFilters = {
      ...filters,
      breed: filters.breed === "others" ? filters.customBreed : filters.breed,
      color: filters.color === "others" ? filters.customColor : filters.color,
    };
    console.log("Filters applied:", appliedFilters);
    alert(`Searching for pets with filters: ${JSON.stringify(appliedFilters)}`);
  };

  const sortedBreeds = filters.petType
    ? [...breeds[filters.petType]]
        .sort()
        .filter((breed) => breed !== "Others")
    : [];
  const sortedColors = filters.petType
    ? [...colors[filters.petType]]
        .sort()
        .filter((color) => color !== "Others")
    : [];


     

  return (
    <div className="d-flex align-items-center gap-3">
      {/* Pet Type Filter */}
      <select
        name="petType"
        className="form-select"
        value={filters.petType}
        onChange={handleFilterChange}
      >
        <option value="">Pet Type</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>

      {/* Breed Filter */}
      <select
        name="breed"
        className="form-select"
        value={filters.breed}
        onChange={handleFilterChange}
        disabled={!filters.petType}
      >
        <option value="">Breed</option>
        {filters.petType &&
          sortedBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        <option value="others">Others</option>
      </select>

      {/* Custom Breed Input */}
      {filters.breed === "others" && (
        <input
          type="text"
          name="customBreed"
          className="form-control others-input"
          placeholder="Enter custom breed"
          value={filters.customBreed}
          onChange={handleFilterChange}
        />
      )}

      {/* Color Filter */}
      <select
        name="color"
        className="form-select"
        value={filters.color}
        onChange={handleFilterChange}
        disabled={!filters.petType}
      >
        <option value="">Color</option>
        {filters.petType &&
          sortedColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        <option value="others">Others</option>
      </select>

      {/* Custom Color Input */}
      {filters.color === "others" && (
        <input
          type="text"
          name="customColor"
          className="form-control others-input"
          placeholder="Enter custom color"
          value={filters.customColor}
          onChange={handleFilterChange}
        />
      )}

      {/* Size and Weight Filter */}
      <select
        name="sizeWeight"
        className="form-select"
        value={filters.sizeWeight}
        onChange={handleFilterChange}
      >
        <option value="">Size & Weight</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      {/* Sex Filter */}
      <select
        name="sex"
        className="form-select"
        value={filters.sex}
        onChange={handleFilterChange}
      >
        <option value="">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Find Button */}
      <button className="finding-pet-button" onClick={handleFind}>
        Find
      </button>
    </div>
  );
};

const QCAnimalPound = () => {
  const [filters, setFilters] = useState({
    petType: "",
    breed: "",
    customBreed: "",
    color: "",
    customColor: "",
    sizeWeight: "",
    sex: "",
  });

  const breeds = {
    dog: [
      "Aspin",
      "Chihuahua",
      "Poodle",
      "Labrador Retriever",
      "German Shepherd",
      "Maltese",
      "Pomeranian",
      "Beagle",
      "Bulldog",
      "Pug",
      "Siberian Husky",
      "Yorkshire Terrier",
      "Shih Tzu",
      "Golden Retriever",
      "Chow Chow",
      "Doberman Pinscher",
    ],
    cat: ["Persian", "Siamese", "Bengal", "Sphynx", "Maine Coon", "Ragdoll"],
  };

  const colors = {
    dog: ["Black", "White", "Brown", "Golden", "Gray"],
    cat: ["Black", "White", "Orange", "Gray", "Calico"],
  };

  const [petDetails, setPetDetails] = useState({
    petName: "",
    lastSeen: "",
    contactInfo: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetDetails({ ...petDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lost pet details:", petDetails);
    alert("Lost pet details submitted successfully!");
    setPetDetails({
      petName: "",
      lastSeen: "",
      contactInfo: "",
      description: "",
    });
    setShowForm(false);
  };

  return (
    <div className="lost-pet-container">
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
     <header id="qcap-hero-container" className="position-relative text-center text-white">
     <div id="qcap-hero-bg" className="qcap-hero-bg"></div> {/* Background Image */}
     <div id="qcap-hero-overlay" className="acap-hero-overlay"></div> {/* Dark Overlay */}
     <h1 id="qcap-hero-title" className="qcap-hero-title">Searching for Lost Pets: Let’s Bring Them Back!</h1>
     <div id="qcap-hero-cutout" className="qcap-hero-cutout"></div> {/* Triangle Cutout */}
   </header>

      {/* Pet Details Filter */}
      <div className="filter-container my-4">
        <PetDetailsFilter filters={filters} setFilters={setFilters} breeds={breeds} colors={colors} />
      </div>

      {/* Post Missing Pet */}
      <div className="post-missing-pet-container">
        <button
          className="post-missing-pet-button"
          onClick={() => setShowForm(true)}
        >
          Post a Missing Pet
        </button>
      </div>

      {/* Modal for Posting Missing Pets */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Report a Lost Pet</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="petName">Pet Name:</label>
                <input
                  type="text"
                  id="petName"
                  name="petName"
                  value={petDetails.petName}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastSeen">Last Seen Location:</label>
                <input
                  type="text"
                  id="lastSeen"
                  name="lastSeen"
                  value={petDetails.lastSeen}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactInfo">Contact Information:</label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  value={petDetails.contactInfo}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={petDetails.description}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-3"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
</div>
    
  );
};

export default QCAnimalPound;
