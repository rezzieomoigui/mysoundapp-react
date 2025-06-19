// MyPlaylist.js
import React, { useState, useEffect } from "react";
import "./MyPlaylist.css";

const MyPlaylist = ({ playlists, onEdit, onDelete, onSave, editingPlaylist, message, onCancel }) => {
  const [formData, setFormData] = useState({
    img_name: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
    spotify_url: ""
  });

  useEffect(() => {
    if (editingPlaylist) {
      setFormData(editingPlaylist);
    } else {
      setFormData({
        img_name: "",
        title: "",
        artist: "",
        album: "",
        genre: "",
        spotify_url: ""
      });
    }
  }, [editingPlaylist]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist) {
      alert("Title and artist are required.");
      return;
    }
    onSave(formData);
    setFormData({
      img_name: "",
      title: "",
      artist: "",
      album: "",
      genre: "",
      spotify_url: ""
    });
  };

  const getSpotifyEmbedId = (url) => {
    try {
      return url.split("/track/")[1]?.split("?")[0];
    } catch {
      return null;
    }
  };

  return (
    <div className="my-playlist">
      <h2>🎧 My Playlist</h2>
      <form onSubmit={handleSubmit} className="playlist-form">
        <input type="text" name="img_name" placeholder="Image file path" value={formData.img_name} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} required />
        <input type="text" name="album" placeholder="Album" value={formData.album} onChange={handleChange} />
        <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <input type="text" name="spotify_url" placeholder="Spotify URL" value={formData.spotify_url} onChange={handleChange} />
        <button type="submit">{editingPlaylist ? "Update" : "Add"}</button>
        {editingPlaylist && <button type="button" onClick={onCancel}>Cancel</button>}
        {message && <p className="success">{message}</p>}
      </form>

      <div className="playlist-songs">
        {Array.isArray(playlists) && playlists.map(song => (
          <div className="song-card" key={song._id}>
            <img src={song.img_name} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist} — <i>{song.album}</i></p>
            <span>{song.genre}</span>
            {song.spotify_url && (
              <iframe
                src={`https://open.spotify.com/embed/track/${getSpotifyEmbedId(song.spotify_url)}`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            )}
            <button onClick={() => onEdit(song)}>Edit</button>
            <button onClick={() => onDelete(song._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;
