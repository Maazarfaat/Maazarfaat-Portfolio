import { Quote } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function PersonalStatement() {
  return (
    <Section id="statement" className="py-12 sm:py-16" containerClassName="flex justify-center">
      <Reveal>
        <div className="relative max-w-4xl text-center px-6 py-10 sm:py-14 rounded-3xl bg-white border border-[#D9D6CF] shadow-[0_10px_30px_rgba(21,24,30,0.03)]">
          <div className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#EEF3FF] border border-[#315EFB]/20 text-[#315EFB] mb-5">
            <Quote className="w-4 h-4" />
          </div>
          <blockquote className="font-display text-[clamp(1.25rem,2.8vw,2.2rem)] font-extrabold leading-snug tracking-tight text-[#15181E]">
            "{profile.personalStatement}"
          </blockquote>
          <p className="mt-4 text-xs font-mono uppercase tracking-[0.25em] text-[#575550]">
            Mohammed Maaz Arfaat · Core Engineering Philosophy
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
