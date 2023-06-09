"use client"
import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

const Header = () => {
 const [toggle, setToggle] = useState(true);
  return (
    <section className='bg-gray-900 text-white'>
    <div className="flex justify-between items-center">
      <h1 className="font-otherfont text-white text-4xl m-7" >Rajib Ali Shah</h1>
      <ul className="m-7 md:flex hidden">
        <li className="m-5 text-2xl font-autograph hover:scale-150 duration-200">Home</li>
        <a className='cursor-pointer' href='#about'>
        <li className="m-5 text-2xl font-autograph hover:scale-150 duration-200">About</li>
        </a>
        <a className='cursor-pointer' href='#portfolio'>
        <li className="m-5 text-2xl font-autograph hover:scale-150 duration-200">Portfolio</li>
        </a>
        <a className='cursor-pointer' href='#skills'>
        <li className="m-5 text-2xl font-autograph hover:scale-150 duration-200">Skills</li>
        </a>
        <a className='cursor-pointer' href='#contact'>
        <li className="m-5 text-2xl font-autograph hover:scale-150 duration-200">Contact</li>
        </a>
      </ul>
      <div className="mr-2 md:hidden z-10"
      onClick={() => {
        setToggle(!toggle);
        console.log(toggle);
      }}>
      {toggle ? <CiMenuBurger size={30} /> : <ImCross size={30} /> }
      </div>
      {/* overlay */}
      {!toggle ? (
      <div className='fixed h-screen w-full bg-black top-0 left-0
      flex items-center justify-center'>
      <ul className="m-7 text-white">
        <li className="m-5 p-2 text-4xl font-autograph ">Home</li>
        <li className="m-5 p-2 text-4xl font-autograph ">About</li>
        <li className="m-5 p-2 text-4xl font-autograph ">Portfolio</li>
        <li className="m-5 p-2 text-4xl font-autograph ">Skills</li>
        <li className="m-5 p-2 text-4xl font-autograph ">Contact</li>
      </ul>
      </div>
      ): null }
    </div>
    </section>  )
}

export default Header


