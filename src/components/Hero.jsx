import React from 'react'
import image from '/public/image1.jpg'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='home' className='px-16 min-h-screen w-full
    items-center justify-center py-28 md:px-32'>
      <div className='flex py-3 flex-col items-center justify-center
      gap-10 text-white'>


        <motion.div
            initial={{y:-50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.8, delay:0.2}}
        >
            <img className=' w-[300px] cursor-pointer
            rounded-full shadow-xl shadow-indigo-900
            transition-all duration-300 hover:translate-y-5
            hover:scale-105 hover:shadow-2xl
            hover:shadow-indigo-600 md:w-[250px]' src={image} alt="" />
        </motion.div>

        < motion.div 
           initial={{y:50,opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{duration:0.8, delay:0.2}}

        className='flex max-w-[600px] mt-[25px] flex-col items-center justify-center
        gap-[1.5rem] text-center'>
            <h1 className='bg-gradient-to-r from-blue-500 to-pink-500
    bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl '>Nikhil</h1>
            <h3 className='bg-gradient-to-r from-pink-500 to-blue-500
    bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl font-semibold '>Web Developer</h3>
    <p className='md:text-base text-pretty text-sm text-gray-400
     opacity-80 hover:opacity-100 transition-colors duration-700 hover:text-white '>
        I'm a web developer skilled in React, Next.js, and Tailwind, focused on
        building clean, scalable applications. From front-end design to seamless 
        database integration with PostgreSQL, I create efficent solution for 
        dynamic user experiences. Let's build something great together !
    </p>


        </motion.div>

      </div>
    </div>
  )
}

export default Hero
