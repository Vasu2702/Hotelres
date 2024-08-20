// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout1/Navbar';
import Register from './components/User/Register';
import Home from './components/User/Home';
import BrowseRestaurants from './components/User/BrowseRestaurants';
import MakeReservation from './components/User/MakeReservation';
import Dashboard from './components/Owner/Dashboard';
import ManageReservations from './components/Owner/ManageReservations';
import UpdateMenu from './components/Owner/UpdateMenu';
import ManageUsers from './components/Admin/ManageUsers';
import ManageRestaurants from './components/Admin/ManageRestaurants';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>}/>
        <Route path="/browse" element={<BrowseRestaurants />} />
        <Route path="/reservations" element={<MakeReservation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-reservations" element={<ManageReservations />} />
        <Route path="/update-menu" element={<UpdateMenu />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-restaurants" element={<ManageRestaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
