import { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = profile.links.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Section
      id="contact"
      pyClassName="py-24 sm:py-36 lg:py-48"
      className="relative bg-[#FAF6F0] border-t border-[#D9D6CF] overflow-hidden"
    >
      <Reveal>
        <div className="relative mx-auto max-w-4xl rounded-2xl border border-[#D9D6CF] bg-white p-6 sm:p-9 lg:p-10 text-center shadow-[0_16px_40px_-20px_rgba(21,24,30,0.06)]">
          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9D6CF] bg-[#FAF9F5] px-3.5 py-1 text-xs font-semibold text-[#15181E] mb-5 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5E3C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5E3C]" />
            </span>
            <span className="font-mono text-[0.68rem] sm:text-xs">
              {profile.contact.availability}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-[clamp(1.85rem,3.2vw,2.6rem)] font-extrabold tracking-tight text-[#15181E] leading-[1.12]">
            {profile.contact.heading}
          </h2>

          <p className="mt-3.5 max-w-2xl mx-auto text-sm sm:text-base text-[#575550] leading-relaxed">
            {profile.contact.intro}
          </p>

          {/* Email action buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#15181E] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-[#8B5E3C] hover:shadow-[0_8px_20px_rgba(139,94,60,0.25)] active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>{profile.contact.cta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-[#D9D6CF] bg-[#FAF9F5] px-5 py-3 text-xs sm:text-sm font-semibold text-[#15181E] transition-all hover:bg-white hover:border-[#15181E]"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#88857D]" />
                  <span>Copy: {email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-[#D9D6CF] flex flex-wrap items-center justify-center gap-6">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#575550] hover:text-[#15181E] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#315EFB]" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#88857D]" />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#575550] hover:text-[#15181E] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#15181E]" />
              <span>Inspect on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#88857D]" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
