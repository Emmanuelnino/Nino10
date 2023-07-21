import React from 'react'

const Navbar = () => {

  return (
    <header className="header flex justify-between px-5 py-2 font-serif">
    <a href="../img/stone.jpeg" className="flex items-center">
      <img src="../img/stone.jpeg" alt="Logo" className="w-8 h-8 mr-2"/>
      <span className="text-4xl text-blue-500 font-bold"></span>
    </a>
    <nav
      className="nav absolute flex flex-col shadow-md w-[50%] h-full right-0 bg-white px-4 md:static md:h-auto md:w-auto md:flex-row md:shadow-none duration-500">
      <button className="close-nav relative top-0 right-0 text-right text-3xl md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
      <a href="http://127.0.0.1:5500/src/index.html" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">Home</a>
      <a href="/home"
        className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">About</a>
      <a href="/services" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">Services</a>
      <a href="/contact" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">Contact</a>

    </nav>
    <button className="show-nav md:hidden text-3xl cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </header>
  )
}

export default Navbar