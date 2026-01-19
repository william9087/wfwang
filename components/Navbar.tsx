import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/resume.pdf", target: "_blank" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5">
      <div className="text-xl font-bold tracking-tighter text-gradient">
        Wei Fan Wang
      </div>

      <div className="hidden md:flex space-x-2 text-sm font-medium text-gray-400">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            className="relative px-4 py-2 hover:text-blue-400 transition-colors"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span
              className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 transition-all duration-500 ease-out ${
                hoveredItem === item.name
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            />
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent transition-all duration-500 ease-out ${
                hoveredItem === item.name
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            />
            <span
              className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent transition-all duration-500 ease-out ${
                hoveredItem === item.name
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
            />
            <span className="relative z-10">{item.name}</span>
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#contact"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
