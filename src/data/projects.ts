// import React from 'react';
// import { ProjectCard } from './ProjectCard';

// Importing local images
import digitalAgencyImg from "/src/assets/agency.png";
import clockImg from "/src/assets/clock.png";
import shoesImg from "/src/assets/shoes.png";
import loginImg from "/src/assets/login.png";
import talktoAllahImg from "/src/assets/talktoAllah.png";
import wheelImg from "/src/assets/wheel.webp";
import breakfastImg from "/src/assets/breakfast.png";
import earthOrbitImg from "/src/assets/earth-orbit.png";
import interiorDesign from "/src/assets/interiorz.png";
// import milapImg from "/src/assets/milap.png";
// import regisImg from "/src/assets/regis.png";
// import everificationImg from "/src/assets/everification.png";

export const projects = [
  {
    title: "Talk To Allah",
    description: "A spiritual guide app for daily reminders and prayers.",
    image: talktoAllahImg,
    link: "https://talk-to-allah.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"]
  },

  {
    title: "Interior Design Platform",
    description: "A sleek and interactive interior design platform built with ReactJS, TailwindCSS, and Framer Motion for an engaging user experience.",
    image: interiorDesign, // Update with the appropriate image for the Interior Design platform
    link: "https://interior-design-website-ashy.vercel.app/",
    tech: ["HTML", "ReactJs", "TailwindCSS", "Framer Motion"]
},

  {
    title: "Login & Quiz Platform",
    description: "A responsive login and registration page design.",
    image: loginImg,
    link: "https://quiz-ctdr618dp-abdul-haadis-projects-ef84c69f.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Restaurant Website",
    description: "Modern Animated Restaurant Website using ReactJS + Tailwind + Framer-Motion.",
    image: breakfastImg,
    link: "https://food-app-tau-lovat.vercel.app/",
    tech: ["HTML", "ReactJs", "TailwindCSS"]
  },
  {
    title: "EarthOrbit Website",
    description: "A futuristic space exploration website built with ReactJS, TailwindCSS, and Framer Motion.",
    image: earthOrbitImg,
    link: "https://earth-orbit-nine.vercel.app/",
    tech: ["HTML", "ReactJs", "TailwindCSS", "Framer Motion"]
  },
{
  title: "Digital Agency",
  description: "A digital agency website built with React and styled using Tailwind CSS.",
  image: digitalAgencyImg,
  link: "https://agnecy-website-pearl.vercel.app/",
  tech: ["React", "Tailwind CSS", "JavaScript"]
},

  {
    title: "Clock",
    description: "A digital clock with elegant design and real-time updates.",
    image: clockImg,
    link: "https://discount-apply.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Wheel Project",
    description: "A fun spinning wheel project for gamification and selection.",
    image: wheelImg,
    link: "https://spin-wheel-bice.vercel.app/",
    tech: ["JavaScript", "CSS", "HTML"]
  },
     {
    title: "Discount Calculator",
    description: "A tool to calculate discounts and savings in real-time.",
    image: shoesImg,
    link: "https://discount-apply.vercel.app/",
    tech: ["HTML", "JavaScript", "CSS"]
  },
];
export const professionalProjects = [
  {
    title: "Reveal",
    description: "An interactive web platform for revealing project details.",
    image: "src/assets/milap.png", // Replace with actual image path
    tech: ["React", "TailwindCSS", "Framer Motion"],
    gitLink: "https://github.com/shabbirfast/reveal",
  },
  {
    title: "Sindh Police - Tenant System",
    description: "A system for managing tenants and property information for Sindh Police.",
    image: "src/assets/regis.png", // Replace with actual image path
    tech: ["React", "Node.js", "Express", "MongoDB"],
    gitLink: "https://github.com/aabdul-haadi/Sindh-Police---Tenant-System",
  },
  {
    title: "MILAP",
    description: "A social platform to connect people.",
    image: "src/assets/milap.png", // Replace with actual image path
    tech: ["React", "TailwindCSS", "Firebase"],
    gitLink: "https://github.com/aabdul-haadi/MILAP_u",
  },
];

