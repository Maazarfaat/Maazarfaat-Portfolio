import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Projects() {
  const projects = profile.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isManualClickRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", onMotionChange);
    return () => mediaQuery.removeEventListener("change", onMotionChange);
  }, []);

  // Vertical scroll navigation for desktop (sticky progress mapping)
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (
        window.innerWidth < 1024 ||
        prefersReducedMotion ||
        isManualClickRef.current
      ) {
        return;
      }
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const stickyTop = 80; // top offset in pixels
      const scrolledInside = stickyTop - rect.top;

      if (scrolledInside <= 0) {
        if (activeIndexRef.current !== 0) {
          activeIndexRef.current = 0;
          setActiveIndex(0);
        }
        return;
      }
      if (scrolledInside >= totalScroll) {
        const lastIdx = projects.length - 1;
        if (activeIndexRef.current !== lastIdx) {
          activeIndexRef.current = lastIdx;
          setActiveIndex(lastIdx);
        }
        return;
      }

      const progress = scrolledInside / totalScroll; // 0 to 1
      const targetIndex = Math.min(
        projects.length - 1,
        Math.max(0, Math.floor(progress * projects.length))
      );

      if (targetIndex !== activeIndexRef.current) {
        activeIndexRef.current = targetIndex;
        setActiveIndex(targetIndex);
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    // Release programmatic scroll lock if user interacts via wheel/touch
    const onUserInterrupt = () => {
      if (isManualClickRef.current) {
        isManualClickRef.current = false;
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onUserInterrupt, { passive: true });
    window.addEventListener("touchmove", onUserInterrupt, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onUserInterrupt);
      window.removeEventListener("touchmove", onUserInterrupt);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [projects.length, prefersReducedMotion]);

  // Teardown timeouts on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  const handleSelectProject = (index) => {
    if (index === activeIndex) return;

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    setIsTransitioning(true);
    activeIndexRef.current = index;
    setActiveIndex(index);
    transitionTimeoutRef.current = setTimeout(() => setIsTransitioning(false), 220);

    // If on desktop with sticky scroll container, align window scroll smoothly
    if (
      window.innerWidth >= 1024 &&
      containerRef.current &&
      !prefersReducedMotion
    ) {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      isManualClickRef.current = true;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const stickyTop = 80;
      const targetScroll =
        containerTop - stickyTop + ((index + 0.5) / projects.length) * totalScroll;

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });

      clickTimeoutRef.current = setTimeout(() => {
        isManualClickRef.current = false;
      }, 600);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % projects.length;
      handleSelectProject(nextIndex);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + projects.length) % projects.length;
      handleSelectProject(prevIndex);
    }
  };

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section
      id="projects"
      ref={containerRef}
      className={`relative w-full bg-[#F7F5EF] text-[#202020] ${
        prefersReducedMotion
          ? "py-24 sm:py-28 lg:py-32"
          : "lg:h-[260vh] py-24 sm:py-28 lg:py-0"
      }`}
    >
      {/* Sticky showcase viewport on desktop; natural stack on mobile */}
      <div className="lg:sticky lg:top-20 lg:min-h-screen lg:flex lg:flex-col lg:justify-center w-full px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 sm:py-10 lg:py-12">
        {/* =================================================================== */}
        {/* FLOATING FEATURED PROJECT SHOWCASE (CLICK + SCROLL DRIVEN)          */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          
          {/* ----------------------------------------------------------------- */}
          {/* LEFT PANEL: COMPACT EDITORIAL SIDEBAR                             */}
          {/* ----------------------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between">
            <div>
              {/* Small uppercase label */}
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8B5E3C] font-mono mb-2">
                <span className="h-0.5 w-6 bg-[#8B5E3C]" />
                03 / SELECTED PROJECTS
              </span>

              {/* Strong heading */}
              <h2 className="font-display text-[clamp(1.75rem,2.8vw,2.5rem)] font-extrabold uppercase tracking-tight text-[#202020] leading-[1.08] mb-2 sm:mb-2.5">
                FEATURED WORK
              </h2>

              {/* Short concise introduction */}
              <p className="text-xs sm:text-sm text-[#575550] leading-relaxed mb-4 lg:mb-5 max-w-md">
                Five core software engineering builds spanning municipal hazard escalation, enterprise academic workflows, hostel management, athlete telemetry, and healthcare lifecycle systems.
              </p>

              {/* Project Selectors */}
              <div
                role="tablist"
                aria-label="Select project to preview"
                className="flex flex-col gap-2 sm:gap-2.5"
              >
                {projects.map((proj, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                    <button
                      key={proj.id}
                      type="button"
                      role="tab"
                      id={`project-tab-${proj.id}`}
                      aria-selected={isActive}
                      aria-controls={`project-panel-${proj.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => handleSelectProject(idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className={`group relative flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] ${
                        isActive
                          ? "bg-white border-[#202020] shadow-[0_10px_24px_-8px_rgba(21,24,30,0.12)] translate-x-0 lg:translate-x-1"
                          : "bg-white/40 border-[#E5E2DA] hover:bg-white hover:border-[#D9D6CF] hover:shadow-2xs opacity-75 hover:opacity-100"
                      }`}
                    >
                      {/* Active Accent Indicator Bar */}
                      <div
                        aria-hidden="true"
                        className={`w-1 rounded-full transition-all duration-300 shrink-0 self-stretch ${
                          isActive
                            ? "bg-[#8B5E3C]"
                            : "bg-transparent group-hover:bg-[#D9D6CF]"
                        }`}
                      />

                      {/* Thumbnail preview */}
                      <div className="relative w-12 h-8 sm:w-14 sm:h-9.5 rounded-md overflow-hidden border border-[#D9D6CF] bg-[#FAF9F5] shrink-0 p-0.5 flex items-center justify-center">
                        <img
                          src={proj.image}
                          alt=""
                          className="w-full h-full object-cover object-top rounded"
                          loading="lazy"
                        />
                      </div>

                      {/* Meta & Title */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-mono text-[0.65rem] font-bold text-[#8B5E3C] uppercase">
                            {proj.number}
                          </span>
                          <span className="text-[#88857D] text-[0.65rem]">·</span>
                          <span className="text-[0.65rem] font-medium text-[#88857D] truncate">
                            {proj.category}
                          </span>
                        </div>
                        <span
                          className={`font-display text-xs sm:text-sm font-bold tracking-tight block truncate ${
                            isActive
                              ? "text-[#202020]"
                              : "text-[#575550] group-hover:text-[#202020]"
                          }`}
                        >
                          {proj.name}
                        </span>
                      </div>

                      {/* Active dot */}
                      <div className="shrink-0 pr-1.5">
                        <span
                          className={`inline-block h-2 w-2 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-[#8B5E3C] scale-125"
                              : "bg-[#D9D6CF] group-hover:bg-[#88857D]"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* View All GitHub Control */}
              {profile.links?.github && (
                <div className="mt-4 pt-3.5 border-t border-[#E5E2DA]">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#202020] hover:text-[#8B5E3C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] rounded-lg px-2 py-1 -ml-2"
                  >
                    <span>VIEW ALL ON GITHUB</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#88857D] group-hover:text-[#8B5E3C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* RIGHT PANEL: COMPACT FLOATING FEATURED PRESENTATION               */}
          {/* ----------------------------------------------------------------- */}
          <div
            id={`project-panel-${activeProject.id}`}
            role="tabpanel"
            aria-labelledby={`project-tab-${activeProject.id}`}
            className="lg:col-span-7 xl:col-span-8 relative w-full"
          >
            {/* Elevated presentation frame with subtle float animation */}
            <div className="animate-float-slow motion-reduce:animate-none">
              <div className="rounded-3xl border border-[#D9D6CF] bg-white p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_-20px_rgba(21,24,30,0.12)] transition-all duration-300 hover:shadow-[0_24px_60px_-20px_rgba(21,24,30,0.16)]">
                {/* Header: Project Counter + Category + Step Progress Dots */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 mb-3 sm:mb-3.5 border-b border-[#E5E2DA]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2 w-2 rounded-full bg-[#8B5E3C] animate-pulse" />
                    <span className="font-mono text-xs font-extrabold text-[#202020] tracking-wider uppercase">
                      PROJECT {activeProject.number} / 05
                    </span>
                    <span className="text-[#88857D] font-mono text-xs">·</span>
                    <span className="text-xs font-semibold text-[#575550]">
                      {activeProject.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700">
                      {activeProject.status}
                    </span>

                    {/* Orientation progress dots */}
                    <div className="hidden sm:flex items-center gap-1 ml-2">
                      {projects.map((p, idx) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSelectProject(idx)}
                          aria-label={`Switch to project ${p.name}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeIndex === idx
                              ? "w-5 bg-[#8B5E3C]"
                              : "w-2 bg-[#D9D6CF] hover:bg-[#88857D]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Screenshot Showcase — Sleek compact height without distortion or cropping */}
                <div className="relative aspect-[16/8.2] sm:aspect-[16/8] max-h-[250px] sm:max-h-[275px] lg:max-h-[295px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#F3F0E8] via-[#FAF9F5] to-[#F3F0E8] border border-[#E5E2DA] p-2 sm:p-3 flex items-center justify-center shadow-inner">
                  <div
                    className={`relative w-full h-full flex items-center justify-center transition-all duration-200 ${
                      isTransitioning
                        ? "opacity-35 scale-[0.99]"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <img
                      key={activeProject.id}
                      src={activeProject.image}
                      alt={`${activeProject.name} UI Preview`}
                      className="w-full h-full object-contain rounded-lg sm:rounded-xl shadow-[0_8px_24px_-6px_rgba(21,24,30,0.16)] border border-black/5"
                    />
                  </div>
                </div>

                {/* Active Project Information Block */}
                <div className="mt-3 sm:mt-3.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-[#202020] tracking-tight leading-snug">
                      {activeProject.name}
                    </h3>
                  </div>

                  <p className="mt-0.5 font-display text-xs sm:text-sm font-bold text-[#8B5E3C]">
                    {activeProject.subtitle}
                  </p>

                  {/* Concise Description */}
                  <p className="mt-1.5 text-xs sm:text-sm text-[#575550] leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {activeProject.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-[#FAF9F5] border border-[#D9D6CF] text-[0.7rem] sm:text-xs font-semibold text-[#202020]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links / Action Bar */}
                  <div className="mt-3.5 sm:mt-4 pt-3 border-t border-[#E5E2DA] flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#202020] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#8B5E3C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5 text-[#8B5E3C]" />
                          <span>Repository</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {activeProject.linkedinUrl && (
                        <a
                          href={activeProject.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#6F492E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] transition-colors"
                        >
                          <Trophy className="w-3.5 h-3.5 text-amber-200" />
                          <span>Award Post</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[0.7rem] sm:text-xs text-[#88857D]">
                      System {activeProject.number} of 05
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
