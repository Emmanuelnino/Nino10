import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/stoneBg.svg';

const Services = () => {
  return (
    <div className="text-black flex w-full flex-col items-center justify-center">
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="text-center bg-cover bg-center h-full bg-no-repeat w-full px-8 min-h-screen py-20"
      >
        <h1 className="text-4xl font-extrabold mb-6">Our Services</h1>
        <p className="text-lg text-zinc-400 mb-6">
          We offer a variety of services to support and promote our artists and their music.
        </p>
        <div className="justify-center w-full items-center flex gap-3 md:gap-5">
          <Link
            to="/services/music-promotion"
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded-lg shadow-lg md:shadow-xl hover:bg-green-500 hover:text-white transition-colors duration-300"
          >
            Music Promotion
          </Link>
          <Link
            to="/services/music-production"
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green
            <Link
            to="/services/music-production"
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded-lg shadow-lg md:shadow-xl hover:bg-green-500 hover:text-white transition-colors duration-300"
          >
            Music Production
          </Link>
          <Link
            to="/services/artist-management"
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded-lg shadow-lg md:shadow-xl hover:bg-green-500 hover:text-white transition-colors duration-300"
          >
            Artist Management
          </Link>
        </div>

        {/* Additional sections for each service */}
        {/* Music Promotion */}
        <section className="min-h-screen flex-col flex justify-center items-center w-full text-white bg-zinc-800">
          <h2 className="text-3xl font-extrabold mb-4">Music Promotion</h2>
          <p className="text-lg text-zinc-400 mb-8">
            Our music promotion service helps artists reach a wider audience through targeted marketing and promotion campaigns.
          </p>
          {/* Add any additional content related to music promotion */}
        </section>

        {/* Music Production */}
        <section className="min-h-screen flex-col flex justify-center items-center w-full text-black">
          <h2 className="text-3xl font-extrabold mb-4">Music Production</h2>

