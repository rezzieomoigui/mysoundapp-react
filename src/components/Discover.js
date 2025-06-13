// src/components/Discover.js
import React from "react";
import "../style.css";

const Discover = () => {
  return (
    <div className="discover-container text-white bg-black font-y2k min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Discover <br /> Your <span role="img" aria-label="magnifying glass">🔍</span><br /> Taste.
          </h1>
          <button className="quiz-button mt-8 text-white text-lg font-semibold py-3 px-6 rounded-full">
            Let's take a quiz
          </button>
        </div>

        {/* Right Section */}
        <form className="bg-white text-black rounded border border-gray-400 p-6 space-y-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Answer a few fun questions and we'll match you to the perfect playlist!</h2>

          <div className="form-group border-t border-b py-4">
            <label className="text-2xl font-bold">1. How do you prefer to relax?</label>
            <select className="form-select mt-2 w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
              <option>Reading</option>
              <option>Walking</option>
              <option>Listening to music</option>
            </select>
          </div>

          <div className="form-group border-b py-4">
            <label className="text-2xl font-bold">2. What's your go-to vibe?</label>
            <select className="form-select mt-2 w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
              <option>Chill</option>
              <option>Energetic</option>
              <option>Romantic</option>
            </select>
          </div>

          <div className="form-group border-b py-4">
            <label className="text-2xl font-bold">3. Favorite time to listen?</label>
            <select className="form-select mt-2 w-full p-2 border border-gray-300 rounded">
              <option>Select</option>
              <option>Morning</option>
              <option>Night</option>
              <option>Anytime</option>
            </select>
          </div>

          <div className="text-center mt-6">
            <button type="submit" className="submit-button bg-black text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Discover;
