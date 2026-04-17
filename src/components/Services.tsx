"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type Service = {
  title: string;
  href: string;
  short: string;
  detail: string;
  image: string;
  video?: string;
};

const services: Service[] = [
  {
    title: "Svéd masszázs",
    href: "/sved-masszazs",
    short: "Klasszikus relaxációs masszázs az egész test átfogó ellazítására.",
    detail: "A svéd masszázs a legismertebb és leggyakrabban alkalmazott masszázstechnika. Simító, gyúró, dörzsölő és ütögető mozdulatokkal dolgozunk, amelyek serkentik a vérkeringést, oldják az izomfeszültséget és elősegítik a méreganyagok kiürülését. Ideális választás stresszoldásra, általános relaxációra és a közérzet javítására. A kezelés 60 vagy 90 perces időtartamban érhető el.",
    image: "/images/service-sved.webp",
    video: "/videos/service-sved.webm",
  },
  {
    title: "Aromaterápiás masszázs",
    href: "/aromaterapias-masszazs",
    short: "Illóolajos masszázs a test és a lélek harmonizálására.",
    detail: "Az aromaterápiás masszázs során gondosan válogatott illóolajokat használunk, amelyek a bőrön át felszívódva és az illatuk révén is hatnak. Levendula a nyugalomért, eukaliptusz a légzésért, rozmaring a frissítő energiáért — az olajokat az Ön igényeihez igazítjuk. A lágy, ringató mozdulatok és az aromák együttes hatása mély relaxációt eredményez. Különösen javasolt stressz, alvászavar és érzelmi kimerültség esetén.",
    image: "/images/service-aroma.webp",
  },
  {
    title: "Mélyizom masszázs",
    href: "/melyizom-masszazs",
    short: "Intenzív masszázs a mélyen fekvő izomfeszültségek oldására.",
    detail: "A mélyizom (deep tissue) masszázs a mélyebb izomrétegekre és kötőszövetekre koncentrál, lassú, erőteljes nyomással dolgozva. Különösen hatékony krónikus fájdalmak, tartási problémák és sportolás okozta izomláz kezelésében. A kezelés során a terapeuta könyökkel, alkarral és ujjbegyekkel dolgozik a mélyebb rétegek eléréséhez. Átmeneti érzékenység normális a kezelés után — ez a gyógyulás jele.",
    image: "/images/service-melyizom.webp",
  },
  {
    title: "Forró köves masszázs",
    href: "/forro-koves-masszazs",
    short: "Bazaltkövekkel végzett hőterápiás masszázs a mély ellazulásért.",
    detail: "A forró köves masszázs során speciálisan felmelegített bazaltköveket helyezünk a test energiapontjaira, miközben a kövek segítségével masszírozzuk az izmokat. A meleg hatására az erek kitágulnak, javul a vérkeringés, és az izmok könnyebben ellazulnak. A bazaltkövek egyenletes hőt adnak le, ami mélyen átjárja a szöveteket. Különösen hatékony izommerevség, stressz és hideg időszakban érzett feszültség esetén.",
    image: "/images/service-koves.webp",
  },
  {
    title: "Sportmasszázs",
    href: "/sport-masszazs",
    short: "Célzott masszázs sportolóknak a teljesítmény és regeneráció érdekében.",
    detail: "A sportmasszázs az aktív életmódot folytató emberek számára készült. Edzés előtt a bemelegítést segíti, edzés után a regenerációt gyorsítja. A terapeuta az adott sportág sajátosságaihoz igazítja a kezelést — futók lábizmaira, úszók vállaira, irodai dolgozók hátára fókuszálva. Nyújtási technikákat, triggerpontos kezelést és mélyszöveti munkát kombináljuk a maximális hatékonyságért.",
    image: "/images/service-sport.webp",
  },
  {
    title: "Thai masszázs",
    href: "/thai-masszazs",
    short: "Ősi keleti technika nyújtással és akupresszúrával.",
    detail: "A thai masszázs egy 2500 éves hagyományú gyógyászati technika, amely ötvözi az akupresszúrát, az energiavonalak mentén végzett nyomást és a jóga-szerű passzív nyújtásokat. A kezelés ruhában, matracon történik, olaj nélkül. A terapeuta kézzel, lábbal, könyökkel és térdével dolgozik, miközben a testet különböző pozíciókba helyezi. Eredménye a fokozott rugalmasság, jobb energiaáramlás és mély ellazulás.",
    image: "/images/service-thai.webp",
  },
];

