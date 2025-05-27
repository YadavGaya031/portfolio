import React from 'react';
import Button from '@mui/material/Button';
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import projects from '../assets/projects.png'

const Work = () => {
  return (
    <div className='h-auto w-full bg-[#303030] text-white py-10'>
      <h1 className='text-4xl md:text-6xl font-bold mx-4 md:mx-20'>
        Crafted with <span className='text-red-400'>love</span>.
      </h1>
      <h3 className='text-xl md:text-2xl font-bold mx-4 md:mx-20 mt-1'>
        these are few of my recent works
      </h3>

      {/* Optional: Add real image src here later */}
      <div className="flex justify-center items-center mt-20 px-2 md:px-4">
        <img
          src={projects}
          alt="Projects Preview"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>
       <div className="flex justify-end items-center mx-10 md:mx-20 gap-2 mt-6">
            <Button
                variant="contained"
                href="https://www.linkedin.com/in/gayasingh031/"
                className="!rounded-full !min-w-[50px] !w-[50px] !h-[50px] !p-0 flex justify-center items-center"
            >
                <MdOutlineSubdirectoryArrowRight size={24} />
            </Button>
            <p className="text-white text-xl md:text-2xl">see all my <br /> work</p>
        </div>
    </div>
  );
};

export default Work;
