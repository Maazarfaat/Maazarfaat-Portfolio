import { useEffect, useRef, useState } from "react";

/**
 * ScrollTypography — Scroll-Driven Oversized Typography Section
 * Positioned immediately after Homepage Hero and before Projects.
 * Row 1 ("WEB DEVELOPMENT") smoothly translates left as user scrolls down.
 * Row 2 ("DATA SCIENCE") smoothly translates right in the opposite direction.
 * 
 * Subtle Background Variation & Generous Breathing Room:
 * - Background: Subtle warm neutral (#EEEAE2), creating an elegant, editorial
 *   differentiation from the warm ivory (#F7F5EF) hero and projects sections.
 * - Spacing: Generous vertical padding (pt-24 sm:pt-36 lg:pt-44, pb-28 sm:pb-40 lg:pb-52)
 *   providing intentional breathing space without abrupt visual collision.
 * - Exact Color Treatment:
 *   * WEB DEVELOPMENT: Dark charcoal (#202020) main phrase, light grey (#B8B6B0) slashes.
 *   * DATA SCIENCE: Light grey (#B8B6B0) main phrase, dark charcoal (#202020) slashes,
 *     and solid dark charcoal (#202020) repeated instances.
 */
export default function ScrollTypography() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", onMotionChange);
    return () => mediaQuery.removeEventListener("change", onMotionChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (row1Ref.current) row1Ref.current.style.transform = "translate3d(0, 0, 0)";
      if (row2Ref.current) row2Ref.current.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let rafId = null;

    const updateTransforms = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Skip calculation if section is far offscreen
      if (rect.bottom < -320 || rect.top > windowHeight + 320) return;

      // Center-anchored responsive scroll mapping:
      // Calibrated to the generous section padding so motion completes smoothly and responsively
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = viewportCenter - sectionCenter;

      // Concise active scroll window: faster response rate and fluid transitions
      const scrollRange = Math.min(Math.max(windowHeight * 0.62, 320), 560);
      const rawProgress = 0.5 + (distanceFromCenter / scrollRange) * 0.5;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      // Viewport-adaptive travel distance for energetic, readable movement
      const windowWidth = window.innerWidth;
      const travelDistance = Math.min(Math.max(windowWidth * 0.20, 100), 260);

      // Row 1 moves toward Left; Row 2 moves toward Right
      // At progress 0.5 (section centered in viewport), offset is exactly 0 and primary phrases are centered
      const row1Offset = (0.5 - clamped) * travelDistance;
      const row2Offset = (clamped - 0.5) * travelDistance;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translate3d(${row1Offset.toFixed(2)}px, 0, 0)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translate3d(${row2Offset.toFixed(2)}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Core Engineering Domains"
      className="relative w-full overflow-hidden bg-[#EEEAE2] py-24 sm:py-36 lg:py-52 select-none border-y border-[#D9D6CF]"
    >
      {/* Subtle edge gradient masks matching the #EEEAE2 background */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#EEEAE2] to-transparent z-10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#EEEAE2] to-transparent z-10 pointer-events-none"
      />

      {/* Small Editorial Section Header */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 mb-10 sm:mb-14 lg:mb-18">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-6 bg-[#8B5E3C]" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#8B5E3C]">
            02 / WHAT I BUILD
          </span>
          <span className="text-[#88857D] text-xs font-mono">· Systems &amp; Applied AI</span>
        </div>
      </div>

      {/* OVERSIZED DISPLAY TYPOGRAPHY TRACKS */}
      <div className="flex flex-col gap-6 sm:gap-10 lg:gap-14 w-full overflow-hidden">
        
        {/* ROW 1: WEB DEVELOPMENT (Moves toward Left on scroll down) */}
        {/* Exact Pattern: Main phrase dark charcoal (#202020), slashes light grey (#B8B6B0) */}
        <div
          ref={row1Ref}
          className="whitespace-nowrap will-change-transform flex items-center justify-center"
        >
          {/* Secondary repeat phrase on left */}
          <span className="font-display font-black uppercase text-[#202020]/25 text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 mr-6 sm:mr-10 select-none">
            WEB DEVELOPMENT
          </span>

          {/* Light grey slash separator */}
          <span className="font-display font-light italic text-[#B8B6B0] text-[clamp(1.4rem,3.8vw,4.5rem)] mr-6 sm:mr-10 shrink-0 select-none">
            /
          </span>

          {/* Primary High-Contrast Center Phrase: Dark Charcoal (#202020) */}
          <span className="font-display font-black uppercase text-[#202020] text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 select-none">
            WEB DEVELOPMENT
          </span>

          {/* Light grey slash separator */}
          <span className="font-display font-light italic text-[#B8B6B0] text-[clamp(1.4rem,3.8vw,4.5rem)] ml-6 sm:ml-10 shrink-0 select-none">
            /
          </span>

          {/* Secondary repeat phrase on right */}
          <span className="font-display font-black uppercase text-[#202020]/25 text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 ml-6 sm:ml-10 select-none">
            WEB DEVELOPMENT
          </span>
        </div>

        {/* ROW 2: DATA SCIENCE (Moves toward Right on scroll down) */}
        {/* Exact Pattern: Main phrase light grey (#B8B6B0), slashes dark charcoal (#202020), every repeat phrase dark charcoal (#202020) */}
        <div
          ref={row2Ref}
          className="whitespace-nowrap will-change-transform flex items-center justify-center"
        >
          {/* Repeated phrase on left: Solid Dark Charcoal (#202020) */}
          <span className="font-display font-black uppercase text-[#202020] text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 mr-6 sm:mr-10 select-none">
            DATA SCIENCE
          </span>

          {/* Dark charcoal slash separator */}
          <span className="font-display font-light italic text-[#202020] text-[clamp(1.4rem,3.8vw,4.5rem)] mr-6 sm:mr-10 shrink-0 select-none">
            /
          </span>

          {/* Primary Center Phrase: Light Grey (#B8B6B0) */}
          <span className="font-display font-black uppercase text-[#B8B6B0] text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 select-none">
            DATA SCIENCE
          </span>

          {/* Dark charcoal slash separator */}
          <span className="font-display font-light italic text-[#202020] text-[clamp(1.4rem,3.8vw,4.5rem)] ml-6 sm:ml-10 shrink-0 select-none">
            /
          </span>

          {/* Repeated phrase on right: Solid Dark Charcoal (#202020) */}
          <span className="font-display font-black uppercase text-[#202020] text-[clamp(1.85rem,5.2vw,6.4rem)] leading-[0.9] tracking-[-0.035em] shrink-0 ml-6 sm:ml-10 select-none">
            DATA SCIENCE
          </span>
        </div>

      </div>
    </section>
  );
}
