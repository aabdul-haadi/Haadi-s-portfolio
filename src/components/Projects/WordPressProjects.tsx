import React from 'react';
import { ProjectCard } from './ProjectCard';
import pfImg from "/src/assets/pf.png";
import eventImg from "/src/assets/event.png";
import shoppingImg from "/src/assets/shopping.png";


const wordpressProjects = [
  {
    title: "Port-Folio Website",
    description: "Custom WordPress theme development with modern design.",
      image: pfImg,
    tech: ["WordPress", "PHP", "MySQL", "JavaScript"],
    link: "https://portfolio.abdulhadishamim.com/" // Replace with the actual URL
  },
  {
    title: "E-Commerce Store",
    description: "Affiliate marketing store on Blogspot.com using a custom template.",
    image: shoppingImg,
    tech: ["WooCommerce", "React", "Stripe"],
    link: "https://vr360solution.blogspot.com/" // Replace with the actual URL
  },
  {
    title: "Event Management Site",
    description: "A platform for booking and managing events.",
    image: eventImg,
    tech: ["WordPress", "PHP", "Tailwind CSS"],
    link: "https://elitegatherting.abdulhadishamim.com/" // Replace with the actual URL
  },
];

export const WordPressProjects: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
      

             <div className="flex justify-center w-full">
  <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-normal">
          WordPress Projects
  </h2>
</div>
        
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
