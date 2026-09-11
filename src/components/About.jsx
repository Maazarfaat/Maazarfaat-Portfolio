import { MapPin, GraduationCap } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const e = profile.education;
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
        {/* Sticky left — headline + key facts */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan">
              <span className="h-px w-7 bg-cyan" />
              About
            </span>

            <h2 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-ink">
              A student developer who builds{" "}
              <span className="text-cyan">his way to learning</span>
            </h2>

            {/* Key facts */}
            <div className="mt-8 space-y-5">
              {/* CGPA */}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-extrabold tracking-tight text-ink">
                  {e.cgpa}
                </span>
                <span className="text-xs text-mist">{e.cgpaNote}</span>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3 text-sm text-ink-secondary">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-mist" />
                <div>
                  <p className="font-medium text-ink">{e.degree}</p>
                  <p>{e.school} · {e.period}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-ink-secondary">
                <MapPin className="h-4 w-4 shrink-0 text-mist" />
                {profile.location}
              </div>
            </div>

            {/* Blockquote */}
            <figure className="mt-8 border-l-2 border-cyan pl-5">
              <blockquote className="font-display text-base font-bold leading-relaxed text-ink">
                "My learning loop is simple — build it, put it in front of judges and
                mentors, learn what breaks, and do it again."
              </blockquote>
              <figcaption className="mt-2 text-xs font-medium text-mist">
                Building → presenting → improving
              </figcaption>
            </figure>
          </div>
        </Reveal>

        {/* Right — story */}
        <div className="space-y-6 text-[0.95rem] leading-relaxed text-ink-secondary">
          {profile.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
