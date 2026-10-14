import { Award, CheckCircle } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  const certifications = profile.certifications || [];

  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" className="relative">
      <SectionHeading
        eyebrow="Credentials"
        title="Evaluated Certifications & Coursework"
        lede="Evaluated technical coursework and industry-recognized competencies."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {certifications.map((cert, idx) => (
          <Reveal key={cert.title} delay={idx * 60}>
            <div className="group relative rounded-3xl border border-[#D9D6CF] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#15181E] hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(21,24,30,0.06)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#315EFB] px-3 py-1 rounded-full bg-[#EEF3FF] border border-[#315EFB]/20 font-mono">
                    {cert.tag}
                  </span>
                  <Award className="w-4 h-4 text-[#88857D] group-hover:text-[#315EFB] transition-colors" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#15181E] tracking-tight group-hover:text-[#315EFB] transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-[#575550] font-medium">
                  {cert.org}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E2DA] flex items-center justify-between text-xs font-mono text-[#575550]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Verified Credential</span>
                </div>
                {cert.year && <span>{cert.year}</span>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
