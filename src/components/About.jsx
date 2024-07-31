import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] p-20 rounded-tl-3xl text-black'>
          <h1 className='font-[Neue_Montreal]  text-[4.5vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
          
          <div className='flex w-full pt-10 border-t-[1px] mt-20 border-[#191d0c]'> 
          <div className='w-1/2'>
            <h1 className='text-7xl'>Our approach:</h1>
            <button className=' flex uppercase gap-10 items-center mt-10  px-10 py-6 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
    
          </div>
              <div className='w-1/2 h-[70vh] bg-[#738534] rounded-3xl'></div>
          </div>
    </div>
  )
}

export default About
