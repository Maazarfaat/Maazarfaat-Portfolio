import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-3 mx-4 rounded-2xl border border-line/60 bg-bg/85 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-lg sm:mx-6 lg:mx-auto lg:max-w-[75rem]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={close}
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          Maaz<span className="text-cyan">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {profile.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-underline rounded-lg px-3 py-1.5 text-[0.8rem] font-medium text-ink-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={`mailto:${profile.links.email}`}
            className="group inline-flex items-center gap-1.5 rounded-xl border border-line/60 bg-card/80 px-4 py-2 text-[0.8rem] font-medium text-ink transition-all hover:border-cyan/40 hover:text-cyan"
          >
            Let's connect
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg p-2 text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-line/60 bg-bg/95 backdrop-blur-lg transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {profile.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-bg-alt hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={`mailto:${profile.links.email}`}
              onClick={close}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-cyan px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-hover"
            >
              Let's connect
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
