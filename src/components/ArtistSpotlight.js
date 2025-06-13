import React from "react";
import myImage from "../assets/myimage.jpg"; // adjust path to your image

const ArtistSpotlight = () => {
  return (
    <div className="page-container">
      <h1>Artist Spotlight</h1>
      <p>Discover artists that are changing the game 🎤✨ Curated picks just for you.</p>

      <div className="artist-grid">
        <div className="artist-card">
          <img src="/public/pinkpantheress.jpg" alt="Artist 1" />
          <h3>PinkPantheress</h3>
          <p>Y2K vibes with a twist of garage and alt-pop.</p>
        </div>
        <div className="artist-card">
          <img src="https://i.scdn.co/image/ab6761610000e5eb061c4aa18c8d1f6e3cc6aa63" alt="Artist 2" />
          <h3>Bladee</h3>
          <p>Emo cloud rap meets futuristic aesthetic.</p>
        </div>
        <div className="artist-card">
          <img src="https://i.scdn.co/image/ab6761610000e5ebb59f02f680d9c7808b38c4c4" alt="Artist 3" />
          <h3>070 Shake</h3>
          <p>Raw emotion layered over ambient hip-hop.</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistSpotlight;
