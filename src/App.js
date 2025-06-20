// App.js
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

  const API_URL = "https://mysoundapp-server-2.onrender.com"; // your backend URL

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetch GET /playlists →", data);
        if (Array.isArray(data)) setPlaylists(data);
        else setPlaylists([]);
      })
      .catch((err) => console.error("Error loading playlists:", err));
  }, []);

  const handleEdit = (playlist) => {
    setEditingPlaylist(playlist);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPlaylists(playlists.filter(p => p._id !== id));
      setMessage("Deleted!");
    }
  };

  const handleSave = async (playlistData) => {
    const method = playlistData._id ? "PUT" : "POST";
    const endpoint = playlistData._id ? `${API_URL}/${playlistData._id}` : API_URL;

    // Prepare form data for image upload and other fields
    const formData = new FormData();
    if (playlistData.img_name instanceof File) {
      formData.append("img_name", playlistData.img_name);
    }
    // Append other fields
    formData.append("title", playlistData.title);
    formData.append("artist", playlistData.artist);
    formData.append("album", playlistData.album || "");
    formData.append("genre", playlistData.genre || "");
    formData.append("spotify_url", playlistData.spotify_url || "");

    const response = await fetch(endpoint, {
      method,
      body: formData,
      // Do NOT set Content-Type header; browser sets it automatically for FormData
    });

    if (response.ok) {
      const updated = await response.json();
      console.log(`${method} response →`, updated);
      if (playlistData._id) {
        setPlaylists(playlists.map(p => p._id === updated._id ? updated : p));
        setMessage("Updated!");
      } else {
        setPlaylists([...playlists, updated]);
        setMessage("Added!");
      }
      setEditingPlaylist(null);
    } else {
      const errorText = await response.text();
      alert("Error: " + errorText);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Discover" element={<Discover />} />
        <Route path="ArtistSpotlight" element={<ArtistSpotlight />} />
        <Route path="Genres" element={<Genres />} />
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


