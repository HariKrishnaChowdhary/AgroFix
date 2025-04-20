// components/MenuBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Import the MenuBar CSS file

function MenuBar() {
  return (
    <div className="menu-bar">
      <nav>
        <ul>
          <li><Link to="/">Catalogue</Link></li>
          <li><Link to="/order-tracking">Order Tracking</Link></li>
          <li><Link to="/admin-dashboard">Admin Panel</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
