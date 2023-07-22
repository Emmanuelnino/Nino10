import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header flex justify-between px-5 py-2 font-serif">
      <a href="/" className="flex items-center">
        <img src="../img/stone.jpeg" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-4xl text-blue-500 font-bold"></span>
      </a>
      <button
        onClick={toggleNav}
        className="show-nav md:hidden text-3xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <nav
        className={`${
          isNavOpen ? 'fixed' : 'hidden'
        } top-0 left-0 h-full w-full bg-gray-800 p-6 text-white flex flex-col items-center justify-center md:hidden`}
      >
        <a
          href="/"
          className="nav-link text-2xl mb-4 hover:text-blue-400"
          onClick={toggleNav}
        >
          Home
        </a>
        <a
          href="/about"
          className="nav-link text-2xl mb-4 hover:text-blue-400"
          onClick={toggleNav}
        >
          About
        </a>
        <a
          href="/services"
          className="nav-link text-2xl mb-4 hover:text-blue-400"
          onClick={toggleNav}
        >
          Services
        </a>
        <a
          href="/contact"
          className="nav-link text-2xl mb-4 hover:text-blue-400"
          onClick={toggleNav}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
