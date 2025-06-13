// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Genres from "./components/Genres";
import MyPlaylist from "./components/MyPlaylist";
import Layout from "./Layout"; // Assuming Layout is in the same directory


const App = () => {
  return (
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Discover" element={<Discover />} />
            <Route path="ArtistSpotlight" element={<ArtistSpotlight />} />
            <Route path="Genres" element={<Genres />} />
            <Route path="My-playlist" element={<MyPlaylist />} />

          </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;