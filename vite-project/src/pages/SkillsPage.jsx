import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your images
import c from '../assets/c.png';
import cpp from '../assets/c++.png';
import css from '../assets/css.jpeg';
import express from '../assets/express.png';
import figma from '../assets/figma.png';
import github from '../assets/github.png';
import gsapLogo from '../assets/gsap.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { img: html, name: 'HTML' },
  { img: css, name: 'CSS' },
  { img: js, name: 'JavaScript' },
  { img: react, name: 'React' },
  { img: node, name: 'Node.js' },
  { img: express, name: 'Express' },
  { img: java, name: 'Java' },
  { img: c, name: 'C' },
  { img: cpp, name: 'C++' },
  { img: mongo, name: 'MongoDB' },
  { img: mysql, name: 'MySQL' },
  { img: tailwind, name: 'Tailwind' },
  { img: github, name: 'GitHub' },
  { img: gsapLogo, name: 'GSAP' },
];

const designlogo = [
  { img: figma, name: 'Figma' }
];


const SkillsPage = () => {
  const techRef = useRef([]);
  const designRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(techRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
        },
        scale: 0.3,
        filter: 'blur(8px)',
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from(designRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
        },
        scale: 0.3,
        filter: 'blur(8px)',
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: techLogos.length * 0.2,
        ease: 'power3.out',
      });

      // Wave hover effect
      const waveEffect = (el) => {
        gsap.to(el, {
          scale: 1.1,
          skewX: 10,
          rotation: 3,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const resetEffect = (el) => {
        gsap.to(el, {
          scale: 1,
          skewX: 0,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      };

      techRef.current.forEach((el) => {
        el.addEventListener('mouseenter', () => waveEffect(el));
        el.addEventListener('mouseleave', () => resetEffect(el));
      });

      designRef.current.forEach((el) => {
        el.addEventListener('mouseenter', () => waveEffect(el));
        el.addEventListener('mouseleave', () => resetEffect(el));
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full h-auto pt-5 bg-[#222222]">
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-white font-bold pb-8 px-5 sm:px-10 text-center md:text-left">
        Things I'm <span className="text-blue-300">good</span> at
      </h1>

      <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold  px-5 sm:px-10 text-center md:text-left leading-tighter">
        skills, interests, hobbies, and passion
      </h3>


      <h3 className="h-15 w-65 mt-16 ml-20 text-4xl flex items-center justify-center rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300
  md:ml-20  // keep left margin on medium and above
  ml-auto    // default left margin auto (center horizontally)
  mr-auto    // default right margin auto (center horizontally)
  text-center // center text on mobile
">
        development
      </h3>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 px-5 md:px-20">
        {techLogos.map((logo, index) => (
          <div
            key={index}
            ref={(el) => (techRef.current[index] = el)}
            className="flex flex-col items-center justify-center p-4 bg-[#333333] rounded-lg shadow-md"
          >
            <img
              src={logo.img}
              alt={`tech-logo-${index}`}
              className="h-20 w-20 object-contain mb-2"
            />
            <span className="text-white text-lg font-medium">{logo.name}</span>
          </div>
        ))}
      </div>


      <h3 className="h-15 w-52 mt-16 ml-20 text-4xl flex items-center justify-center rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
        design
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 mr-5 pb-5 px:5 md:px-20">
        {designlogo.map((logo, index) => (
          <div
            key={index}
            ref={(el) => (designRef.current[index] = el)}
            className="flex flex-col items-center justify-center p-4 bg-[#333333] rounded-lg shadow-md"
          >
            <img
              src={logo.img}
              alt={`design-logo-${index}`}
              className="h-20 w-20 object-contain mb-2"
            />
            <span className="text-white text-lg font-medium">{logo.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SkillsPage;