/* Media — video if available, otherwise image */
function Media({ service, className }: { service: Service; className: string }) {
  if (service.video) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className={className}
      >
        <source src={service.video} type="video/webm" />
      </video>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={service.image} alt={service.title} className={className} loading="lazy" />;
}

/* Desktop: expandable card */
function DesktopCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
      <div
        className={`rounded-2xl border bg-surface-card overflow-hidden transition-all duration-300 group cursor-pointer ${
          open ? "border-primary/25 shadow-lg h-[520px]" : "border-border hover:border-primary/15 card-hover h-[120px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        {/* Header — always visible */}
        <div className="p-4 lg:p-5 h-[120px] flex items-center gap-4">
          <div className={`h-14 w-14 shrink-0 rounded-2xl overflow-hidden transition-all duration-300 ${
            open ? "ring-2 ring-primary/30" : "ring-1 ring-border"
          }`}>
            <Media service={service} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-[1rem] font-bold text-foreground tracking-[-0.01em] leading-tight">
                {service.title}
              </h3>
              <div className={`shrink-0 h-6 w-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                open ? "bg-primary/10 text-primary rotate-180" : "bg-surface-warm text-foreground-muted"
              }`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed mt-1 line-clamp-2">{service.short}</p>
          </div>
        </div>

        {/* Expanded content */}
        {open && (
          <div className="px-4 lg:px-5 pb-5 h-[400px] flex flex-col">
            <div className="border-t border-border-light pt-4 flex flex-col flex-1">
              <div className="mb-3 rounded-xl overflow-hidden shrink-0 h-[180px]">
                <Media service={service} className="w-full h-full object-cover" />
              </div>
              <p className="text-[0.85rem] text-foreground-secondary leading-[1.7] line-clamp-5 flex-1">{service.detail}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 mt-3 rounded-lg bg-primary/8 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/15 transition-colors shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                Részletek megtekintése
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

/* Mobile: simple card → links to subpage */
function MobileCard({ service, index }: { service: Service; index: number }) {
  return (
    <FadeIn delay={index * 0.04}>
      <a
        href={service.href}
        className="flex flex-col rounded-xl border border-border bg-surface-card overflow-hidden card-hover group w-full"
      >
        <div className="w-full aspect-square overflow-hidden">
          <Media service={service} className="w-full h-full object-cover" />
        </div>
        <div className="px-2 py-2.5 text-center h-[3rem] flex items-center justify-center">
          <h3 className="font-heading text-[0.7rem] font-bold text-foreground tracking-[-0.01em] leading-tight line-clamp-2">
            {service.title}
          </h3>
        </div>
      </a>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 sm:py-32 bg-surface-alt relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Szolgáltatások
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-foreground">
              Masszázs{" "}
              <span className="text-highlight">kezelések</span>
            </h2>
            <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
              6 különböző masszázstechnika — az Ön igényeihez igazítva.
            </p>
          </div>
        </FadeIn>

        {/* Mobile: grid of small cards */}
        <div className="flex flex-wrap justify-center gap-3 sm:hidden">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(33.333%-0.5rem)]">
              <MobileCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop: expandable 2-col cards */}
        <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-4 lg:gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div key={service.title} className="w-[calc(50%-0.625rem)]">
              <DesktopCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
