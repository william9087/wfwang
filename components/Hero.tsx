import React, { useEffect, useState } from "react";

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [showBadge, setShowBadge] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSideImages, setShowSideImages] = useState(false);

  useEffect(() => {
    // First animation: Badge appears from bottom after 300ms
    const timer1 = setTimeout(() => setShowBadge(true), 300);

    // Second animation: Title appears from bottom after 1200ms
    const timer2 = setTimeout(() => setShowTitle(true), 1000);

    // Third animation: Description and buttons appear from bottom after 2100ms
    const timer3 = setTimeout(() => setShowDescription(true), 1800);

    // Fourth animation: Side images appear from bottom after 2400ms
    const timer4 = setTimeout(() => setShowSideImages(true), 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let requestRef: number;
    const handleScroll = () => {
      // This tells the browser: "Update the state ONLY when you're ready to draw"
      requestRef = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-12 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 -right-12 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Left Robot Image */}
      <div
        className="absolute bottom-0 left-0 z-0 hidden lg:block h-[85vh] w-auto max-w-[35vw] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          opacity: showSideImages ? Math.max(0, 1 - scrollY / 1300) : 0,
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 95%)",
        }}
      >
        <img
          src="/left_robot.webp"
          alt=""
          decoding="async"
          className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${showSideImages ? scrollY * 0.4 : 80}px, 0)`,
          }}
        />
      </div>

      {/* Right Human Image */}
      <div
        className="absolute bottom-0 right-0 z-0 hidden lg:block h-[85vh] w-auto max-w-[35vw] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          opacity: showSideImages ? Math.max(0, 1 - scrollY / 1300) : 0,
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 95%)",
        }}
      >
        <img
          src="/right_human.webp"
          alt=""
          decoding="async"
          className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: `translate3d(0, ${showSideImages ? scrollY * 0.4 : 80}px, 0)`,
          }}
        />
      </div>

      <div className="z-10 text-center max-w-4xl space-y-6">
        {/* FIRST: Badge - M.S. IN COMPUTER SCIENCE @ GEORGIA STATE UNIVERSITY */}
        <div
          className={`inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-1000 ease-out ${
            showBadge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {data.education.degree} @ {data.education.university}
        </div>

        {/* SECOND: Title - Hi, I'm Wei Fan. */}
        <h1
          className={`text-6xl md:text-8xl font-extrabold tracking-tight transition-all duration-1000 ease-out ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          Hi, I'm <span className="text-gradient">Wei Fan.</span>
        </h1>

        {/* THIRD: Description and Buttons */}
        <div
          className={`transition-all duration-1000 ease-out ${
            showDescription
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {data.role}. {data.bio}
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-white/20"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Wei_Fan_Wang_Resume.pdf"
              target="_blank"
              className="px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-bold rounded-xl hover:bg-blue-500/10 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
