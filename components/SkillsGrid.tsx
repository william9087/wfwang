import React, { useEffect, useRef, useState } from "react";
import { SkillCategory } from "../types";

interface SkillsGridProps {
  skills: SkillCategory[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(skills.length).fill(false)
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When scrolling INTO view: Stagger the appearance of each card
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200); // 200ms delay between each card
            });
          } else {
            // When scrolling OUT of view: Reset all cards to hidden
            // This makes the animation REUSABLE - it will play again when you scroll back
            setVisibleCards(new Array(skills.length).fill(false));
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 10% of the section is visible (better for mobile)
        rootMargin: "0px", // Remove negative margin for mobile compatibility
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills.length]);

  // Get the animation direction for each card
  // Card 0: from LEFT
  // Card 1: from TOP
  // Card 2: from RIGHT
  // Card 3: from BOTTOM
  // Pattern repeats for additional cards
  const getAnimationClass = (index: number) => {
    const directions = [
      "translate-x-[-100px]", // Card 0: slide from LEFT
      "translate-y-[-100px]", // Card 1: slide from TOP
      "translate-x-[100px]", // Card 2: slide from RIGHT
      "translate-y-[100px]", // Card 3: slide from BOTTOM
    ];
    return directions[index % 4];
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-gray-400">
          My toolkit for building modern applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, idx) => (
          <div
            key={idx}
            className={`glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-700 ease-out group ${
              visibleCards[idx]
                ? "opacity-100 translate-x-0 translate-y-0"
                : `opacity-0 ${getAnimationClass(idx)}`
            }`}
          >
            <h3 className="text-lg font-bold mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
