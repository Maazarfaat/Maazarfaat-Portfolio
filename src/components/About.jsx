import { MapPin, GraduationCap, BookOpen, Award, Users } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const e = profile.education;

  return (
    <Section id="about" className="relative">
      <SectionHeading
        eyebrow="Academic Foundations"
        title="Learning through Systems & Foundations"
        lede="Focusing on computer science fundamentals, multi-tier enterprise systems in Java, computer vision research, and evaluated hackathon builds."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-10 items-start">
        {/* Left Column — Academic Credentials & Key Metrics */}
        <Reveal>
          <div className="flex flex-col gap-5">
            {/* Primary Academic Card */}
            <div className="rounded-3xl border border-[#D9D6CF] bg-white p-7 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DA]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#315EFB] font-mono">
                    Undergraduate Study
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#15181E] mt-1">
                    {e.degree}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-[#15181E]">
                    {e.period}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm sm:text-base text-[#575550]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#315EFB]" />
                  <span className="font-semibold text-[#15181E]">{e.school}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#88857D] font-mono">
                  <MapPin className="w-4 h-4 text-[#315EFB]" />
                  <span>{e.schoolLocation}</span>
                </div>
              </div>

              {/* Verified CGPA Box */}
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#D9D6CF] flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#575550] font-mono">
                    {e.cgpaNote}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#15181E]">
                    {e.cgpa}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-[#EEF3FF] border border-[#315EFB]/20 text-xs sm:text-sm font-bold text-[#315EFB] font-mono">
                    Top Tier Standing
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Campus Leadership Roles */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-2xl border border-[#D9D6CF] bg-white p-5 shadow-sm">
                <Users className="w-5 h-5 text-[#315EFB] mb-2" />
                <p className="text-xs uppercase font-bold text-[#575550] tracking-wider font-mono">
                  Leadership
                </p>
                <p className="text-sm sm:text-base font-bold text-[#15181E] mt-0.5">
                  Class Representative
                </p>
                <p className="text-xs text-[#88857D]">Dept of IT · Elected</p>
              </div>

              <div className="rounded-2xl border border-[#D9D6CF] bg-white p-5 shadow-sm">
                <Award className="w-5 h-5 text-[#315EFB] mb-2" />
                <p className="text-xs uppercase font-bold text-[#575550] tracking-wider font-mono">
                  Ambassador
                </p>
                <p className="text-sm sm:text-base font-bold text-[#15181E] mt-0.5">
                  Google Student Amb.
                </p>
                <p className="text-xs text-[#88857D]">Class of 2026</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column — Editorial Story & Coursework */}
        <div className="space-y-6">
          {/* Editorial Paragraphs */}
          <div className="space-y-4">
            {profile.about.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#D9D6CF] shadow-[0_4px_16px_rgba(21,24,30,0.02)]">
                  <p className="text-base sm:text-lg text-[#15181E] font-normal leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education & Core Coursework */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-[#D9D6CF] bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-[#315EFB]" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#15181E] font-mono">
                  Core Computer Science Coursework
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {e.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3.5 py-1.5 rounded-lg border border-[#D9D6CF] bg-[#FAF9F5] text-xs sm:text-sm font-semibold text-[#15181E] hover:border-[#15181E] transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
