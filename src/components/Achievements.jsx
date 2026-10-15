import { useState, useRef, useCallback, useEffect } from "react";
import {
  Images,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
  BookOpen,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import AchievementLightbox from "./AchievementLightbox.jsx";

/**
 * CompassEmblem — Ornate maritime compass rose with gold-foil gradients
 */
function CompassEmblem({ className = "w-20 h-20 sm:w-24 sm:h-24" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECC880" />
          <stop offset="25%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#9C731C" />
          <stop offset="100%" stopColor="#F5DC9A" />
        </linearGradient>
        <linearGradient id="goldGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C651A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#5E400E" />
        </linearGradient>
      </defs>

      {/* Outer concentric decorative gold rings */}
      <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
      <circle cx="50" cy="50" r="42" stroke="url(#goldGrad)" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="38" stroke="url(#goldGrad)" strokeWidth="0.75" opacity="0.5" />

      {/* 4 Cardinal Diamond Points (North, East, South, West) */}
      <polygon points="50,6 54,46 50,42" fill="url(#goldGrad)" />
      <polygon points="50,6 46,46 50,42" fill="url(#goldGradDark)" />

      <polygon points="50,94 54,54 50,58" fill="url(#goldGradDark)" />
      <polygon points="50,94 46,54 50,58" fill="url(#goldGrad)" />

      <polygon points="94,50 54,54 58,50" fill="url(#goldGrad)" />
      <polygon points="94,50 54,46 58,50" fill="url(#goldGradDark)" />

      <polygon points="6,50 46,54 42,50" fill="url(#goldGradDark)" />
      <polygon points="6,50 46,46 42,50" fill="url(#goldGrad)" />

      {/* 4 Diagonal Points (NE, SE, SW, NW) */}
      <polygon points="78,22 53,47 55,45" fill="url(#goldGrad)" opacity="0.9" />
      <polygon points="78,22 47,53 55,45" fill="url(#goldGradDark)" opacity="0.9" />

      <polygon points="78,78 53,53 55,55" fill="url(#goldGradDark)" opacity="0.9" />
      <polygon points="78,78 47,53 55,55" fill="url(#goldGrad)" opacity="0.9" />

      <polygon points="22,78 47,53 45,55" fill="url(#goldGrad)" opacity="0.9" />
      <polygon points="22,78 53,47 45,55" fill="url(#goldGradDark)" opacity="0.9" />

      <polygon points="22,22 47,47 45,45" fill="url(#goldGradDark)" opacity="0.9" />
      <polygon points="22,22 53,47 45,45" fill="url(#goldGrad)" opacity="0.9" />

      {/* Center nested brass rings and focal star */}
      <circle cx="50" cy="50" r="10" stroke="url(#goldGrad)" strokeWidth="1" fill="#141210" />
      <circle cx="50" cy="50" r="6" stroke="url(#goldGrad)" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="2.5" fill="url(#goldGrad)" />
    </svg>
  );
}

/**
 * OrnateCorner — Embossed filigree corner bracket
 */
function OrnateCorner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`w-7 h-7 sm:w-8 sm:h-8 pointer-events-none text-[#D4AF37]/80 ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 0 L36 0 L36 2.5 L2.5 2.5 L2.5 36 L0 36 Z" />
      <circle cx="7" cy="7" r="1.8" />
      <path d="M5 5 L18 5 L5 18 Z" opacity="0.45" />
      <path d="M7 16 C12 12 12 12 16 7" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

/**
 * VersoPage — Left-hand Archival Photographic Plate
 */
function VersoPage({
  achievement,
  pageNumStr,
  imageCount,
  openLightbox,
  isFlipping = false,
}) {
  return (
    <div className="relative p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-gradient-to-r from-[#F5EFE0] via-[#FAF4E8] to-[#ECE3D0] lg:rounded-l-[3px] border-b lg:border-b-0 lg:border-r border-[#DFD6C4] h-full select-none">
      {/* Left Page Curvature Shadow into Spine (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-14 sm:w-16 bg-gradient-to-r from-transparent via-black/[0.03] to-black/[0.16] pointer-events-none"
      />

      <div>
        {/* Page Header Notation */}
        <div className="flex items-center justify-between text-[0.68rem] font-mono text-[#7D7567] mb-4 pb-2 border-b border-[#E2D9C8]">
          <span className="uppercase tracking-[0.2em] font-bold text-[#8B5E3C]">
            PLATE {pageNumStr}
          </span>
          <span className="tracking-wider">ARCHIVAL RECORD · {achievement.year}</span>
        </div>

        {/* Tipped-in Archival Photographic Plate (Framed onto mounting board) */}
        <div className="relative p-1.5 bg-[#EDE5D5] border border-[#C5BAA5] shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_2px_6px_rgba(30,22,15,0.08)]">
          <div
            role={openLightbox && !isFlipping ? "button" : undefined}
            tabIndex={openLightbox && !isFlipping ? 0 : -1}
            onClick={() => {
              if (openLightbox && !isFlipping) openLightbox(0);
            }}
            onKeyDown={(e) => {
              if (openLightbox && !isFlipping && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                openLightbox(0);
              }
            }}
            aria-label={`Inspect photographic proof for ${achievement.title}`}
            className={`group/photo relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full max-h-[285px] overflow-hidden bg-[#ECE6DA] border border-[#B8AC97] ${
              openLightbox && !isFlipping ? "cursor-pointer" : ""
            }`}
          >
            <img
              src={achievement.images[0]}
              alt={achievement.title}
              className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 ease-out group-hover/photo:scale-[1.02]"
            />

            {/* Subtle photograph print sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-30 group-hover/photo:opacity-50 transition-opacity pointer-events-none" />

            {/* Small document counter seal */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#1A1612]/90 backdrop-blur-sm text-white text-[0.65rem] font-mono border border-white/20 tracking-wider">
              <Images className="w-3 h-3 text-[#D2A078]" />
              <span>{imageCount} {imageCount === 1 ? "DOCUMENT" : "DOCUMENTS"}</span>
            </div>
          </div>
        </div>

        {/* Printed Photographic Caption in Refined Serif */}
        {achievement.captions?.[0] && (
          <div className="mt-3 text-[0.74rem] sm:text-[0.8rem] font-serif italic text-[#4A443B] leading-snug line-clamp-2">
            <span className="font-mono not-italic text-[#8B5E3C] font-bold mr-1.5 text-[0.7rem]">
              FIG. {pageNumStr}:
            </span>
            {achievement.captions[0]}
          </div>
        )}
      </div>

      {/* Verso Lower Margin: Inspect Proof Archive Action */}
      <div className="mt-6 pt-3 border-t border-[#E2D9C8] flex items-center justify-between">
        <button
          type="button"
          disabled={isFlipping}
          onClick={() => {
            if (openLightbox && !isFlipping) openLightbox(0);
          }}
          className="group/proof inline-flex items-center gap-1.5 text-[0.7rem] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#8B5E3C] hover:text-[#1E1B18] transition-colors cursor-pointer focus-visible:outline-1 focus-visible:outline-[#8B5E3C] disabled:pointer-events-none"
        >
          <Images className="w-3.5 h-3.5" />
          <span className="border-b border-[#8B5E3C]/40 group-hover/proof:border-[#1E1B18] pb-0.5">
            Inspect Proof Archive ({imageCount})
          </span>
          <span className="transition-transform group-hover/proof:translate-x-0.5">→</span>
        </button>

        <span className="text-[0.62rem] font-mono uppercase tracking-widest text-[#2E4A28] bg-[#E8EEDB] px-2 py-0.5 border border-[#C2D4AB]">
          ARCHIVE VERIFIED
        </span>
      </div>
    </div>
  );
}

/**
 * RectoPage — Right-hand Typeset Monograph
 */
function RectoPage({
  achievement,
  pageNumStr,
  totalNumStr,
}) {
  return (
    <div className="relative p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-gradient-to-l from-[#F5EFE0] via-[#FAF4E8] to-[#ECE3D0] lg:rounded-r-[3px] h-full select-none">
      {/* Right Page Curvature Shadow from Spine (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-14 sm:w-16 bg-gradient-to-l from-transparent via-black/[0.03] to-black/[0.16] pointer-events-none"
      />

      <div>
        {/* Monograph Document Reference */}
        <div className="flex items-center justify-between text-[0.68rem] font-mono text-[#7D7567] mb-3 pb-2 border-b border-[#E2D9C8]">
          <span className="tracking-widest uppercase">
            HONORS MONOGRAPH · #{pageNumStr}
          </span>
          <span className="font-semibold text-[#8B5E3C]">
            {achievement.year}
          </span>
        </div>

        {/* Organization in warm-brown uppercase mono */}
        <div className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#8B5E3C] mb-1.5">
          {achievement.organization}
        </div>

        {/* Title in Refined Serif Typography */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B18] tracking-tight leading-[1.25] mb-3">
          {achievement.title}
        </h3>

        {/* Award / Recognition as Restrained Typographic Rule */}
        <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono py-1.5 border-y border-[#DDD3C0] mb-4 text-[#1E1B18]">
          <span className="font-bold uppercase tracking-wider">
            {achievement.award}
          </span>
          {achievement.prize && achievement.prize !== achievement.award && (
            <>
              <span className="text-[#BCAE93]">/</span>
              <span className="text-[#8B5E3C] font-semibold">
                {achievement.prize}
              </span>
            </>
          )}
        </div>

        {/* Narrative Summary with warm ink contrast */}
        <p className="text-xs sm:text-[0.85rem] text-[#3E3A33] leading-[1.78] font-normal">
          {achievement.summary}
        </p>

        {/* Supporting References (if present) */}
        {achievement.links && (
          <div className="mt-3.5 flex flex-wrap gap-4 text-xs font-mono">
            {achievement.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#8B5E3C] hover:underline"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Recto Lower Margin: Discreet Folio Number */}
      <div className="mt-6 pt-3 border-t border-[#E2D9C8] flex items-center justify-between text-xs font-mono text-[#7D7567]">
        <span className="tracking-widest uppercase">
          FOLIO {pageNumStr} OF {totalNumStr}
        </span>
        <span className="font-serif italic text-[0.8rem] text-[#635B4E]">
          Vol. 2026
        </span>
      </div>
    </div>
  );
}

export default function Achievements() {
  const achievements = profile.achievements;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(null);
  const [flipDirection, setFlipDirection] = useState(null); // "next" | "prev" | null
  const [isFlipping, setIsFlipping] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);

  const animationTimerRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  // Unlock and swing open the diary cover
  const handleUnlock = () => {
    if (isOpening || isUnlocked) return;
    setIsOpening(true);

    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      setIsUnlocked(true);
      setIsOpening(false);
    }, 720);
  };

  // Re-lock the diary
  const handleLock = () => {
    setIsUnlocked(false);
    setIsOpening(false);
    setCurrentIndex(0);
  };

  // Turn to Next Page (Ultra-Fast 300ms 3D Leaf Flip from Right to Left)
  const handleNext = useCallback(() => {
    if (isFlipping || currentIndex >= achievements.length - 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nextIdx = currentIndex + 1;

    if (prefersReducedMotion) {
      setCurrentIndex(nextIdx);
      return;
    }

    setTargetIndex(nextIdx);
    setFlipDirection("next");
    setIsFlipping(true);

    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      setCurrentIndex(nextIdx);
      setTargetIndex(null);
      setFlipDirection(null);
      setIsFlipping(false);
    }, 300);
  }, [currentIndex, isFlipping, achievements.length]);

  // Turn to Previous Page (Ultra-Fast 300ms 3D Leaf Flip from Left to Right)
  const handlePrev = useCallback(() => {
    if (isFlipping || currentIndex <= 0) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const prevIdx = currentIndex - 1;

    if (prefersReducedMotion) {
      setCurrentIndex(prevIdx);
      return;
    }

    setTargetIndex(prevIdx);
    setFlipDirection("prev");
    setIsFlipping(true);

    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      setCurrentIndex(prevIdx);
      setTargetIndex(null);
      setFlipDirection(null);
      setIsFlipping(false);
    }, 300);
  }, [currentIndex, isFlipping]);

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (!isUnlocked) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleUnlock();
      }
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const onTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchMove = (e) => {
    touchEndRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchEnd = () => {
    if (!isUnlocked) return;
    if (!touchStartRef.current || !touchEndRef.current) return;
    const diffX = touchStartRef.current.x - touchEndRef.current.x;
    const diffY = touchStartRef.current.y - touchEndRef.current.y;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const openLightbox = (index = 0) => {
    setLightboxInitialIndex(index);
    setLightboxOpen(true);
  };

  const currentItem = achievements[currentIndex] || achievements[0];
  const targetItem = targetIndex !== null ? achievements[targetIndex] : null;

  const currentNumStr = String(currentIndex + 1).padStart(2, "0");
  const targetNumStr =
    targetIndex !== null ? String(targetIndex + 1).padStart(2, "0") : "";
  const totalNumStr = String(achievements.length).padStart(2, "0");

  return (
    <Section
      id="achievements"
      pyClassName="py-24 sm:py-36 lg:py-52"
      className="relative overflow-hidden border-t border-[#E5E2DA]"
    >
      {/* SECTION HEADER */}
      <div className="w-full mb-14 sm:mb-18 lg:mb-24">
        <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#8B5E3C] font-mono mb-2">
          <span className="h-0.5 w-6 bg-[#8B5E3C]" />
          03 / EVIDENCE &amp; HONORS
        </span>
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-tight text-[#15181E] leading-[1.12]">
          Recognised for Showing Up &amp; Shipping
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-[#575550] max-w-2xl font-normal">
          Verified honors from national hackathons, technical conferences, and leadership — backed by real photographic evidence.
        </p>
      </div>

      {/* =================================================================== */}
      {/* INTERACTIVE PHYSICAL DIARY CONTAINER                               */}
      {/* =================================================================== */}
      <div className="w-full flex flex-col items-center">
        {!isUnlocked ? (
          /* =============================================================== */
          /* STAGE 1 & 2: CLOSED HARDCOVER LEATHER DIARY WITH GOLD EMBOSSING  */
          /* =============================================================== */
          <div className="flex flex-col items-center w-full">
            {/* The Physical Diary Object */}
            <div
              tabIndex={0}
              role="button"
              aria-label="Locked diary: Achievements Of Maaz Arfaat. Click to unlock."
              onClick={handleUnlock}
              onKeyDown={handleKeyDown}
              className={`relative w-[340px] sm:w-[380px] md:w-[410px] h-[480px] sm:h-[530px] md:h-[560px] rounded-[6px] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-all duration-300 ${
                isOpening ? "animate-diary-cover-open" : "hover:scale-[1.01]"
              }`}
              style={{ perspective: "2400px" }}
            >
              {/* Stacked Gilt Page Edges on Right */}
              <div
                aria-hidden="true"
                className="absolute -right-2 top-3 bottom-3 w-3 bg-[#EFE8D6] rounded-r-xs shadow-[inset_0_0_0_1px_#DDD3C0,2px_0_0_1px_#C8BBA0,4px_0_0_1px_#BCAE93,0_6px_14px_rgba(0,0,0,0.3)] pointer-events-none"
              />

              {/* Black Leather Hardcover Casing */}
              <div className="relative w-full h-full rounded-[6px] p-5 sm:p-6 bg-gradient-to-br from-[#1C1814] via-[#12100E] to-[#0A0908] border border-[#2B231B] shadow-[0_25px_60px_-15px_rgba(15,10,5,0.45),0_12px_24px_rgba(0,0,0,0.35)] flex flex-col justify-between items-center text-center overflow-hidden">
                {/* Subtle Leather Texture Sheen */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.04] pointer-events-none"
                />

                {/* Outer Inset Embossed Gold Border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-3 sm:inset-4 border border-[#D4AF37]/50 rounded-[2px] pointer-events-none"
                />

                {/* Inner Inset Delicate Gold Border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-5 sm:inset-6 border border-[#D4AF37]/30 rounded-[1px] pointer-events-none"
                />

                {/* 4 Ornate Gold Corner Filigrees */}
                <OrnateCorner className="absolute top-4 sm:top-5 left-4 sm:left-5" />
                <OrnateCorner className="absolute top-4 sm:top-5 right-4 sm:right-5 rotate-90" />
                <OrnateCorner className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 -rotate-90" />
                <OrnateCorner className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 rotate-180" />

                {/* Metal Lock / Clasp on Right Edge */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 flex items-center">
                  <div
                    className={`relative w-9 h-14 rounded-r-md bg-gradient-to-r from-[#8C651A] via-[#D4AF37] to-[#F5DEB3] border border-[#6E4D12] shadow-[2px_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform duration-300 ${
                      isOpening ? "translate-x-3 rotate-12 opacity-80" : ""
                    }`}
                  >
                    <div className="absolute left-1 top-2 bottom-2 w-1 bg-[#6E4D12]/40 rounded-full" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1A1612] flex items-center justify-center border border-[#6E4D12]/60">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Cover Top Heading */}
                <div className="relative z-10 pt-4">
                  <div className="font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.32em] uppercase text-[#D4AF37]/80 mb-1">
                    PERSONAL CHRONICLE
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto" />
                </div>

                {/* Cover Centerpiece: Compass Rose & Exact Title */}
                <div className="relative z-10 flex flex-col items-center my-auto px-4">
                  <CompassEmblem className="w-20 h-20 sm:w-24 sm:h-24 mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" />

                  {/* Exact Prominent Gold Foil Embossed Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide leading-tight bg-gradient-to-r from-[#ECC880] via-[#FFF2D6] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
                    Achievements Of Maaz Arfaat
                  </h3>

                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3.5 mb-2" />

                  <div className="font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.24em] uppercase text-[#D4AF37]/70">
                    HONORS · HACKATHONS · MILESTONES
                  </div>
                </div>

                {/* Cover Bottom Notation */}
                <div className="relative z-10 pb-3">
                  <div className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-[#D4AF37]/60">
                    VOL. 2024 — 2026
                  </div>
                </div>
              </div>
            </div>

            {/* STAGE 2: Interactive Control — CLICK TO UNLOCK */}
            <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handleUnlock}
                disabled={isOpening}
                aria-label="Unlock and open achievements diary"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1A1612] border-2 border-[#D4AF37]/70 text-[#F5DEB3] hover:text-white hover:border-[#F5DEB3] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 cursor-pointer font-mono text-xs font-bold uppercase tracking-[0.24em] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
                <Lock className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
                <span>CLICK TO UNLOCK</span>
                <span className="text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 font-bold">
                  →
                </span>
              </button>
              <span className="text-[0.68rem] font-mono text-[#8C8578] tracking-wider uppercase">
                Tap to open personal diary &amp; proof archive
              </span>
            </div>
          </div>
        ) : (
          /* =============================================================== */
          /* STAGE 3 & 4: OPEN SPREAD WITH 3D PAGE-TURN ANIMATION            */
          /* =============================================================== */
          <div
            tabIndex={0}
            role="region"
            aria-label="Achievements open diary"
            aria-roledescription="open book with 3D page turn"
            onKeyDown={handleKeyDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative w-full max-w-[940px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C] rounded-lg animate-mobile-page-next"
          >
            {/* Hardcover Casing Base (Dark Leather-Bound Hardcover Edge Peeking Out) */}
            <div className="relative rounded-[6px] p-[5px] sm:p-[7px] lg:p-[8px] bg-[#1A1612] border border-[#2B231B] shadow-[0_22px_50px_-10px_rgba(25,18,12,0.36),0_36px_75px_-20px_rgba(25,18,12,0.24),0_6px_18px_rgba(0,0,0,0.18)]">

              {/* Stacked Pages Outer Edges (Layered aged parchment paper block) */}
              <div
                className="relative rounded-[4px] bg-[#F4EEDF] shadow-[inset_0_0_0_1px_#DDD3C0,0_0_0_1px_#D4C8B2,0_2px_0_1px_#C8BBA0,0_3px_0_1px_#BCAE93] overflow-hidden"
                style={{ perspective: "2200px" }}
              >
                {/* ========================================================= */}
                {/* DESKTOP SPREAD (Side-by-side with 3D Center Spine Page Turn) */}
                {/* ========================================================= */}
                <div className="hidden lg:grid grid-cols-2 relative min-h-[480px]">
                  {/* Left Side (Underneath) */}
                  <div className="relative h-full">
                    <VersoPage
                      achievement={
                        isFlipping && flipDirection === "prev"
                          ? targetItem
                          : currentItem
                      }
                      pageNumStr={
                        isFlipping && flipDirection === "prev"
                          ? targetNumStr
                          : currentNumStr
                      }
                      imageCount={
                        (isFlipping && flipDirection === "prev"
                          ? targetItem?.images?.length
                          : currentItem.images?.length) || 0
                      }
                      openLightbox={openLightbox}
                      isFlipping={isFlipping}
                    />

                    {isFlipping && flipDirection === "next" && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/25 pointer-events-none animate-cast-shadow-appear z-10"
                      />
                    )}
                    {isFlipping && flipDirection === "prev" && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/25 pointer-events-none animate-cast-shadow-fade z-10"
                      />
                    )}
                  </div>

                  {/* Right Side (Underneath) */}
                  <div className="relative h-full">
                    <RectoPage
                      achievement={
                        isFlipping && flipDirection === "next"
                          ? targetItem
                          : currentItem
                      }
                      pageNumStr={
                        isFlipping && flipDirection === "next"
                          ? targetNumStr
                          : currentNumStr
                      }
                      totalNumStr={totalNumStr}
                    />

                    {isFlipping && flipDirection === "next" && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/25 pointer-events-none animate-cast-shadow-fade z-10"
                      />
                    )}
                    {isFlipping && flipDirection === "prev" && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-black/25 pointer-events-none animate-cast-shadow-appear z-10"
                      />
                    )}
                  </div>

                  {/* 3D TURNING LEAF (NEXT: Right Page Rotates -180deg to Left in 520ms) */}
                  {isFlipping && flipDirection === "next" && targetItem && (
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-0 bottom-0 w-1/2 z-20 pointer-events-none animate-page-turn-next"
                      style={{
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Front Face: Current Monograph Page (Turns away) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        <RectoPage
                          achievement={currentItem}
                          pageNumStr={currentNumStr}
                          totalNumStr={totalNumStr}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/15 to-transparent animate-leaf-shadow-front pointer-events-none" />
                        <div className="absolute inset-0 animate-paper-sheen-next pointer-events-none" />
                      </div>

                      {/* Back Face: Target Photographic Plate (Revealed on left) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <VersoPage
                          achievement={targetItem}
                          pageNumStr={targetNumStr}
                          imageCount={targetItem.images?.length || 0}
                          isFlipping={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent animate-leaf-shadow-back pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* 3D TURNING LEAF (PREV: Left Page Rotates +180deg to Right in 520ms) */}
                  {isFlipping && flipDirection === "prev" && targetItem && (
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1/2 z-20 pointer-events-none animate-page-turn-prev"
                      style={{
                        transformOrigin: "right center",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Front Face: Current Photographic Plate (Turns away) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        <VersoPage
                          achievement={currentItem}
                          pageNumStr={currentNumStr}
                          imageCount={currentItem.images?.length || 0}
                          isFlipping={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent animate-leaf-shadow-front pointer-events-none" />
                        <div className="absolute inset-0 animate-paper-sheen-prev pointer-events-none" />
                      </div>

                      {/* Back Face: Target Monograph Page (Revealed on right) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <RectoPage
                          achievement={targetItem}
                          pageNumStr={targetNumStr}
                          totalNumStr={totalNumStr}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/15 to-transparent animate-leaf-shadow-back pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Permanent Center Spine Crease */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 bottom-0 w-[2.5px] bg-[#2E251D] -translate-x-1/2 z-30 shadow-[0_0_4px_rgba(0,0,0,0.65)] pointer-events-none"
                  />
                </div>

                {/* ========================================================= */}
                {/* MOBILE / TABLET STACKED SPREAD (< lg)                     */}
                {/* ========================================================= */}
                <div
                  key={currentItem.id}
                  className={`lg:hidden flex flex-col min-h-[420px] sm:min-h-[460px] ${
                    isFlipping
                      ? flipDirection === "next"
                        ? "animate-mobile-page-next"
                        : "animate-mobile-page-prev"
                      : ""
                  }`}
                >
                  <VersoPage
                    achievement={currentItem}
                    pageNumStr={currentNumStr}
                    imageCount={currentItem.images?.length || 0}
                    openLightbox={openLightbox}
                  />
                  <RectoPage
                    achievement={currentItem}
                    pageNumStr={currentNumStr}
                    totalNumStr={totalNumStr}
                  />
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* BOOK NAVIGATION & CLOSE DIARY CONTROL                     */}
            {/* ========================================================= */}
            <div className="mt-10 sm:mt-14 flex items-center justify-between w-full px-2 text-xs font-mono">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleLock}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DDD3C0] bg-[#FAF5EB] text-[#7D7567] hover:text-[#1E1B18] hover:border-[#8B5E3C] hover:bg-[#F3EADB] transition-all cursor-pointer text-[0.68rem] tracking-wider uppercase font-semibold"
                  title="Close and lock diary"
                >
                  <Lock className="w-3 h-3 text-[#8B5E3C]" />
                  <span>Close Diary</span>
                </button>

                <span className="hidden sm:inline text-[#7D7567] tracking-wider uppercase text-[0.7rem]">
                  RECORD {currentNumStr} OF {totalNumStr}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0 || isFlipping}
                  aria-label="Previous achievement page"
                  className="px-3.5 py-1.5 rounded-full border border-[#DDD3C0] bg-[#FAF5EB] text-[#1E1B18] hover:border-[#8B5E3C] hover:bg-[#F3EADB] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs focus-visible:outline-2 focus-visible:outline-[#8B5E3C]"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2]" />
                  <span className="font-semibold text-[0.7rem] uppercase tracking-wider">PREV</span>
                </button>

                <span className="font-bold text-[#1E1B18] px-2 select-none">
                  {currentNumStr} / {totalNumStr}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex === achievements.length - 1 || isFlipping}
                  aria-label="Next achievement page"
                  className="px-3.5 py-1.5 rounded-full border border-[#DDD3C0] bg-[#FAF5EB] text-[#1E1B18] hover:border-[#8B5E3C] hover:bg-[#F3EADB] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs focus-visible:outline-2 focus-visible:outline-[#8B5E3C]"
                >
                  <span className="font-semibold text-[0.7rem] uppercase tracking-wider">NEXT</span>
                  <ChevronRight className="w-4 h-4 stroke-[2]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <AchievementLightbox
          achievement={currentItem}
          initialIndex={lightboxInitialIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </Section>
  );
}
