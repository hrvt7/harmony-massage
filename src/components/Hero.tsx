"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Background — subtle gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary-light/60 via-surface to-surface" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Masszázs Stúdió — Budapest
              </p>
              <h1
                className="font-heading font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground"
                style={{ fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)" }}
              >
                Testi-lelki harmónia,{" "}
                <span className="text-highlight">szakértő kezekben.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-foreground-secondary max-w-[540px]">
                Professzionális masszázs kezelések a testi feszültség oldására és a lelki feltöltődésre. Budapest, Nagymező utca 42.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+36301234567"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4.5 text-[1rem] font-bold text-white shadow-xl shadow-accent/25 cta-glow whitespace-nowrap cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Időpontfoglalás
                </a>
                <a
                  href="#szolgaltatasok"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 px-8 py-4.5 text-[1rem] font-bold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Szolgáltatások
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — decorative card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative max-w-[300px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 transform rotate-2 scale-[1.02] -z-10" />
                <div className="rounded-3xl bg-surface-card border border-border shadow-2xl shadow-primary/8 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-all duration-500 p-8 text-center">
                  <div className="mx-auto h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">Harmony Masszázs</h3>
                  <p className="text-sm text-foreground-muted mb-4">Stúdió — Budapest</p>
                  <div className="space-y-2 text-sm text-foreground-secondary">
                    <p>10+ év tapasztalat</p>
                    <p>6 masszázs típus</p>
                    <p>Személyre szabott kezelések</p>
                  </div>
                  <a
                    href="tel:+36301234567"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary/8 text-primary font-bold text-sm py-3 mt-5 hover:bg-primary/15 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +36 30 123 4567
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
