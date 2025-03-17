// import React from 'react';
// import { ProjectCard } from './ProjectCard';

// Importing local images
import chooseImg from "/src/assets/choose.png";
import clockImg from "/src/assets/clock.png";
import shoesImg from "/src/assets/shoes.png";
import loginImg from "/src/assets/login.png";
import talktoAllahImg from "/src/assets/talktoAllah.png";
import wheelImg from "/src/assets/wheel.webp";
import breakfastImg from "/src/assets/breakfast.png";
import earthOrbitImg from "/src/assets/earth-orbit.png";
import eTutorImg from "/src/assets/e-tutor.png";
import milapImg from "/src/assets/milap.png";
import regisImg from "/src/assets/regis.png";
import everificationImg from "/src/assets/everification.png";

export const projects = [
  {
    title: "Talk To Allah",
    description: "A spiritual guide app for daily reminders and prayers.",
    image: talktoAllahImg,
    link: "https://talk-to-allah.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "E-Tutor Platform",
    description: "An interactive online tutoring platform built with ReactJS, TailwindCSS, and Framer Motion for a smooth user experience.",
    image: eTutorImg,
    link: "/projects/e-tutor",
    tech: ["HTML", "ReactJs", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Login & Quiz Platform",
    description: "A responsive login and registration page design.",
    image: loginImg,
    link: "https://quiz-app-chi-puce-17.vercel.app/",
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
    link: "/projects/earth-orbit",
    tech: ["HTML", "ReactJs", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Choose Emotions",
    description: "An app designed to manage and track your emotions daily.",
    image: chooseImg,
    link: "/projects/choose-emotions/index.html",
    tech: ["HTML", "CSS/BootStrap", "JavaScript"]
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
    title: "Tenants Registration",
    description: "A comprehensive tenant registration and verification system for Sindh Police.",
    image: regisImg,
    link: "/projects/tenants-registration",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "E-verification",
    description: "Digital verification platform for streamlining police verification processes.",
    image: everificationImg,
    link: "/projects/e-verification",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "MILAP",
    description: "Mutual Integration Locating At-risk Person for enhanced police operations.",
    image: milapImg,
    link: "/projects/milap",
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },


];