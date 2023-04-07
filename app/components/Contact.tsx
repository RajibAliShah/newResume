import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div>
        <div className='mt-32 mx-auto'>
            <h1 className='text-center text-white text-4xl'>Contact</h1>
            <p className='text-center text-white my-5'>Please! feel free to ask me anthing</p>
            <form
  action="https://formspree.io/f/mzbqjyoy"
  method="POST">
                <div className='mx-auto text-center'>
                    <input 
                    required
                    placeholder='Your Name' 
                    type={"text"}
                    className="p-2 bg-transparent w-80 rounded-md focus:outline-none text-white border-2" 
                    />
                </div>
                <div className='mx-auto text-center'>
                    <input 
                    required
                    placeholder='Your Email' 
                    type={"email"}
                    name="email"
                    className="mt-5 p-2 bg-transparent w-80 rounded-md focus:outline-none text-white border-2"
                    />
                </div>
                <div className='mx-auto text-center'>
                    <textarea 
                    required
                    name="message"
                    rows={6}
                    placeholder='Your Message...' 
                    className="mt-5 p-2 bg-transparent w-80 rounded-md focus:outline-none text-white border-2"
                    />
                </div>
                <button
                type='submit'
                className='mx-auto mb-5 mt-5 block px-5 rounded-md bg-gradient-to-b from-gray-300 t0-gray-600 text-black'
                >Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
