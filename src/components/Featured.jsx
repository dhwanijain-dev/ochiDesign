import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import React, { useState } from 'react'

const Featured = () => {
     
      const [isHovering,setHovering] = useState(false)
      const [isHovering2,setHovering2] = useState(false)
    
  return (
    <div className='w-full py-20'>
    <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-15 '>
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight '>Featured Projects</h1>
    </div>
    <div className='px-20'>

        <div className='cards w-full mt-10 flex gap-10'>
          
                  <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false )} className='cardcontainer w-1/2 relative h-[75vh]'>
                      <h1 className=' flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 absolute  leading-none tracking-tighter text-[#CDEA68] z-[99] text-8xl'>
                        {"FYDE".split('').map((item, index) => <motion.span className='inline-block' animate={isHovering ? ({y:0}):({y:"100%"})} transition={{ease:Power4.easeInOut,delay:index*.1}} initial={{y:"100%"}}>{item}</motion.span>)}
                      </h1>
                    <div className=' card w-full h-full  rounded-xl '>
                      <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' className='w-full h-full bg-cover'></img>
                    </div>
                  </div>
          <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)}  className='cardcontainer w-1/2 relative h-[75vh]'>
            <h1  className=' flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 absolute  leading-none tracking-tighter text-[#CDEA68] z-[99] text-8xl'>
              {"VISE".split('').map((item, index) => <motion.span className='inline-block' animate={isHovering2 ? ({ y: 0 }) : ({ y: "100%" })} transition={{ ease: Power4.easeInOut, delay: index * .1 }} initial={{ y: "100%" }}>{item}</motion.span>)}
            </h1>
                    <div className='card w-full h-full  rounded-xl '>
                      <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' className='w-full h-full bg-cover'></img>
                    </div>
                  </div>
                  
        </div>
      
    </div>
    </div>
  )
}

export default Featured
