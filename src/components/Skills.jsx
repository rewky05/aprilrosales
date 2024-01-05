import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import PHP from '../assets/php.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#114084]'>Skills</p>
                <p className='py-4'>// These are the technologies I worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={HTML} alt='HTML' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={CSS} alt='CSS' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={JavaScript} alt='JavaScript' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={PHP} alt='PHP' />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={ReactLogo} alt='ReactLogo' />
                    <p className='my-4'>REACTJS</p>
                </div>
                <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-3' src={Tailwind} alt='Tailwind' />
                    <p className='my-4'>TAILWIND</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills