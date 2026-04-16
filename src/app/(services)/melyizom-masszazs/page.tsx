import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Mélyizom masszázs Budapest — Harmony Masszázs Stúdió",
  description: "Mélyizom (deep tissue) masszázs Budapest belvárosában. Krónikus fájdalmak, izomfeszültség, tartási problémák kezelése. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/melyizom-masszazs" },
};

export default function MelyizomMasszazsPage() {
  return (
    <ServicePage
      title="Mélyizom masszázs"
      subtitle="Intenzív masszázs a mélyen fekvő izomfeszültségek és krónikus fájdalmak oldására."
      image="/images/service-melyizom.webp"
      sections={[
        {
          heading: "Mi az a mélyizom masszázs?",
          text: "A mélyizom masszázs (deep tissue massage) a mélyebb izomrétegekre és kötőszövetekre (fasciákra) koncentráló intenzív masszázstechnika. A terapeuta lassú, határozottan nyomásos mozdulatokkal dolgozik, amelyek a felszíni izmok alatt fekvő rétegekig hatolnak. A cél nem az általános relaxáció, hanem a specifikus problémás területek célzott kezelése — legyen szó krónikus feszültségről, összetapadásokról vagy triggerpontokról.",
        },
        {
          heading: "Kinek javasolt?",
          text: "A mélyizom masszázs ideális választás azoknak, akik krónikus hát-, nyak- vagy vállbántal küzdenek, tartási problémáik vannak, vagy intenzív sportolás után regenerálódni szeretnének. Hatékony ülőmunkából fakadó merevség, fejfájás és ismétlődő terheléses sérülések (RSI) kezelésében. Fontos tudni, hogy ez nem egy hagyományos relaxáció, hanem egy terápiás célú, intenzív kezelés.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés részletes konzultációval indul: megbeszéljük a fájdalmas területeket, a panaszok jellegét és a kezelés céljait. A masszázs során a terapeuta ujjbegyekkel, könyökkel és alkarral dolgozik, fokozatosan mélyülve a szövetekben. A nyomás intenzitását mindig az Ön visszajelzéseihez igazítjuk — a kezelésnek nem kell fájdalmasnak lennie. A problémás területekre koncentrálunk, de az egész testet kontextusban kezeljük.",
        },
        {
          heading: "Fáj a mélyizom masszázs?",
          text: "A mélyizom masszázs során érezhető nyomás és ún. jó fájdalom (a feszültség oldódásának érzése) normális. Ez nem azonos az éles, hasító fájdalommal — ha ilyet érez, szóljon a terapeutának. A kezelés után 1-2 napig enyhe érzékenység jelentkezhet a kezelt területeken, ami a szövetek regenerálódásának természetes jele. A harmadik napra általában teljes megkönnyebbülés érezhető.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "A mélyizom masszázs 60 vagy 90 perces kezelésben érhető el. Célzott, egy-két területre fókuszáló kezeléshez a 60 perces elegendő. Ha az egész testet szeretné átdolgoztatni, a 90 perces kezelést javasoljuk.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre.",
        },
      ]}
      relatedServices={[
        { title: "Sportmasszázs", href: "/sport-masszazs" },
        { title: "Svéd masszázs", href: "/sved-masszazs" },
        { title: "Thai masszázs", href: "/thai-masszazs" },
      ]}
    />
  );
}
