import { useState, useRef, useEffect, useCallback } from "react";
import {
  Images,
  Award,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import AchievementLightbox from "./AchievementLightbox.jsx";

export default function Achievements() {
  const achievements = profile.achievements;
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);

  // Dynamically calculate physical distance between cards for exact scroll increments
  const getCardStep = useCallback(() => {
    if (!trackRef.current) return 350;
    const cards = trackRef.current.querySelectorAll("[data-achievement-card]");
    if (cards.length > 1) {
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }
    return cards[0]?.offsetWidth || 350;
  }, []);

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return;
    const step = getCardStep();
    const scrollAmount = direction === "left" ? -step : step;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleTrackKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByAmount("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByAmount("right");
    }
  };

  const openLightbox = (achievement, index = 0) => {
    setSelectedAchievement(achievement);
    setSelectedImageIndex(index);
  };

  return (
    <Section
      id="achievements"
      pyClassName="py-14 sm:py-18 lg:py-22"
      className="relative overflow-hidden border-t border-[#E5E2DA]"
    >
      {/* SECTION HEADER */}
      <div className="w-full mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#8B5E3C] font-mono mb-1.5 sm:mb-2">
          <span className="h-0.5 w-6 bg-[#8B5E3C]" />
          03 / EVIDENCE &amp; HONORS
        </span>
        <h2 className="font-display text-[clamp(1.5rem,2.7vw,2.65rem)] font-extrabold tracking-tight text-[#202020] leading-[1.15] md:whitespace-nowrap">
          Recognised for Showing Up &amp; Shipping
        </h2>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-[#575550] max-w-2xl">
          Verified honors from national hackathons, technical conferences, and leadership — backed by real photographic evidence.
        </p>
      </div>

      {/* =================================================================== */}
      {/* MANUAL HORIZONTAL CAROUSEL TRACK WITH CIRCULAR OVERLAPPING CONTROLS */}
      {/* Scrollable via arrows, touch swipe, trackpad, and Shift + wheel     */}
      {/* Never hijacks ordinary vertical page scroll                         */}
      {/* =================================================================== */}
      <div className="relative w-full group/carousel">
        {/* Prominent Circular Left Arrow Button — Vertically centered on card image area */}
        <button
          type="button"
          onClick={() => scrollByAmount("left")}
          disabled={!canScrollLeft}
          aria-label="Previous achievement card"
          className={`absolute left-0 sm:-left-3 lg:-left-6 top-[92px] sm:top-[104px] lg:top-[110px] -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white text-[#202020] border border-[#D9D6CF] shadow-[0_6px_20px_rgba(0,0,0,0.14)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)] hover:border-[#202020] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${
            canScrollLeft
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Prominent Circular Right Arrow Button — Vertically centered on card image area */}
        <button
          type="button"
          onClick={() => scrollByAmount("right")}
          disabled={!canScrollRight}
          aria-label="Next achievement card"
          className={`absolute right-0 sm:-right-3 lg:-right-6 top-[92px] sm:top-[104px] lg:top-[110px] -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white text-[#202020] border border-[#D9D6CF] shadow-[0_6px_20px_rgba(0,0,0,0.14)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)] hover:border-[#202020] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${
            canScrollRight
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Soft Left and Right Edge Gradient Masks */}
        <div
          aria-hidden="true"
          className={`absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F7F5EF] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F7F5EF] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* The Horizontal Track */}
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label="Achievements horizontal carousel"
          onKeyDown={handleTrackKeyDown}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 sm:gap-5 py-3 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C] rounded-2xl"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {achievements.map((item, idx) => {
            const hasImages = item.images && item.images.length > 0;
            const imageCount = item.images?.length || 0;

            return (
              <div
                key={item.id}
                data-achievement-card
                className="w-[min(290px,calc(100vw-3rem))] sm:w-[330px] lg:w-[350px] xl:w-[360px] shrink-0 flex flex-col rounded-2xl border border-[#D9D6CF] bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-[#202020] hover:shadow-[0_12px_28px_-8px_rgba(21,24,30,0.12)] group"
              >
                {/* Visual Media Preview Panel (Compact 16/9 ratio, uncropped) */}
                {hasImages ? (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(item, 0)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(item, 0);
                      }
                    }}
                    aria-label={`Inspect photographic proof for ${item.title}`}
                    className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF9F5] border-b border-[#E5E2DA] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Image Count Badge */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D9D6CF] text-[0.62rem] font-semibold text-[#202020] shadow-xs">
                      <Images className="w-2.5 h-2.5 text-[#8B5E3C]" />
                      <span>
                        {imageCount} {imageCount === 1 ? "photo" : "photos"}
                      </span>
                    </div>

                    {/* Award Badge Pill */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#202020]/90 backdrop-blur-md text-[0.62rem] font-bold tracking-wide text-white shadow-xs">
                      {item.award}
                    </div>

                    {item.prize && item.prize !== item.award && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-amber-500/90 text-[0.6rem] font-mono font-bold tracking-wide text-white shadow-xs">
                        {item.prize}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF9F5] flex items-center justify-center p-4 border-b border-[#D9D6CF]">
                    <Award className="w-8 h-8 text-[#D9D6CF]" />
                  </div>
                )}

                {/* Card Body — Sleeker compact padding & balanced typography */}
                <div className="flex-1 flex flex-col p-3.5 sm:p-4 justify-between">
                  <div>
                    {/* Organization & Year */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-[#8B5E3C] font-mono truncate">
                        {item.organization}
                      </span>
                      <span className="text-[0.68rem] sm:text-xs text-[#88857D] font-mono shrink-0">
                        {item.year}
                      </span>
                    </div>

                    {/* Title with consistent clamped height */}
                    <h4 className="font-display text-sm sm:text-[0.95rem] font-bold text-[#202020] tracking-tight group-hover:text-[#8B5E3C] transition-colors line-clamp-2 min-h-[2.4rem] leading-snug">
                      {item.title}
                    </h4>

                    {/* Description with consistent clamped height */}
                    <p className="mt-1 text-xs sm:text-[0.8rem] text-[#575550] leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[2.5rem]">
                      {item.summary}
                    </p>

                    {/* Optional Supporting Links */}
                    {item.links && (
                      <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem] sm:text-xs font-mono">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#8B5E3C] hover:underline"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions & Verification Bar */}
                  <div className="mt-3 pt-2.5 border-t border-[#E5E2DA] flex items-center justify-between gap-2">
                    {hasImages ? (
                      <button
                        type="button"
                        onClick={() => openLightbox(item, 0)}
                        className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-[#202020] hover:text-[#8B5E3C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] rounded-md px-1 py-0.5 -ml-1"
                      >
                        <Images className="w-3.5 h-3.5 text-[#8B5E3C]" />
                        <span>Inspect Proof ({imageCount})</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    ) : (
                      <span className="text-xs text-[#88857D] font-mono">
                        Record Verified
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 text-[0.62rem] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAchievement && (
        <AchievementLightbox
          achievement={selectedAchievement}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </Section>
  );
}
