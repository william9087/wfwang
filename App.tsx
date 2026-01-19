import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";
import { PORTFOLIO_DATA } from "./constants";

const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(true);
          } else {
            setVisibleSection(false);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-blue-500/30">
      <Navbar />

      <main>
        <Hero data={PORTFOLIO_DATA} />
        <SkillsGrid skills={PORTFOLIO_DATA.skills} />
        <ExperienceTimeline experiences={PORTFOLIO_DATA.experiences} />
        <ProjectShowcase
          projects={PORTFOLIO_DATA.projects}
          github={PORTFOLIO_DATA.github}
        />

        {/* Academic Spotlight Section */}
        <section id="about" ref={aboutRef} className="py-24 px-6">
          <div
            className={`max-w-6xl mx-auto glass p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group transition-all duration-700 ease-out ${
              visibleSection
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-95"
            }`}
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 select-none uppercase pointer-events-none">
              Academic
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Education & <span className="text-gradient">Academics</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="text-2xl font-bold text-white tracking-tight">
                      {PORTFOLIO_DATA.education.degree}
                    </div>
                    <p className="text-blue-400 font-mono text-sm">
                      {PORTFOLIO_DATA.education.university} •{" "}
                      {PORTFOLIO_DATA.education.year}
                    </p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Academic Standing
                    </div>
                    <div className="text-4xl font-black text-white">
                      {PORTFOLIO_DATA.education.gpa}{" "}
                      <span className="text-lg font-normal text-gray-500">
                        GPA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-300">
                  Key Achievements
                </h3>
                <ul className="space-y-4">
                  {PORTFOLIO_DATA.education.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-400"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={PORTFOLIO_DATA} />
    </div>
  );
};

export default App;
