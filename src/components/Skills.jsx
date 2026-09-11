import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I work with"
        lede={profile.skills.note}
      />

      {/* Numbered editorial rows */}
      <div className="divide-y divide-line-light">
        {profile.skills.byGroup.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <div className="flex items-baseline gap-6 py-6 sm:gap-10 sm:py-7">
              <span className="shrink-0 font-display text-sm font-bold tabular-nums text-mist">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-ink">
                  {group.label}
                </h3>
                <span className="hidden text-mist sm:inline">—</span>
                <p className="text-[0.95rem] font-medium text-ink-secondary">
                  {group.items.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
