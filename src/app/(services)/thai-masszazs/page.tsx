import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Thai masszázs Budapest — Harmony Masszázs Stúdió",
  description: "Hagyományos thai masszázs Budapest belvárosában. Akupresszúra, passzív nyújtás, energiavonalak. Olaj nélkül, ruhában. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/thai-masszazs" },
};

export default function ThaiMasszazsPage() {
  return (
    <ServicePage
      title="Thai masszázs"
      subtitle="Ősi keleti technika nyújtással és akupresszúrával — 2500 év bölcsessége az Ön szolgálatában."
      image="/images/service-thai.webp"
      sections={[
        {
          heading: "Mi az a thai masszázs?",
          text: "A hagyományos thai masszázs (nuad thai) egy 2500 éves gyógyászati hagyomány, amelyet a buddhista szerzetesek fejlesztettek ki Thaiföldön. Ez a technika egyedülálló abban, hogy ötvözi az akupresszúrát, az energiavonalak (sen vonalak) mentén végzett nyomást és a jóga-szerű passzív nyújtásokat. A kezelés ruhában, matracon történik, masszázsolaj nélkül — ezért gyakran lusta jógaként is emlegetik.",
        },
        {
          heading: "Kinek javasolt?",
          text: "A thai masszázs ideális választás azoknak, akik szeretnék javítani a rugalmasságukat és a mozgásszabadságukat. Ajánlott jógázóknak, sportolóknak, ülőmunkát végzőknek és mindazoknak, akik természetes módon szeretnék javítani az energiaáramlásukat. Különösen hatékony hátfájás, derékfájás, csípőmerevség és fejfájás kezelésében. Azoknak is javasolt, akik nem szeretnék az olajos masszázsformákat.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés kényelmes, laza ruhában történik, amely lehetővé teszi a szabad mozgást. A terapeuta padlóra helyezett matracon dolgozik, kézzel, lábbal, könyökkel és térdével alkalmazva nyomást a test energiavonalai mentén. Közben a testet különböző pozíciókba helyezi — hajlítja, nyújtja, forgatja — a jóga ászanáihoz hasonlóan, de Ön teljesen passzív marad. Az eredmény: fokozott rugalmasság, jobb energiaáramlás és mély ellazulás.",
        },
        {
          heading: "Miben különbözik a nyugati masszázsoktól?",
          text: "A thai masszázs több szempontból is eltér a nyugati masszázsformáktól. Nincs olaj — ruhában, matracon történik. Nem csak az izmokra hat — az energiavonalakra és az ízületekre is. Aktív nyújtásokat tartalmaz — a terapeuta mozgatja az Ön testét. Az egész testet egységként kezeli — nem izomcsoportokra fókuszál, hanem az energiaáramlás harmonizálására. A kezelés után nem érzi magát olajosnak, hanem rugalmasan, energikusan.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "A thai masszázs 90 perces kezelésben érhető el. A hagyományos thai masszázs lassú, meditatív tempóban zajlik, ezért a 90 perces időtartam szükséges a teljes hatás eléréséhez. A kezelés után javasoljuk, hogy igyon sok vizet, és kerülje az intenzív fizikai terhelést aznap.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre.",
        },
      ]}
      relatedServices={[
        { title: "Sportmasszázs", href: "/sport-masszazs" },
        { title: "Svéd masszázs", href: "/sved-masszazs" },
        { title: "Aromaterápiás masszázs", href: "/aromaterapias-masszazs" },
      ]}
    />
  );
}
