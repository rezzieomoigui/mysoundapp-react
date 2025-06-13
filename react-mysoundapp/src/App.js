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


const App = () => {
  return (
     <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/ArtistSpotlight" element={<ArtistSpotlight />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/My-playlist" element={<MyPlaylist />} />
        </Routes>
      </div>
    </Routes>
    </BrowserRouter>
  );
}
export default App;