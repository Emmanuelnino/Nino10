import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedSong = ({ image, title, artist }) => (
  <div className="song-card">
    <img src={image} alt={title} />
    <h3 className="text-xl font-semibold my-2">{title}</h3>
    <p className="text-gray-500">{artist}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to the STONEWRECKODDS Music App</h1>
        <p className="text-lg mb-6">
          Discover the latest songs, albums, and music videos.
        </p>
        <div className="justify-center w-full flex gap-6">
          {/* Replace the buttons with your desired links */}
          <Link
            to="/songs"
            className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Explore Songs
          </Link>
          <Link
            to="/artists"
            className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover Art
          </Link>
        </div>

        <div className="mt-6 gap-6 items-center justify-center flex w-full">
          {/* Add your social media icons here */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
