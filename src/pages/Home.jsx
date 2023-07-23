import React from 'react';

const FeaturedSong = ({ image, title, artist }) => (
  <div className="song-card">
    <img src={image} alt={title} />
    <h3 className="text-xl font-semibold my-2">{title}</h3>
    <p className="text-gray-500">{artist}</p>
  </div>
);

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 py-4 flex justify-between items-center">
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Songs
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Artists
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Albums
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Playlists
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white text-lg px-4 hover:text-gray-300">
          Contact
        </a>
      </nav>

      {/* Main Content Section */}
      <section className="hero-section py-16 text-center">
        <h1 className="text-4xl font-semibold">Welcome to Nino Music</h1>
        <p className="text-gray-600 text-lg mt-4">
          Discover the latest songs, albums, and artists.
        </p>
        <a
          href="#"
          className="bg-red-500 text-white px-8 py-4 rounded-md mt-8 hover:bg-red-600 text-lg"
        >
          Explore Now
        </a>
      </section>

      {/* Featured Songs Section */}
      <section className="featured-songs flex justify-center flex-wrap gap-8 p-8">
        <FeaturedSong
          image="song1.jpg"
          title="Song Title 1"
          artist="Artist Name 1"
        />
        <FeaturedSong
          image="song2.jpg"
          title="Song Title 2"
          artist="Artist Name 2"
        />
        <FeaturedSong
          image="song3.jpg"
          title="Song Title 3"
          artist="Artist Name 3"
        />
        {/* Add more song cards here */}
      </section>
    </div>
  );
};

export default HomePage;
