import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import LinkedInLink from "./LinkedInLink.jsx";

export default function Projects() {
  const { featured, secondary, futureNote } = profile.projects;

  return (
    <Section id="projects" dark className="bg-dark">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="relative">
        <SectionHeading
          dark
          eyebrow="Featured Work"
          title="What I'm building"
          lede="Shipped ideas from real hackathons — and a queue of builds in progress."
        />

        {/* FEATURED — Medi Vault */}
        <Reveal>
          <article className="overflow-hidden rounded-2xl border border-dark-line bg-dark-card">
            {/* Project visual placeholder */}
            <a
              href={featured.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${featured.name} — ${featured.subtitle}`}
              className="group/visual relative block h-56 overflow-hidden bg-gradient-to-br from-dark via-dark-card to-dark-line sm:h-72 lg:h-80"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display text-[clamp(3rem,8vw,8rem)] font-extrabold uppercase leading-none tracking-tighter text-paper/8 transition-transform duration-500 ease-out group-hover/visual:scale-110">
                    MV
                  </span>
                </div>
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  {featured.flag}
                </span>
                <span className="inline-flex items-center rounded-full border border-dark-line bg-dark/60 px-3 py-1 text-xs font-medium text-paper/60 backdrop-blur-sm">
                  {featured.category}
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <LinkedInLink
                  url={featured.linkedinUrl}
                  className="text-cyan/80 hover:text-cyan"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-dark/90 to-transparent px-6 py-5">
                <span className="translate-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-paper/60 opacity-0 transition-all duration-300 group-hover/visual:translate-y-0 group-hover/visual:opacity-100">
                  View case on LinkedIn
                </span>
                <ArrowUpRight className="h-5 w-5 text-cyan transition-transform duration-300 group-hover/visual:translate-x-0.5 group-hover/visual:-translate-y-0.5" />
              </div>
            </a>

            {/* Content */}
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="p-7 sm:p-10 lg:p-12">
                <h3 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-tight text-paper leading-none">
                  {featured.name}
                </h3>
                <p className="mt-3 text-lg font-bold text-cyan">{featured.subtitle}</p>

                <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-paper/70 sm:text-base">
                  {featured.description}
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-paper/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recognition panel */}
              <div className="flex flex-col justify-between gap-6 border-t border-dark-line bg-dark/60 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-paper/40">
                    Hackathon recognition
                  </p>
                  <ol className="mt-6">
                    {featured.highlights.map((h, i) => (
                      <li
                        key={h.title}
                        className="flex items-start gap-4 border-b border-dark-line py-5 last:border-0"
                      >
                        <span
                          className={`mt-0.5 font-display text-sm font-bold tabular-nums ${
                            i === 0 ? "text-gold" : "text-cyan"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-paper">{h.title}</span>
                          <span className="mt-1 block text-[0.8rem] leading-relaxed text-paper/55">
                            {h.detail}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="text-xs italic leading-relaxed text-paper/40">
                  Presented at Hacknovate 7.0 (international), judged across national panels —
                  built as a second-year student, not a finished product.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* SECONDARY — Smart Run AI Plus */}
        <Reveal delay={80}>
          <article className="group mt-6 overflow-hidden rounded-2xl border border-dark-line bg-dark-card transition-colors hover:border-cyan/30">
            <div className="grid grid-cols-1 gap-6 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-light/10 px-3 py-1 text-xs font-semibold text-gold">
                    Selected · Top 6 Finalist
                  </span>
                  <LinkedInLink
                    url={secondary[0].linkedinUrl}
                    className="text-cyan/60 hover:text-cyan"
                  />
                </div>
                <h4 className="mt-4 font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-tight text-paper">
                  {secondary[0].name}
                </h4>
                <p className="mt-1 text-base font-bold text-cyan">{secondary[0].subtitle}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/65">
                  {secondary[0].description}
                </p>
              </div>
              <div className="text-sm text-paper/40">
                48-hour build · Sports Hackathon · Gachibowli Stadium
              </div>
            </div>
          </article>
        </Reveal>

        {/* Future note */}
        <Reveal delay={120}>
          <p className="mt-8 flex items-center gap-2 text-sm text-paper/45">
            <CheckCircle2 className="h-4 w-4 text-cyan" />
            {futureNote}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
