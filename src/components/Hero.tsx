import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Parallax } from 'react-parallax';
import { Download, Sparkles } from 'lucide-react';
import cv from '../assets/cv.pdf';


export const Hero: React.FC = () => {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      strength={200}
      className="h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90" />
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Web Developer & Designer
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-cyan-300"
          >
            Creating beautiful, functional websites
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative px-8 py-3 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
              <span className="relative flex items-center space-x-2 text-white">
                <span>View Projects</span>
                <Sparkles size={18} />
              </span>
            </Link>
           <a href={cv} download="My_CV.pdf" className="group relative px-8 py-3 rounded-full overflow-hidden bg-transparent border-2 border-white hover:border-cyan-400 transition-colors">
  <span className="relative flex items-center space-x-2">
    <Download size={20} />
    <span>Download CV</span>
  </span>
</a>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
};