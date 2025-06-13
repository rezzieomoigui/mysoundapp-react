// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Genres from "./components/Genres";
import MyPlaylist from "./components/MyPlaylist";
import "./style.css"; // This must be in src/


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Artist-spotlight" element={<ArtistSpotlight />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/My-playlist" element={<MyPlaylist />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
