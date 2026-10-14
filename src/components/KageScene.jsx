import { useEffect, useRef, useState } from "react";
import KageLandingPage from "../shaders/landing-pages/KageLandingPage";
import { Sparkles, Compass, Eye, X } from "lucide-react";

export default function KageScene({ isInteractive = false, onToggleInteractive }) {
  const iframeRef = useRef(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);

  // Mouse move proxy to pass natural parallax to the 3D scene
  useEffect(() => {
    const handleMove = (e) => {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      try {
        win.dispatchEvent(
          new MouseEvent("pointermove", {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: true,
          })
        );
      } catch (err) {
        // cross-origin safety
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // Subtle scroll sync to advance temple path as user explores
  useEffect(() => {
    const handleScroll = () => {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      try {
        const scrollFraction = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const iframeMaxScroll = Math.max(1, win.document.documentElement.scrollHeight - win.innerHeight);
        win.scrollTo({
          top: scrollFraction * iframeMaxScroll * 0.4, // subtle smooth progression
          behavior: "auto"
        });
      } catch (err) {
        // safe fallback
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* The Exact Authored ThreeUI Kage WebGL Canvas */}
        <div className="relative w-full h-full">
          <KageLandingPage
            iframeRef={iframeRef}
            headingFont="onest"
            bodyFont="onest"
            headingWeight="400"
            bodyWeight="300"
            primaryColor="#e0231c"
            headingSize={46}
            bodySize={17}
            headingLetterSpacing={-0.012}
            backgroundCanvasSelector="#gl"
            backgroundVisualSelector="#vignette,#grain"
            onReady={() => setSceneLoaded(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: sceneLoaded ? 1 : 0,
              transition: "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Atmospheric gradient scrims to assure 100% text contrast while preserving 3D visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090a0c]/75 via-[#090a0c]/30 to-[#090a0c] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,transparent_30%,rgba(9,10,12,0.85)_100%)] pointer-events-none" />
        </div>

        {/* Ambient Loading indicator */}
        {!sceneLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#090a0c] z-10 transition-opacity duration-1000">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#f4efe6] animate-spin" />
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-400 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#d6cfc2] animate-pulse" />
                <span>Initializing 3D World...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive 3D Sanctuary Exploration Modal */}
      {showFullModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="3D Kyoto Sanctuary Full Immersion"
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex flex-col p-3 sm:p-6 animate-fade-in"
        >
          <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-red-500 animate-spin" />
              <span className="text-sm font-semibold tracking-wide text-white">
                Kage 3D Sanctuary — Full WebGL World Walkthrough
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowFullModal(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close 3D View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 w-full rounded-2xl overflow-hidden mt-3 border border-white/15">
            <iframe
              src="/landing-pages/kage.html"
              title="Kage Full 3D Interactive Sanctuary"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope"
            />
          </div>
        </div>
      )}
    </>
  );
}
