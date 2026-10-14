import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D9D6CF] bg-[#FAF9F5] text-[#575550]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#15181E] text-xs font-bold text-white shadow-sm">
            MA
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-[#15181E]">
            Mohammed Maaz Arfaat
          </span>
          <span className="text-xs text-[#88857D]">· © {year}</span>
        </div>

        <p className="text-xs text-[#88857D] font-mono">
          Hyderabad, India · Vardhaman College of Engineering
        </p>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D9D6CF] bg-white text-[#575550] transition-colors hover:text-[#15181E] hover:border-[#15181E]"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D9D6CF] bg-white text-[#575550] transition-colors hover:text-[#15181E] hover:border-[#15181E]"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D9D6CF] bg-white text-[#575550] transition-colors hover:text-[#15181E] hover:border-[#15181E]"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#15181E] text-white transition-colors hover:bg-[#315EFB]"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
