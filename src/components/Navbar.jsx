import { useState } from 'react';
import logo from '../assets/stone.jpeg'
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header flex justify-between md:px-10 px-5 bg-zinc-800 text-white py-5 items-center font-serif">
      <a href="/" className="flex items-center gap-1">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
        <span className="md:flex hidden">Stone</span>
        <span className="md:flex hidden">WreckOdds</span>
      </a>
      <button
        onClick={toggleNav}
        className="show-nav md:hidden text-3xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24" a
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

      {/* Mobile Nav */}
      <nav
        className={`${isNavOpen ? 'fixed' : 'hidden'
          } top-0 left-0 h-full w-full bg-gray-800 p-6 text-white flex flex-col items-center justify-center md:hidden`}
      >
        <button onClick={toggleNav} className='absolute top-4 right-5'>
          <svg
            viewBox="0 0 470 1000"
            fill="currentColor"
            height="1.3em"
            width="1.3em"
          >
            <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
          </svg>
        </button>
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

      {/* Desktop Nav */}
      <div className='md:flex hidden'>
        <ul className="flex gap-3">
          <li>
            <a
              href="/"
              className="nav-link text-xl mb-4 hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="nav-link text-xl mb-4 hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="nav-link text-xl mb-4 hover:text-blue-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="nav-link text-xl mb-4 hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
