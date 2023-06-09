import React from 'react'

const Skills = () => {
  return (
    <div id='skills'>
      
      <div className=' mt-32 mx-auto'>
      <h1 className='text-center text-white text-4xl'>Skills</h1>
      </div>
      {/* Row 1 */}
      <div className='m-10 gap-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        <div className=''>
        {/* Skill 1 */}
        <div>
            <img src='./images/html.png' alt='html' width={"40"} height="40" 
            className=' object-contain hover:-translate-y-2 duration-700'/>
            <p className='text-xl text-white' >HTML</p>
        </div>
      </div>
      <div>
        {/* Skill 2 */}
        <div>
            <img src='./images/css.png' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white' >CSS</p>
        </div>
      </div>
      <div>
        {/* Skill 3 */}
        <div>
            <img src='./images/js.png' alt='html' width={"60"} height="60" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white ' >Javascript</p>
        </div>
      </div>
      <div>
        {/* Skill 4 */}
        <div>
            <img src='./images/ts.png' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white ' >Typescript</p>
        </div>
      </div>
      </div>
      {/* Row  2*/}
      <div className='m-10 gap-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        <div>
        {/* Skill 5 */}
        <div>
            <img src='./images/chakra-ui.png' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white ' >Chakra-UI</p>
        </div>
      </div>
      <div>
        {/* Skill 6 */}
        <div>
            <img src='./images/tailwind.jpg' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white ' >TailwindCSS</p>
        </div>
      </div>
      <div>
        {/* Skill 7 */}
        <div>
            <img src='./images/react.png' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className='text-xl text-white ' >ReactJS</p>
        </div>
      </div>
      <div>
        {/* Skill 8 */}
        <div>
            <img src='./images/next.png' alt='html' width={"40"} height="40" className='hover:-translate-y-2 duration-700'/>
            <p className=' text-xl text-white ' >NextJS</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
