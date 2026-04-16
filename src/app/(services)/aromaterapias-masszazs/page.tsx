import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Aromaterápiás masszázs Budapest — Harmony Masszázs Stúdió",
  description: "Illóolajos aromaterápiás masszázs Budapest belvárosában. Stresszoldás, alvásjavítás, lelki egyensúly. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/aromaterapias-masszazs" },
};

export default function AromaterapiasMasszazsPage() {
  return (
    <ServicePage
      title="Aromaterápiás masszázs"
      subtitle="Illóolajos masszázs a test és a lélek harmonizálására — az illatok gyógyító ereje."
      sections={[
        {
          heading: "Mi az aromaterápiás masszázs?",
          text: "Az aromaterápiás masszázs a klasszikus masszázstechnikákat ötvözi a növényi illóolajok terápiás hatásaival. Az illóolajok a bőrön át felszívódva és az illatuk révén is hatnak — közvetlenül befolyásolják a limbikus rendszert, amely az érzelmekért és a hangulatért felelős agyi terület. Minden illóolajnak más hatása van: a levendula nyugtat, az eukaliptusz frissít, a rozmaring energizál.",
        },
        {
          heading: "Kinek javasolt?",
          text: "Az aromaterápiás masszázs különösen ajánlott azoknak, akik stresszel, szorongással vagy alvászavarral küzdenek. Hatékony fejfájás, migrén és érzelmi kimerültség esetén. Premenstruációs tünetek enyhítésére és az immunrendszer erősítésére is kiválóan alkalmazható. Ha szeretne egy igazán komplex, testre és lélekre egyaránt ható kezelést, ez a tökéletes választás.",
        },
        {
          heading: "Milyen illóolajakat használunk?",
          text: "Kizárólag 100%-os tisztaságú, terápiás minőségű illóolajakat használunk. A levendula a mély relaxáció és az alvásjavítás mestere. Az eukaliptusz tisztítja a légutakat és élénkíti a szellemet. A rozmaring serkenti a vérkeringést és a koncentrációt. A bergamott hangulatjavító, a ylang-ylang érzéki és harmonizáló. Az illóolajokat bázis olajjal (jojoba, mandula) keverjük a biztonságos alkalmazás érdekében.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés egy személyes konzultációval kezdődik, ahol felmérjük az Ön fizikai és érzelmi állapotát, majd kiválasztjuk a legmegfelelőbb illóolaj-keveréket. A masszázs során lágy, ringató mozdulatokkal dolgozunk, amelyek elősegítik az olajok felszívódását és a mély relaxációt. A kezelés után javasoljuk, hogy pár percig pihenjen, és igyon egy pohár vizet a méreganyagok kiürülésének elősegítésére.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "Az aromaterápiás masszázs 60 vagy 90 perces kezelésben érhető el. A teljes élményhez a 90 perces kezelést javasoljuk, amely magában foglalja az illóolaj-konzultációt, a masszázst és a pihenési időt is.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre.",
        },
      ]}
      relatedServices={[
        { title: "Svéd masszázs", href: "/sved-masszazs" },
        { title: "Forró köves masszázs", href: "/forro-koves-masszazs" },
        { title: "Thai masszázs", href: "/thai-masszazs" },
      ]}
    />
  );
}
