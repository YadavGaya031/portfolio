import React from 'react';
import Navbar from '../components/Navbar';
import background from '../assets/background.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.headline', {
      z: 20,
      filter: "blur(4px)",
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "power3.out",
      stagger: 0.1
    })
    .from('.para', {
      z: 20,
      filter: "blur(4px)",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.8
    }, "-=0.4"); // overlap animation start
  });

  return (
    <div
      className="relative w-full h-auto py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

      {/* Navbar fixed */}
      <Navbar />

      {/* Content with padding top equal to navbar height (h-16 = 64px) + extra margin */}
        <div className="relative z-10 pt-20 text-white max-w-4xl mx-auto text-center md:ml-20 md:text-left">
          <h1 className="headline text-4xl sm:text-5xl md:text-6xl font-medium leading-tight mt-10">
            <span>I am Gaya Singh - A</span><br />
            <span className="text-emerald-600">creative full Stack developer</span><br />
            <span>who creates experiences</span><br />
            <span>that are meant to be lived.</span>
          </h1>

          <p className="para text-lg sm:text-xl mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            A software engineer student with a strong foundation<br />
            in programming, excellent problem-solving skills, <br />
            and a deep interest in <span className="text-emerald-600">web development</span>, passionate about <br />
            learning and adapting to emerging technologies <br />
            in software development.
          </p>
        </div>
    </div>
  );
};

export default Home;
