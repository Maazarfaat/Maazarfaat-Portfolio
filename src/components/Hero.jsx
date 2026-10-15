import { useEffect, useState } from "react";
import { profile } from "../data/profile.js";

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", onMotionChange);
    return () => mediaQuery.removeEventListener("change", onMotionChange);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#F7F5EF] text-[#202020] flex flex-col justify-between px-5 sm:px-8 lg:px-14 pt-24 sm:pt-28 pb-24 sm:pb-36 lg:pb-52 overflow-hidden"
    >
      {/* Subtle Editorial Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-editorial-grid pointer-events-none opacity-25"
      />

      {/* TOP HEADER STATUS BEAT */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D9D6CF] shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5E3C] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5E3C]" />
          </span>
          <span className="font-mono text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase text-[#202020]">
            {profile.hero.status}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#575550]">
          <span className="px-2.5 py-1 rounded-md bg-white border border-[#D9D6CF] font-semibold text-[#202020]">
            {profile.academic.currentYear} · B.Tech IT
          </span>
          <span className="text-[#88857D]">·</span>
          <span>CGPA {profile.academic.cgpa}</span>
        </div>
      </div>

      {/* =================================================================== */}
      {/* REFERENCE-INSPIRED EDITORIAL COMPOSITION                            */}
      {/* Upper-Left: SOFTWARE DEVELOPER heading + tech tags                 */}
      {/* Lower-Left: Profile Photograph with original dimensions & caption   */}
      {/* Right: Supporting line, Badges, Prominent MOHAMMED MAAZ ARFAAT.     */}
      {/* =================================================================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto my-auto py-6 sm:py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start min-w-0">
        
        {/* LEFT COLUMN: PROFESSION ON UPPER-LEFT & PORTRAIT IN LOWER-LEFT */}
        <div
          className={`lg:col-span-6 xl:col-span-6 flex flex-col justify-between min-w-0 ${
            prefersReducedMotion ? "" : "animate-hero-entrance"
          }`}
        >
          {/* Upper-Left: Heading & Tech Tags */}
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#8B5E3C] inline-flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#8B5E3C]" />
              01 / {profile.hero.eyebrow || "PORTFOLIO · 2026"}
            </span>

            <p role="doc-subtitle" className="font-display font-black text-[clamp(2.1rem,4.1vw,4.25rem)] uppercase tracking-[-0.035em] text-[#202020] leading-[0.92] mt-1 sm:mt-2">
              <span className="block">SOFTWARE</span>
              <span className="block">DEVELOPER</span>
            </p>

            {/* Relevant technology tags beneath heading */}
            <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white border border-[#D9D6CF] text-xs font-mono font-medium text-[#575550] shadow-2xs">
                DATA SCIENCE
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#D9D6CF] text-xs font-mono font-medium text-[#575550] shadow-2xs">
                WEB DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Lower-Left: Complete Profile Photograph */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div
              style={{ aspectRatio: "2230 / 2489" }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[370px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9D6CF] bg-[#FAF9F5] shadow-[0_16px_40px_-15px_rgba(21,24,30,0.1)] group transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={profile.photo}
                alt="Mohammed Maaz Arfaat"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-mono">
                <span className="font-medium drop-shadow-md text-[0.7rem] sm:text-xs">
                  {profile.academic.institution}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/95 text-[#202020] text-[0.65rem] font-bold backdrop-blur-md shadow-xs">
                  Hyderabad, IN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SUPPORTING LINE, BADGES, PROMINENT NAME & CTAs */}
        <div
          className={`lg:col-span-6 xl:col-span-6 flex flex-col justify-between min-w-0 pt-2 lg:pt-3 ${
            prefersReducedMotion ? "" : "animate-hero-entrance"
          }`}
        >
          <div>
            {/* Short supporting line above name */}
            <div className="mb-4 sm:mb-5">
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#575550]">
                BUILDING USEFUL THINGS WITH TECHNOLOGY.
              </p>
            </div>

            {/* Academic & Google Student Ambassador Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
              <span className="px-3 py-1 rounded-full bg-white border border-[#D9D6CF] text-xs font-mono font-semibold text-[#202020] shadow-2xs">
                {profile.academic.currentYear} · B.Tech IT · CGPA {profile.academic.cgpa}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF5F0] border border-[#8B5E3C]/30 text-[#8B5E3C] text-xs font-mono font-bold shadow-2xs">
                Google Student Ambassador '26
              </span>
            </div>

            {/* PROMINENT NAME BLOCK: MOHAMMED MAAZ in charcoal, ARFAAT. in warm brown */}
            <h1 className="font-display font-black uppercase tracking-[-0.035em] text-[#202020] leading-[0.9] text-[clamp(2.1rem,4.1vw,4.25rem)]">
              <span className="block text-[#202020]">MOHAMMED</span>
              <span className="block text-[#202020]">MAAZ</span>
              <span className="block text-[#8B5E3C] mt-1 sm:mt-1.5">
                ARFAAT.
              </span>
            </h1>

            {/* CTAs (NO ARROW ICONS) */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-[#202020] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#8B5E3C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] transition-colors active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>Explore Projects</span>
              </a>

              <a
                href="#achievements"
                className="inline-flex items-center justify-center rounded-xl border border-[#D9D6CF] bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#202020] hover:border-[#202020] hover:bg-[#FAF9F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] transition-colors active:scale-[0.98] shadow-xs w-full sm:w-auto text-center"
              >
                <span>Verified Honors</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BEAT: UNDERSTATED METADATA & CLEAR SCROLL-TO-EXPLORE CUE */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-4 border-t border-[#D9D6CF] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#575550]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#202020]">
            {profile.academic.name}
          </span>
          <span className="text-[#88857D]">·</span>
          <span>{profile.academic.degree}</span>
        </div>

        <a
          href="#projects"
          className="group inline-flex items-center gap-2.5 uppercase tracking-widest text-[0.68rem] font-bold text-[#202020] hover:text-[#8B5E3C] transition-colors"
        >
          <span>{profile.hero.scrollHint}</span>
          <span className="relative h-px w-12 bg-[#D9D6CF] overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-4 bg-[#8B5E3C] animate-pulse" />
          </span>
        </a>
      </div>
    </section>
  );
}
