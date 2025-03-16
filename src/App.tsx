import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ProfessionalProjects } from './components/Projects/ProfessionalProjects';
import { WordPressProjects } from './components/Projects/WordPressProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const navItems = ["About", "Projects", "Skills", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navigation
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
        handleSetActive={handleSetActive}
      />
      <Hero />
      <About />
      <ProfessionalProjects />
      <ProjectsSection />
      <WordPressProjects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;