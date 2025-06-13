// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My<span className="highlight">Sound</span> ( •‿• )</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Discover">Discover</Link>
        <Link to="/ArtistSpotlight">Artist Spotlight</Link>
        <Link to="/Genres">Genres</Link>
        <Link to="/MyPlaylist">My Playlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
