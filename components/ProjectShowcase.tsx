
import React from 'react';
import { Project } from '../types';

interface ProjectShowcaseProps {
  projects: Project[];
  github?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, github }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400">A collection of my recent work and open-source contributions.</p>
        </div>
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors"
          >
            View GitHub Profile
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-3xl glass border border-white/5 hover:border-blue-500/30 transition-all flex flex-col">
            <div className="aspect-video overflow-hidden bg-gray-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/800/600`;
                }}
              />
            </div>
            <div className="p-8 flex-grow">
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-2 py-0.5 bg-white/5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            <div className="p-8 pt-0 flex gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  className="flex-1 py-3 text-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all font-semibold text-sm"
                >
                  Source Code
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  className="flex-1 py-3 text-center rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold text-sm text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
