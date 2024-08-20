import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/profile`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUser();
  }, []);

  return user ? (
    <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
