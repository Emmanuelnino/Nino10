import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  // Sample data for uploaded songs (replace this with your actual data from the backend)
  const [uploadedSongs, setUploadedSongs] = useState([
    {
      id: 1,
      title: 'Song Title 1',
      artist: 'Artist 1',
      file: '/path/to/song1.mp3', // Replace with the actual file path
    },
    {
      id: 2,
      title: 'Song Title 2',
      artist: 'Artist 2',
      file: '/path/to/song2.mp3', // Replace with the actual file path
    },
    // Add more uploaded songs here
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Explore Music</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadedSongs.map((song) => (
          <div
            key={song.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <h3 className="text-xl font-semibold mb-2">{song.title}</h3>
            <p className="text-gray-500 mb-4">{song.artist}</p>
            <audio controls className="w-full">
              <source src={song.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
      <Link
        to="/upload"
        className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300"
      >
        Upload Your Music
      </Link>
    </div>
  );
};

export default Explore;
