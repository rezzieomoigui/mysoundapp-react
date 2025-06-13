import React from "react";

const MyPlaylist = () => {
  return (
    <div className="page-container">
      <h1>My Playlist</h1>
      <p>Vibe with my top tracks. Curated for energy, feels, and late night drives 💿💜🔥</p>

      <div className="playlist-embed">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Playlist Embed"
        ></iframe>
      </div>
    </div>
  );
};

export default MyPlaylist;

