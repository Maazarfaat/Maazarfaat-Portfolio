import { MapPin } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import LinkedInLink from "./LinkedInLink.jsx";

export default function Community() {
  const { events, blurb } = profile.community;

  return (
    <Section id="community">
      <SectionHeading
        eyebrow="Community & learning"
        title={profile.community.heading}
        lede={blurb}
      />

      {/* Editorial event list */}
      <Reveal>
        <div className="divide-y divide-line-light">
          {events.map((ev, i) => (
            <div
              key={ev.name}
              className="group grid grid-cols-1 gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-cyan sm:text-lg">
                    {ev.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-mist">
                    <MapPin className="h-3 w-3" />
                    {ev.place}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ev.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-line-light bg-bg px-2 py-0.5 text-[0.68rem] font-medium text-ink-secondary"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                  {ev.note}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <LinkedInLink
                  url={ev.linkedinUrl}
                  className="text-ink-secondary hover:text-cyan"
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Wider ecosystem */}
      <Reveal delay={120}>
        <p className="mt-8 text-sm leading-relaxed text-ink-secondary">
          Beyond events: active on <span className="font-semibold text-ink">GitHub</span>, part of
          Google's <span className="font-semibold text-ink">Gemini &amp; community initiatives</span> as
          a Student Ambassador, and plugged into student developer communities across Hyderabad.
        </p>
      </Reveal>
    </Section>
  );
}
