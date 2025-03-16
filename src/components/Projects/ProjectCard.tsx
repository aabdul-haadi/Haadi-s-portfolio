import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link?: string;
    tech: string[];
  };
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg overflow-hidden group relative"
    >
      <div className="relative w-full h-60">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View Project</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};