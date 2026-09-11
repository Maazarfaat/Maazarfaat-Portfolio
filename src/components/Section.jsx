import Reveal from "./Reveal.jsx";

/**
 * Section — consistent vertical rhythm + max-width container.
 * Pass `dark` for the intentional charcoal feature section.
 */
export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`relative py-24 sm:py-32 lg:py-40 ${dark ? "bg-dark text-paper" : "bg-transparent"} ${className}`}
    >
      <div className={`mx-auto w-full max-w-[75rem] px-6 sm:px-8 lg:px-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * SectionHeading — eyebrow + title + optional lede.
 * Pass `dark` inside the charcoal feature section.
 */
export function SectionHeading({ eyebrow, title, lede, id, align = "left", dark = false }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-3 ${alignment} mb-14 sm:mb-16 lg:mb-20`}>
      <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan">
        <span className="h-px w-7 bg-cyan" />
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`max-w-2xl pt-1 text-[0.95rem] leading-relaxed sm:text-base ${
            dark ? "text-paper/65" : "text-ink-secondary"
          }`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
