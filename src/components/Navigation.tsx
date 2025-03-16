import React from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

interface NavigationProps {
  navItems: string[];
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrolled: boolean;
  handleSetActive: (to: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  navItems,
  menuOpen,
  setMenuOpen,
  activeSection,
  scrolled,
  handleSetActive,
}) => {
  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation content from your original code */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <Code className="text-cyan-400" size={32} />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              ABDUL HAADI
            </h1>
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleSetActive}
                className={`cursor-pointer transition-all duration-300 px-6 py-2 rounded-full relative group ${
                  activeSection === item.toLowerCase()
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                }`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: activeSection === item.toLowerCase() ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full -z-10"
                />
                <motion.span
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
                {item}
              </Link>
            ))}
          </div>

          <motion.button 
            className="md:hidden relative"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={menuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                className="text-cyan-400"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-gray-800 border-t border-cyan-500/20"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 cursor-pointer transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};