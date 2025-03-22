import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full top-0 z-10">
      <div className="text-2xl font-bold text-gray-800">
        <h1>ArtGal</h1>
      </div>
      <ul className="flex gap-8">
        <li><a href="/" className="text-gray-800 hover:text-blue-500">Home</a></li>
        <li><a href="/collections" className="text-gray-800 hover:text-blue-500">Collections</a></li>
        <li><a href="/artists" className="text-gray-800 hover:text-blue-500">Artists</a></li>
        <li><a href="/about" className="text-gray-800 hover:text-blue-500">About</a></li>
        <li><a href="/contact" className="text-gray-800 hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;