import { profile } from "../data/profile.js";
import { Section } from "./Section.jsx";
import Reveal from "./Reveal.jsx";

export default function PersonalStatement() {
  return (
    <Section id="statement" containerClassName="flex justify-center">
      <Reveal>
        <p className="max-w-4xl text-center font-display text-[clamp(1.35rem,3vw,2.5rem)] font-bold leading-snug tracking-tight text-ink sm:leading-tight">
          {profile.personalStatement}
        </p>
      </Reveal>
    </Section>
  );
}
