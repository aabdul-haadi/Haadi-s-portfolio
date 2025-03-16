import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="submit"
              className="w-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
              <span className="relative block py-3 text-white font-semibold">Send Message</span>
            </motion.button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <motion.a
              href="https://github.com/aabdul-haadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
              <motion.div
                className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abdul-hadi-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
              <motion.div
                className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.a>
            <motion.a
              href="mailto:ahaadi1001@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
              <motion.div
                className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};