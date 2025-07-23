import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import headerImage from '../assets/header.jpg'

const Header = () => {
  return (
    <div
      className='relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${headerImage})` }}
      id='Header'
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        {/* Main Heading */}
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 drop-shadow-xl'>
          Find the Perfect Space to Call Home
        </h2>

        {/* Kavithai-style poetic line */}
        <p className='mt-8 text-xl italic text-white/80'>
          “The home your heart searched for in silence… now stands waiting with open doors.”
        </p>

        {/* One-line paragraph */}
        <p className='mt-4 text-lg text-white/90 max-w-2xl mx-auto'>
          From cozy apartments to luxury villas, we bring your dream spaces to life — effortlessly.
        </p>

        {/* Buttons */}
        <div className='space-x-6 mt-16'>
          <a
            href="#Projects"
            className='border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition'
          >
            Projects
          </a>
          <a
            href="#Contact"
            className='bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded transition'
          >
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
