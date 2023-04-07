import Link from 'next/link';
import React from 'react'

import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const Socialicons = () => {
  return (
    <div>
    <div>
        <Link href="https://www.linkedin.com/in/rajib-ali-shah-61869087/" target={'_blank'}>
      <div className='fixed flex text-white bg-gray-600 top-[40vh] 
      ml-[-85px] hover:ml-0 duration-500 gap-2.5 items-center p-3 text-lg rounded-r-lg'>
        Linkedin
        <FaLinkedin size={25}/>
      </div>
      </Link>
    </div>
    <div>
        <Link href="https://github.com/RajibAliShah" target={'_blank'}>
      <div className='fixed flex text-white bg-gray-600 top-[50vh] 
      ml-[-85px] hover:ml-0 duration-500 gap-5 items-center p-3 text-lg rounded-r-lg'>
        GitHub
        <FaGithubSquare size={25}/>
      </div>
      </Link>
    </div>
    <div>
        <Link href="https://twitter.com/Syed_Rajib" target={'_blank'}>
      <div className='fixed flex text-white bg-gray-600 top-[60vh] 
      ml-[-85px] hover:ml-0 duration-500 gap-5 items-center p-3 text-lg rounded-r-lg'>
        Twitter
        <FaTwitterSquare size={25}/>
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Socialicons
