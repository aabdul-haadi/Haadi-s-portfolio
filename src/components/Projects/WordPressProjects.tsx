import React from 'react';
import { ProjectCard } from './ProjectCard';

const wordpressProjects = [
  {
    title: "Port-Folio Website",
    description: "Custom WordPress theme development with modern design.",
    image: "/src/assets/pf.png",
    tech: ["WordPress", "PHP", "MySQL", "JavaScript"],
    link: "https://portfolio.abdulhadishamim.com/" // Replace with the actual URL
  },
  {
    title: "E-Commerce Store",
    description: "Online shopping platform with secure payments.",
    image: "/src/assets/event.png",
    tech: ["WooCommerce", "React", "Stripe"],
    link: "https://vr360solution.blogspot.com/" // Replace with the actual URL
  },
  {
    title: "Event Management Site",
    description: "A platform for booking and managing events.",
    image: "/src/assets/shopping.png",
    tech: ["WordPress", "PHP", "Tailwind CSS"],
    link: "https://elitegatherting.abdulhadishamim.com/" // Replace with the actual URL
  },
];

export const WordPressProjects: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          WordPress Projects
        </h2>
        
        {/* ✅ Flexbox Layout: Always 4 in a row, responsive */}
        <div className="flex flex-wrap justify-center gap-6">
          {wordpressProjects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
