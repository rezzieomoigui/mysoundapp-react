import React from "react";

const ArtistSpotlight = () => {
  return (
    <div className="page-container">
      <h1>Artist Spotlight</h1>
      <p>Discover artists that are changing the game 🎤✨ Curated picks just for you.</p>

      <div className="artist-grid">
        <div className="artist-card">
          <img src="./imgs/pinkpantheress.jpg" alt="Artist 1" />
          <h3>PinkPantheress</h3>
          <p>Y2K vibes with a twist of garage and alt-pop.</p>
        </div>
        <div className="artist-card">
          <img src="./imgs/liluzivert.jpg" alt="Artist 2" />
          <h3>Lil Uzi Vert</h3>
          <p>Emo cloud rap meets futuristic aesthetic.</p>
        </div>
        <div className="artist-card">
          <img src="./imgs/rihanna.webp" alt="Artist 3" />
          <h3>Rihanna</h3>
          <p>Fun emotion drive dance pop. </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistSpotlight;
