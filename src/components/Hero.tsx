"use client";

import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden wave-divider">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg-mobile.webp"
          alt="Masszázs stúdió belső tér illusztráció"
          className="w-full h-full object-cover object-center sm:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover object-[center_30%] hidden sm:block"
        />
        {/* Desktop: left fade for text readability */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-[#FAFAF8]/85 via-[#FAFAF8]/50 to-transparent" />
        {/* Mobile: bottom fade for text */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-transparent via-[#FAFAF8]/40 to-[#FAFAF8]/95" />
        {/* Bottom fade */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-b from-transparent via-transparent to-[#FAFAF8]/80" />
      </div>

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

          {/* Right — spacer for background image visibility */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
