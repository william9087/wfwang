import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { PORTFOLIO_DATA } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 303;

const VideoIntro: React.FC = () => {
  const containerRef          = useRef<HTMLDivElement>(null);
  const canvasRef             = useRef<HTMLCanvasElement>(null);
  const images                = useRef<HTMLImageElement[]>([]);
  const currentFrame          = useRef(0);
  const heroAnimating         = useRef(false);
  const timers                = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollCheckCleanup    = useRef<(() => void) | null>(null);
  const lastFrameTriggered    = useRef(false);

  // Lock handler refs
  const lockFns = useRef<{
    wheel?: (e: WheelEvent)    => void;
    touch?: (e: TouchEvent)    => void;
    key?:   (e: KeyboardEvent) => void;
  }>({});

  // Animated element refs
  const heroOverlayRef  = useRef<HTMLDivElement>(null);
  const leftRobotRef    = useRef<HTMLDivElement>(null);
  const rightHumanRef   = useRef<HTMLDivElement>(null);
  const badgeRef        = useRef<HTMLDivElement>(null);
  const titleRef        = useRef<HTMLDivElement>(null);
  const descRef         = useRef<HTMLDivElement>(null);
  const buttonsRef      = useRef<HTMLDivElement>(null);
  const scrollHintRef   = useRef<HTMLDivElement>(null);

  // ── Canvas ───────────────────────────────────────────────────────────────────

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = images.current[index];
    if (!ctx || !img || !img.complete) return;
    const ca = canvas.width / canvas.height;
    const ia = img.naturalWidth / img.naturalHeight;
    let dw, dh, ox, oy;
    if (ca > ia) {
      dw = canvas.width; dh = dw / ia; ox = 0; oy = (canvas.height - dh) / 2;
    } else {
      dh = canvas.height; dw = dh * ia; ox = (canvas.width - dw) / 2; oy = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, ox, oy, dw, dh);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrame.current);
  };

  // ── Scroll lock ───────────────────────────────────────────────────────────────

  const lockScroll = () => {
    const wheelFn = (e: WheelEvent)    => e.preventDefault();
    const touchFn = (e: TouchEvent)    => e.preventDefault();
    const keyFn   = (e: KeyboardEvent) => {
      if (["ArrowDown","ArrowUp","PageDown","PageUp","Space"].includes(e.code))
        e.preventDefault();
    };
    lockFns.current = { wheel: wheelFn, touch: touchFn, key: keyFn };
    window.addEventListener("wheel",     wheelFn, { passive: false });
    window.addEventListener("touchmove", touchFn, { passive: false });
    document.addEventListener("keydown", keyFn);
  };

  const unlockScroll = () => {
    const { wheel, touch, key } = lockFns.current;
    if (wheel) window.removeEventListener("wheel",     wheel);
    if (touch) window.removeEventListener("touchmove", touch);
    if (key)   document.removeEventListener("keydown", key);
    lockFns.current = {};
  };

  // ── Mount ─────────────────────────────────────────────────────────────────────

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loaded = 0;
    images.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
      img.onload = () => { if (++loaded === 1) resizeCanvas(); };
      return img;
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fadeHint = () => {
      if (scrollHintRef.current) {
        scrollHintRef.current.style.transition = "opacity 0.4s ease";
        scrollHintRef.current.style.opacity    = "0";
      }
      window.removeEventListener("scroll", fadeHint);
    };
    window.addEventListener("scroll", fadeHint, { passive: true });

    // GSAP drives canvas frames via scroll progress
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        const index = Math.min(TOTAL_FRAMES - 1, Math.floor(self.progress * TOTAL_FRAMES));
        if (index !== currentFrame.current) {
          currentFrame.current = index;
          drawFrame(index);
        }
      },
    });

    // Wheel guard: intercept BEFORE the browser scrolls past the boundary.
    // passive:false + preventDefault() stops momentum/inertia from overshooting.
    const endY = container.offsetTop + container.offsetHeight - window.innerHeight;
    const wheelGuard = (e: WheelEvent) => {
      if (window.scrollY >= endY && e.deltaY > 0 && !heroAnimating.current && !lastFrameTriggered.current) {
        e.preventDefault();
        lastFrameTriggered.current = true;
        window.removeEventListener("wheel", wheelGuard); // remove immediately so it never blocks post-animation
        triggerHeroReveal();
      }
    };
    const attachWheelGuard = () => window.addEventListener("wheel", wheelGuard, { passive: false });
    attachWheelGuard();

    // Scroll fallback for touch / keyboard (fires after the fact but kept for safety)
    const onScrollFallback = () => {
      if (heroAnimating.current || lastFrameTriggered.current) return;
      if (window.scrollY >= endY) {
        lastFrameTriggered.current = true;
        triggerHeroReveal();
      }
    };
    window.addEventListener("scroll", onScrollFallback, { passive: true });

    // ── Reset all hero elements to hidden ─────────────────────────────────────
    const resetHero = () => {
      const snap = (el: HTMLDivElement | null, y = 28) => {
        if (!el) return;
        el.style.transition = "none";
        el.style.opacity    = "0";
        el.style.transform  = `translateY(${y}px)`;
      };
      snap(badgeRef.current);
      snap(titleRef.current);
      snap(descRef.current);
      snap(buttonsRef.current);
      snap(leftRobotRef.current,  60);
      snap(rightHumanRef.current, 60);
      if (heroOverlayRef.current) {
        heroOverlayRef.current.style.transition = "opacity 0.6s ease";
        heroOverlayRef.current.style.opacity    = "0";
      }
    };

    // ── Arm scroll-back watcher ───────────────────────────────────────────────
    const armScrollBack = () => {
      const onScrollBack = () => {
        const end = container.offsetTop + container.offsetHeight - window.innerHeight;
        if (window.scrollY < end * 0.80) {
          window.removeEventListener("scroll", onScrollBack);
          timers.current.forEach(clearTimeout);
          timers.current = [];
          unlockScroll();
          heroAnimating.current  = false;
          lastFrameTriggered.current = false;
          resetHero();
          attachWheelGuard(); // re-arm for next scroll-through
        }
      };
      window.addEventListener("scroll", onScrollBack, { passive: true });
    };

    // ── Hero reveal sequence ──────────────────────────────────────────────────
    const triggerHeroReveal = () => {
      if (heroAnimating.current) return;
      heroAnimating.current = true;

      const end = container.offsetTop + container.offsetHeight - window.innerHeight;
      window.scrollTo(0, end);

      // Force the canvas to the last frame immediately
      currentFrame.current = TOTAL_FRAMES - 1;
      drawFrame(TOTAL_FRAMES - 1);

      lockScroll();

      const animateIn = (el: HTMLDivElement | null, delay: number, duration = 1.0) => {
        if (!el) return;
        const t = setTimeout(() => {
          el.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
          el.style.opacity    = "1";
          el.style.transform  = "translateY(0px)";
        }, delay);
        timers.current.push(t);
      };

      if (heroOverlayRef.current) {
        heroOverlayRef.current.style.transition = "opacity 0.8s ease";
        heroOverlayRef.current.style.opacity    = "1";
      }

      animateIn(badgeRef.current,        900);
      animateIn(titleRef.current,        900);
      animateIn(descRef.current,        2000);
      animateIn(buttonsRef.current,     3100);
      animateIn(leftRobotRef.current,   4200, 1.3);
      animateIn(rightHumanRef.current,  4200, 1.3);

      const unlockTimer = setTimeout(() => {
        unlockScroll();
        armScrollBack();
      }, 6000);
      timers.current.push(unlockTimer);
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", fadeHint);
      window.removeEventListener("scroll", onScrollFallback);
      window.removeEventListener("wheel", wheelGuard);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      timers.current.forEach(clearTimeout);
      unlockScroll();
    };
  }, []);

  const { education, bio } = PORTFOLIO_DATA;

  return (
    <div ref={containerRef} style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#030712]">

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Dark blurred overlay */}
        <div
          ref={heroOverlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0,
            background: "rgba(3, 7, 18, 0.84)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        />

        {/* Left robot */}
        <div
          ref={leftRobotRef}
          className="absolute bottom-0 -left-[10%] lg:-left-[5%] z-10 hidden lg:block h-[85vh] w-auto max-w-[30vw] pointer-events-none"
          style={{
            opacity: 0,
            transform: "translateY(60px)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <img src="/left_robot.webp" alt="" loading="eager"
            className="w-full h-full object-contain object-bottom" />
        </div>

        {/* Right human */}
        <div
          ref={rightHumanRef}
          className="absolute bottom-0 -right-[10%] lg:-right-[5%] z-10 hidden lg:block h-[85vh] w-auto max-w-[30vw] pointer-events-none"
          style={{
            opacity: 0,
            transform: "translateY(60px)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <img src="/right_human.webp" alt="" loading="eager"
            className="w-full h-full object-contain object-bottom" />
        </div>

        {/* Hero text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <div
            ref={badgeRef}
            className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
            style={{ opacity: 0, transform: "translateY(28px)" }}
          >
            {education.degree} @ {education.university}
          </div>

          <div ref={titleRef} style={{ opacity: 0, transform: "translateY(28px)" }} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-gradient">Wei Fan</span>.
            </h1>
          </div>

          <div ref={descRef} style={{ opacity: 0, transform: "translateY(28px)" }} className="mb-8">
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {bio}
            </p>
          </div>

          <div
            ref={buttonsRef}
            style={{ opacity: 0, transform: "translateY(28px)" }}
            className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto"
          >
            <a href="#projects"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-white/20">
              View Projects
            </a>
            <a href="/resume.pdf" download="Wei_Fan_Wang_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-bold rounded-xl hover:bg-blue-500/10 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Download Resume
            </a>
            <a href="#contact"
              className="px-8 py-4 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase animate-bounce pointer-events-none"
        >
          <span>Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default VideoIntro;
