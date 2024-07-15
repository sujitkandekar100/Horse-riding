import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Horse Ride </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
