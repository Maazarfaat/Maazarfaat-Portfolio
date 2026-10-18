import { Briefcase, Calendar, CheckCircle2, Users } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <Section
      id="experience"
      pyClassName="py-20 sm:py-28 lg:py-36"
      className="relative bg-[#F7F5EF] border-t border-[#D9D6CF]"
    >
      <SectionHeading
        eyebrow="04 / LEADERSHIP & EXPERIENCE"
        title="Technical Training, Offers & Student Leadership"
        lede="Hands-on industry training programs, competitive selection processes, and elected departmental leadership."
      />

      {/* Vertical Timeline with Pure-White Compact Experience Cards */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Light Neutral Grey Vertical Guideline */}
        <div
          aria-hidden="true"
          className="absolute left-[15px] sm:left-[17px] top-6 bottom-6 w-[2px] bg-[#D9D6CF] -translate-x-1/2 pointer-events-none"
        />

        <div className="space-y-4 sm:space-y-5 lg:space-y-5">
          {profile.experience.map((exp, idx) => {
            const isLeadership =
              exp.type?.toLowerCase().includes("leadership") ||
              exp.type?.toLowerCase().includes("ambassador");

            return (
              <Reveal key={exp.role} delay={idx * 50}>
                <div className="relative flex items-center gap-3.5 sm:gap-5 lg:gap-6 group">
                  {/* Dark Charcoal Timeline Marker (Vertically centered alongside the card) */}
                  <div
                    aria-hidden="true"
                    className="relative z-10 shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#15181E] border-2 border-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  >
                    {isLeadership ? (
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5E3C]" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5E3C]" />
                    )}
                  </div>

                  {/* Pure-White Rectangular Card */}
                  <div className="grow min-w-0 rounded-xl border border-[#E3E0DA] bg-[#FFFFFF] p-4 sm:p-5 lg:p-5.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#15181E] hover:shadow-[0_8px_22px_-6px_rgba(0,0,0,0.08)]">
                    {/* Top Metadata Row: Organization + Category Badge on left, Date Badge on right */}
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 pb-2.5 mb-2.5 border-b border-[#F0ECE5]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#8B5E3C]">
                          {exp.org}
                        </span>
                        <span className="text-[0.66rem] sm:text-[0.68rem] px-2.5 py-0.5 rounded-full font-mono font-semibold bg-[#FAF9F5] border border-[#E3E0DA] text-[#575550]">
                          {exp.type}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#575550] bg-[#FAF9F5] border border-[#E3E0DA] px-2.5 py-1 rounded-lg shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-[#315EFB]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role Title in Bold Charcoal Typography */}
                    <h3 className="font-display text-base sm:text-lg lg:text-[1.25rem] font-extrabold text-[#15181E] tracking-tight leading-snug mb-2.5">
                      {exp.role}
                    </h3>

                    {/* Descriptions with Original Blue Outlined Check-Circle Icons */}
                    <ul className="space-y-2">
                      {exp.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#575550] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#315EFB] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
