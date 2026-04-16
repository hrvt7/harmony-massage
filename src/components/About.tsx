import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Szakértő kezek",
    desc: "Több mint 10 év tapasztalattal rendelkező, képzett masszőr.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Egyedi kezelések",
    desc: "Minden masszázst az Ön testéhez és igényeihez szabunk személyre.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Nyugodt légkör",
    desc: "Intim, relaxációs környezet ahol valóban kikapcsolódhat.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
  },
  {
    title: "Prémium olajok",
    desc: "Kizárólag természetes, kiváló minőségű masszázsolajokkal dolgozunk.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="rolunk" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Rólunk
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Miért{" "}
              <span className="text-highlight">válasszon minket?</span>
            </h2>
            <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              Stúdiónk célja, hogy minden vendégünk teljesen kikapcsolódva, megújulva távozzon. Professzionális masszázskezelések, személyre szabva.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed max-w-xl mx-auto">
              A Budapest belvárosában, a Nagymező utcán található stúdiónk könnyedén megközelíthető. Nyugodt, csendes környezetben, kellemes zenével és aromákkal várjuk vendégeinket.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface-card overflow-hidden card-hover group h-full p-6 lg:p-7 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/8 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/12 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2 tracking-[-0.01em]">
                  {benefit.title}
                </h3>
                <p className="text-[0.85rem] text-foreground-muted leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
