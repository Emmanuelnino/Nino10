import React from 'react'
import music from '../img/music.gif'

const Landing = () => {
  return (
    <body className="bg-gradient-to-r from-blue-500 to-blue-800 text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to STONEWRECKODDS</h1>
        <p className="text-lg mb-6">We are a Zambian/UK based record label that fuses Hip-Hop with mind-blowing word play.</p>
        <div className='justify-center w-full flex gap-6'>
          <a href="../music/DOPE.mp3" download
            className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">Download
            Some Vibes</a>
          <a href="http://127.0.0.1:5500/src/index.html"
            className="mt-8 bg-white text-blue-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">Explore
            More</a>
        </div>

        <div className='justify-center w-full flex mt-10 '
        >
          <img className='rounded w-[200px] h-[200px]' src={music} alt="" />
        </div>
        <div className='mt-10 gap-6  justify-center flex w-full'>
          <a href="">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2.5em"
              width="2.5em"

            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
          <a href="">
          <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2.5em"
      width="2.5em"
      
    >
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
    </svg>
          </a>
          <a href="">
            
          </a>
        </div>
      </div>
    </body>
  )
}

export default Landing