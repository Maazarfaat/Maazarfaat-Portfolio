import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import LinkedInLink from "./LinkedInLink.jsx";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Real exposure, honest scope"
        lede="A student-relevant track record — completed work reported as completed, selections reported as selections."
      />

      <div className="divide-y divide-line-light">
        {profile.experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 80}>
            <div className="group grid grid-cols-1 gap-4 py-8 sm:grid-cols-[160px_1fr] sm:items-start sm:gap-10 sm:py-10">
              {/* Period */}
              <div className="sm:text-right">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mist">
                  {job.year}
                </span>
                <p className="mt-1 text-xs text-mist">{job.period}</p>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    {job.role}
                  </h3>
                  <LinkedInLink
                    url={job.linkedinUrl}
                    className="text-ink-secondary hover:text-cyan"
                  />
                </div>
                <p className="mt-1 text-sm font-medium text-ink-secondary">
                  {job.org}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-line" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {job.statusNote && (
                  <p className="mt-4 rounded-lg border border-gold/20 bg-gold-light/40 px-4 py-3 text-xs leading-relaxed text-ink-secondary">
                    {job.statusNote}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
