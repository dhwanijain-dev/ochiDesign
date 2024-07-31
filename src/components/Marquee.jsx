// import { motion } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-3xl bg-[#004D43]'>
          <div   className='text border-t-2 border-b-2 flex whitespace-nowrap  overflow-hidden   border-zinc-300'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:4}} className='text-[17vw] leading-none font-semibold uppercase -pt-10 '>we are ochi  </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:4}} className='text-[17vw] leading-none font-semibold uppercase -pt-10 '>  we are ochi</motion.h1>
            
        
        </div>
    </div>
  )
}

export default Marquee
