import Reveal from "./Reveal.jsx";

/**
 * About — Four Premium Editorial Cards
 * 
 * Design Architecture:
 * 1. Eyebrow label: "ABOUT ME"
 * 2. Main heading: "THE PERSON BEHIND THE BUILDS"
 * 3. Opening statement: signature accent on "Maaz" and "doing." in warm brown (#8B5E3C)
 *    (Natural spacing transition into the cards — no divider line below)
 * 4. Four Coordinated Editorial Cards in a 2 × 2 Desktop Grid:
 *    - Card 01: Academics (highlights "state second rank" & "9.48")
 *    - Card 02: Hackathons (highlights "working solutions")
 *    - Card 03: Leadership (highlights "Class Representative" & "Google Student Ambassador")
 *    - Card 04: Purpose (highlights "real-world problems" & "make a difference")
 *    - Elegant #FBF9F4 / #FFFFFF surface, subtle #E3DED4 border, refined 01-04 index numbers
 *    - No subheadings, no icons, no widgets, no outer container
 * 5. Closing statement: "I'm still learning, still experimenting, and this is just the beginning."
 *    (Natural spacing transition — no divider line above or below)
 * 
 * Viewport & Responsiveness:
 * - Proportioned to fit comfortably within one desktop viewport (~700-820px)
 * - Fluid 2x2 desktop grid, graceful vertical stack on mobile
 * - Strictly isolated component, zero changes to other sections
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="About Mohammed Maaz Arfaat — The Person Behind the Builds"
      className="relative w-full bg-[#F7F5EF] text-[#202020] py-20 sm:py-28 lg:py-36 border-b border-[#D9D6CF]"
    >
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 max-w-[1440px]">
        
        {/* ================================================================= */}
        {/* 1. EYEBROW LABEL & SOLE MAIN HEADING                              */}
        {/* ================================================================= */}
        <Reveal>
          <div className="flex flex-col gap-2 mb-4 sm:mb-5">
            {/* Small uppercase eyebrow label */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#8B5E3C]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#8B5E3C]">
                ABOUT ME
              </span>
            </div>

            {/* Sole Main Heading */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold uppercase tracking-tight text-[#202020] leading-[1.12]">
              THE PERSON BEHIND THE BUILDS
            </h2>
          </div>
        </Reveal>

        {/* ================================================================= */}
        {/* 2. SIGNATURE OPENING STATEMENT (NATURAL SPACING — NO DIVIDER)     */}
        {/* ================================================================= */}
        <Reveal delay={60}>
          <div className="mb-7 sm:mb-9 lg:mb-10">
            <p className="font-display text-base sm:text-lg md:text-xl lg:text-[1.55rem] font-semibold text-[#202020] leading-[1.38] tracking-tight max-w-4xl">
              I'm <span className="text-[#8B5E3C] font-extrabold">Maaz</span> — a problem solver, a curious builder, and someone who believes the best way to learn is by{" "}
              <span className="text-[#8B5E3C] font-extrabold">doing.</span>
            </p>
          </div>
        </Reveal>

        {/* ================================================================= */}
        {/* 3. FOUR COORDINATED EDITORIAL CARDS (2 × 2 GRID ON DESKTOP)       */}
        {/* ================================================================= */}
        <Reveal delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 mb-7 sm:mb-9 lg:mb-10">
            
            {/* CARD 01: Academics */}
            <article className="rounded-xl border border-[#DED9D0] bg-white sm:bg-[#FBF9F4] p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_-4px_rgba(21,24,30,0.03)] flex flex-col justify-between transition-colors hover:border-[#C4BEB3]">
              <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#DED9D0] mb-3 sm:mb-3.5">
                <span className="font-mono text-xs font-bold tracking-wider text-[#8B5E3C]">
                  01
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C]" />
              </div>
              <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.72] text-[#5D5A54]">
                From securing the{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  state second rank
                </strong>{" "}
                in Intermediate to maintaining a CGPA of around{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  9.48
                </strong>{" "}
                in B.Tech, my journey has been shaped by academic discipline, curiosity, and a constant desire to improve.
              </p>
            </article>

            {/* CARD 02: Hackathons */}
            <article className="rounded-xl border border-[#DED9D0] bg-white sm:bg-[#FBF9F4] p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_-4px_rgba(21,24,30,0.03)] flex flex-col justify-between transition-colors hover:border-[#C4BEB3]">
              <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#DED9D0] mb-3 sm:mb-3.5">
                <span className="font-mono text-xs font-bold tracking-wider text-[#8B5E3C]">
                  02
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C]" />
              </div>
              <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.72] text-[#5D5A54]">
                Hackathons have taught me to think under pressure, collaborate, and turn ideas into{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  working solutions
                </strong>{" "}
                within tight deadlines. Every win and runner-up finish has pushed me to challenge myself and aim higher.
              </p>
            </article>

            {/* CARD 03: Leadership */}
            <article className="rounded-xl border border-[#DED9D0] bg-white sm:bg-[#FBF9F4] p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_-4px_rgba(21,24,30,0.03)] flex flex-col justify-between transition-colors hover:border-[#C4BEB3]">
              <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#DED9D0] mb-3 sm:mb-3.5">
                <span className="font-mono text-xs font-bold tracking-wider text-[#8B5E3C]">
                  03
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C]" />
              </div>
              <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.72] text-[#5D5A54]">
                As a{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  Class Representative
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  Google Student Ambassador
                </strong>
                , I've learned the value of communication, leadership, taking initiative, and bringing people together through events and shared ideas.
              </p>
            </article>

            {/* CARD 04: Purpose */}
            <article className="rounded-xl border border-[#DED9D0] bg-white sm:bg-[#FBF9F4] p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_-4px_rgba(21,24,30,0.03)] flex flex-col justify-between transition-colors hover:border-[#C4BEB3]">
              <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-[#DED9D0] mb-3 sm:mb-3.5">
                <span className="font-mono text-xs font-bold tracking-wider text-[#8B5E3C]">
                  04
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C]" />
              </div>
              <p className="text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.72] text-[#5D5A54]">
                What drives me most is identifying{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  real-world problems
                </strong>
                , understanding the people behind them, building solutions, gathering feedback, and making them better. I don't just want to build projects; I want to create things that genuinely{" "}
                <strong className="font-semibold text-[#8B5E3C]">
                  make a difference
                </strong>
                .
              </p>
            </article>

          </div>
        </Reveal>

        {/* ================================================================= */}
        {/* 4. OVERSIZED CLOSING STATEMENT (NATURAL SPACING — NO DIVIDER)     */}
        {/* ================================================================= */}
        <Reveal delay={180}>
          <div>
            <p className="font-display text-base sm:text-lg lg:text-[1.4rem] font-bold text-[#202020] leading-[1.35] tracking-tight max-w-4xl">
              I'm still learning, still experimenting, and{" "}
              <span className="text-[#8B5E3C]">this is just the beginning.</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
