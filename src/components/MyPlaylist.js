// MyPlaylist.js
import React, { useState, useEffect } from "react";
import "./MyPlaylist.css";

const MyPlaylist = ({ playlists, onEdit, onDelete, onSave, editingPlaylist, message, onCancel }) => {
  const [formData, setFormData] = useState({
    img_name: "",   // will hold either string filename or File object
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
    const { name, value, files } = e.target;
    if (name === "img_name" && files.length > 0) {
      setFormData({ ...formData, img_name: files[0] }); // store File object
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      <form onSubmit={handleSubmit} className="playlist-form" encType="multipart/form-data">
        {/* File input for image */}
        <input
          type="file"
          name="img_name"
          onChange={handleChange}
          accept="image/*"
          // required only if adding new playlist
          required={!editingPlaylist}
        />

        {/* If editing and current image exists, show preview */}
        {editingPlaylist && editingPlaylist.img_name && typeof editingPlaylist.img_name === "string" && (
          <img
            src={`https://mysoundapp-server.onrender.com/uploads/${editingPlaylist.img_name}`}
            alt="Current"
            style={{ maxWidth: "150px", marginBottom: "10px" }}
          />
        )}

        <input
          type="text"
          name="title"
          placeholder="Title"
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
          placeholder="Spotify URL"
          value={formData.spotify_url}
          onChange={handleChange}
        />
        <button type="submit">{editingPlaylist ? "Update" : "Add"}</button>
        {editingPlaylist && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
        {message && <p className="success">{message}</p>}
      </form>

      <div className="playlist-songs">
        {Array.isArray(playlists) &&
          playlists.map((song) => (
            <div className="song-card" key={song._id}>
              {/* Use backend URL to display uploaded images */}
              {song.img_name && (
                <img
                  src={`https://mysoundapp-server.onrender.com/uploads/${song.img_name}`}
                  alt={song.title}
                  style={{ maxWidth: "200px" }}
                />
              )}
              <h3>{song.title}</h3>
              <p>
                {song.artist} — <i>{song.album}</i>
              </p>
              <span>{song.genre}</span>
              {song.spotify_url && (
                <iframe
                  src={`https://open.spotify.com/embed/track/${getSpotifyEmbedId(
                    song.spotify_url
                  )}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={`Spotify embed for ${song.title}`}
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

