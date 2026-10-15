import { useEffect, useState, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function AchievementLightbox({ achievement, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const images = achievement?.images || [];
  const total = images.length;

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation & trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleNext, handlePrev, onClose]);

  // Touch swipe support for mobile
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  if (!achievement || total === 0) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${achievement.title} gallery`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 text-white animate-fade-in"
      onClick={(e) => {
        if (e.target === containerRef.current) onClose();
      }}
    >
      {/* Top Header Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between gap-4 py-2 border-b border-white/10">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5E3C] font-mono">
              {achievement.organization || "Achievement Evidence"}
            </span>
            {achievement.year && (
              <span className="text-xs text-stone-400 font-mono">· {achievement.year}</span>
            )}
          </div>
          <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight truncate max-w-md sm:max-w-xl">
            {achievement.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div
        className="relative flex-1 w-full max-w-6xl flex items-center justify-center py-4 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous Button */}
        {total > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Active Image */}
        <div className="relative max-h-[68vh] max-w-full flex flex-col items-center justify-center">
          <img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${achievement.title} — photo ${currentIndex + 1} of ${total}`}
            className="max-h-[64vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10 transition-opacity duration-300"
          />
          {achievement.captions && achievement.captions[currentIndex] && (
            <p className="mt-2.5 px-4 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-xs sm:text-sm text-stone-200 text-center max-w-2xl font-sans">
              {achievement.captions[currentIndex]}
            </p>
          )}
        </div>

        {/* Next Button */}
        {total > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Bar: Thumbnails, Counter & Meta */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300 font-mono">
          <ImageIcon className="w-4 h-4 text-stone-400" />
          <span>
            Proof {currentIndex + 1} of {total}
          </span>
          {achievement.award && (
            <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white font-sans font-semibold">
              {achievement.award}
            </span>
          )}
          {achievement.prize && achievement.prize !== achievement.award && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-mono">
              {achievement.prize}
            </span>
          )}
        </div>

        {/* Thumbnails */}
        {total > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View photo ${idx + 1}`}
                className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? "border-white ring-2 ring-[#8B5E3C] scale-105 shadow-[0_0_12px_rgba(139,94,60,0.5)]"
                    : "border-white/20 opacity-50 hover:opacity-90"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
