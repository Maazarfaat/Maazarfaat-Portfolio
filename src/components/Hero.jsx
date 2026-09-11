import { ArrowDown } from "lucide-react";
import { profile } from "../data/profile.js";
import ProfileImage from "./ProfileImage.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-bg-hero"
    >
      {/* Very subtle texture */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-light opacity-30" />

      <div className="relative mx-auto flex w-full max-w-[100rem] flex-1 flex-col px-6 sm:px-12 lg:px-20">
        {/* Main composition */}
        <div className="flex flex-1 flex-col items-center justify-center py-20 text-center sm:py-24">
          {/* Availability label */}
          <p className="inline-flex items-center gap-2 rounded-full border border-line/60 bg-card/70 px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-ink-secondary backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Open to hackathons, internships &amp; build collaborations
          </p>

          {/* Full-width editorial name — the dominant visual */}
          <h1 className="mt-10 w-full font-display font-extrabold uppercase text-ink sm:mt-14">
            <span className="flex flex-col gap-0 sm:gap-1 text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.9] tracking-tight">
              <span className="block">Mohammed</span>
              <span className="block text-cyan">Maaz</span>
              <span className="block">Arfaat</span>
            </span>
          </h1>

          {/* Centered portrait — the visual anchor */}
          <figure className="relative mt-12 w-[clamp(260px,26vw,380px)] sm:mt-16">
            <div
              aria-hidden="true"
              className="absolute -right-3 -bottom-3 h-full w-full rounded-[1.5rem] border border-line-light sm:-right-4 sm:-bottom-4"
            />
            <ProfileImage
              alt="Portrait of Mohammed Maaz Arfaat"
              eager
              className="relative border border-line shadow-[0_20px_50px_-25px_rgba(23,23,23,0.35)]"
              radius="rounded-[1.25rem]"
            />
          </figure>

          {/* Tagline */}
          <p className="mt-8 font-display text-base font-bold text-ink sm:mt-10 sm:text-lg">
            {profile.tagline}
          </p>

          {/* Intro */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-secondary sm:text-base">
            {profile.hero.intro}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-[0.8rem] font-semibold text-bg transition-colors hover:bg-ink/85"
            >
              View Projects
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line/60 bg-card/70 px-6 py-3 text-[0.8rem] font-semibold text-ink transition-all hover:border-cyan/40 hover:text-cyan backdrop-blur-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
