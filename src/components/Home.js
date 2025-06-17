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
   <p className="playlist-title">The Mystery Artist of Today</p>
          </div>
   
      <div className="artist-card">
         <h2>SOFT GIRL MOODS</h2>
          <h3>Lana Del Rey</h3>
          <p>Click this artist to hear melodic soft moods, I know your curious</p>

          </div>
          <div className="playlist-card">
            <div className="playlist-image">[Have fun]</div>
            <p className="playlist-title">Keep Searching</p>
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