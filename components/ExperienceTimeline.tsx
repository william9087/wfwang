
import React from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Work <span className="text-gradient">Journey</span></h2>
          <p className="text-gray-400">Internships and professional contributions.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 group">
              <div className="absolute left-0 top-1.5 w-[36px] h-[36px] bg-gray-900 border-4 border-blue-500 rounded-full z-10 group-hover:scale-125 transition-transform"></div>
              
              <div className="glass p-8 rounded-2xl hover:bg-white/5 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <div className="text-lg font-medium text-gray-300 mb-6">{exp.company}</div>
                
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-800 rounded border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
