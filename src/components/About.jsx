import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='w-full px-6 md:px-20 py-14 bg-white text-gray-800'
      id='About'
    >
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

        {/* Left Image */}
        <div className='h-full flex items-center justify-center'>
          <img
            src={assets.brand_img}
            alt='About our brand'
            className='w-full h-full object-cover rounded-xl shadow-md'
          />
        </div>

        {/* Right Content */}
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl font-bold mb-4 leading-tight'>
            Building <span className='text-blue-600'>Dreams</span> with Purpose
          </h2>

          <p className='text-gray-700 mb-4 leading-relaxed'>
            We are committed to creating homes that offer comfort, quality, and style. Every structure is thoughtfully designed to meet the needs of modern families and communities.
          </p>

          <p className='text-gray-700 mb-6 leading-relaxed'>
            With over a decade of experience, we continue to push boundaries in architecture, sustainability, and innovation. Our focus is to deliver residential spaces that inspire, nurture, and grow with you.
          </p>

          {/* Vision Box */}
          <div className='bg-blue-50 p-4 rounded-lg shadow-sm mb-6'>
            <h3 className='text-xl font-semibold text-blue-600 mb-2'>Our Vision</h3>
            <p className='text-gray-600'>
              To be a leading name in real estate, delivering thoughtfully crafted spaces that bring long-lasting value and happiness to our customers.
            </p>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 gap-6 text-center mb-6'>
            <div>
              <p className='text-3xl font-bold text-blue-600'>10+</p>
              <p className='text-sm'>Years of Experience</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-blue-600'>25+</p>
              <p className='text-sm'>Ongoing Projects</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-blue-600'>12+</p>
              <p className='text-sm'>Completed Projects</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-blue-600'>20M+</p>
              <p className='text-sm'>Sq. Ft. Delivered</p>
            </div>
          </div>

          {/* Call to Action */}
          <button className='px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit'>
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
