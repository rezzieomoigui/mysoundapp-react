import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discover from "./components/Discover";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Genres from "./components/Genres";
import MyPlaylist from "./components/MyPlaylist";
import Layout from "./Layout";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [editingPlaylist, setEditingPlaylist] = useState(null);
  const [message, setMessage] = useState("");

  const API_URL = "https://mysoundapp-server.onrender.com/api/playlists"; // change this to your actual Render backend

  // 🔄 Load playlists
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setPlaylists(data);
      } else {
        console.error("API data is not an array:", data);
        setPlaylists([]);
      }
    })
    .catch(err => {
      console.error("Error fetching playlists:", err);
      setPlaylists([]);
    });
  }, []);

  // ✏️ Edit handler
  const handleEdit = (playlist) => {
    setEditingPlaylist(playlist);
  };

  // ❌ Delete handler
  const handleDelete = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setPlaylists(prev => prev.filter(p => p._id !== id));
      setMessage("Deleted successfully");
    }
  };

  // ✅ Save handler (for POST and PUT)
  const handleSave = async (playlistData) => {
    if (playlistData._id) {
      // Edit (PUT)
      const response = await fetch(`${API_URL}/${playlistData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playlistData),
      });
      if (response.ok) {
        const updated = await response.json();
        setPlaylists(prev =>
          prev.map(p => (p._id === updated._id ? updated : p))
        );
        setEditingPlaylist(null);
        setMessage("Updated successfully");
      }
    } else {
      // Add new (POST)
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playlistData),
      });
      if (response.ok) {
        const created = await response.json();
        setPlaylists(prev => [...prev, created]);
        setMessage("Added successfully");
      }
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Discover" element={<Discover />} />
        <Route path="ArtistSpotlight" element={<ArtistSpotlight />} />
        <Route path="Genres" element={<Genres />} />
        
        {/* 🔥 Send props to MyPlaylist */}
        <Route
          path="MyPlaylist"
          element={
            <MyPlaylist
              playlists={playlists}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSave={handleSave}
              editingPlaylist={editingPlaylist}
              message={message}
              onCancel={() => setEditingPlaylist(null)}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
