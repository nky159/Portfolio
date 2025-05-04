import React from 'react'
import { BiLogoJavascript,BiLogoDocker,BiLogoTailwindCss,BiLogoNodejs,BiLogoPostgresql  } from "react-icons/bi";
import { motion } from "motion/react"

import { FaReact } from "react-icons/fa";


const Tech = () => {

    const variants = {
        hidden:{opacity:0,y:50},
        visible:{opacity:1,y:0}
    }


  return (
    <div id='tech' className='flex flex-col min-h-[70vh]
    w-full items-center justify-center gap-16
    md:gap-32 '>
         <motion.h1 
             variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}

         className='text-4xl text-white font-light
         md:text-6xl'>Technologies</motion.h1>
      

      <div className='flex flex-wrap items-center justify-center
      gap-10 p-5'>


<motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <BiLogoJavascript className='cursor-pointer text-[80px] text-js
        transition-all duration-300 hover:-translate-y-5
        sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <FaReact  className='cursor-pointer text-[80px] text-sky-500
        transition-all duration-300 hover:-translate-y-5
       motion. sm:text-[100px] md:text-[120px]' />
        </motion.div>

        

       

        <motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400
        transition-all duration-300 hover:-translate-y-5
        sm:text-[100px] md:text-[120px]' />
        </motion.div>
        
        <motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <BiLogoNodejs className='cursor-pointer text-[80px] text-node
        transition-all duration-300 hover:-translate-y-5
        sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <BiLogoPostgresql className='cursor-pointer text-[80px] text-sqlblue
        transition-all duration-300 hover:-translate-y-5
        sm:text-[100px] md:text-[120px]' />
        </motion.div>

        <motion.div
           variants={variants}
           initial="hidden"
           whileInView="visible"
           transition={{duration:0.5}}
        >
        <BiLogoDocker className='cursor-pointer text-[80px] text-blue-600
        transition-all duration-300 hover:-translate-y-5
        sm:text-[100px] md:text-[120px]' />
        </motion.div>


      </div>
    </div>
  )
}

export default Tech
