import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/18d684db-9787-4569-957f-0a2e69c9ff13" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#114084]'>Contact</p>
                <p className='py-4'>// Submit the form below or shoot me an email - rosales.april65@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="8" placeholder='Message'></textarea>
            <button className='border-2 border-white hover:bg-[#114084] hover:border-[#114084] hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact