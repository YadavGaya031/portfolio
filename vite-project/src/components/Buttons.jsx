
import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { MdWavingHand } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CustomButton1 = styled(Button)({
  backgroundColor: '#58C2F9',
  color: 'white',
  fontSize: '20px',
  padding: '8px 20px',
  borderRadius: '40px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#115293',
  },
});

const CustomButton2 = styled(Button)({
  backgroundColor: '#FA5A5A',
  color: 'white',
  fontSize: '20px',
  padding: '8px 20px',
  borderRadius: '40px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#8c0e0e',
  },
});

const Buttons = () => {
  const leftBtn = useRef(null);
  const midBtn = useRef(null);
  const rightBtn = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftBtn.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(midBtn.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        scale: 2,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.from(rightBtn.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
    ref={containerRef}
    className='w-full bg-gradient-to-r from-[#1B1B1D] via-[#18191B] to-[#0F0F12] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-10'
  >
    <div ref={leftBtn}>
      <CustomButton1 variant="contained" href="https://www.instagram.com/gaya.ejs/">
        Say Hi &nbsp;<MdWavingHand />
      </CustomButton1>
    </div>

       <div ref={midBtn}>
      <CustomButton2 variant="contained" href="https://github.com/YadavGaya031" target="_blank" rel="noopener noreferrer">
        Watch My Repo &nbsp;<FaGithub />
      </CustomButton2>
    </div>

      <div ref={rightBtn}>
      <CustomButton1 variant="contained" href="https://drive.google.com/file/d/1KoDvUnFD3QAvZXN4NIqM43h5UC2wfVJ_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        Get my Resume &nbsp;<IoMdDocument />
      </CustomButton1>
    </div>
    </div>
  );
};

export default Buttons;
