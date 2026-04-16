import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Szakértő kezek",
    desc: "Több mint 10 év tapasztalattal rendelkező, képzett masszőr.",
    image: "/images/about-szakerto.webp",
  },
  {
    title: "Egyedi kezelések",
    desc: "Minden masszázst az Ön testéhez és igényeihez szabunk személyre.",
    image: "/images/about-egyedi.webp",
  },
  {
    title: "Nyugodt légkör",
    desc: "Intim, relaxációs környezet ahol valóban kikapcsolódhat.",
    image: "/images/about-legkor.webp",
  },
  {
    title: "Prémium olajok",
    desc: "Kizárólag természetes, kiváló minőségű masszázsolajokkal dolgozunk.",
    image: "/images/about-olajok.webp",
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
              <div className="rounded-2xl border border-border bg-surface-card overflow-hidden card-hover group h-full">
                {/* Image */}
                <div className="h-52 sm:h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Text */}
                <div className="p-5 lg:p-6">
                  <h3 className="font-heading text-base font-bold text-foreground mb-2 tracking-[-0.01em]">
                    {benefit.title}
                  </h3>
                  <p className="text-[0.85rem] text-foreground-muted leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
