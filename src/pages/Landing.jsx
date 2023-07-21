import React from 'react'

const Landing = () => {
  return (
    <body className="bg-gradient-to-r from-blue-500 to-blue-800 text-white min-h-screen flex items-center justify-center">
  <div className="text-center px-8">
    <h1 className="text-4xl font-bold mb-6">Welcome to STONEWRECKODDS</h1>
    <p className="text-lg mb-6">We are a Zambian/UK based record label that fuses Hip-Hop with mind-blowing word play.</p>
    <a href="../music/DOPE.mp3" download
      className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">Download
      Some Vibes</a>
    <a href="http://127.0.0.1:5500/src/index.html"
      className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">Explore
      More</a>
  </div>
</body>
  )
}

export default Landing