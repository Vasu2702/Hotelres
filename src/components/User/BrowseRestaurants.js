import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrowseRestaurants = () => {
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
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseRestaurants;
