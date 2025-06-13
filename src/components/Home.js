import React from "react";
import "../style.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Find Your<br />Music Vibe.</h1>
            <div className="hero-icon">🎵</div>
          </div>
          <div className="hero-right">
            <input
              className="search-input"
              type="text"
              placeholder="Search playlists, artists..."
            />
          </div>
        </div>
      </header>

      <section className="recommendations">
        <h2>Recommended Playlists</h2>
        <div className="playlist-cards">
          <div className="playlist-card">
            <div className="playlist-image">[Image]</div>
            <img src="https://i.scdn.co/image/ab6761610000e5ebc5c8384f113a8d6c5f0bce3f" alt="Artist 1" />
            <p className="playlist-title">Soft Girl Moods</p>
          </div>
          <div className="playlist-card">
            <div className="playlist-image">[Image]</div>
            <p className="playlist-title">Late Night Vibes</p>
          </div>
          <div className="playlist-card">
            <div className="playlist-image">[Image]</div>
            <p className="playlist-title">Pop Classics</p>
          </div>
        </div>
        <div className="pagination">
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>&gt;</button>
        </div>
      </section>

      <footer className="home-footer">
        Finding that acquired taste
      </footer>
    </div>
  );
}

export default Home;
