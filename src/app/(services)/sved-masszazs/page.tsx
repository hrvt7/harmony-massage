import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Svéd masszázs Budapest — Harmony Masszázs Stúdió",
  description: "Klasszikus svéd masszázs Budapest belvárosában. Relaxáció, stresszoldás, vérkeringés javítás. Időpontfoglalás: +36 30 123 4567.",
  alternates: { canonical: "https://harmonymassage.hu/sved-masszazs" },
};

export default function SvedMasszazsPage() {
  return (
    <ServicePage
      title="Svéd masszázs"
      subtitle="Klasszikus relaxációs masszázs az egész test átfogó ellazítására és a vérkeringés serkentésére."
      image="/images/service-sved.webp"
      video="/videos/service-sved.webm"
      sections={[
        {
          heading: "Mi az a svéd masszázs?",
          text: "A svéd masszázs a nyugati masszázstechnikák alapja, amelyet Per Henrik Ling svéd fiziológus fejlesztett ki a 19. században. Ez a legismertebb és leggyakrabban alkalmazott masszázsforma, amely öt alapmozdulatot kombinál: simítás (effleurage), gyúrás (pétrissage), dörzsölés (friction), ütögetés (tapotement) és vibrálás. A technika célja a test átfogó relaxációja, a vérkeringés serkentése és az izmok ellazítása.",
        },
        {
          heading: "Kinek javasolt?",
          text: "A svéd masszázs szinte mindenkinek ajánlott, aki szeretne kikapcsolódni és ellazulni. Különösen javasolt irodai dolgozóknak, akik egész nap ülnek, stresszes életmódot folytatóknak, alvászavarral küzdőknek, valamint azoknak, akik most ismerkednek a masszázs jótékony hatásaival. A kezelés intenzitása személyre szabható — a lágy, ringató mozdulatoktól az erőteljesebb gyúrásig.",
        },
        {
          heading: "Hogyan zajlik a kezelés?",
          text: "A kezelés egy rövid konzultációval kezdődik, ahol felmérjük az Ön igényeit és esetleges panaszait. Ezután kényelmes masszázságyra fekvő pozícióban helyezkedik el, miközben prémium masszázsolajjal dolgozunk. A terapeuta az egész testet átdolgozza — hátat, vállakat, nyakat, karokat, lábakat — a kívánt intenzitással. A kezelés 60 vagy 90 perces időtartamban érhető el.",
        },
        {
          heading: "Milyen hatásai vannak?",
          text: "A rendszeres svéd masszázs számos jótékony hatással bír: csökkenti a stresszt és a szorongást, javítja a vér- és nyirokkeringést, oldja az izomfeszültséget és a görcsöket, segíti a méreganyagok kiürülését, javítja az alvás minőségét, és erősíti az immunrendszert. Egy kezelés után is érezhető a megkönnyebbülés és a frissesség.",
        },
        {
          heading: "Mennyi ideig tart?",
          text: "A svéd masszázs 60 vagy 90 perces kezelésben érhető el. Az első alkalommal a 90 perces kezelést javasoljuk, hogy a terapeuta alaposan átdolgozhassa az egész testet. A rendszeres karbantartó kezelésekhez a 60 perces változat is elegendő.",
        },
        {
          heading: "Mennyibe kerül?",
          text: "Az árakról kérjük, érdeklődjön telefonon a +36 30 123 4567 számon, vagy írjon emailt az info@harmonymassage.hu címre. Az árakat a kezelés időtartama és típusa határozza meg.",
        },
      ]}
      relatedServices={[
        { title: "Aromaterápiás masszázs", href: "/aromaterapias-masszazs" },
        { title: "Mélyizom masszázs", href: "/melyizom-masszazs" },
        { title: "Forró köves masszázs", href: "/forro-koves-masszazs" },
      ]}
    />
  );
}
