// frontend/src/components/Owner/ManageReservations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/reservations`);
      setReservations(res.data);
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Manage Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            <p>Restaurant: {reservation.restaurant}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.time}</p>
            <p>People: {reservation.people}</p>
            <p>Phone Number: {reservation.phoneNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageReservations;
