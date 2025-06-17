import React, { useState, useEffect } from "react";
import "./MyPlaylist.css";

const API_URL = "https://mysoundapp-server.onrender.com/api/playlists"; // replace with your server link

const MyPlaylist = () => {
  const [songs, setSongs] = useState([]);
  const [formData, setFormData] = useState({
    img_name: "",
    title: "",
    artist: "",
    album: "",
    genre: ""
  });
  const [successMsg, setSuccessMsg] = useState("");

  // Fetch songs from server
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Submit new song
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newSong => {
      setSongs([...songs, newSong]);
      setFormData({ img_name: "", title: "", artist: "", album: "", genre: "" });
      setSuccessMsg("Song added!");
      setTimeout(() => setSuccessMsg(""), 2000);
    })
    .catch(err => console.error("Add error:", err));
  };

  return (
    <div className="my-playlist">
      <h2>🎧 My Playlist</h2>

      {/* Song Form */}
      <form onSubmit={handleSubmit} className="playlist-form">
        <input type="text" name="img_name" placeholder="Image Name" value={formData.img_name} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Song Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} required />
        <input type="text" name="album" placeholder="Album" value={formData.album} onChange={handleChange} />
        <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <button type="submit">Add Song</button>
        {successMsg && <p className="success">{successMsg}</p>}
      </form>

      {/* Song List */}
      <div className="playlist-songs">
        {songs.map(song => (
          <div key={song._id} className="song-card">
            <img src={song.img_name} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist} — <i>{song.album}</i></p>
            <span className="genre">{song.genre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;


