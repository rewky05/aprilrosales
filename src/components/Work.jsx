import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import WashUp from '../assets/projects/washUp.jpg'
import SKStaCruz from '../assets/projects/skStaCruz.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#114084]'>Work</p>
                <p className='py-4'>Check out some of my recent work</p>
            </div>
            
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Cards */}
                <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Amanviro
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://rodcanete.github.io/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/RodCanete/RodCanete.github.io' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                            
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WashUp})`}} 
                className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wash Up Laundry
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://laundry-washup.netlify.app/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/rewky05/washup-laundry-new' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                            
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${SKStaCruz})`}} 
                className='shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SK Santa Cruz
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://sk-sta-cruz.vercel.app/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> 
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work