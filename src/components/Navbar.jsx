import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = [
        "home",
        "projects",
        "achievements",
        "experience",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Primary Top Header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-2.5 mx-4 sm:mx-6 lg:mx-auto lg:max-w-6xl rounded-2xl border border-[#D9D6CF] bg-white/90 shadow-[0_10px_35px_-10px_rgba(21,24,30,0.08)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 sm:h-16 items-center justify-between px-5 sm:px-6 lg:px-8"
        >
          {/* Brand Monogram & Compact Wordmark */}
          <a
            href="#home"
            onClick={close}
            className="group flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight text-[#15181E]"
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#15181E] text-white text-xs font-bold shadow-xs transition-transform group-hover:scale-105">
              {profile.monogram}
            </span>
            <span className="tracking-tight text-[#15181E]">
              {profile.shortName}<span className="text-[#8B5E3C]">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {profile.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all rounded-lg ${
                      isActive
                        ? "text-[#15181E] bg-[#EFECE4]"
                        : "text-[#575550] hover:text-[#15181E] hover:bg-[#EFECE4]/50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8B5E3C] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Utility CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#575550] hover:text-[#15181E] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#D9D6CF]">/</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#575550] hover:text-[#15181E] transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-[#15181E] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#8B5E3C] transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D9D6CF] bg-white text-[#15181E] shadow-2xs hover:bg-[#FAF9F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] lg:hidden cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE NAVIGATION DRAWER */}
      {/* Positioned at root level so it never gets trapped inside floating pill header */}
      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-50 flex flex-col bg-[#F7F5EF] lg:hidden"
        >
          {/* Top Bar with Brand & Close Button */}
          <div className="flex h-16 items-center justify-between px-5 sm:px-6 border-b border-[#D9D6CF] bg-[#F7F5EF] shrink-0">
            <a
              href="#home"
              onClick={close}
              className="group flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight text-[#15181E]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15181E] text-white text-xs font-bold shadow-xs">
                {profile.monogram}
              </span>
              <span className="tracking-tight text-[#15181E]">
                {profile.shortName}<span className="text-[#8B5E3C]">.</span>
              </span>
            </a>

            <button
              type="button"
              onClick={close}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9D6CF] bg-white text-[#15181E] shadow-2xs hover:bg-[#FAF9F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5E3C] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items (clean vertical stack on own lines, consistent spacing, no overlap) */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <ul className="flex flex-col gap-2.5">
              {profile.nav.map((item, idx) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={close}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-display text-lg font-bold transition-all ${
                        isActive
                          ? "bg-white text-[#8B5E3C] shadow-2xs border border-[#D9D6CF]"
                          : "text-[#15181E] hover:bg-white/60 hover:text-[#8B5E3C]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#88857D] font-normal">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#8B5E3C]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Footer Area with Links and CTA */}
            <div className="pt-6 border-t border-[#D9D6CF] space-y-4 shrink-0">
              <div className="flex items-center justify-between text-xs font-mono text-[#575550]">
                <span>{profile.academic.institution}</span>
                <span className="font-semibold text-[#8B5E3C]">Class of 2028</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 rounded-xl border border-[#D9D6CF] bg-white text-xs font-mono font-bold text-[#15181E] hover:bg-[#FAF9F5] shadow-2xs transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 rounded-xl border border-[#D9D6CF] bg-white text-xs font-mono font-bold text-[#15181E] hover:bg-[#FAF9F5] shadow-2xs transition-colors"
                >
                  GitHub
                </a>
              </div>

              <a
                href={`mailto:${profile.links.email}`}
                onClick={close}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#15181E] px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#8B5E3C] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#8B5E3C]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
