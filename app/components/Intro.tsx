import Image from 'next/image';
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Intro = () => {
  return (
    <section className='flex max-w-4xl mx-auto md:flex-row flex-col mt-5'>
    {/* left side */}
    <div className='m-5 max-w-lg'>
     <h1 className='text-white'>I am a full stack developer</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Sunt reiciendis ratione quo totam neque! Cupiditate quasi doloremque pariatur
       id perspiciatis eos maxime? Laborum placeat praesentium, 
       pariatur, perspiciatis dolorum consequatur suscipit, 
       officiis similique obcaecati id quam sequi natus quo.
      Quas error amet quisquam debitis,placeat labore assumenda nesciunt sint ducimus nihil.</p> 
      
      <button className='group flex items-center bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg py-2 px-4'> 
      Profile
      <AiOutlineArrowRight className="group-hower:rotate-90 duration-500"/>
       </button>
      
    </div>
  
    {/* left side end */}
    {/* right side */}
    <div >
      <Image src='/images/rajib.jpg' alt='rajib' height={400} width="300"
      className='md:w-full max-auto rounded-full'
      />
    </div> 
 </section> 
  
  
  )
}

export default Intro
