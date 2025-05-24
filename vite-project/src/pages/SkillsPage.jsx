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

const techLogos = [html, css, js, react, node, express, java, c, cpp, mongo, mysql, tailwind, github, gsapLogo];
const designlogo = [figma];

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
      <h1 className="text-7xl ml-20 pb-8 text-white font-bold">
        Things I'm <span className="text-blue-300">good</span> at
      </h1>
      <h3 className="text-3xl text-white ml-20 mt-3 font-bold">
        skills, interests, hobbies, and passion
      </h3>

      <h3 className="h-15 w-65 mt-16 ml-20 text-4xl flex items-center justify-center rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
        development
      </h3>

      <div className="flex gap-6 flex-wrap ml-20 mt-8">
        {techLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`tech-logo-${index}`}
            ref={(el) => (techRef.current[index] = el)}
            className="h-24 w-24 rounded-lg cursor-pointer"
          />
        ))}
      </div>

      <h3 className="h-15 w-52 mt-16 ml-20 text-4xl flex items-center justify-center rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
        design
      </h3>

      <div className="flex gap-6 flex-wrap ml-20 mt-8 pb-5">
        {designlogo.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`design-logo-${index}`}
            ref={(el) => (designRef.current[index] = el)}
            className="h-24 w-24 rounded-lg cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
