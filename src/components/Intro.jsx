import { ArrowDown, ArrowUpRight, Award, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "../data/profile.js";
import ProfileImage from "./ProfileImage.jsx";
import Reveal from "./Reveal.jsx";

export default function Intro() {
  return (
    <section id="intro" className="relative py-12 sm:py-16 bg-transparent text-[#15181E]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="rounded-3xl border border-[#D9D6CF] bg-white p-7 sm:p-10 lg:p-12 shadow-[0_12px_36px_-12px_rgba(21,24,30,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center">
              {/* Left Column: Narrative, Identity & Concise 2-3 Sentences */}
              <div className="space-y-6">
                {/* Status Badges with larger comfortable typography */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF3FF] border border-[#315EFB]/20 text-[#315EFB] text-xs sm:text-sm font-bold font-mono">
                    <GraduationCap className="w-4 h-4" />
                    B.Tech IT · Class of 2028
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D9D6CF] text-[#15181E] text-xs sm:text-sm font-bold font-mono">
                    CGPA 9.48 / 10
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D9D6CF] text-[#575550] text-xs sm:text-sm font-semibold">
                    Google Student Ambassador '26
                  </span>
                </div>

                {/* Main Identity Headline */}
                <div>
                  <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-[#15181E] tracking-tight leading-[1.05]">
                    Mohammed Maaz Arfaat
                  </h2>
                  <p className="mt-2 text-sm sm:text-base font-mono text-[#315EFB] font-semibold">
                    Vardhaman College of Engineering, Hyderabad
                  </p>
                </div>

                {/* Personal Statement & Philosophy */}
                <p className="text-base sm:text-lg text-[#15181E] font-medium leading-relaxed border-l-3 border-[#315EFB] pl-4">
                  "{profile.personalStatement}"
                </p>

                {/* Concise 2-3 Short Sentences Introduction */}
                <p className="text-base sm:text-lg text-[#575550] leading-relaxed">
                  I am a 3rd-year Information Technology undergraduate specializing in multi-tier enterprise systems, computer vision models, and applied AI applications. My engineering loop is simple: build working software, test it under rigorous scrutiny at national hackathons, and iterate until production-ready.
                </p>

                {/* Action Links & CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#15181E] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315EFB] hover:shadow-[0_8px_20px_rgba(49,94,251,0.25)] active:scale-95"
                  >
                    <span>Featured Projects</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <a
                    href="#achievements"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D9D6CF] bg-[#FAF9F5] px-5 py-3.5 text-sm font-bold text-[#15181E] transition-all hover:bg-white hover:border-[#15181E]"
                  >
                    <Award className="w-4 h-4 text-[#315EFB]" />
                    <span>Verified Honors</span>
                  </a>

                  <a
                    href={`mailto:${profile.links.email}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#D9D6CF] bg-white px-5 py-3.5 text-sm font-semibold text-[#575550] transition-colors hover:text-[#15181E] hover:border-[#B8B3A8]"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="w-4 h-4 text-[#88857D]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Thoughtfully Framed Portrait */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="relative group w-full max-w-[310px] rounded-3xl overflow-hidden border border-[#D9D6CF] bg-[#FAF9F5] p-2.5 shadow-md">
                  <ProfileImage
                    alt="Mohammed Maaz Arfaat"
                    aspect="aspect-[4/5]"
                    radius="rounded-2xl"
                    className="w-full object-cover"
                  />
                  <div className="mt-3 p-2.5 bg-white rounded-xl border border-[#E5E2DA] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#575550]">VCE Campus</span>
                    <span className="text-[#315EFB] font-bold">Hyderabad, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
