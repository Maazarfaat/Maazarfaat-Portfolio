import { MicrosoftIcon, CopadoIcon, InfosysIcon } from "./BrandIcons.jsx";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import LinkedInLink from "./LinkedInLink.jsx";

const CERT_ORG_ICONS = {
  Microsoft: MicrosoftIcon,
  "Copado Certified": CopadoIcon,
  "Infosys Springboard": InfosysIcon,
};

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that back the claims"
        lede="Independent programs and platforms where I've put in the work and earned the check."
      />

      <Reveal>
        <div className="divide-y divide-line-light">
          {profile.certifications.map((c) => {
            const OrgIcon = CERT_ORG_ICONS[c.org];
            return (
              <div
                key={c.title}
                className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line-light bg-bg">
                    {OrgIcon ? (
                      <OrgIcon className="h-4 w-4 text-ink-secondary" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    )}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink-secondary">{c.org}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-13 sm:pl-0">
                  <span className="inline-flex w-fit items-center rounded-full border border-line bg-bg px-3 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-mist">
                    {c.tag}
                  </span>
                  <LinkedInLink
                    url={c.linkedinUrl}
                    className="text-ink-secondary hover:text-cyan"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
