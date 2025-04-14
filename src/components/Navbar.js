// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ArtGal</h1>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/artists">Artists</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
