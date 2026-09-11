import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const { contact, links } = profile;

  return (
    <Section id="contact" containerClassName="flex flex-col items-center text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan">
          <span className="h-px w-7 bg-cyan" />
          Contact
          <span className="h-px w-7 bg-cyan" />
        </span>

        <h2 className="mt-6 font-display uppercase font-extrabold tracking-tight leading-[0.95] text-ink text-[clamp(2.5rem,8vw,6rem)]">
          Let's
          <br />
          <span className="text-cyan">Build</span>
          <br />
          Something.
        </h2>

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-ink-secondary">
          Open to hackathons, collaborations, internships and interesting ideas.
        </p>

        <a
          href={`mailto:${links.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-ink/85"
        >
          <Mail className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          {links.email}
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line/60 bg-card/70 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:text-cyan hover:border-cyan/40 backdrop-blur-sm"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line/60 bg-card/70 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:text-cyan hover:border-cyan/40 backdrop-blur-sm"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
