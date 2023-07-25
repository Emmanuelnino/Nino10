import React from 'react'
import music from '../img/music.gif'
import { Link } from 'react-router-dom'
import bg from '../assets/stoneBg.svg'
import Image from '../components/image'
import img1 from '../img/odds.jpeg'
import img2 from '../img/troi.jpeg'
import img3 from '../img/9am.jpeg'

const Landing = () => {
  const imgSrcArray = [
    img1,
    img2,
    img3,
  ];
  return (
    <div className=" text-black flex w-full flex-col items-center justify-center">
      <section style={{ backgroundImage: `url(${bg})` }} className="text-center bg-cover bg-center h-full bg-no-repeat w-full px-8 min-h-screen py-20">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to Stone <span className='text-green-400'>WreckOdds</span></h1>
        <p className="text-lg text-zinc-400 mb-6">We are a Zambian/UK based record label that fuses Hip-Hop with mind-blowing word play.</p>
        <div className='justify-center w-full items-center flex gap-3 md:gap-5'>
          <a href="../music/DOPE.mp3" download
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded-lg shadow-lg md:shadow-xl hover:bg-green-500 hover:text-white transition-colors duration-300">Download 9AM</a>
          <Link to="/home"
            className="mt-8 bg-white text-green-500 font-bold p-2 md:p-3 border border-green-100 rounded-lg shadow-lg md:shadow-xl hover:bg-green-500 hover:text-white transition-colors duration-300">Explore
          </Link>
        </div>

        {/* Links */}
        <div className='mt-10 gap-6 items-center justify-center flex w-full'>

          {/* Spotify */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-green-500 text-zinc-700'

            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Spotify</p>
          </a>

          {/* Youtube */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-red-600 text-zinc-700'

            >
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Youtube</p>
          </a>

          {/* AudioMack */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-yellow-500 text-zinc-700'

            >
              <path d="M.331 11.378s.542-.089.765.144c.223.233.077.716-.22.724-.296.01-.57.063-.764-.144a.444.444 0 01.219-.724m5.881 3.292c-.052.01-.107-.017-.164-.058-.388-.542-.529-2.393-.707-2.503-.185-.114-.854 1.026-2.186.903-.557-.051-1.124-.412-1.457-.662.03-.42.036-1.403.865-1.083.504.194 1.367.726 2.125-.23.838-1.058 1.3-.75 1.577-.52.277.23.092 1.425.506 1.09.413-.334 2.082-2.41 2.082-2.41s1.292-1.303 1.49.067c.197 1.37 1.04 2.888 1.263 2.845.223-.043 2.822-5.325 3.195-5.666.372-.341 1.625-.296 1.565.578-.06.874-.187 6.308-.187 6.308s-.147 1.531.093.713c.099-.34.206-.645.339-1.003a989.222 989.222 0 002.278-7.368l.317-1.09a3.592 3.592 0 01.097-.33c.046-.154.076-.255.086-.282.024-.068.092-.12.188-.157.097-.061.2-.064.317-.067.302-.027.69.012 1.04.112.102 0 .212.037.317.112s.006 0 .015.01c.003 0 .005 0 .008.01a.503.503 0 01.098.095c.001 0 .002 0 .004.01a.716.716 0 01.051.073c.196.286.315.814.195 1.75-.3 2.335-.531 7.14-.531 7.14s-.047.229.435-.783c.017-.035.038-.066.058-.098a.42.42 0 00.091-.085c.298-.354 1.097-.563 1.651-.558.234.028.43.087.547.16.218.333.09 1.562.09 1.562-.462.043-1.341.291-1.653.337-.311.046-.785 2.07-1.443 1.863-.658-.207-2.125-1.127-2.125-1.253a98.33 98.33 0 01.152-1.87.152.152 0 010-.014c.022-.273.003-.392-.123-.12-.109.235-.581 1.736-1.108 3.371-.056.143-1.051 3.156-1.182 3.523-.156.427-.287.753-.377.921-.138.187-.324.304-.583.226-.646-.196-1.465-1.09-1.473-1.31-.015-1.251.06-7.974-.242-7.414-.311.575-2.73 4.561-2.73 4.561-.04.01-.07.01-.106.01-.172-.019-.437-.074-.51-.238-.004-.01-.01-.018-.013-.028l-.014-.04c-.033-.11-.046-.23-.075-.327a40.828 40.828 0 00-.463-1.42c-.279-.909-.566-1.837-.613-1.94-.092-.2-.227-.116-.347 0-.54.458-1.687 2.48-2.723 2.59" />
            </svg>
            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Audiomack</p>
          </a>

          {/* Apple */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-pink-500 text-zinc-700'

            >
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z" />
            </svg>

            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Apple</p>
          </a>

        </div>
        <div className='justify-center w-full flex mt-8 '
        >
          <img className='rounded-full h-[250px] w-[250px] md:w-[300px] object-cover md:h-[300px]' src={music} alt="" />
        </div>
      </section>
      <section className='bg-black min-h-screen flex-col flex justify-center items-center w-full text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {/* Replace the 'imgSrcArray' with an array of image URLs */}
          {imgSrcArray.map((imgSrc, index) => (
            <div className='flex justify-center items-center' key={index}>
              <img className='max-w-full' src={imgSrc} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className='min-h-screen flex-col flex justify-center items-center w-full text-black'>
        content
      </section>
    </div>
  )
}

export default Landing