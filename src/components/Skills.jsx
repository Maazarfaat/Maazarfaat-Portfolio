import {
  ReactIcon,
  PythonIcon,
  JavaIcon,
  JavascriptIcon,
  TailwindIcon,
  NodeIcon,
  FastapiIcon,
  GitIcon,
  GithubIcon,
  PostgresIcon,
  MysqlIcon,
  MongoIcon,
  PytorchIcon,
  OpencvIcon,
  ViteIcon,
  CIcon,
  TomcatIcon,
  MavenIcon,
  ExpressIcon,
} from "./BrandIcons.jsx";
import { Terminal } from "lucide-react";
import { profile } from "../data/profile.js";
import { Section, SectionHeading } from "./Section.jsx";

const iconMap = {
  Java: JavaIcon,
  Python: PythonIcon,
  JavaScript: JavascriptIcon,
  C: CIcon,
  React: ReactIcon,
  Vite: ViteIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodeIcon,
  Express: ExpressIcon,
  FastAPI: FastapiIcon,
  "JSP & Servlets": JavaIcon,
  MySQL: MysqlIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  PyTorch: PytorchIcon,
  OpenCV: OpencvIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  Maven: MavenIcon,
  "Apache Tomcat": TomcatIcon,
};

export default function Skills() {
  const technologies = profile.technologies || [];
  // Duplicate list to achieve continuous seamless loop without visual gaps
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <Section
      id="skills"
      pyClassName="py-24 sm:py-36 lg:py-48"
      className="relative overflow-hidden bg-[#F7F5EF] border-t border-[#E5E2DA]"
    >
      <SectionHeading
        eyebrow="Technical Stack"
        title="Languages, Foundations & Tools"
        lede="Verified technologies, systems, and developer tools applied across academic coursework, hackathons, and enterprise systems."
      />

      {/* =================================================================== */}
      {/* HORIZONTALLY MOVING TECHNOLOGY LOGO STRIP / MARQUEE                 */}
      {/* =================================================================== */}
      <div className="relative w-full py-6">
        {/* Soft Left and Right Edge Gradient Masks */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7F5EF] to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7F5EF] to-transparent z-10 pointer-events-none"
        />

        {/* Marquee Track 1 (Left to Right Flow) */}
        <div className="flex overflow-hidden py-2.5">
          <div className="flex shrink-0 items-center gap-3.5 sm:gap-4 animate-marquee will-change-transform motion-reduce:animate-none">
            {marqueeItems.map((tech, idx) => {
              const Icon = iconMap[tech.name] || Terminal;

              return (
                <div
                  key={`${tech.name}-row1-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#D9D6CF] shadow-xs hover:border-[#8B5E3C] transition-colors shrink-0 select-none group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FAF9F5] border border-[#EBE8E0] shrink-0 p-1">
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex flex-col pr-1">
                    <span className="font-display text-sm font-bold text-[#15181E] tracking-tight">
                      {tech.name}
                    </span>
                    <span className="text-[0.62rem] font-mono text-[#88857D] uppercase tracking-wider">
                      {tech.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Track 2 (Right to Left Reverse Flow for Visual Richness) */}
        <div className="flex overflow-hidden py-2.5">
          <div className="flex shrink-0 items-center gap-3.5 sm:gap-4 animate-marquee-reverse will-change-transform motion-reduce:animate-none">
            {[...marqueeItems].reverse().map((tech, idx) => {
              const Icon = iconMap[tech.name] || Terminal;

              return (
                <div
                  key={`${tech.name}-row2-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#D9D6CF] shadow-xs hover:border-[#8B5E3C] transition-colors shrink-0 select-none group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FAF9F5] border border-[#EBE8E0] shrink-0 p-1">
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>
                  <div className="flex flex-col pr-1">
                    <span className="font-display text-sm font-bold text-[#15181E] tracking-tight">
                      {tech.name}
                    </span>
                    <span className="text-[0.62rem] font-mono text-[#88857D] uppercase tracking-wider">
                      {tech.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
