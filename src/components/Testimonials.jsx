import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='Testimonials'
    >
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-4'>
        Customer <span className='underline underline-offset-4 decoration-2 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>
        Real stories from those who found their perfect home with us across Tamil Nadu.
      </p>

      <div className='flex flex-wrap justify-center gap-10'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='max-w-sm w-full border border-gray-100 shadow-md rounded-lg p-8 text-center bg-white hover:shadow-xl transition'
          >
            <img
              className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className='text-xl font-semibold text-gray-800'>{testimonial.name}</h2>
            <p className='text-sm text-gray-500 mb-2'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt='star' className='w-4 h-4' />
              ))}
            </div>
            <p className='text-sm text-gray-600 leading-relaxed'>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
