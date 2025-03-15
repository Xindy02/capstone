import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Users/Home/home';  
import PetGallery from './Components/Users/Pet-Gallery/pet-gallery';
import Services from './Components/Users/Services/services';
import QCAnimalPound from './Components/Users/QC-Animal-Pound/qc-animal-pound';
import { LoginSignup } from './Components/LoginSignup/login-signup';
import AdminDashboard from './Components/Admin/AdminDashboard/admin-dashboard';
import ManagePetGallery from './Components/Admin/ManagePetGallery/manage-pet-gallery';
import PetAdoptionDetails from './Components/Admin/ManagePetGallery/pet-adoption-details';
import ManageHomePage from './Components/Admin/ManageHome/manage-homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet-gallery" element={<PetGallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/qc-animal-pound" element={<QCAnimalPound />} />
        <Route path="/login-signup" element={<LoginSignup />} />

        <Route path="/manage-pet-gallery" element={<ManagePetGallery/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/pet-adoption-details" element={<PetAdoptionDetails />} />
        <Route path="/manage-homepage" element={<ManageHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
