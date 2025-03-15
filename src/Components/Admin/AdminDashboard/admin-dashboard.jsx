import React from 'react';
import Sidebar from '../SideBar/sidebar.jsx';
import "./admin-dashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard d-flex">z
      <Sidebar />
      <div className="main-content p-4">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Manage users, pets, and more!</p>
      </div>
    </div>
  );
}