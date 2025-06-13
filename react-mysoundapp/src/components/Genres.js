import React from "react";

const Genres = () => {
  return (
    <div className="page-container">
      <h1>Explore Genres</h1>
      <p>Find your vibe 🔮 Whether you're into synth pop, emo trap, indie R&B, or hyperpop — there's something for every mood.</p>

      <div className="genre-grid">
        <div className="genre-card">Y2K Pop</div>
        <div className="genre-card">Emo Rap</div>
        <div className="genre-card">Chillwave</div>
        <div className="genre-card">Hyperpop</div>
        <div className="genre-card">Indie R&B</div>
        <div className="genre-card">Electroclash</div>
      </div>
    </div>
  );
};

export default Genres;
