import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio'>
    <div className='text-center mt-5'>
      <h1 className='text-center text-white text-4xl'>Portfolio</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-10'>
      {/* card 1 */}
      <div className=
      'space-x-20 mt-10 px-5 text-white shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
        <img 
        src='/images/1.webp' alt='1' className='w-full h-60 object-cover'></img>
        <button className='p-4 hover:scale-105 duration-75'>
            <a href='https://website-nmf2-90uhmdcw6-rajibalishah.vercel.app/' target={"_blank"}
            className="hover:scale-105 duration-75">
                 Demo </a>
        </button>
        <button>
            <a href='https://github.com/RajibAliShah/website.git' target={"_blank"}
            className="hover:scale-105 duration-75" >
                 Code </a>
        </button>
      </div>
{/* card 2 */}
<div>
      <div className=
      'space-x-20 mt-10 px-5 text-white shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
        
        <img src='/images/2.webp' alt='2' className='w-full h-60 object-cover'></img>
        <button className='p-4 hover:scale-105 duration-75'>
            <a href='https://pricing-l5l5.vercel.app/' target={"_blank"}
            className="hover:scale-105 duration-75">
                 Demo </a>
        </button>
        <button>
            <a href='https://github.com/RajibAliShah/pricing.git' target={"_blank"}
            className="hover:scale-105 duration-75" >
                 Code </a>
        </button>
      </div>
      </div>
        {/* card 3 */}
        <div>
      <div className=
      'space-x-20 px-5 mt-10 text-white shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
        
        <img src='/images/3.webp' alt='3' className='w-full h-60 object-cover'></img>
        <button className='p-4 hover:scale-105 duration-75'>
            <a href='https://syllabus-ju4x6rs7y-rajibalishah.vercel.app/' target={"_blank"}
            className="hover:scale-105 duration-75">
                 Demo </a>
        </button>
        <button>
            <a href='https://github.com/RajibAliShah/syllabus.git' target={"_blank"}
            className="hover:scale-105 duration-75" >
                 Code </a>
        </button>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Portfolio
