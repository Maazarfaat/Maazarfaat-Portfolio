import { MapPin, Terminal } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Community() {
  const { heading, blurb, events } = profile.community || {};

  if (!events || events.length === 0) return null;

  return (
    <Section id="community" className="relative">
      <SectionHeading
        eyebrow="Ecosystem & Participation"
        title={heading || "Active Builder Ecosystem"}
        lede={blurb || "Beyond the classroom: hackathons, developer sprints, and builder communities."}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {events.map((ev, idx) => (
          <Reveal key={ev.name} delay={idx * 60}>
            <div className="group relative rounded-3xl border border-[#D9D6CF] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#15181E] hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(21,24,30,0.06)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#315EFB] font-bold font-mono">
                    <MapPin className="w-4 h-4 text-[#315EFB]" />
                    <span className="truncate max-w-[200px]">{ev.place}</span>
                  </div>
                  <span className="text-xs font-mono text-[#88857D]">2026</span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#15181E] tracking-tight group-hover:text-[#315EFB] transition-colors">
                  {ev.name}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#575550] leading-relaxed">
                  {ev.note}
                </p>

                {/* Focus Tags */}
                {ev.focus && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ev.focus.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#FAF9F5] border border-[#D9D6CF] text-xs font-semibold text-[#15181E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E2DA] flex items-center gap-2 text-xs font-mono text-[#575550]">
                <Terminal className="w-4 h-4 text-[#315EFB]" />
                <span>Active Builder Community</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
