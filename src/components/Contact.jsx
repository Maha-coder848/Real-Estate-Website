import React from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)

    // Web3Forms API key
    formData.append("access_key", "9287d8f1-63cd-458d-af4d-317049791f9b")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("")
      toast.success("Message sent successfully!")
      event.target.reset()
    } else {
      toast.error(data.message)
      setResult("Failed to send. Try again.")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='w-full py-20 px-6 md:px-20 lg:px-32 text-center bg-gray-50'
      id='Contact'
    >
      <h1 className='text-3xl sm:text-4xl font-bold mb-3'>
        Contact <span className='underline underline-offset-4 decoration-2 font-light'>With Us</span>
      </h1>
      <p className='text-gray-500 mb-10 max-w-xl mx-auto'>
        Ready to make a move in Tamil Nadu? Let's build your dream space together.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-left space-y-6 bg-white p-8 rounded shadow-md'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='text'
              name='Name'
              placeholder='Enter your full name'
              required
            />
          </div>

          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='email'
              name='Email'
              placeholder='Enter your email address'
              required
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
            name='Message'
            placeholder='Write your message here...'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition duration-200'
        >
          {result || "Send Message"}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
