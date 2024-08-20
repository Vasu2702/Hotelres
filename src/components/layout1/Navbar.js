// frontend/src/components/Layout/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Browse Register</Link></li>
      <li><Link to="/browse">Browse Restaurants</Link></li>

      <li><Link to="/reservations">Make Reservation</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/manage-users">Manage Users</Link></li>
      <li><Link to="/manage-restaurants">Manage Restaurants</Link></li>
    </ul>
  </nav>
);

export default Navbar;
