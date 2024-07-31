import React from 'react'

const Cards = () => {
  return (
    <div className=' flex w-full h-screen items-center px-32 bg-zinc-900 gap-5'>
    <div className='cardcontainer h-[50vh] w-1/2'>
      <div className='card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
          <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-3xl'>&copy;2019</button>
      </div>
    </div>
      <div className='flex gap-5 cardcontainer h-[50vh] w-1/2'> 
        <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#192826]'>
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
          <button className='absolute left-2 bottom-10 px-5 py-1 border-2 rounded-3xl'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#192826]'>
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
          <button className='absolute left-2 bottom-10 px-5 py-1 border-2 tracking-tighter rounded-3xl'>BUSINESS BOOTCAMP ALUMINI</button>
        </div>

      </div>
      
    </div>
  )
}

export default Cards
