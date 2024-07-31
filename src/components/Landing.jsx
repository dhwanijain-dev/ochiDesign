import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 pt-1'>
          <div className='textStructure mt-52 px-20'>
          {["WE CREATE", "EYE OPENING","PRESENTATIONS"].map((item,index) =>{
              return <div className='masker'>
                  <h1 className='leading-[6vw] tracking-tighter uppercase font-medium text-[7vw]'>
                  {item}
                  </h1>
                  
              </div>
              
          })}
         
       
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20 '>
        {["For public and private companies","from the first pitch to IPO"].map((item,index)=><p className='text-md font-light ml-30'>{item}</p>)}
        <div className='start flex gap-5 items-center'>
            <div className='px-5 p-2  border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div>
                  <div className='px-3 py-3 w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
