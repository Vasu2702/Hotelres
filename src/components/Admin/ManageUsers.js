// frontend/src/components/Admin/ManageUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
