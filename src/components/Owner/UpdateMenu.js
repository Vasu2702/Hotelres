// frontend/src/components/Owner/UpdateMenu.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateMenu = () => {
  const [menu, setMenu] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/menu`, { menu });
    alert('Menu updated successfully!');
  };

  return (
    <div>
      <h2>Update Menu</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          placeholder="Enter your menu here"
        />
        <button type="submit">Update Menu</button>
      </form>
    </div>
  );
};

export default UpdateMenu;
