import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Sportmasszázs Budapest — Harmony Masszázs Stúdió",
  description: "Sportmasszázs Budapest belvárosában. Teljesítményfokozás, regeneráció, sérülésmegelőzés aktív sportolóknak. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/sport-masszazs" },
};

export default function SportMasszazsPage() {
  return (
    <ServicePage
      title="Sportmasszázs"
      subtitle="Célzott masszázs sportolóknak és aktív életmódot folytatóknak a teljesítmény és regeneráció érdekében."
      image="/images/service-sport.webp"
      sections={[
        {
          heading: "Mi az a sportmasszázs?",
          text: "A sportmasszázs egy speciálisan az aktív életmódot folytató emberek igényeire fejlesztett masszázstechnika. Nem csupán egy erős masszázs: a sportmasszázs ötvözi a svéd masszázs, a mélyizom technikák, a nyújtás és a triggerpontos kezelés elemeit. A kezelés célja a sportteljesítmény fokozása, a sérülések megelőzése és az edzés utáni regeneráció gyorsítása.",
        },
        {
          heading: "Kinek javasolt?",
          text: "A sportmasszázs nemcsak professzionális sportolóknak szól — bármilyen rendszeres fizikai aktivitást folytató ember profitálhat belőle. Futók, úszók, kerékpárosok, fitnesz rajongók, CrossFit sportolók és hobbi sportolók egyaránt. De javasolt azoknak is, akik fizikailag megterhelő munkát végeznek (kétkezi munkások, egészségügyi dolgozók). A kezelést az adott sportág sajátosságaihoz igazítjuk.",
        },
        {
          heading: "Edzés előtt vagy után javasolt?",
          text: "Mindkét esetben hatékony, de más céllal. Edzés előtt rövid, dinamikus sportmasszázst alkalmazunk, amely bemelegíti az izmokat, növeli a rugalmasságot és felkészíti a testet a terhelésre. Edzés után a cél a regeneráció: csökkentjük az izomláz intenzitását, segítjük a tejsav kiürülését és gyorsítjuk a szövetek helyreállítását. Verseny előtti és utáni kezeléseket is biztosítunk.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés sporttörténeti konzultációval kezdődik: milyen sportot űz, milyen gyakran edz, milyen területeken érez feszültséget vagy fájdalmat. A terapeuta ezután célzottan dolgozza át a terhelésnek kitett izmokat — futóknál a lábak és csípő, úszóknál a vállöv, irodai dolgozóknál a nyak-váll-hát háromszög. Nyújtási technikákat, triggerpontos kezelést és mélyszöveti munkát kombináljuk.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "A sportmasszázs 60 vagy 90 perces kezelésben érhető el. Célzott kezeléshez (pl. csak lábak edzés után) a 60 perces elegendő. Teljes test átdolgozásához a 90 perces kezelést javasoljuk.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre.",
        },
      ]}
      relatedServices={[
        { title: "Mélyizom masszázs", href: "/melyizom-masszazs" },
        { title: "Thai masszázs", href: "/thai-masszazs" },
        { title: "Svéd masszázs", href: "/sved-masszazs" },
      ]}
    />
  );
}
