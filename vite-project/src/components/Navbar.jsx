// import React from 'react';
// import logo from '../assets/logo.svg';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// const Navbar = () => {
//   useGSAP(() => {
//     gsap.from('.navbar', {
//       y: "-50px",
//       duration: 1,
//       filter: "blur(8px)",
//       opacity: 0.2,
//       ease: "power2.out"
//     });
//   });

//   return (
//     <div className='navbar fixed top-0 left-0 w-full h-16 flex justify-between items-center px-20 mt-8 bg-opacity-90 z-50'>
//       <img className='h-10 w-12' src={logo} alt="Logo" />
      
//     </div>
//   );
// };

// export default Navbar;


import React, { useEffect } from 'react';
import logo from '../assets/logo.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    // Navbar entrance animation
    gsap.from('.navbar', {
      y: '-50px',
      duration: 1,
      filter: 'blur(8px)',
      opacity: 0.2,
      ease: 'power2.out',
    });

    // Logo rotation on scroll
    gsap.to('#logo', {
      rotation: 360,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      ease: 'none',
    });
  }, []);

  return (
    <div className='navbar fixed top-0 left-0 w-full h-16 flex justify-end items-center px-5 md:px-20 mt-8 bg-opacity-90 z-50'>
      <img id="logo" className='h-10 w-12' src={logo} alt="Logo" />
    </div>
  );
};

export default Navbar;
