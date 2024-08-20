// frontend/src/components/Admin/ManageRestaurants.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants`);
      setRestaurants(res.data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>Manage Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <p>Name: {restaurant.name}</p>
            <p>Address: {restaurant.address}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRestaurants;

