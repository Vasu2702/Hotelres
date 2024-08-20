import React, { useState } from 'react';
import axios from 'axios';

const MakeReservation = () => {
  const [restaurant, setRestaurant] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/reservations`, {
      restaurant,
      date,
      time,
      people,
      phoneNumber,
    });
    alert('Reservation successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>
      <div>
        <label>Restaurant: </label>
        <input type="text" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
      </div>
      <div>
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Time: </label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <label>People: </label>
        <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} />
      </div>
      <div>
        <label>Phone Number: </label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default MakeReservation;
