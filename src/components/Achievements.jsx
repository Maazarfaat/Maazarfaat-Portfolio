import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import LinkedInLink from "./LinkedInLink.jsx";

export default function Achievements() {
  const { flagship, competitions, note } = profile.achievements;

  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognised for showing up & shipping"
        lede="Awards and honours from national and international stages — each one earned by actually building and presenting."
      />

      {/* Flagship — editorial divided list */}
      <Reveal>
        <div className="divide-y divide-line-light">
          {flagship.map((a) => (
            <div
              key={a.title}
              className="group grid grid-cols-1 gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6 sm:py-7"
            >
              <div>
                <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-cyan sm:text-lg">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                  {a.detail}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[0.7rem] font-medium text-mist">{a.year}</span>
                <LinkedInLink
                  url={a.linkedinUrl}
                  className="text-ink-secondary hover:text-cyan"
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Competition awards */}
      <Reveal delay={80}>
        <div className="mt-10">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mist">
            Competition awards
          </p>
          <div className="divide-y divide-line-light">
            {competitions.map((c) => (
              <div
                key={c.title}
                className="flex flex-wrap items-baseline gap-3 py-4 sm:justify-between sm:gap-4"
              >
                <span className="text-sm text-ink-secondary">
                  {c.title}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="shrink-0 rounded-md bg-gold-light px-2 py-0.5 text-[0.65rem] font-bold text-gold">
                    {c.rank}
                  </span>
                  <span className="text-[0.7rem] text-mist">{c.year}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* On the record */}
      <Reveal delay={120}>
        <div className="mt-10">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mist">
            On the record
          </p>
          <ul className="space-y-3">
            {note.map((n) => (
              <li key={n} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-line" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
