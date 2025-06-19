import React, { useState, useEffect } from "react";
import "./MyPlaylist.css";

// Component now accepts props from App.js
const MyPlaylist = ({
  playlists,
  onEdit,
  onDelete,
  onSave,
  editingPlaylist,
  message,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    img_name: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
    spotify_url: ""
  });

  // Populate form when editingPlaylist changes
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

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Extract Spotify track ID from a URL
  const getSpotifyEmbedId = (url) => {
    try {
      const parts = url.split("/track/");
      if (parts.length < 2) return null;
      return parts[1].split("?")[0];
    } catch {
      return null;
    }
  };

  // Handle form submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className="my-playlist">
      <h2>🎧 My Playlist</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="playlist-form">
        <input
          type="text"
          name="img_name"
          placeholder="Image Name"
          value={formData.img_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Song Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="album"
          placeholder="Album"
          value={formData.album}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="spotify_url"
          placeholder="Spotify Track URL (optional)"
          value={formData.spotify_url}
          onChange={handleChange}
        />
        <div className="form-buttons">
          <button type="submit">{editingPlaylist ? "Update" : "Add Song"}</button>
          {editingPlaylist && <button type="button" onClick={onCancel}>Cancel</button>}
        </div>
        {message && <p className="success">{message}</p>}
      </form>

      {/* Playlist Songs */}
      <div className="playlist-songs">
        {playlists.map((song) => (
          <div key={song._id} className="song-card">
            <img src={song.img_name} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.artist} — <i>{song.album}</i></p>
            <span className="genre">{song.genre}</span>

            {/* Spotify Player */}
            {song.spotify_url && getSpotifyEmbedId(song.spotify_url) && (
              <iframe
                src={`https://open.spotify.com/embed/track/${getSpotifyEmbedId(song.spotify_url)}`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify player for ${song.title}`}
                style={{ marginTop: "10px", borderRadius: "12px" }}
              ></iframe>
            )}

            {/* Edit/Delete Buttons */}
            <div className="edit-delete-buttons">
              <button onClick={() => onEdit(song)}>Edit</button>
              <button onClick={() => onDelete(song._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;
