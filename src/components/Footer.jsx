import { ArrowUp, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[75rem] flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="font-display text-base font-extrabold tracking-tight text-ink">
            Maaz<span className="text-cyan">_</span>
          </span>
          <span className="text-xs text-mist">© {year} Mohammed Maaz Arfaat</span>
        </div>

        <p className="text-xs text-mist">Hyderabad, India</p>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-light bg-card text-ink-secondary transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-light bg-card text-ink-secondary transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-light bg-card text-ink-secondary transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-bg transition-colors hover:bg-ink/85"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
