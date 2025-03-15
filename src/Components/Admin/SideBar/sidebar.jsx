import React from 'react';
import "./sidebar.css"; // Keep styles here or move to a separate file if needed

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-dark text-white">
      <a href="index.html">
        <img src="/images/QCACAC-LOGO.png" alt="Logo" className="mb-3" />
      </a>
      <h2 className="text-center">Admin Dashboard</h2>
      <a href="/admin-dashboard" className="text-white">View All Users</a>
      <a href="/homepage-content" className="text-white">Manage Home Page Content</a>
      <a href="/manage-pet-gallery" className="text-white">Manage Pet Gallery</a>
      <a href="/manage-lost-pet-reports" className="text-white">Manage Lost Pet Reports</a>
      <a href="/manage-adoption-reports" className="text-white">Manage Adoption Reports</a>
    </div>
  );
}
