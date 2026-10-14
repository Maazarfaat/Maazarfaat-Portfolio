import { Briefcase, Calendar, CheckCircle2, AlertCircle, Users } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <Section
      id="experience"
      pyClassName="py-24 sm:py-36 lg:py-48"
      className="relative bg-[#FAF6F0] border-t border-[#D9D6CF]"
    >
      <SectionHeading
        eyebrow="Practical Experience"
        title="Technical Training, Offers & Student Leadership"
        lede="Hands-on industry training programs, competitive selection processes, and elected departmental leadership."
      />

      <div className="relative border-l-2 border-[#D9D6CF] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
        {profile.experience.map((exp, idx) => {
          const isLeadership = exp.type?.includes("Leadership");

          return (
            <Reveal key={exp.role} delay={idx * 70}>
              <div className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-[#15181E] text-white shadow-sm">
                  {isLeadership ? (
                    <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#8B5E3C]" />
                  ) : (
                    <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#8B5E3C]" />
                  )}
                </div>

                {/* Card Container */}
                <div className="rounded-2xl border border-[#D9D6CF] bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#15181E] hover:shadow-[0_12px_30px_-10px_rgba(21,24,30,0.06)]">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8B5E3C] font-mono">
                          {exp.org}
                        </span>
                        <span className="text-[0.68rem] px-2.5 py-0.5 rounded-full font-semibold font-mono bg-[#FAF9F5] border border-[#D9D6CF] text-[#575550]">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#15181E] tracking-tight mt-1">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#575550] bg-[#FAF9F5] px-3 py-1.5 rounded-xl border border-[#D9D6CF] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-[#315EFB]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mt-3">
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

                  {/* Status Note if declined for academics */}
                  {exp.statusNote && (
                    <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs sm:text-sm text-amber-900">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">Academic Transparency Note:</strong>
                        <span>{exp.statusNote}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
