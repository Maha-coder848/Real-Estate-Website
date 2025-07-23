import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='container mx-auto px-6 md:px-20 lg:px-32 py-20 w-full overflow-hidden'
      id='Projects'
    >
      {/* Heading */}
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-3'>
        Explore <span className='text-blue-600 font-semibold'>Tamil Nadu’s</span> Finest Projects
      </h1>
      <p className='text-center text-gray-600 mb-10 max-w-xl mx-auto'>
        From the tech corridors of Chennai to the serene hills of Ooty — discover thoughtfully designed spaces across Tamil Nadu.
      </p>

      {/* Navigation Buttons */}
      <div className='flex justify-end mb-6'>
        <button
          onClick={prevProject}
          className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition'
          aria-label='Previous'
        >
          <img src={assets.left_arrow} alt='Previous' className='w-4 h-4' />
        </button>
        <button
          onClick={nextProject}
          className='p-2 bg-gray-200 rounded-full ml-2 hover:bg-gray-300 transition'
          aria-label='Next'
        >
          <img src={assets.right_arrow} alt='Next' className='w-4 h-4' />
        </button>
      </div>

      {/* Project Slider */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0 w-full sm:w-1/4 hover:scale-105 transition duration-300'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-cover rounded-lg shadow-lg'
              />

              <div className='absolute left-0 right-0 bottom-4 flex justify-center'>
                <div className='bg-white w-11/12 px-4 py-2 rounded-md shadow text-center'>
                  <h2 className='text-lg font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-sm text-gray-600'>
                    ₹{project.price} <span className='mx-1'>|</span> {project.location}, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
