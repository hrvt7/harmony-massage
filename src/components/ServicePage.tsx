import FadeIn from "./FadeIn";

interface ServicePageProps {
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  sections: { heading: string; text: string }[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePage({ title, subtitle, image, video, sections, relatedServices }: ServicePageProps) {
  const MediaTag = ({ className }: { className: string }) =>
    video ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className={className}
      >
        <source src={video} type="video/webm" />
      </video>
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt={title} className={className} />
    );

  return (
    <>
      {/* Mobile: media visible at top, then text below */}
      <div className="sm:hidden">
        <div className="h-[72px]" />
        <MediaTag className="w-full h-auto" />
      </div>

      {/* Desktop: background media hero with fade — same pattern as main Hero */}
      <section className="hidden sm:block relative pt-36 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <MediaTag className="w-full h-full object-cover object-center" />
          {/* Left fade for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/85 via-[#FAFAF8]/50 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAF8]" />
        </div>
        <div className="h-48 lg:h-56" />
        <div className="relative">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 pt-12 pb-14">
            <FadeIn>
              <a href="/#szolgaltatasok" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors mb-5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Vissza a szolgáltatásokhoz
              </a>
              <h1 className="font-heading font-extrabold tracking-[-0.03em] text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3rem)" }}>
                {title}
              </h1>
              <p className="mt-4 text-lg text-foreground-secondary leading-relaxed max-w-2xl">{subtitle}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mobile: title area below image */}
      <div className="sm:hidden bg-[#FAFAF8]">
        <div className="mx-auto max-w-4xl px-5 pt-8 pb-10">
          <FadeIn>
            <a href="/#szolgaltatasok" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary-dark transition-colors mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Vissza a szolgáltatásokhoz
            </a>
            <h1 className="font-heading font-extrabold tracking-[-0.03em] text-foreground leading-tight text-3xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">{subtitle}</p>
          </FadeIn>
        </div>
      </div>

      {/* Content sections */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.1}>
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground tracking-[-0.02em] mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-foreground-secondary leading-[1.8] text-[0.95rem]">
                    {section.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/10 p-6 sm:p-8">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Időpontfoglalás</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Foglaljon időpontot telefonon vagy emailben, és tapasztalja meg a kezelés jótékony hatásait.
              </p>
              <a
                href="tel:+36301234567"
                className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 cta-glow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +36 30 123 4567
              </a>
            </div>
          </FadeIn>

          {/* Bottom cards */}
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h3 className="font-heading font-bold text-foreground text-sm mb-4">Elérhetőség</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="shrink-0 mt-0.5 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-foreground-secondary">1065 Budapest, Nagymező utca 42.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="shrink-0 mt-0.5 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:+36301234567" className="text-primary font-semibold hover:underline">+36 30 123 4567</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="shrink-0 mt-0.5 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a href="mailto:info@harmonymassage.hu" className="text-primary hover:underline">info@harmonymassage.hu</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface-card p-6">
                <h3 className="font-heading font-bold text-foreground text-sm mb-4">További szolgáltatások</h3>
                <div className="space-y-2">
                  {relatedServices.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors py-1.5"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
