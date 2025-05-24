import React from 'react'

const About = () => {
  return (
    <>
        <div className='h-screen w-full bg-[#303030] '>
            <h1 className='text-9xl text-white font-bold ml-20 pt-10 tracking-tight px-10 '>
                you can get in touch<br />with me via{' '}

                <a href="mailto:singhgaya031@gmail.com" target="_blank" rel="noopener noreferrer"
                className="relative text-red-400 group hover:text-red-400 inline-block">
                <span className="before:content-[''] before:absolute before:left-1/2 before:top-[65%] before:-translate-y-1/2 before:-translate-x-1/2 before:h-[15px] before:w-0 group-hover:before:w-full before:bg-red-400 before:transition-all before:duration-300">
                mail
                </span>
                </a>{' '}or<br />

                <a href="https://www.instagram.com/gaya.ejs/" target="_blank" rel="noopener noreferrer"
                className="relative text-yellow-400 group hover:text-yellow-400 inline-block">
                <span className="before:content-[''] before:absolute before:left-1/2 before:top-[65%] before:-translate-y-1/2 before:-translate-x-1/2 before:h-[15px] before:w-0 group-hover:before:w-full before:bg-yellow-400 before:transition-all before:duration-500">
                instagram
                </span>
                </a>{' '}or{' '}

                <a href="https://www.linkedin.com/in/gayasingh031/" target="_blank" rel="noopener noreferrer"
                className="relative text-blue-400 group hover:text-blue-400 inline-block">
                <span className="before:content-[''] before:absolute before:left-1/2 before:top-[65%] before:-translate-y-1/2 before:-translate-x-1/2 before:h-[15px] before:w-0 group-hover:before:w-full before:bg-blue-400 before:transition-all before:duration-500">
                linkedin
                </span>
                </a>.
            </h1>
        </div>
    </>
  )
}

export default About