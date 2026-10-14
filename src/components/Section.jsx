import Reveal from "./Reveal.jsx";

/**
 * Section — consistent vertical rhythm + wide container for light editorial theme.
 * Spacious, balanced, supporting bold typography, subtle separation, and full-width presence.
 */
export function Section({
  id,
  children,
  className = "",
  containerClassName = "max-w-[1440px]",
  pyClassName = "py-24 sm:py-36 lg:py-48",
}) {
  return (
    <section
      id={id}
      className={`relative ${pyClassName} bg-transparent text-[#15181E] ${className}`}
    >
      <div className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * SectionHeading — bold oversized editorial title with concise supporting subtitle.
 */
export function SectionHeading({ eyebrow, title, lede, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-3.5 ${alignment} mb-12 sm:mb-16 lg:mb-20`}>
      <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#8B5E3C] font-mono">
        <span className="h-0.5 w-6 bg-[#8B5E3C]" />
        {eyebrow}
      </span>
      <h2 className="font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-extrabold tracking-tight text-[#15181E] leading-[1.12]">
        {title}
      </h2>
      {lede && (
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#575550] font-normal">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
