import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navItems = ["About", "Projects", "Skills", "Contact"];

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                About
              </h3>
              <p className="text-gray-400">
                Passionate web developer creating beautiful and functional digital experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <a href="mailto:ahaadi1001@gmail.com" className="hover:text-cyan-400 transition-colors">
                    ahaadi1001@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Github size={16} />
                  <a href="https://github.com/aabdul-haadi/" className="hover:text-cyan-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Linkedin size={16} />
                  <a href="https://www.linkedin.com/in/abdul-hadi-developer/" className="hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {new Date().getFullYear()} ABDUL HAADI.</span>
              <span>Made with</span>
              <Heart size={16} className="text-cyan-400" />
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob" />
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000" />
        </div>
      </div>
    </footer>
  );
};